// ============================================================
// 紫微牌卡應用主程式
// ============================================================

// ===== 牌卡資料產生器 =====

/**
 * 從牌名陣列產生牌卡資料（自動產生正牌與倒牌）
 * @param {string[]} names - 牌名陣列
 * @returns {Array<{image: string, text: string}>} - 牌卡資料陣列
 */
function generateCardData(names) {
  const cards = [];
  names.forEach((name) => {
    // 正牌
    cards.push({ image: `${name}.png`, text: `${name}-(正牌)` });
    // 倒牌
    cards.push({ image: `${name}倒.png`, text: `${name}-(倒牌)` });
  });
  return cards;
}

// ===== 常數與配置 =====

/**
 * 主星牌名稱（共 39 種，每種有正牌與倒牌 → 78 張）
 * 對應資料夾：images/1Main/
 */
const MAIN_CARD_NAMES = [
  // 單星
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
];

/**
 * 輔星牌名稱（共 19 種，每種有正牌與倒牌 → 38 張）
 * 對應資料夾：images/2Support/
 */
const SUPPORT_CARD_NAMES = [
  // 四化
  '化科',
  '化祿',
  '化權',
  '化忌',
  // 六吉星
  '左輔',
  '右弼',
  '天魁',
  '天鉞',
  '文昌',
  '文曲',
  // 六煞星
  '火星',
  '鈴星',
  '擎羊',
  '陀羅',
  '空劫',
  '天刑',
  // 其他
  '祿存',
  '紅鸞天喜',
  '陰煞',
];

/**
 * 生年牌名稱（共 12 種，每種有正牌與倒牌 → 24 張）
 * 對應資料夾：images/3Life/
 */
const LIFE_CARD_NAMES = [
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
];

// 產生牌卡資料陣列
const CONTENT_MAIN = generateCardData(MAIN_CARD_NAMES); // 78 張
const CONTENT_SUPPORT = generateCardData(SUPPORT_CARD_NAMES); // 38 張
const CONTENT_LIFE = generateCardData(LIFE_CARD_NAMES); // 24 張

/** 牌陣類型與張數配置 */
const SPREAD_CONFIG = {
  single: { main: 0, support: 0, life: 1, extra: 0 },
  two: { main: 1, support: 1, life: 0, extra: 0 },
  basicThree: { main: 1, support: 1, life: 1, extra: 0 },
  opposition: { main: 2, support: 2, life: 1, extra: 0 },
  threeFour: { main: 4, support: 4, life: 1, extra: 0 },
  twelve: { main: 12, support: 12, life: 1, extra: 1 },
};

/** 牌陣中文名稱對應 */
const SPREAD_NAMES = {
  blocks: '擲筊',
  single: '一張牌陣',
  two: '二張牌陣',
  basicThree: '基礎牌陣',
  opposition: '對宮牌陣',
  threeFour: '三方四正牌陣',
  twelve: '十二宮位大牌陣',
};

/** 擲筊相關常數 */
const BLOCKS_CONFIG = {
  path: 'images/4blocks/',
  options: {
    0: ['blocks_0-1.png', 'blocks_0-2.png'],
    1: ['blocks_1-1.png', 'blocks_1-2.png'],
    2: ['blocks_2-1.png', 'blocks_2-2.png'],
  },
};

/** 十二宮位名稱（順時針順序） */
const PALACE_NAMES = [
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
];

/** 地支與對應的 4x4 Grid 位置定義 */
const BRANCH_GRID_DATA = [
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
];

/** 背面牌預設資料 */
const BACK_CARD = { image: '背面邊框.png', text: '  -  ' };

/** 統計 API 端點 */
const COUNTER_API_URL =
  'https://api.counterapi.dev/v2/ziweicards/ziweicards/up';

// ===== 狀態管理 =====
let lastDrawTimestamp = null;

// ===== DOM 元素存取器 =====
const getElement = (id) => document.getElementById(id);
const getDrawBtn = () => getElement('drawBtn');
const getShuffleBtn = () => getElement('shuffleBtn');

// ===== 工具函式 =====

/**
 * Fisher–Yates 洗牌演算法
 * @param {Array} arr - 要洗牌的陣列
 * @returns {Array} - 洗牌後的新陣列
 */
