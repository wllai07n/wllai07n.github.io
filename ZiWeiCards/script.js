/**
 * ZiWeiCards - 紫微牌卡應用程式
 * Refactored for modularity and maintainability.
 */

// ============================================================
// 1. 設定與常數 (Configuration & Constants)
// ============================================================

const CONFIG = {
  // 牌卡名稱 - 主星 (78張)
  MAIN_CARD_NAMES: [
    '七殺',
    '天同',
    '天府',
    '天梁',
    '天機',
    '天相',
    '太陰',
    '太陽',
    '巨門',
    '廉貞',
    '武曲',
    '破軍',
    '紫微',
    '貪狼',
    '空宮',
    // 雙星組合
    '天同天梁',
    '天同巨門',
    '天機天梁',
    '天機太陰',
    '天機巨門',
    '太陰天同',
    '太陽天梁',
    '太陽太陰',
    '巨門太陽',
    '廉貞七殺',
    '廉貞天府',
    '廉貞天相',
    '廉貞破軍',
    '廉貞貪狼',
    '武曲七殺',
    '武曲天府',
    '武曲天相',
    '武曲破軍',
    '武曲貪狼',
    '紫微七殺',
    '紫微天府',
    '紫微天相',
    '紫微破軍',
    '紫微貪狼',
  ],

  // 牌卡名稱 - 輔星 (38張)
  SUPPORT_CARD_NAMES: [
    '化科',
    '化祿',
    '化權',
    '化忌',
    '左輔',
    '右弼',
    '天魁',
    '天鉞',
    '文昌',
    '文曲',
    '火星',
    '鈴星',
    '擎羊',
    '陀羅',
    '空劫',
    '天刑',
    '祿存',
    '紅鸞天喜',
    '陰煞',
  ],

  // 牌卡名稱 - 長生十二神 (24張)
  LIFE_CARD_NAMES: [
    '1長生',
    '2沐浴',
    '3冠帶',
    '4臨官',
    '5帝旺',
    '6衰',
    '7病',
    '8死',
    '9墓',
    '10絕',
    '11胎',
    '12養',
  ],

  // 十二宮名稱
  PALACE_NAMES: [
    '命',
    '父',
    '福',
    '田',
    '官',
    '僕',
    '遷',
    '疾',
    '財',
    '子',
    '夫',
    '兄',
  ],

  // 牌陣設定
  SPREADS: {
    single: {
      name: '一張牌陣',
      config: { main: 0, support: 0, life: 1, extra: 0 },
    },
    two: {
      name: '二張牌陣',
      config: { main: 1, support: 1, life: 0, extra: 0 },
    },
    basicThree: {
      name: '基礎牌陣',
      config: { main: 1, support: 1, life: 1, extra: 0 },
    },
    opposition: {
      name: '對宮牌陣',
      config: { main: 2, support: 2, life: 1, extra: 0 },
    },
    threeFour: {
      name: '三方四正牌陣',
      config: { main: 4, support: 4, life: 1, extra: 0 },
    },
    twelve: {
      name: '十二宮位大牌陣',
      config: { main: 12, support: 12, life: 1, extra: 1 },
    },
    blocks: { name: '擲筊' },
  },

  // 擲筊圖片路徑與選項
  BLOCKS: {
    path: 'images/4blocks/',
    options: {
      0: ['blocks_0-1.webp', 'blocks_0-2.webp'], // 初始
      1: ['blocks_1-1.webp', 'blocks_1-2.webp'], // 陽/左?
      2: ['blocks_2-1.webp', 'blocks_2-2.webp'], // 陰/右?
    },
  },

  // 地支 Grid 對照表
  BRANCH_GRID_DATA: [
    { branch: '巳', gridPos: { row: 1, col: 2 }, palaceIdx: 0 },
    { branch: '午', gridPos: { row: 1, col: 3 }, palaceIdx: 1 },
    { branch: '未', gridPos: { row: 1, col: 4 }, palaceIdx: 2 },
    { branch: '申', gridPos: { row: 2, col: 4 }, palaceIdx: 3 },
    { branch: '酉', gridPos: { row: 3, col: 4 }, palaceIdx: 4 },
    { branch: '戌', gridPos: { row: 4, col: 4 }, palaceIdx: 5 },
    { branch: '亥', gridPos: { row: 4, col: 3 }, palaceIdx: 6 },
    { branch: '子', gridPos: { row: 4, col: 2 }, palaceIdx: 7 },
    { branch: '丑', gridPos: { row: 4, col: 1 }, palaceIdx: 8 },
    { branch: '寅', gridPos: { row: 3, col: 1 }, palaceIdx: 9 },
    { branch: '卯', gridPos: { row: 2, col: 1 }, palaceIdx: 10 },
    { branch: '辰', gridPos: { row: 1, col: 1 }, palaceIdx: 11 },
  ],

  // 預設背面牌
  BACK_CARD: { image: '背面邊框.webp', text: '  -  ' },

  // API
  COUNTER_API_URL: 'https://api.counterapi.dev/v2/ziweicards/ziweicards/up',
};

