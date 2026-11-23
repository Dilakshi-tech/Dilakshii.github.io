/* ==========================================================================
   Lingo Mate - Application Logic & Content State
   ========================================================================== */

// Current App State
let currentLang = 'french';
let currentLevel = 1;
let currentJapaneseScript = 'hiragana';
let selectedAvatar = '🧑‍🎓';

// Comprehensive Curriculum Database (Levels 1 to 5)
const curriculum = {
  french: {
    level1: [
      { char: 'A', sub: 'a [ah]' }, { char: 'B', sub: 'bé [beh]' },
      { char: 'C', sub: 'cé [seh]' }, { char: 'D', sub: 'dé [deh]' },
      { char: 'E', sub: 'e [uh]' },   { char: 'F', sub: 'effe [eff]' }
    ],
    level2: [
      { char: '1', sub: 'Un' }, { char: '2', sub: 'Deux' },
      { char: '3', sub: 'Trois' }, { char: '4', sub: 'Quatre' }, { char: '5', sub: 'Cinq' }
    ],
    level3: [
      { char: 'Le', sub: 'The (Masculine)' }, { char: 'La', sub: 'The (Feminine)' },
      { char: 'Un', sub: 'A (Masculine)' }, { char: 'Une', sub: 'A (Feminine)' }
    ],
    level4: [
      { char: 'Je suis', sub: 'I am (Present)' }, { char: "J'étais", sub: 'I was (Past)' },
      { char: "J'serai", sub: 'I will be (Future)' }
    ],
    level5: {
      sentence: "Je mange une pomme rouge",
      translation: "I eat a red apple",
      scrambled: ["eat", "I", "apple", "red", "a"],
      hint: "Start with the pronoun 'I' followed by the action verb."
    }
  },

  german: {
    level1: [
      { char: 'A', sub: 'Ah' }, { char: 'B', sub: 'Beh' },
      { char: 'C', sub: 'Tseh' }, { char: 'Ä', sub: 'A-Umlaut' }
    ],
    level2: [
      { char: '1', sub: 'Eins' }, { char: '2', sub: 'Zwei' },
      { char: '3', sub: 'Drei' }, { char: '4', sub: 'Vier' }
    ],
    level3: [
      { char: 'Der', sub: 'The (Masculine)' }, { char: 'Die', sub: 'The (Feminine)' },
      { char: 'Das', sub: 'The (Neuter)' }
    ],
    level4: [
      { char: 'Ich gehe', sub: 'I go (Present)' }, { char: 'Ich ging', sub: 'I went (Past)' }
    ],
    level5: {
      sentence: "Der Hund spielt im Garten",
      translation: "The dog plays in the garden",
      scrambled: ["plays", "The", "garden", "dog", "in", "the"],
      hint: "Identify 'The dog' as the subject first."
    }
  },

  japanese: {
    hiragana: [
      { char: 'あ', sub: 'a' }, { char: 'い', sub: 'i' },
      { char: 'う', sub: 'u' }, { char: 'え', sub: 'e' }, { char: 'お', sub: 'o' }
    ],
    katakana: [
      { char: 'ア', sub: 'a' }, { char: 'イ', sub: 'i' },
      { char: 'ウ', sub: 'u' }, { char: 'エ', sub: 'e' }, { char: 'オ', sub: 'o' }
    ],
    kanji: [
      { char: '日', sub: 'Sun / Day' }, { char: '月', sub: 'Moon / Month' },
      { char: '水', sub: 'Water' }, { char: '火', sub: 'Fire' }
    ],
    level2: [
      { char: '一', sub: 'Ichi (1)' }, { char: '二', sub: 'Ni (2)' }, { char: '三', sub: 'San (3)' }
    ],
    level3: [
      { char: 'は (wa)', sub: 'Topic Particle' }, { char: 'が (ga)', sub: 'Subject Particle' }
    ],
    level4: [
      { char: 'たべます', sub: 'Eat (Present)' }, { char: 'たべました', sub: 'Ate (Past)' }
    ],
    level5: {
      sentence: "ねこが さかなを たべます",
      translation: "The cat eats fish",
      scrambled: ["cat", "The", "fish", "eats"],
      hint: "'ねこ (Neko)' means cat, which comes at the beginning."
    }
  },

  korean: {
    level1: [
      { char: 'ㄱ', sub: 'Giyeok (g/k)' }, { char: 'ㄴ', sub: 'Nieun (n)' }, { char: 'ㄷ', sub: 'Digeut (d/t)' }
    ],
    level2: [
      { char: '하나', sub: 'Hana (1)' }, { char: '둘', sub: 'Dul (2)' }, { char: '셋', sub: 'Set (3)' }
    ],
    level3: [
      { char: '이/가', sub: 'Subject Marker' }, { char: '은/는', sub: 'Topic Marker' }
    ],
    level4: [
      { char: '가요', sub: 'Go (Present)' }, { char: '갔어요', sub: 'Went (Past)' }
    ],
    level5: {
      sentence: "학생이 책을 읽습니다",
      translation: "The student reads a book",
      scrambled: ["reads", "student", "a", "The", "book"],
      hint: "Start with 'The student'."
    }
  },

  chinese: {
    level1: [
      { char: 'b', sub: 'bo' }, { char: 'p', sub: 'po' }, { char: 'm', sub: 'mo' }, { char: 'f', sub: 'fo' }
    ],
    level2: [
      { char: '一', sub: 'Yī (1)' }, { char: '二', sub: 'Èr (2)' }, { char: '三', sub: 'Sān (3)' }
    ],
    level3: [
      { char: '的 (de)', sub: 'Possessive Article' }, { char: '个 (gè)', sub: 'General Measure Word' }
    ],
    level4: [
      { char: '吃', sub: 'Eat (Present)' }, { char: '吃了', sub: 'Ate (Past / Completed)' }
    ],
    level5: {
      sentence: "我喜欢学语言",
      translation: "I like learning languages",
      scrambled: ["learning", "I", "languages", "like"],
      hint: "'我 (Wǒ)' translates to 'I'."
    }
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  selectLanguage('french');
});