function shuffle(arr) {
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 抽取指定數量且不重複同名正/倒牌
 * @param {Array} shuffledArr - 洗牌後的牌組
 * @param {number} count - 要抽取的數量
 * @returns {Array} - 抽取的牌陣列
 */
function dealUnique(shuffledArr, count) {
  const result = [];
  const seenBases = new Set();

  for (const card of shuffledArr) {
    const baseName = card.text.split('-')[0];
    if (seenBases.has(baseName)) continue;

    seenBases.add(baseName);
    result.push(card);
    if (result.length === count) break;
  }
  return result;
}

/**
 * 格式化日期時間
 * @param {Date} date - 日期物件
 * @returns {string} - 格式化後的字串 (如：2024/01/15 14:30:25)
 */
function formatDateTime(date) {
  const pad = (n) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

/**
 * 更新抽牌時間顯示
 * @param {string} prefix - 時間前綴文字（抽牌時間/擲筊時間）
 * @returns {Date} - 當前時間戳
 */
function updateDrawTime(prefix) {
  lastDrawTimestamp = new Date();
  const drawTimeDiv = getElement('drawTimeDisplay');
  drawTimeDiv.textContent = `${prefix}：${formatDateTime(lastDrawTimestamp)}`;
  return lastDrawTimestamp;
}

/**
 * 判斷擲筊結果
 * @param {number} idx1 - 第一個筊的索引 (0=陽, 1=陰)
 * @param {number} idx2 - 第二個筊的索引 (0=陽, 1=陰)
 * @returns {Object} - 陰陽與結果描述
 */
function interpretBlocks(idx1, idx2) {
  const b1 = idx1 === 0 ? '陽' : '陰';
  const b2 = idx2 === 0 ? '陽' : '陰';

  let result;
  if (b1 !== b2) {
    result = '聖杯';
  } else if (b1 === '陰') {
    result = '笑杯';
  } else {
    result = '蓋杯';
  }

  return { b1, b2, result };
}

/**
 * 計算十二宮位名稱的隨機排列順序
 * @returns {Array<string>} - 長度 12 的宮位名稱陣列
 */
function generateRandomPalaceOrder() {
  const randomStartIndex = Math.floor(Math.random() * 12);
  const finalOrder = new Array(12);

  for (let i = 0; i < 12; i++) {
    const posIndex = (randomStartIndex + i) % 12;
    finalOrder[posIndex] = PALACE_NAMES[i];
  }

  return finalOrder;
}

// ===== DOM 建構函式 =====

/**
 * 建立卡片文字元素（處理正牌/倒牌的不同樣式）
 * @param {string} text - 卡片文字
 * @param {string} folder - 資料夾名稱
 * @returns {Object} - {p: 主文字元素, p2: 副文字元素}
 */
function createCardTextElements(text, folder) {
  const p = document.createElement('p');
  const p2 = document.createElement('p2');

  if (folder === 'Common') {
    p.textContent = text.replace('-', '\n\n');
    return { p, p2 };
  }

  const parts = text.split('-');
  p.textContent = parts[0];

  // 倒牌時加底線裝飾
  if (parts[1] === '(倒牌)') {
    const firstChar = parts[1][0];
    const middleChars = parts[1].slice(1, -1);
    const lastChar = parts[1][parts[1].length - 1];

    const firstSpan = document.createElement('span');
    firstSpan.textContent = firstChar;

    const middleSpan = document.createElement('span');
    middleSpan.textContent = middleChars;
    middleSpan.style.textDecoration = 'underline';

    const lastSpan = document.createElement('span');
    lastSpan.textContent = lastChar;

    p2.append(firstSpan, middleSpan, lastSpan);
  } else {
    p2.textContent = parts[1];
  }

  return { p, p2 };
}

/**
 * 建立單張卡片 DOM
 * @param {HTMLElement} parent - 父元素
 * @param {string} folder - 圖片資料夾名稱
 * @param {Object} card - 牌卡資料 {image, text}
 */
function createCard(parent, folder, card) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  const img = document.createElement('img');
  img.src = `images/${folder}/${card.image}`;

  const { p, p2 } = createCardTextElements(card.text, folder);

  cardDiv.append(img, p, p2);
  parent.append(cardDiv);
}

/**
 * 建立單一宮位格子 DOM
 * @param {Object} params - 宮位參數
 * @param {string} params.branch - 地支名稱
 * @param {string} params.palaceName - 宮位名稱
 * @param {boolean} params.isBackside - 是否顯示背面
 * @param {Object} params.mainCard - 主牌資料
 * @param {Object} params.supCard - 輔牌資料
 * @returns {HTMLElement} - 宮位格子元素
 */
function createPalaceCell({
  branch,
  palaceName,
  isBackside,
  mainCard,
  supCard,
}) {
  const cell = document.createElement('div');
  cell.className = 'palace-cell';

  // 地支標籤（右上角金色）
  const branchLabel = document.createElement('div');
  branchLabel.className = 'branch-label';
  branchLabel.textContent = branch;
  cell.appendChild(branchLabel);

  // 宮位名稱標籤（左下角藍色）
  const palaceLabel = document.createElement('div');
  palaceLabel.className = 'palace-label';
  palaceLabel.textContent = palaceName;
  cell.appendChild(palaceLabel);

  // 主牌與輔牌
  const folder = isBackside ? 'Common' : '';
  createCard(cell, folder || '1Main', isBackside ? BACK_CARD : mainCard);
  createCard(cell, folder || '2Support', isBackside ? BACK_CARD : supCard);

  return cell;
}

/**
 * 建立浮水印樣式物件
 * @param {Object} position - {top?, right?, bottom?, left?}
 * @param {number} fontSize - 字體大小
 * @returns {Object} - CSS 樣式物件
 */
function createWatermarkStyle(position, fontSize) {
  return {
    position: 'absolute',
    ...position,
    fontSize: `${fontSize}px`,
    fontWeight: 'bold',
    background: 'rgba(255,255,255,0.85)',
    fontFamily: "'Noto Sans TC', sans-serif",
    padding: '4px 8px',
    borderRadius: '4px',
    pointerEvents: 'none',
  };
}

// ===== 動畫函式 =====

/**
 * 播放洗牌搖晃動畫
 * @param {HTMLElement} container - 動畫容器
 * @param {Function} [callback] - 動畫完成回調
 */
function playShuffleAnimation(container, callback) {
  container.classList.add('shuffling');
  setTimeout(() => {
    container.classList.remove('shuffling');
    if (callback) callback();
  }, 600);
}

/**
 * 播放翻牌動畫（中途更換圖片）
 * @param {HTMLElement} container - 動畫容器
 * @param {Function} [onHalfway] - 動畫中途回調（更換圖片用）
 * @param {Function} [onComplete] - 動畫完成回調
 */
function playFlipAnimation(container, onHalfway, onComplete) {
  container.classList.add('flipping');

  // 動畫進行到 40%-60% 停頓區間更換圖片
  setTimeout(() => {
    if (onHalfway) onHalfway();
  }, 280);

  // 翻面動畫結束後清理
  setTimeout(() => {
    container.classList.remove('flipping');
    if (onComplete) onComplete();
  }, 600);
}

// ===== 擲筊功能 =====

/**
 * 執行擲筊並顯示結果
 */
function tossBlocks() {
  const idx1 = Math.random() < 0.5 ? 0 : 1;
  const idx2 = Math.random() < 0.5 ? 0 : 1;

  getElement(
    'block1'
  ).src = `${BLOCKS_CONFIG.path}${BLOCKS_CONFIG.options[1][idx1]}`;
  getElement(
    'block2'
  ).src = `${BLOCKS_CONFIG.path}${BLOCKS_CONFIG.options[2][idx2]}`;

  const { b1, b2, result } = interpretBlocks(idx1, idx2);
  getElement('blocksResult').textContent = `(${result})`;
  getElement('block1Label').textContent = b1;
  getElement('block2Label').textContent = b2;
}

/**
 * 重設擲筊為預設狀態
 */
function resetBlocks() {
  getElement(
    'block1'
  ).src = `${BLOCKS_CONFIG.path}${BLOCKS_CONFIG.options[0][0]}`;
  getElement(
    'block2'
  ).src = `${BLOCKS_CONFIG.path}${BLOCKS_CONFIG.options[0][1]}`;
  getElement('block1Label').textContent = '陽';
  getElement('block2Label').textContent = '陰';
  getElement('blocksResult').textContent = '';
}

// ===== 牌陣渲染功能 =====

/**
 * 牌陣渲染器類別 - 處理各種牌陣的 DOM 建構
 */
const SpreadRenderer = {
  /**
   * 渲染十二宮位大牌陣
   */
  twelve(container, { showBack, mains, sups, palaceNames, extraCard, lifes }) {
    const displayNames = showBack ? new Array(12).fill('__') : palaceNames;

    // 依 Grid 順序處理各行
    const rows = {
      r1: BRANCH_GRID_DATA.filter((b) => b.gridPos.row === 1).sort(
        (a, b) => a.gridPos.col - b.gridPos.col
      ),
      r2Left: BRANCH_GRID_DATA.find(
        (b) => b.gridPos.row === 2 && b.gridPos.col === 1
      ),
      r2Right: BRANCH_GRID_DATA.find(
        (b) => b.gridPos.row === 2 && b.gridPos.col === 4
      ),
      r3Left: BRANCH_GRID_DATA.find(
        (b) => b.gridPos.row === 3 && b.gridPos.col === 1
      ),
      r3Right: BRANCH_GRID_DATA.find(
        (b) => b.gridPos.row === 3 && b.gridPos.col === 4
      ),
      r4: BRANCH_GRID_DATA.filter((b) => b.gridPos.row === 4).sort(
        (a, b) => a.gridPos.col - b.gridPos.col
      ),
    };

    const createPalaceCellFromData = (data) =>
      createPalaceCell({
        branch: data.branch,
        palaceName: displayNames[data.palaceIdx],
        isBackside: showBack,
        mainCard: mains[data.palaceIdx],
        supCard: sups[data.palaceIdx],
      });

    // 第一行
    rows.r1.forEach((data) => container.append(createPalaceCellFromData(data)));

    // 第二行左側
    container.append(createPalaceCellFromData(rows.r2Left));

    // 中央區域
    const centerArea = document.createElement('div');
    centerArea.className = 'center-area';

    const centerMain = document.createElement('div');
    centerMain.className = 'center-main';
    createCard(
      centerMain,
      showBack ? 'Common' : '1Main',
      showBack ? BACK_CARD : extraCard
    );

    const centerLife = document.createElement('div');
    centerLife.className = 'center-life';
    createCard(
      centerLife,
      showBack ? 'Common' : '3Life',
      showBack ? BACK_CARD : lifes[0]
    );

    centerArea.append(centerMain, centerLife);
    container.append(centerArea);

    // 第二行右側
    container.append(createPalaceCellFromData(rows.r2Right));

    // 第三行
    container.append(createPalaceCellFromData(rows.r3Left));
    container.append(createPalaceCellFromData(rows.r3Right));

    // 第四行
    rows.r4.forEach((data) => container.append(createPalaceCellFromData(data)));
  },

  /**
   * 渲染對宮牌陣
   */
  opposition(container, { showBack, mains, sups, spread, lifes }) {
    const createGroup = (className, folder, cards, count) => {
      const group = document.createElement('div');
      group.className = className;
      for (let i = 0; i < count; i++) {
        createCard(
          group,
          showBack ? 'Common' : folder,
          showBack ? BACK_CARD : cards[i]
        );
      }
      return group;
    };

    container.append(
      createGroup('group-main', '1Main', mains, spread.main),
      createGroup('group-support', '2Support', sups, spread.support),
      createGroup('group-life', '3Life', lifes, 1)
    );
  },

  /**
   * 渲染三方四正牌陣
   */
  threeFour(container, { showBack, mains, sups, lifes }) {
    const positions = ['top', 'right', 'bottom', 'left'];
    positions.forEach((pos, i) => {
      const group = document.createElement('div');
      group.className = `group group-${pos}`;
      createCard(
        group,
        showBack ? 'Common' : '1Main',
        showBack ? BACK_CARD : mains[i]
      );
      createCard(
        group,
        showBack ? 'Common' : '2Support',
        showBack ? BACK_CARD : sups[i]
      );
      container.append(group);
    });

    const lifeGroup = document.createElement('div');
    lifeGroup.className = 'group-life';
    createCard(
      lifeGroup,
      showBack ? 'Common' : '3Life',
      showBack ? BACK_CARD : lifes[0]
    );
    container.append(lifeGroup);
  },

  /**
   * 渲染簡單牌陣（single, two, basicThree）
   */
  simple(container, { key, showBack, mains, sups, lifes }) {
    const configs = {
      single: [{ folder: '3Life', cards: lifes, idx: 0 }],
      two: [
        { folder: '1Main', cards: mains, idx: 0 },
        { folder: '2Support', cards: sups, idx: 0 },
      ],
      basicThree: [
        { folder: '1Main', cards: mains, idx: 0 },
        { folder: '2Support', cards: sups, idx: 0 },
        { folder: '3Life', cards: lifes, idx: 0 },
      ],
    };

    (configs[key] || []).forEach(({ folder, cards, idx }) => {
      createCard(
        container,
        showBack ? 'Common' : folder,
        showBack ? BACK_CARD : cards[idx]
      );
    });
  },
};

/**
 * 渲染牌卡到容器中
 * @param {Object} params - 渲染參數
 * @returns {HTMLElement} - 渲染的容器
 */
function renderCards({
  key,
  showBack,
  mains,
  sups,
  lifes,
  palaceNames,
  extraCard,
  spread,
}) {
  const cardCt = getElement('cardContainer');
  const twelveCt = getElement('twelveContainer');

  // 清空並隱藏
  cardCt.innerHTML = '';
  twelveCt.innerHTML = '';
  cardCt.style.display = 'none';
  twelveCt.style.display = 'none';

  // 選擇容器與設定
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

  // 依牌陣類型呼叫對應渲染器
  const renderParams = {
    showBack,
    mains,
    sups,
    lifes,
    palaceNames,
    extraCard,
    spread,
  };

  if (key === 'twelve') {
    SpreadRenderer.twelve(container, renderParams);
  } else if (key === 'opposition') {
    SpreadRenderer.opposition(container, renderParams);
  } else if (key === 'threeFour') {
    SpreadRenderer.threeFour(container, renderParams);
  } else {
    SpreadRenderer.simple(container, { key, ...renderParams });
  }

  return container;
}

// ===== 主要功能函式 =====

/**
 * 抽牌/洗牌主函式
 * @param {boolean} [isBackside=false] - 是否為洗牌預覽模式（顯示背面）
 */
function showRandomContent(isBackside = false) {
  const key = getElement('spreadSelector').value;
  const isBlocks = key === 'blocks';

  // 更新時間顯示
  updateDrawTime(isBlocks ? '擲筊時間' : '抽牌時間');

  // 擲筊模式
  if (isBlocks) {
    resetBlocks();
    getElement('blocksArea').classList.remove('hidden');
    getElement('cardArea').classList.add('hidden');
    getDrawBtn().textContent = '擲筊';
    getShuffleBtn().textContent = '重來';

    if (!isBackside) {
      playShuffleAnimation(getElement('blocksArea'), tossBlocks);
    }
    return;
  }

  // 牌陣模式
  getElement('blocksArea').classList.add('hidden');
  getElement('cardArea').classList.remove('hidden');
  getDrawBtn().textContent = '抽牌';
  getShuffleBtn().textContent = '洗牌';

  const spread = SPREAD_CONFIG[key];

  // 預抽牌
  let mains = [],
    sups = [],
    lifes = [],
    extraCard = null,
    palaceNames = null;

  if (!isBackside) {
    fetchViewStats();

    const mainCount = spread.main + (spread.extra || 0);
    const uniqueMain = dealUnique(shuffle(CONTENT_MAIN), mainCount);
    mains = uniqueMain.slice(0, spread.main);
    extraCard = spread.extra > 0 ? uniqueMain[spread.main] : null;
    sups =
      spread.support > 0
        ? dealUnique(shuffle(CONTENT_SUPPORT), spread.support)
        : [];
    lifes =
      spread.life > 0 ? dealUnique(shuffle(CONTENT_LIFE), spread.life) : [];

    if (key === 'twelve') {
      palaceNames = generateRandomPalaceOrder();
    }
  }

  const renderParams = {
    key,
    mains,
    sups,
    lifes,
    palaceNames,
    extraCard,
    spread,
  };

  // 抽牌流程：背面 → 搖晃 → 翻面
  if (!isBackside) {
    const container = renderCards({ ...renderParams, showBack: true });
    playShuffleAnimation(container, () => {
      playFlipAnimation(
        container,
        () => renderCards({ ...renderParams, showBack: false }),
        null
      );
    });
  } else {
    const container = renderCards({ ...renderParams, showBack: true });
    playShuffleAnimation(container);
  }
}

/**
 * 洗牌預覽
 */
function shufflePreview() {
  const key = getElement('spreadSelector').value;
  const isBlocks = key === 'blocks';

  if (isBlocks) {
    playShuffleAnimation(getElement('blocksArea'), resetBlocks);
    updateDrawTime('擲筊時間');
    return;
  }

  showRandomContent(true);
}

/**
 * 儲存牌面截圖
 */
function saveCardScreen() {
  const key = getElement('spreadSelector').value;
  const isBlocks = key === 'blocks';
  const label = isBlocks ? '擲筊時間' : '抽牌時間';

  // 取得容器
  const container = isBlocks
    ? getElement('blocksArea')
    : key === 'twelve'
    ? getElement('twelveContainer')
    : getElement('cardContainer');

  // 產生時間戳
  const timestamp = formatDateTime(lastDrawTimestamp || new Date());
  const timestampText = `${label}：${timestamp}`;

  // 取得問題文字
  let questionText = getElement('questionInput').value;
  const displayQuestion = questionText ? `問題: ${questionText}` : '';

  // 產生檔名
  const spreadName = SPREAD_NAMES[key] || '未知';
  const filename = `紫微牌卡_${spreadName}_${questionText}_${timestamp}.png`;

  // 使用 html2canvas 截圖
  // 使用 html2canvas 截圖
  html2canvas(container, {
    backgroundColor: null, // 設為 null 以使用 CSS 背景
    scale: 2, // 提升解析度
    windowWidth: 1024, // 模擬電腦版視窗寬度
    onclone: (doc) => {
      const cloned = doc.getElementById(container.id);
      cloned.style.position = 'relative';
      // 強制設定寬度，確保排版一致（解決手機版擠壓問題）
      cloned.style.width = '1024px';
      cloned.style.minWidth = '1024px';

      // 1. 設定背景：優雅的暖色米白底，避免漸層截圖破圖
      cloned.style.background = '#fdfbf7';
      cloned.style.backgroundColor = '#fdfbf7';
      // 增加上方留白至 120px 以容納標題，下方增加至 100px 避免壓到頁尾
      cloned.style.padding = '120px 40px 100px';
      cloned.style.borderRadius = '0'; // 移除圓角，使其像一張文件
      cloned.style.boxSizing = 'border-box';
      // 清除原本的 Box Shadow 與 Border，避免干擾
      cloned.style.boxShadow = 'none';
      cloned.style.border = 'none';

      // 2. 插入標題 (Header)
      const headerDiv = doc.createElement('div');
      headerDiv.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
        border-bottom: 2px solid rgba(139, 92, 246, 0.2);
      `;

      const titleEl = doc.createElement('h2');
      titleEl.textContent = `紫微斗數 - ${spreadName}`;
      titleEl.style.cssText = `
        margin: 0;
        color: #4c1d95; /* extremely dark purple */
        font-family: 'Noto Serif TC', serif;
        font-size: 32px; /* 加大標題字體 */
        letter-spacing: 2px;
      `;
      headerDiv.appendChild(titleEl);
      cloned.insertBefore(headerDiv, cloned.firstChild);

      // 3. 處理內容元素樣式
      const backgroundElements = cloned.querySelectorAll(
        '.palace-cell, .center-area, .card, .group, .group-main, .group-support, .group-life, .group-top, .group-bottom, .group-left, .group-right, .blocks-area'
      );
      backgroundElements.forEach((el) => {
        // 卡片容器改為半透明白底
        el.style.background = 'rgba(255, 255, 255, 0.6)';
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        // 優雅的紫色邊框
        el.style.borderColor = 'rgba(139, 92, 246, 0.3)';
        el.style.borderRadius = '8px';
      });

      // 4. 文字顏色優化
      const allText = cloned.querySelectorAll(
        'p, p2, span, .palace-label, .branch-label, .center-label, .blocks-result, .block-label'
      );
      allText.forEach((el) => {
        el.style.color = '#1f2937'; // gray-800
        el.style.textShadow = 'none';

        if (el.classList.contains('branch-label')) {
          el.style.color = '#b45309'; // dark amber
        }
        if (el.classList.contains('palace-label')) {
          el.style.color = '#1e3a8a'; // dark blue
        }
        if (el.classList.contains('blocks-result')) {
          el.style.color = '#b45309'; // dark amber
        }
        if (el.classList.contains('block-label')) {
          el.style.color = '#b45309'; // dark amber
        }
      });

      // 5. 圖片樣式優化
      const allImages = cloned.querySelectorAll('img');
      allImages.forEach((img) => {
        img.style.borderColor = '#9ca3af';
        img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      });

      // 6. 插入頁尾 (Footer)
      const footerDiv = doc.createElement('div');
      footerDiv.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px 40px;
        background: rgba(255, 255, 255, 0.8);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Noto Sans TC', sans-serif;
        font-size: 16px; /* 調整頁尾字體大小至適中 */
        color: #4b5563;
      `;

      // 左側：問題
      const leftInfo = doc.createElement('div');
      if (questionText) {
        leftInfo.innerHTML = `<span style="color: #6d28d9; font-weight: bold;">問題：</span>${questionText}`;
      } else {
        leftInfo.innerHTML = `<span style="color: #6d28d9; font-weight: bold;"> </span>`;
      }

      // 右側：只保留時間，移除品牌文字
      const rightInfo = doc.createElement('div');
      rightInfo.style.textAlign = 'right';
      rightInfo.innerHTML = `
        <div style="font-weight: 500;">${timestamp}</div>
      `;

      footerDiv.appendChild(leftInfo);
      footerDiv.appendChild(rightInfo);
      cloned.appendChild(footerDiv);

      // 移除原有的裝飾性元素
      const style = doc.createElement('style');
      style.innerHTML = `
        #${container.id}::before { content: none !important; }
        .center-area::before { display: none !important; }
      `;
      cloned.appendChild(style);
    },
  })
    .then((canvas) => downloadOrShareCanvas(canvas, filename))
    .catch((err) => {
      console.error('截圖失敗：', err);
      alert('儲存畫面失敗，請稍候再試');
    });
}

/**
 * 下載或分享 Canvas 圖片（處理 iOS Safari 特殊邏輯）
 * @param {HTMLCanvasElement} canvas - 畫布元素
 * @param {string} filename - 檔案名稱
 */
function downloadOrShareCanvas(canvas, filename) {
  const ua = navigator.userAgent;
  const isiOS = /iP(hone|ad|od)/.test(ua);
  const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);

  if (isiOS && isSafari) {
    canvas.toBlob(async (blob) => {
      const file = new File([blob], filename, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: '', text: '' });
        } catch {
          openImageInNewTab(blob, filename);
        }
      } else {
        openImageInNewTab(blob, filename);
      }
    }, 'image/png');
  } else {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/**
 * 在新分頁開啟圖片
 * @param {Blob} blob - 圖片 Blob
 * @param {string} name - 圖片名稱
 */
function openImageInNewTab(blob, name) {
  const url = URL.createObjectURL(blob);
  const w = window.open();
  w.document.write(
    `<img src="${url}" style="max-width:100%;height:auto;" alt="${name}">`
  );
}

/**
 * 呼叫統計 API 記錄瀏覽次數
 */
async function fetchViewStats() {
  try {
    const res = await fetch(COUNTER_API_URL, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.debug('累計抽牌次數：', (parseInt(data.data.up_count) + 2) / 2);
  } catch (e) {
    console.error('取得瀏覽統計失敗：', e);
  }
}

// ===== 初始化 =====
window.onload = () => {
  showRandomContent(true);

  // 使用 addEventListener 取代 inline handlers
  getElement('spreadSelector').addEventListener('change', () =>
    showRandomContent(true)
  );
  getElement('drawBtn').addEventListener('click', () => showRandomContent());
  getElement('shuffleBtn').addEventListener('click', shufflePreview);
  getElement('saveBtn').addEventListener('click', saveCardScreen);
};
