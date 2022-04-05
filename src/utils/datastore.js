import jsonData from "../assets/verb-conjugations.json";
const datastore = [...jsonData];
const numOfVerbConjugationGroups = 18;

const getInfinitiveList = () => {
  const infinitiveList = [];
  if (!datastore.length) throw new Error("The JSON datastore is empty");
  for (let i = 0; i < datastore.length; i = i + numOfVerbConjugationGroups) {
    infinitiveList.push(datastore[i].infinitive);
  }

  return infinitiveList;
};

// 依原形動詞，取得所有動詞變化
const getConjugationGroupsByInfinitive = (infinitive, infinitiveList) => {
  const index = infinitiveList.findIndex((item) => item === infinitive);
  if (index === -1) return [];

  const startId = index * numOfVerbConjugationGroups;
  const endId = startId + numOfVerbConjugationGroups;
  let conjugationGroups = [...datastore.slice(startId, endId)];
  conjugationGroups = addImperativesFor1P(conjugationGroups);
  conjugationGroups = addSubjunctiveImperfect2(conjugationGroups);

  return conjugationGroups;
};

// Imperative Affirmative 和 Negative 加上第一人稱複數型
const addImperativesFor1P = (conjugationGroups) => {
  // We 的命令型和 subjunctive present 的 we 型態一樣
  const imperative_1P = conjugationGroups.find(
    (group) =>
      group.mood_english === "Subjunctive" && group.tense_english === "Present"
  ).form_1p;

  const updatedConjugationGroups = conjugationGroups.map((group) => {
    // 否定命令型
    if (group.mood_english === "Imperative Negative") {
      group.form_1p = `no ${imperative_1P}`;
    }
    // 肯定命令型
    if (group.mood_english === "Imperative Affirmative") {
      group.form_1p = imperative_1P;
      // 處理 -se 結尾的反身動詞
      const reflexiveStart = "nos ";
      const arseEnding = "emos";
      const erseAndIrseEnding = "amos";
      const imperativeArseEnding = "émonos";
      const imperativeErseAndIrseEnding = "ámonos";
      if (group.form_1p.startsWith(reflexiveStart)) {
        group.form_1p = group.form_1p
          .replace(reflexiveStart, "")
          .replace(arseEnding, imperativeArseEnding)
          .replace(erseAndIrseEnding, imperativeErseAndIrseEnding);
      }
    }

    return group;
  });

  return updatedConjugationGroups;
};

const addSubjunctiveImperfect2 = (conjugationGroups) => {
  // 從 preterite_3P 分析出 subjunctive imperfect 2 字根
  // ending 是 "aron" 或 "eron"
  const preteriteEndingLength_3P = 4;
  const preterite_3P = conjugationGroups.find(
    (group) => group.tense_english === "Preterite"
  ).form_3p;
  const root = preterite_3P.substring(
    0,
    preterite_3P.length - preteriteEndingLength_3P
  );
  const ending = preterite_3P.substring(
    preterite_3P.length - preteriteEndingLength_3P
  );

  // 用 subjunctive imperfect 建立 subjunctive imperfect 2
  const subjunctiveImperfectID = conjugationGroups.findIndex(
    (group) =>
      group.mood_english === "Subjunctive" &&
      group.tense_english === "Imperfect"
  );
  const subjunctiveImperfect = conjugationGroups[subjunctiveImperfectID];

  // 建立 Subjunctive Imperfect 2
  let subjunctiveImperfect2 = {
    ...subjunctiveImperfect,
    tense: `${subjunctiveImperfect.tense} 2`,
    tense_english: `${subjunctiveImperfect.tense_english} 2`,
  };

  if (ending === "aron") {
    subjunctiveImperfect2 = {
      ...subjunctiveImperfect2,
      form_1s: root + "ase",
      form_2s: root + "ases",
      form_3s: root + "ase",
      form_1p: root + "ásemos",
      form_2p: root + "aseis",
      form_3p: root + "asen",
    };
  }

  if (ending === "eron") {
    subjunctiveImperfect2 = {
      ...subjunctiveImperfect2,
      form_1s: root + "ese",
      form_2s: root + "eses",
      form_3s: root + "ese",
      form_1p: root + "ésemos",
      form_2p: root + "eseis",
      form_3p: root + "esen",
    };
  }

  // -se 反身動詞 (處理代名詞變化)
  const reflexiveStart = "se ";
  if (root.startsWith(reflexiveStart)) {
    subjunctiveImperfect2 = {
      ...subjunctiveImperfect2,
      form_1s: subjunctiveImperfect2.form_1s.replace(reflexiveStart, "me "),
      form_2s: subjunctiveImperfect2.form_2s.replace(reflexiveStart, "te "),
      form_1p: subjunctiveImperfect2.form_1p.replace(reflexiveStart, "nos "),
      form_2p: subjunctiveImperfect2.form_2p.replace(reflexiveStart, "os "),
    };
  }

  // 將 Subjunctive Imperfect 2 加到 Subjunctive Imperfect 後面
  conjugationGroups.splice(
    subjunctiveImperfectID + 1,
    0,
    subjunctiveImperfect2
  );

  return conjugationGroups;
};

export { getInfinitiveList, getConjugationGroupsByInfinitive };