// View Navigation Switcher
function switchView(viewId) {
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(viewId).classList.add('active');
}

// Select Target Language
function selectLanguage(lang) {
  currentLang = lang;
  document.body.setAttribute('data-theme', lang);

  // Update Title
  const titles = { french: 'French', german: 'German', japanese: 'Japanese', korean: 'Korean', chinese: 'Chinese' };
  document.getElementById('current-lang-title').innerText = `Selected Language: ${titles[lang]}`;

  // Toggle Japanese Script Selector
  const scriptSelector = document.getElementById('japanese-script-selector');
  if (lang === 'japanese') {
    scriptSelector.classList.remove('hidden');
  } else {
    scriptSelector.classList.add('hidden');
  }

  switchView('learning-center');
  selectLevel(1);
}

// Japanese Writing System Selector
function selectJapaneseScript(script) {
  currentJapaneseScript = script;
  document.querySelectorAll('.script-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderLevelContent();
}

// Select Level (1-5)
function selectLevel(lvl) {
  currentLevel = lvl;
  document.querySelectorAll('.level-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx + 1 === lvl);
  });

  renderLevelContent();
}

// Render Level Items or Sentence Game
function renderLevelContent() {
  const displayBox = document.getElementById('activity-content');
  const gameBox = document.getElementById('sentence-game-area');
  const levelHeading = document.getElementById('level-heading');

  displayBox.innerHTML = '';
  document.getElementById('hint-box').classList.add('hidden');
  document.getElementById('game-feedback').innerText = '';

  if (currentLevel === 5) {
    // Level 5 Sentence Word-Scramble Game
    displayBox.classList.add('hidden');
    gameBox.classList.remove('hidden');
    levelHeading.innerText = "Level 5: Sentence Writing Mini-Game";

    setupWordGame();
  } else {
    // Levels 1-4 Practice Items
    displayBox.classList.remove('hidden');
    gameBox.classList.add('hidden');
    levelHeading.innerText = `Level ${currentLevel} Practice`;

    let dataItems = [];
    if (currentLang === 'japanese' && currentLevel === 1) {
      dataItems = curriculum.japanese[currentJapaneseScript];
    } else {
      dataItems = curriculum[currentLang][`level${currentLevel}`] || [];
    }

    dataItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.innerHTML = `<div class="char">${item.char}</div><div class="sub">${item.sub}</div>`;
      card.onclick = () => speakText(item.char);
      displayBox.appendChild(card);
    });
  }
}

