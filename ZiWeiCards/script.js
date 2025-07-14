// 牌卡資料
const contentMain = [
    // … 總共 78 張
    { image: "天同.png", text: "天同-(正牌)" },
    { image: "天機.png", text: "天機-(正牌)" },
    { image: "天府.png", text: "天府-(正牌)" },
    { image: "天梁.png", text: "天梁-(正牌)" },
    { image: "天相.png", text: "天相-(正牌)" },
    { image: "太陰.png", text: "太陰-(正牌)" },
    { image: "廉貞.png", text: "廉貞-(正牌)" },
    { image: "巨門.png", text: "巨門-(正牌)" },
    { image: "武曲.png", text: "武曲-(正牌)" },
    { image: "太陽.png", text: "太陽-(正牌)" },
    { image: "天同天梁.png", text: "天同天梁-(正牌)" },
    { image: "破軍.png", text: "破軍-(正牌)" },
    { image: "紫微.png", text: "紫微-(正牌)" },
    { image: "貪狼.png", text: "貪狼-(正牌)" },
    { image: "天機巨門.png", text: "天機巨門-(正牌)" },
    { image: "天磯天梁.png", text: "天磯天梁-(正牌)" },
    { image: "天機太陰.png", text: "天機太陰-(正牌)" },
    { image: "太陰天同.png", text: "太陰天同-(正牌)" },
    { image: "巨門太陽.png", text: "巨門太陽-(正牌)" },
    { image: "巨門天同.png", text: "巨門天同-(正牌)" },
    { image: "太陽太陰.png", text: "太陽太陰-(正牌)" },
    { image: "廉貞七殺.png", text: "廉貞七殺-(正牌)" },
    { image: "太陽天梁.png", text: "太陽天梁-(正牌)" },
    { image: "廉貞貪狼.png", text: "廉貞貪狼-(正牌)" },
    { image: "廉貞天相.png", text: "廉貞天相-(正牌)" },
    { image: "廉貞天府.png", text: "廉貞天府-(正牌)" },
    { image: "武曲七殺.png", text: "武曲七殺-(正牌)" },
    { image: "廉貞破軍.png", text: "廉貞破軍-(正牌)" },
    { image: "武曲破軍.png", text: "武曲破軍-(正牌)" },
    { image: "武曲貪狼.png", text: "武曲貪狼-(正牌)" },
    { image: "武曲天相.png", text: "武曲天相-(正牌)" },
    { image: "武曲天府.png", text: "武曲天府-(正牌)" },
    { image: "紫微天相.png", text: "紫微天相-(正牌)" },
    { image: "紫微破軍.png", text: "紫微破軍-(正牌)" },
    { image: "紫微七殺.png", text: "紫微七殺-(正牌)" },
    { image: "紫微天府.png", text: "紫微天府-(正牌)" },
    { image: "紫微貪狼.png", text: "紫微貪狼-(正牌)" },
    { image: "天磯天梁倒.png", text: "天磯天梁-(倒牌)" },
    { image: "貪狼倒.png", text: "貪狼-(倒牌)" },
    { image: "天機倒.png", text: "天機-(倒牌)" },
    { image: "天同天梁倒.png", text: "天同天梁-(倒牌)" },
    { image: "巨門倒.png", text: "巨門-(倒牌)" },
    { image: "太陽倒.png", text: "太陽-(倒牌)" },
    { image: "太陰倒.png", text: "太陰-(倒牌)" },
    { image: "天機太陰倒.png", text: "天機太陰-(倒牌)" },
    { image: "紫微倒.png", text: "紫微-(倒牌)" },
    { image: "天梁倒.png", text: "天梁-(倒牌)" },
    { image: "廉貞倒.png", text: "廉貞-(倒牌)" },
    { image: "太陰天同倒.png", text: "太陰天同-(倒牌)" },
    { image: "破軍倒.png", text: "破軍-(倒牌)" },
    { image: "武曲倒.png", text: "武曲-(倒牌)" },
    { image: "天機巨門倒.png", text: "天機巨門-(倒牌)" },
    { image: "太陽天梁倒.png", text: "太陽天梁-(倒牌)" },
    { image: "天府倒.png", text: "天府-(倒牌)" },
    { image: "天相倒.png", text: "天相-(倒牌)" },
    { image: "廉貞貪狼倒.png", text: "廉貞貪狼-(倒牌)" },
    { image: "巨門太陽倒.png", text: "巨門太陽-(倒牌)" },
    { image: "廉貞天相倒.png", text: "廉貞天相-(倒牌)" },
    { image: "武曲七殺倒.png", text: "武曲七殺-(倒牌)" },
    { image: "廉貞破軍倒.png", text: "廉貞破軍-(倒牌)" },
    { image: "廉貞七殺倒.png", text: "廉貞七殺-(倒牌)" },
    { image: "巨門天同倒.png", text: "巨門天同-(倒牌)" },
    { image: "紫微貪狼倒.png", text: "紫微貪狼-(倒牌)" },
    { image: "武曲破軍倒.png", text: "武曲破軍-(倒牌)" },
    { image: "紫微七殺倒.png", text: "紫微七殺-(倒牌)" },
    { image: "武曲天相倒.png", text: "武曲天相-(倒牌)" },
    { image: "廉貞天府倒.png", text: "廉貞天府-(倒牌)" },
    { image: "紫微天府倒.png", text: "紫微天府-(倒牌)" },
    { image: "紫微破軍倒.png", text: "紫微破軍-(倒牌)" },
    { image: "太陽太陰倒.png", text: "太陽太陰-(倒牌)" },
    { image: "武曲天府倒.png", text: "武曲天府-(倒牌)" },
    { image: "武曲貪狼倒.png", text: "武曲貪狼-(倒牌)" },
    { image: "紫微天相倒.png", text: "紫微天相-(倒牌)" },
    { image: "天同倒.png", text: "天同-(倒牌)" },
    { image: "七殺倒.png", text: "七殺-(倒牌)" },
    { image: "空宮倒.png", text: "空宮-(倒牌)" },
    { image: "空宮.png", text: "空宮-(正牌)" },
  ];
  
  const contentSupport = [
    // … 總共 38 張
    { image: "化科.png", text: "化科-(正牌)" },
    { image: "化權.png", text: "化權-(正牌)" },
    { image: "化忌.png", text: "化忌-(正牌)" },
    { image: "天刑.png", text: "天刑-(正牌)" },
    { image: "天鉞.png", text: "天鉞-(正牌)" },
    { image: "左輔.png", text: "左輔-(正牌)" },
    { image: "天魁.png", text: "天魁-(正牌)" },
    { image: "右弼.png", text: "右弼-(正牌)" },
    { image: "火星.png", text: "火星-(正牌)" },
    { image: "文曲.png", text: "文曲-(正牌)" },
    { image: "擎羊.png", text: "擎羊-(正牌)" },
    { image: "文昌.png", text: "文昌-(正牌)" },
    { image: "祿存.png", text: "祿存-(正牌)" },
    { image: "空劫.png", text: "空劫-(正牌)" },
    { image: "紅鸞天喜.png", text: "紅鸞天喜-(正牌)" },
    { image: "陀羅.png", text: "陀羅-(正牌)" },
    { image: "鈴星.png", text: "鈴星-(正牌)" },
    { image: "陰煞.png", text: "陰煞-(正牌)" },
    { image: "天魁倒.png", text: "天魁-(倒牌)" },
    { image: "化權倒.png", text: "化權-(倒牌)" },
    { image: "化祿倒.png", text: "化祿-(倒牌)" },
    { image: "文曲倒.png", text: "文曲-(倒牌)" },
    { image: "文昌倒.png", text: "文昌-(倒牌)" },
    { image: "右弼倒.png", text: "右弼-(倒牌)" },
    { image: "天鉞倒.png", text: "天鉞-(倒牌)" },
    { image: "天刑倒.png", text: "天刑-(倒牌)" },
    { image: "化忌倒.png", text: "化忌-(倒牌)" },
    { image: "火星倒.png", text: "火星-(倒牌)" },
    { image: "化科倒.png", text: "化科-(倒牌)" },
    { image: "左輔倒.png", text: "左輔-(倒牌)" },
    { image: "空劫倒.png", text: "空劫-(倒牌)" },
    { image: "祿存倒.png", text: "祿存-(倒牌)" },
    { image: "陰煞倒.png", text: "陰煞-(倒牌)" },
    { image: "陀羅倒.png", text: "陀羅-(倒牌)" },
    { image: "鈴星倒.png", text: "鈴星-(倒牌)" },
    { image: "擎羊倒.png", text: "擎羊-(倒牌)" },
    { image: "紅鸞天喜倒.png", text: "紅鸞天喜-(倒牌)" },
  ];
  
  const contentLife = [
    // … 總共 24 張
    { image: "12養.png", text: "12養-(正牌)" },
    { image: "11胎.png", text: "11胎-(正牌)" },
    { image: "2沐浴.png", text: "2沐浴-(正牌)" },
    { image: "10絕.png", text: "10絕-(正牌)" },
    { image: "4臨官.png", text: "4臨官-(正牌)" },
    { image: "5帝旺.png", text: "5帝旺-(正牌)" },
    { image: "6衰.png", text: "6衰-(正牌)" },
    { image: "7病.png", text: "7病-(正牌)" },
    { image: "3冠帶.png", text: "3冠帶-(正牌)" },
    { image: "8死.png", text: "8死-(正牌)" },
    { image: "9墓.png", text: "9墓-(正牌)" },
    { image: "2沐浴倒.png", text: "2沐浴-(倒牌)" },
    { image: "1長生倒.png", text: "1長生-(倒牌)" },
    { image: "8死倒.png", text: "8死-(倒牌)" },
    { image: "9墓倒.png", text: "9墓-(倒牌)" },
    { image: "6衰倒.png", text: "6衰-(倒牌)" },
    { image: "7病倒.png", text: "7病-(倒牌)" },
    { image: "4臨官倒.png", text: "4臨官-(倒牌)" },
    { image: "3冠帶倒.png", text: "3冠帶-(倒牌)" },
    { image: "5帝旺倒.png", text: "5帝旺-(倒牌)" },
    { image: "10絕倒.png", text: "10絕-(倒牌)" },
    { image: "12養倒.png", text: "12養-(倒牌)" },
    { image: "11胎倒.png", text: "11胎-(倒牌)" },
  ];
  
  // 定義各牌陣規格
  const spreads = {
    single: { main: 0, support: 0, life: 1, extra: 0 },
    two: { main: 1, support: 1, life: 0, extra: 0 },
    basicThree: { main: 1, support: 1, life: 1, extra: 0 },
    opposition: { main: 2, support: 2, life: 1, extra: 0 },
    threeFour: { main: 4, support: 4, life: 1, extra: 0 },
    twelve: { main: 12, support: 12, life: 1, extra: 1 },
  };
  
  // 最後一次抽牌的時間（null 表示還沒抽過牌）
  let lastDrawTimestamp = null;
  
  // Fisher–Yates 洗牌
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  // 取指定數量且不重複同名正/倒牌
  function dealUnique(shuffledArr, count) {
    const result = [];
    const seen = new Set();
    for (const card of shuffledArr) {
      const base = card.text.split("-")[0]; // 取牌名基底
      if (seen.has(base)) continue; // 已取過同名牌就跳過
      seen.add(base);
      result.push(card);
      if (result.length === count) break;
    }
    return result;
  }
  
  // 建立單張卡片 DOM
  function createCard(parent, folder, card) {
    const d = document.createElement("div");
    d.className = "card";
    const img = document.createElement("img");
    img.src = `images/${folder}/${card.image}`;
    const p = document.createElement("p");
    if (folder == "Common") {
      p.textContent = card.text.replace("-", "\n\n");
    } else {
      p.textContent = card.text.replace("-", "\n");
    }
    d.append(img, p);
    parent.append(d);
  }
  
  function showRandomContent(isBackside = false) {
    const key = document.getElementById("spreadSelector").value;
    const cardCt = document.getElementById("cardContainer");
    const twelveCt = document.getElementById("twelveContainer");
  
    // 清空並隱藏
    cardCt.innerHTML = "";
    twelveCt.innerHTML = "";
    cardCt.style.display = "none";
    twelveCt.style.display = "none";
  
    // 牌陣定義
    const spread = spreads[key];
  
    // 洗牌與抽牌（只有不是背面模式時才做）
    let mains = [],
      sups = [],
      lifes = [],
      extraCard = null;
  
    const drawTimeDiv = document.getElementById("drawTimeDisplay");
    if (!isBackside) {
      lastDrawTimestamp = new Date();
      const mainShuffled = shuffle(contentMain);
      const supportShuffled = shuffle(contentSupport);
      const lifeShuffled = shuffle(contentLife);
  
      const mainCount = spread.main + (spread.extra || 0);
      const uniqueMain = dealUnique(mainShuffled, mainCount);
      mains = uniqueMain.slice(0, spread.main);
      extraCard = spread.extra > 0 ? uniqueMain[spread.main] : null;
  
      sups =
        spread.support > 0 ? dealUnique(supportShuffled, spread.support) : [];
      lifes = spread.life > 0 ? dealUnique(lifeShuffled, spread.life) : [];
  
      const pad = (n) => n.toString().padStart(2, "0");
      const yyyy = lastDrawTimestamp.getFullYear();
      const MM = pad(lastDrawTimestamp.getMonth() + 1);
      const dd = pad(lastDrawTimestamp.getDate());
      const hh = pad(lastDrawTimestamp.getHours());
      const mm = pad(lastDrawTimestamp.getMinutes());
      const ss = pad(lastDrawTimestamp.getSeconds());
      drawTimeDiv.textContent = `抽牌時間：${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`;
    } else {
      lastDrawTimestamp = new Date();
      const pad = (n) => n.toString().padStart(2, "0");
      const yyyy = lastDrawTimestamp.getFullYear();
      const MM = pad(lastDrawTimestamp.getMonth() + 1);
      const dd = pad(lastDrawTimestamp.getDate());
      const hh = pad(lastDrawTimestamp.getHours());
      const mm = pad(lastDrawTimestamp.getMinutes());
      const ss = pad(lastDrawTimestamp.getSeconds());
      drawTimeDiv.textContent = `抽牌時間：${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`;
    }
  
    // 預設背面卡片資料
    const backCard = { image: "背面邊框.png", text: "  -  " };
  
    // 選擇容器
    let container;
    if (key === "twelve") {
      container = twelveCt;
      twelveCt.style.display = "grid";
      twelveCt.className = key;
    } else if (key === "threeFour") {
      container = cardCt;
      cardCt.style.display = "grid";
      cardCt.className = key;
    } else {
      container = cardCt;
      cardCt.style.display = "flex";
      cardCt.className = key;
    }
  
    // 根據牌陣組卡（共用邏輯）
    if (key === "twelve") {
      // 定義十二宮位名稱，順序對應 pos1 到 pos12
      let palaceNames; // 先宣告最終的宮位名稱陣列
  
      // 只有在抽牌時才執行宮位排序邏輯
      if (!isBackside) {
        // --- 開始新的「隨機命宮起點」邏輯 ---
  
        // 1. 定義十二宮位固定的逆時針順序
        const orderedPalaces = [
          "命",
          "父",
          "福",
          "田",
          "官",
          "僕",
          "遷",
          "疾",
          "財",
          "子",
          "夫",
          "兄",
        ];
  
        // 2. 定義盤面上十二個位置(pos)的逆時針路徑
        //    這個陣列中的數字代表迴圈的索引 `i`，它對應到盤面上從「子」位開始的逆時針順序
        const ccwPosOrder = [9, 8, 6, 10, 1, 2, 3, 4, 5, 7, 11, 0];
  
        // 3. 隨機選擇一個起始位置 (0-11)，作為「命宮」的起點
        const randomStartIndex = Math.floor(Math.random() * 12);
  
        // 4. 根據隨機起點，生成最終的宮位順序陣列
        const finalPalaceOrder = new Array(12);
        for (let i = 0; i < 12; i++) {
          // 從固定的宮位順序中取出宮位 (命、兄、夫...)
          const palace = orderedPalaces[i];
          // 根據隨機起點，從逆時針路徑中找到該宮位應該放置的位置索引
          const posIndex = ccwPosOrder[(randomStartIndex + i) % 12];
          // 將宮位名稱存入最終陣列的正確位置
          finalPalaceOrder[posIndex] = palace;
        }
        palaceNames = finalPalaceOrder;
      } else {
        // 在洗牌預覽模式下，建立一個空陣列即可
        palaceNames = new Array(12).fill("\n\n__");
      }
  
      for (let i = 0; i < 12; i++) {
        const g = document.createElement("div");
        g.className = `group group-pos pos${i + 1}`;
        createCard(
          g,
          isBackside ? "Common" : "1Main",
          isBackside ? backCard : mains[i]
        );
        createCard(
          g,
          isBackside ? "Common" : "2Support",
          isBackside ? backCard : sups[i]
        );
  
        // 如果不是顯示牌背，則新增宮位名稱標籤
        const label = document.createElement("div");
        label.className = "palace-label";
        label.textContent = palaceNames[i] + "";
        g.appendChild(label);
        //   if (!isBackside) {
        //     const label = document.createElement("div");
        //     label.className = "palace-label";
        //     label.textContent = palaceNames[i];
        //     g.appendChild(label);
        //   }
  
        container.append(g);
      }
      const cm = document.createElement("div");
      cm.className = "center-main";
      createCard(
        cm,
        isBackside ? "Common" : "1Main",
        isBackside ? backCard : extraCard
      );
  
      const cl = document.createElement("div");
      cl.className = "center-life";
      createCard(
        cl,
        isBackside ? "Common" : "3Life",
        isBackside ? backCard : lifes[0]
      );
  
      container.append(cm, cl);
    } else if (key === "opposition") {
      const gm = document.createElement("div");
      gm.className = "group-main";
      for (let i = 0; i < spread.main; i++) {
        createCard(
          gm,
          isBackside ? "Common" : "1Main",
          isBackside ? backCard : mains[i]
        );
      }
      const gs = document.createElement("div");
      gs.className = "group-support";
      for (let i = 0; i < spread.support; i++) {
        createCard(
          gs,
          isBackside ? "Common" : "2Support",
          isBackside ? backCard : sups[i]
        );
      }
      const gl = document.createElement("div");
      gl.className = "group-life";
      createCard(
        gl,
        isBackside ? "Common" : "3Life",
        isBackside ? backCard : lifes[0]
      );
  
      container.append(gm, gs, gl);
    } else if (key === "threeFour") {
      ["top", "right", "bottom", "left"].forEach((_, i) => {
        const g = document.createElement("div");
        g.className = `group group-${_}`;
        createCard(
          g,
          isBackside ? "Common" : "1Main",
          isBackside ? backCard : mains[i]
        );
        createCard(
          g,
          isBackside ? "Common" : "2Support",
          isBackside ? backCard : sups[i]
        );
        container.append(g);
      });
      const gl = document.createElement("div");
      gl.className = "group-life";
      createCard(
        gl,
        isBackside ? "Common" : "3Life",
        isBackside ? backCard : lifes[0]
      );
      container.append(gl);
    } else if (key === "single") {
      createCard(
        container,
        isBackside ? "Common" : "3Life",
        isBackside ? backCard : lifes[0]
      );
    } else if (key === "two") {
      createCard(
        container,
        isBackside ? "Common" : "1Main",
        isBackside ? backCard : mains[0]
      );
      createCard(
        container,
        isBackside ? "Common" : "2Support",
        isBackside ? backCard : sups[0]
      );
    } else if (key === "basicThree") {
      createCard(
        container,
        isBackside ? "Common" : "1Main",
        isBackside ? backCard : mains[0]
      );
      createCard(
        container,
        isBackside ? "Common" : "2Support",
        isBackside ? backCard : sups[0]
      );
      createCard(
        container,
        isBackside ? "Common" : "3Life",
        isBackside ? backCard : lifes[0]
      );
    }
  }
  
  function playShuffleAnimation(container, callback) {
    container.classList.add("shuffling");
    // 0.6s 之後移除 class 並執行 callback
    setTimeout(() => {
      container.classList.remove("shuffling");
      if (callback) callback();
    }, 600);
  }
  
  function shufflePreview() {
    console.log("洗牌中...");
    const key = document.getElementById("spreadSelector").value;
    // 選出卡片容器（單／多都用同一個 container）
    const container =
      key === "twelve"
        ? document.getElementById("twelveContainer")
        : document.getElementById("cardContainer");
  
    // 先播放動畫，結束後再重繪
    playShuffleAnimation(container, () => showRandomContent(true));
  }
  function saveCardScreen() {
    console.log("儲存牌面");
    const key = document.getElementById("spreadSelector").value;
    const container =
      key === "twelve"
        ? document.getElementById("twelveContainer")
        : document.getElementById("cardContainer");
  
    // 產生抽牌時間
    const dateObj = lastDrawTimestamp || new Date();
    const pad = (n) => n.toString().padStart(2, "0");
    const yyyy = dateObj.getFullYear();
    const MM = pad(dateObj.getMonth() + 1);
    const dd = pad(dateObj.getDate());
    const hh = pad(dateObj.getHours());
    const mm = pad(dateObj.getMinutes());
    const ss = pad(dateObj.getSeconds());
    const timestamp = `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`;
    const timestampText = `抽牌時間：${timestamp}`;
  
    // 取得問題文字
    var questionText = document.getElementById("questionInput").value;
  
    var spread = "";
    if (key === "single") spread = "一張牌陣";
    else if (key == "two") spread = "二張牌陣";
    else if (key == "basicThree") spread = "三張基礎牌陣";
    else if (key == "opposition") spread = "對宮牌陣";
    else if (key == "threeFour") spread = "三方四正牌陣";
    else if (key == "twelve") spread = "十二宮位大牌陣";
    const filename = `紫微牌卡_${spread}_${questionText}_${timestamp}.png`;
  
    // 加入浮水印到真實容器上
    const timeOverlay = document.createElement("div");
    timeOverlay.textContent = timestampText;
    Object.assign(timeOverlay.style, {
      position: "absolute",
      right: "4px",
      bottom: "4px",
      fontSize: "14px",
      fontWeight: "bold",
      background: "rgba(255,255,255,0.85)",
      padding: "4px 8px",
      borderRadius: "4px",
      zIndex: "99",
      pointerEvents: "none",
    });
  
    if (questionText != "") {
      questionText = "問題: " + questionText;
    }
    // 建立問題文字浮水印（左上角）
    const questionOverlay = document.createElement("div");
    questionOverlay.textContent = questionText;
  
    html2canvas(container, {
      backgroundColor: "#ffffff",
      onclone: (doc) => {
        // 這裡的 doc 是整個被複製的文件，container 的所有子結構都在其中
        const cloned = doc.getElementById(container.id);
        // 時間浮水印
        const timeDiv = doc.createElement("div");
        timeDiv.textContent = timestampText;
        Object.assign(timeDiv.style, {
          position: "absolute",
          right: "4px",
          bottom: "4px",
          fontSize: "14px",
          fontWeight: "bold",
          background: "rgba(255,255,255,0.85)",
          fontFamily: "'Noto Sans TC', sans-serif",
          padding: "4px 8px",
          borderRadius: "4px",
          pointerEvents: "none",
        });
        // 問題文字浮水印
        const qDiv = doc.createElement("div");
        qDiv.textContent = questionText;
        Object.assign(qDiv.style, {
          position: "absolute",
          left: "4px",
          top: "4px",
          fontSize: "20px",
          fontWeight: "bold",
          background: "rgba(255,255,255,0.85)",
          fontFamily: "'Noto Sans TC', sans-serif",
          padding: "4px 8px",
          borderRadius: "4px",
          pointerEvents: "none",
        });
        // 加到 clone 上
        cloned.style.position = "relative";
        cloned.appendChild(timeDiv);
        cloned.appendChild(qDiv);
      },
    })
      .then((canvas) => {
        const ua = navigator.userAgent;
        const isiOS = /iP(hone|ad|od)/.test(ua);
        const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
  
        if (isiOS && isSafari) {
          canvas.toBlob(async (blob) => {
            const file = new File([blob], filename, { type: "image/png" });
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
              try {
                await navigator.share({
                  files: [file],
                  title: "",
                  text: "",
                });
              } catch (err) {
                openImageInNewTab(blob, filename);
              }
            } else {
              openImageInNewTab(blob, filename);
            }
          }, "image/png");
        } else {
          const link = document.createElement("a");
          link.download = filename;
          link.href = canvas.toDataURL("image/png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      })
      .catch((err) => {
        console.error("截圖失敗：", err);
        alert("儲存畫面失敗，請稍候再試");
      })
      .finally(() => {
        // 移除浮水印
        container.removeChild(timeOverlay);
        container.removeChild(questionOverlay);
      });
  
    function openImageInNewTab(blob, name) {
      const url = URL.createObjectURL(blob);
      const w = window.open();
      w.document.write(`
                <img src="${url}" style="max-width:100%;height:auto;" alt="${name}">
            `);
    }
  }
  
  // 頁面載入預設背面三張
  // window.onload = () => showRandomContent(true);
  window.onload = () => {
    showRandomContent(true);
  };