// ============================================================
// 2. 狀態管理 (State Management)
// ============================================================

const State = {
  lastDrawTimestamp: null,
};

// ============================================================
// 3. 工具函式 (Utilities & Helpers)
// ============================================================

const Utils = {
  /** Fisher-Yates 洗牌 */
  shuffle(arr) {
    const result = arr.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  },

  /** 格式化日期時間 */
  formatDateTime(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(
      date.getDate()
    )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )}`;
  },

  /** 產生亂數索引 */
  randomInt(max) {
    return Math.floor(Math.random() * max);
  },
};

const DomHelper = {
  get(id) {
    return document.getElementById(id);
  },

  create(tag, className = '', text = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  },
};

// ============================================================
// 4. 資料模組 (Data Module)
// ============================================================

const DataModule = {
  /** 產生牌卡 Raw Data (正/倒) */
  generateRawData(names) {
    const cards = [];
    names.forEach((name) => {
      cards.push({ image: `${name}.webp`, text: `${name}-(正牌)` });
      cards.push({ image: `${name}倒.webp`, text: `${name}-(倒牌)` });
    });
    return cards;
  },

  /** 取得初始化後的牌庫 */
  initDecks() {
    this.decks = {
      main: this.generateRawData(CONFIG.MAIN_CARD_NAMES),
      support: this.generateRawData(CONFIG.SUPPORT_CARD_NAMES),
      life: this.generateRawData(CONFIG.LIFE_CARD_NAMES),
    };
  },

  /** 抽取不重複牌卡 */
  dealUnique(deck, count) {
    const shuffled = Utils.shuffle(deck);
    const result = [];
    const seenBases = new Set();

    for (const card of shuffled) {
      const baseName = card.text.split('-')[0];
      if (seenBases.has(baseName)) continue;
      seenBases.add(baseName);
      result.push(card);
      if (result.length === count) break;
    }
    return result;
  },

  /** 產生十二宮隨機順序 */
  generatePalaceOrder() {
    const startIdx = Utils.randomInt(12);
    const order = new Array(12);
    for (let i = 0; i < 12; i++) {
      order[(startIdx + i) % 12] = CONFIG.PALACE_NAMES[i];
    }
    return order;
  },
};

// Initialize Decks immediately
DataModule.initDecks();

// ============================================================
// 5. 渲染模組 (Render Module)
// ============================================================

const RenderModule = {
  /** 建立文字元素 (處理底線等樣式) */
  createCardText(text, folder) {
    const p = DomHelper.create('p');
    const p2 = DomHelper.create('p2');

    if (folder === 'Common') {
      p.textContent = text.replace('-', '\n\n');
      return { p, p2 };
    }

    const parts = text.split('-');
    const name = parts[0];
    const status = parts[1];
    p.textContent = name;

    if (status === '(倒牌)') {
      const first = status[0];
      const mid = status.slice(1, -1);
      const last = status.slice(-1);

      const s1 = DomHelper.create('span', '', first);
      const s2 = DomHelper.create('span', '', mid);
      s2.style.textDecoration = 'underline';
      const s3 = DomHelper.create('span', '', last);

      p2.append(s1, s2, s3);
    } else {
      p2.textContent = status;
    }

    return { p, p2 };
  },

  /** 建立單張牌 DOM */
  createCard(parent, folder, card) {
    const cardDiv = DomHelper.create('div', 'card');
    const img = DomHelper.create('img');
    img.src = `images/${folder}/${card.image}`;

    const { p, p2 } = this.createCardText(card.text, folder);
    cardDiv.append(img, p, p2);
    parent.append(cardDiv);
    return cardDiv;
  },

  /** 建立宮位格子 */
  createPalaceCell({ branch, palaceName, isBack, main, sup, gridPos }) {
    const cell = DomHelper.create('div', 'palace-cell');

    // Grid Positioning
    if (gridPos) {
      cell.style.setProperty('grid-column', String(gridPos.col), 'important');
      cell.style.setProperty('grid-row', String(gridPos.row), 'important');
    }

    cell.appendChild(DomHelper.create('div', 'branch-label', branch));
    cell.appendChild(DomHelper.create('div', 'palace-label', palaceName));

    const folder = isBack ? 'Common' : '';
    const mainCard = isBack ? CONFIG.BACK_CARD : main;
    const supCard = isBack ? CONFIG.BACK_CARD : sup;

    this.createCard(cell, folder || '1Main', mainCard);
    this.createCard(cell, folder || '2Support', supCard);

    return cell;
  },

  /** 渲染器集合 */
  SpreadStrategies: {
    twelve(container, { showBack, data }) {
      const displayNames = showBack ? Array(12).fill('__') : data.palaceNames;

      // Helper to process cell creation
      const makeCell = (branchData) =>
        RenderModule.createPalaceCell({
          branch: branchData.branch,
          palaceName: displayNames[branchData.palaceIdx],
          isBack: showBack,
          main: data.mains[branchData.palaceIdx],
          sup: data.sups[branchData.palaceIdx],
          gridPos: branchData.gridPos,
        });

      // 為確保視覺與 DOM 順序一致 (Accessibility)，先進行排序
      // 根據 Grid Row, 然後 Grid Col 排序
      const sortedGrid = [...CONFIG.BRANCH_GRID_DATA].sort((a, b) => {
        if (a.gridPos.row !== b.gridPos.row)
          return a.gridPos.row - b.gridPos.row;
        return a.gridPos.col - b.gridPos.col;
      });

      sortedGrid.forEach((d) => {
        container.append(makeCell(d));
      });

      // Center Area
      const centerArea = DomHelper.create('div', 'center-area');
      centerArea.style.setProperty('grid-column', '2 / 4', 'important');
      centerArea.style.setProperty('grid-row', '2 / 4', 'important');

      const centerMain = DomHelper.create('div', 'center-main');
      RenderModule.createCard(
        centerMain,
        showBack ? 'Common' : '1Main',
        showBack ? CONFIG.BACK_CARD : data.extra
      );

      const centerLife = DomHelper.create('div', 'center-life');
      RenderModule.createCard(
        centerLife,
        showBack ? 'Common' : '3Life',
        showBack ? CONFIG.BACK_CARD : data.lifes[0]
      );

      centerArea.append(centerMain, centerLife);
      container.append(centerArea);
    },

    opposition(container, { showBack, data }) {
      const createGroup = (cls, folder, cards, count) => {
        const group = DomHelper.create('div', cls);
        for (let i = 0; i < count; i++) {
          RenderModule.createCard(
            group,
            showBack ? 'Common' : folder,
            showBack ? CONFIG.BACK_CARD : cards[i]
          );
        }
        return group;
      };
      container.append(
        createGroup('group-main', '1Main', data.mains, data.spreadConfig.main),
        createGroup(
          'group-support',
          '2Support',
          data.sups,
          data.spreadConfig.support
        ),
        createGroup('group-life', '3Life', data.lifes, 1)
      );
    },

    threeFour(container, { showBack, data }) {
      const positions = ['top', 'right', 'bottom', 'left'];
      positions.forEach((pos, i) => {
        const group = DomHelper.create('div', `group group-${pos}`);
        RenderModule.createCard(
          group,
          showBack ? 'Common' : '1Main',
          showBack ? CONFIG.BACK_CARD : data.mains[i]
        );
        RenderModule.createCard(
          group,
          showBack ? 'Common' : '2Support',
          showBack ? CONFIG.BACK_CARD : data.sups[i]
        );
        container.append(group);
      });
      const lifeGroup = DomHelper.create('div', 'group-life');
      RenderModule.createCard(
        lifeGroup,
        showBack ? 'Common' : '3Life',
        showBack ? CONFIG.BACK_CARD : data.lifes[0]
      );
      container.append(lifeGroup);
    },

    simple(container, { key, showBack, data }) {
      const configs = {
        single: [{ folder: '3Life', cards: data.lifes, idx: 0 }],
        two: [
          { folder: '1Main', cards: data.mains, idx: 0 },
          { folder: '2Support', cards: data.sups, idx: 0 },
        ],
        basicThree: [
          { folder: '1Main', cards: data.mains, idx: 0 },
          { folder: '2Support', cards: data.sups, idx: 0 },
          { folder: '3Life', cards: data.lifes, idx: 0 },
        ],
      };

      (configs[key] || []).forEach((c) => {
        RenderModule.createCard(
          container,
          showBack ? 'Common' : c.folder,
          showBack ? CONFIG.BACK_CARD : c.cards[c.idx]
        );
      });
    },
  },

  /** 主要渲染入口 */
  render(key, context) {
    const cardCt = DomHelper.get('cardContainer');
    const twelveCt = DomHelper.get('twelveContainer');

    // Cleanup
    cardCt.innerHTML = '';
    twelveCt.innerHTML = '';
    cardCt.style.display = 'none';
    twelveCt.style.display = 'none';

    let container;
    if (key === 'twelve') {
      container = twelveCt;
      twelveCt.style.display = 'grid';
    } else if (key === 'threeFour') {
      container = cardCt;
      cardCt.style.display = 'grid';
    } else {
      container = cardCt;
      cardCt.style.display = 'flex';
    }
    container.className = key;

    const strategy =
      this.SpreadStrategies[
      key === 'twelve' || key === 'opposition' || key === 'threeFour'
        ? key
        : 'simple'
      ];
    if (strategy) {
      strategy(container, { ...context, key }); // Pass context down
    }

    return container;
  },
};

// ============================================================
// 6. 動畫模組 (Animation Module)
// ============================================================

const AnimationModule = {
  shake(container, callback) {
    container.classList.add('shuffling');
    setTimeout(() => {
      container.classList.remove('shuffling');
      if (callback) callback();
    }, 600);
  },

  flip(container, onHalfway, onComplete) {
    container.classList.add('flipping');
    setTimeout(() => {
      if (onHalfway) onHalfway();
    }, 280);
    setTimeout(() => {
      container.classList.remove('flipping');
      if (onComplete) onComplete();
    }, 600);
  },
};

// ============================================================
// 7. 應用程式核心 (Application Core)
// ============================================================

const ZiWeiApp = {
  init() {
    this.bindEvents();
    this.triggerDraw(true); // Initial draw (backside)
  },

  bindEvents() {
    DomHelper.get('spreadSelector').addEventListener('change', () =>
      this.triggerDraw(true)
    );
    DomHelper.get('drawBtn').addEventListener('click', () =>
      this.triggerDraw(false)
    );
    DomHelper.get('shuffleBtn').addEventListener('click', () =>
      this.handleShuffle()
    );
    DomHelper.get('saveBtn').addEventListener('click', () =>
      this.handleScreenshot()
    );
  },

  /** 更新時間顯示 */
  updateTime(label) {
    State.lastDrawTimestamp = new Date();
    DomHelper.get(
      'drawTimeDisplay'
    ).textContent = `${label}：${Utils.formatDateTime(
      State.lastDrawTimestamp
    )}`;
  },

  /** 處理擲筊邏輯 */
  handleBlocks(isDraw) {
    const blocksArea = DomHelper.get('blocksArea');
    const cardArea = DomHelper.get('cardArea');

    // UI Switch
    blocksArea.classList.remove('hidden');
    cardArea.classList.add('hidden');
    DomHelper.get('drawBtn').textContent = '擲筊';
    DomHelper.get('shuffleBtn').textContent = '重來';

    // Logic
    const reset = () => {
      DomHelper.get('block1').src =
        CONFIG.BLOCKS.path + CONFIG.BLOCKS.options[0][0];
      DomHelper.get('block2').src =
        CONFIG.BLOCKS.path + CONFIG.BLOCKS.options[0][1];
      DomHelper.get('block1Label').textContent = '陽';
      DomHelper.get('block2Label').textContent = '陰';
      DomHelper.get('blocksResult').textContent = '';
    };

    const toss = () => {
      const i1 = Math.random() < 0.5 ? 0 : 1;
      const i2 = Math.random() < 0.5 ? 0 : 1;
      DomHelper.get('block1').src =
        CONFIG.BLOCKS.path + CONFIG.BLOCKS.options[1][i1];
      DomHelper.get('block2').src =
        CONFIG.BLOCKS.path + CONFIG.BLOCKS.options[2][i2];

      const b1 = i1 === 0 ? '陽' : '陰';
      const b2 = i2 === 0 ? '陽' : '陰';

      let finalRes = '';
      if (b1 !== b2) finalRes = '聖杯';
      else if (b1 === '陰') finalRes = '笑杯';
      else finalRes = '蓋杯';

      DomHelper.get('blocksResult').textContent = `(${finalRes})`;
      DomHelper.get('block1Label').textContent = b1;
      DomHelper.get('block2Label').textContent = b2;
    };

    this.updateTime('擲筊時間');

    if (isDraw) {
      // "Draw" button clicked -> Toss
      AnimationModule.shake(blocksArea, toss);
    } else {
      // "Preview/Reset" -> Reset
      reset();
      AnimationModule.shake(blocksArea);
    }
  },

  /** 觸發抽牌程序 */
  triggerDraw(isBackside = false) {
    const key = DomHelper.get('spreadSelector').value;

    if (key === 'blocks') {
      this.handleBlocks(!isBackside);
      return;
    }

    // Normal Cards
    DomHelper.get('blocksArea').classList.add('hidden');
    DomHelper.get('cardArea').classList.remove('hidden');
    DomHelper.get('drawBtn').textContent = '抽牌';
    DomHelper.get('shuffleBtn').textContent = '洗牌';

    this.updateTime('抽牌時間');

    // Prepare Data
    const spreadConfig = CONFIG.SPREADS[key].config;
    const data = {
      spreadConfig,
      mains: [],
      sups: [],
      lifes: [],
      extra: null,
      palaceNames: null,
    };

    if (!isBackside) {
      // Real Draw
      this.fetchStats();
      const mainDeck = DataModule.dealUnique(
        DataModule.decks.main,
        spreadConfig.main + spreadConfig.extra
      );
      data.mains = mainDeck.slice(0, spreadConfig.main);
      data.extra = spreadConfig.extra ? mainDeck[spreadConfig.main] : null;

      if (spreadConfig.support > 0) {
        data.sups = DataModule.dealUnique(
          DataModule.decks.support,
          spreadConfig.support
        );
      }
      if (spreadConfig.life > 0) {
        data.lifes = DataModule.dealUnique(
          DataModule.decks.life,
          spreadConfig.life
        );
      }
      if (key === 'twelve') {
        data.palaceNames = DataModule.generatePalaceOrder();
      }
    }

    // Preload images for faster display after flip
    if (!isBackside) {
      this.preloadImages(data);
    }

    // Render Logic
    if (isBackside) {
      const container = RenderModule.render(key, { data, showBack: true });
      AnimationModule.shake(container);
    } else {
      // Draw Flow: Render Back -> Shake -> Flip -> Render Front
      const container = RenderModule.render(key, { data, showBack: true });
      AnimationModule.shake(container, () => {
        AnimationModule.flip(
          container,
          () => RenderModule.render(key, { data, showBack: false }), // Halfway: Swap content
          null
        );
      });
    }
  },

  /** 預載入圖片以加快顯示速度 */
  preloadImages(data) {
    const imagesToLoad = [];

    // Collect all image paths
    if (data.mains && data.mains.length > 0) {
      data.mains.forEach((card) => {
        imagesToLoad.push(`images/1Main/${card.image}`);
      });
    }
    if (data.sups && data.sups.length > 0) {
      data.sups.forEach((card) => {
        imagesToLoad.push(`images/2Support/${card.image}`);
      });
    }
    if (data.lifes && data.lifes.length > 0) {
      data.lifes.forEach((card) => {
        imagesToLoad.push(`images/3Life/${card.image}`);
      });
    }
    if (data.extra) {
      imagesToLoad.push(`images/1Main/${data.extra.image}`);
    }

    // Preload all images concurrently
    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  },

  handleShuffle() {
    const key = DomHelper.get('spreadSelector').value;
    if (key === 'blocks') {
      this.handleBlocks(false); // Reset
    } else {
      this.triggerDraw(true); // Backside
    }
  },

  handleScreenshot() {
    ScreenshotHelper.capture();
  },

  async fetchStats() {
    try {
      const res = await fetch(CONFIG.COUNTER_API_URL);
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      console.debug('Stats:', (parseInt(data.data.up_count) + 2) / 2);
    } catch (e) {
      console.error('Stats Error', e);
    }
  },
};

// ============================================================
// 8. 截圖輔助 (Screenshot Helper)
// ============================================================

const ScreenshotHelper = {
  getContainer() {
    const key = DomHelper.get('spreadSelector').value;
    if (key === 'blocks') return DomHelper.get('blocksArea');
    if (key === 'twelve') return DomHelper.get('twelveContainer');
    return DomHelper.get('cardContainer');
  },

  getFilename(key, question) {
    const spreadName = CONFIG.SPREADS[key]?.name || '未知';
    const cleanQ = question ? `_${question}` : '';
    const ts = Utils.formatDateTime(State.lastDrawTimestamp || new Date());
    return `紫微牌卡_${spreadName}${cleanQ}_${ts}.webp`;
  },

  capture() {
    const key = DomHelper.get('spreadSelector').value;
    const container = this.getContainer();
    const question = DomHelper.get('questionInput').value;
    const filename = this.getFilename(key, question);
    const timestamp = Utils.formatDateTime(
      State.lastDrawTimestamp || new Date()
    );
    const spreadName = CONFIG.SPREADS[key]?.name;

    /* global html2canvas */
    html2canvas(container, {
      backgroundColor: null,
      scale: 2,
      windowWidth: 1024,
      onclone: (doc) =>
        this.styleClone(doc, container.id, spreadName, question, timestamp),
    })
      .then((canvas) => this.download(canvas, filename))
      .catch((err) => {
        console.error('Screenshot failed', err);
        alert('儲存失敗，請重試');
      });
  },

  styleClone(doc, containerId, title, question, time) {
    const cloned = doc.getElementById(containerId);

    // Base Styles
    Object.assign(cloned.style, {
      position: 'relative',
      width: '1024px',
      minWidth: '1024px',
      background: '#fdfbf7',
      padding: '120px 40px 100px',
      borderRadius: '0',
      boxSizing: 'border-box',
      boxShadow: 'none',
      border: 'none',
    });

    // Header
    const header = doc.createElement('div');
    header.style.cssText = `
      position: absolute; top: 0; left: 0; width: 100%; height: 100px;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
      border-bottom: 2px solid rgba(139, 92, 246, 0.2);
    `;
    const h2 = doc.createElement('h2');
    h2.textContent = `紫微斗數 - ${title}`;
    h2.style.cssText = `margin: 0; color: #4c1d95; font-family: 'Noto Serif TC', serif; font-size: 32px; letter-spacing: 2px;`;
    header.appendChild(h2);
    cloned.insertBefore(header, cloned.firstChild);

    // Content Styles
    cloned
      .querySelectorAll(
        '.palace-cell, .center-area, .card, .group, .group-main, .group-support, .group-life, .group-top, .group-bottom, .group-left, .group-right, .blocks-area'
      )
      .forEach((el) => {
        el.style.background = 'rgba(255, 255, 255, 0.6)';
        el.style.borderColor = 'rgba(139, 92, 246, 0.3)';
        el.style.borderRadius = '8px';
      });

    // Text & Image Styles
    cloned
      .querySelectorAll(
        'p, p2, span, .palace-label, .branch-label, .center-label, .blocks-result, .block-label'
      )
      .forEach((el) => {
        el.style.color = '#1f2937';
        el.style.textShadow = 'none';
        if (
          el.classList.contains('branch-label') ||
          el.classList.contains('blocks-result') ||
          el.classList.contains('block-label')
        )
          el.style.color = '#b45309';
        if (el.classList.contains('palace-label')) el.style.color = '#1e3a8a';
      });
    cloned.querySelectorAll('img').forEach((img) => {
      img.style.borderColor = '#9ca3af';
      img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });

    // Footer
    const footer = doc.createElement('div');
    footer.style.cssText = `
      position: absolute; bottom: 0; left: 0; width: 100%; padding: 15px 40px;
      background: rgba(255, 255, 255, 0.8); border-top: 1px solid rgba(0, 0, 0, 0.1);
      display: flex; justify-content: space-between; align-items: center;
      font-family: 'Noto Sans TC', sans-serif; font-size: 20px; color: #4b5563;
    `;

    // Safety check for null question
    const qHtml = question
      ? `<span style="color: #6d28d9; font-weight: bold;">問題：</span>${question}`
      : `<span style="color: #6d28d9; font-weight: bold;"> </span>`;
    footer.innerHTML = `<div>${qHtml}</div><div style="text-align: right; font-weight: 500;">${time}</div>`;
    cloned.appendChild(footer);

    // Cleanup pseudo-elements
    const style = doc.createElement('style');
    style.innerHTML = `#${containerId}::before { content: none !important; } .center-area::before { display: none !important; }`;
    cloned.appendChild(style);
  },

  download(canvas, filename) {
    const ua = navigator.userAgent;
    const isiOS = /iP(hone|ad|od)/.test(ua);
    const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);

    if (isiOS && isSafari) {
      canvas.toBlob(async (blob) => {
        const file = new File([blob], filename, { type: 'image/webp' });
        if (navigator.canShare?.({ files: [file] })) {
          try {
            await navigator.share({ files: [file] });
          } catch {
            this.openNewTab(blob, filename);
          }
        } else {
          this.openNewTab(blob, filename);
        }
      }, 'image/webp');
    } else {
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/webp');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },

  openNewTab(blob, name) {
    const url = URL.createObjectURL(blob);
    const w = window.open();
    w.document.write(
      `<img src="${url}" style="max-width:100%;height:auto;" alt="${name}">`
    );
  },
};

// ============================================================
// 9. 啟動 (Bootstrap)
// ============================================================

window.onload = () => {
  ZiWeiApp.init();
};