// Web Speech API - Text to Speech Pronunciation
function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    const langCodes = { french: 'fr-FR', german: 'de-DE', japanese: 'ja-JP', korean: 'ko-KR', chinese: 'zh-CN' };
    utterance.lang = langCodes[currentLang] || 'en-US';
    window.speechSynthesis.speak(utterance);
  }
}

function speakCurrentItem() {
  if (currentLevel === 5) {
    const data = curriculum[currentLang].level5;
    speakText(data.sentence);
  } else {
    speakText(currentLang);
  }
}

/* ==========================================================================
   Level 5 Word-Scramble Mini-Game Logic
   ========================================================================== */
let selectedWords = [];

function setupWordGame() {
  const data = curriculum[currentLang].level5;
  document.getElementById('target-sentence-sub').innerText = `Target Sentence: "${data.sentence}"`;

  const wordPool = document.getElementById('word-pool');
  const wordSlots = document.getElementById('word-slots');
  wordPool.innerHTML = '';
  wordSlots.innerHTML = '';
  selectedWords = [];

  data.scrambled.forEach(word => {
    const chip = document.createElement('div');
    chip.className = 'word-chip';
    chip.innerText = word;
    chip.onclick = () => moveWord(chip);
    wordPool.appendChild(chip);
  });
}

function moveWord(chip) {
  const pool = document.getElementById('word-pool');
  const slots = document.getElementById('word-slots');

  if (chip.parentElement === pool) {
    slots.appendChild(chip);
    selectedWords.push(chip.innerText);
  } else {
    pool.appendChild(chip);
    selectedWords = selectedWords.filter(w => w !== chip.innerText);
  }
}

function resetWordGame() {
  setupWordGame();
}

function checkSentence() {
  const data = curriculum[currentLang].level5;
  const userAttempt = selectedWords.join(' ');
  const feedback = document.getElementById('game-feedback');

  if (userAttempt.toLowerCase() === data.translation.toLowerCase()) {
    feedback.innerText = "🎉 Excellent! Correct sentence formed.";
    feedback.style.color = "#10b981";
  } else {
    feedback.innerText = "❌ Not quite right yet. Try rearranging the words!";
    feedback.style.color = "#ef4444";
  }
}

function showHint() {
  const data = curriculum[currentLang].level5;
  const hintBox = document.getElementById('hint-box');
  hintBox.innerText = `Hint: ${data.hint}`;
  hintBox.classList.remove('hidden');
}

/* ==========================================================================
   Profile Avatar & Admin Tools
   ========================================================================== */
function setAvatar(emoji) {
  selectedAvatar = emoji;
  document.querySelectorAll('.avatar-option').forEach(btn => {
    btn.classList.toggle('active', btn.innerText === emoji);
  });
  document.getElementById('user-avatar-preview').innerText = emoji;
}

function saveGoals() {
  const status = document.getElementById('goals-status');
  status.innerText = "✅ Study goals saved successfully!";
  status.style.color = "#10b981";
}

function createAdminUser() {
  const input = document.getElementById('new-user-id');
  if (input.value.trim() !== '') {
    const list = document.getElementById('user-list');
    const li = document.createElement('li');
    li.innerText = `${input.value.trim()} (Active Profile)`;
    list.appendChild(li);
    input.value = '';
  }
}