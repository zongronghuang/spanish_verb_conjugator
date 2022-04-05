import { datastore, numOfVerbConjugationGroups } from "./configs";

/**
 * 透過 subjunctive present 1P 建立對應的 imperative 1P；自動區分反身動詞與非反身動詞
 * @param {string} subjunctivePresent1P - 該動詞的 subjunctive present 1P
 * @returns {string} imperative1P - 該動詞的 imperative 1P
 */
const createAffirmativeImperative1P = (subjunctivePresent1P) => {
  const reflexiveStart = "nos ";
  const arseEnding = "emos";
  const erseAndIrseEnding = "amos";
  const imperativeArseEnding = "émonos";
  const imperativeErseAndIrseEnding = "ámonos";
  let imperative1P = "";

  // 不是反身動詞 => imperative 1P 和 subjunctive present 1P 同型
  if (!subjunctivePresent1P.startsWith(reflexiveStart)) {
    imperative1P = subjunctivePresent1P;
    return imperative1P;
  }

  // 是反身動詞 => 修改動詞結尾
  imperative1P = subjunctivePresent1P
    .replace(reflexiveStart, "")
    .replace(arseEnding, imperativeArseEnding)
    .replace(erseAndIrseEnding, imperativeErseAndIrseEnding);

  return imperative1P;
};

/**
 * 動詞的 affirmative imperative 及 negative imperative 加上 imperative 1P
 * @param {Object[]} conjugationGroups - 該動詞的所有變化
 * @returns {Object[]} updatedConjugationGroups - 該動詞的所有變化 (加入 imperative_1P)
 */
const addImperativesFor1P = (conjugationGroups) => {
  // Imperative 1P 由 subjunctive present 1P 衍生而來
  const subjunctivePresent_1P = conjugationGroups.find(
    (group) =>
      group.mood_english === "Subjunctive" && group.tense_english === "Present"
  ).form_1p;

  const updatedConjugationGroups = conjugationGroups.map((group) => {
    // 否定命令型
    if (group.mood_english === "Imperative Negative") {
      group.form_1p = `no ${subjunctivePresent_1P}`;
    }
    // 肯定命令型
    if (group.mood_english === "Imperative Affirmative") {
      group.form_1p = createAffirmativeImperative1P(subjunctivePresent_1P);
    }

    return group;
  });

  return updatedConjugationGroups;
};

/**
 * 從動詞變化中的 subjunctive imperfect 建立 subjunctive imperfect 2
 * @param {Object[]} conjugationGroups - 該動詞的所有動詞變化
 * @returns {Object[]} Subjunctive imperfect 2 動詞變化
 */
const createSubjunctiveImperfect2 = (conjugationGroups) => {
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
  const subjunctiveImperfect = conjugationGroups.find(
    (group) =>
      group.mood_english === "Subjunctive" &&
      group.tense_english === "Imperfect"
  );

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

  return subjunctiveImperfect2;
};

/**
 * 將 subjunctive imperfect 2 加到動詞的所有變化中
 * @param {Object[]} conjugationGroups - 動詞的所有動詞變化
 * @returns {Object[]} 加入 subjunctive imperfect 2 的 conjugationGroups
 */
const addSubjunctiveImperfect2 = (conjugationGroups) => {
  const subjunctiveImperfectID = conjugationGroups.findIndex(
    (group) =>
      group.mood_english === "Subjunctive" &&
      group.tense_english === "Imperfect"
  );
  const subjunctiveImperfect2 = createSubjunctiveImperfect2(conjugationGroups);

  // 將 Subjunctive Imperfect 2 加到 Subjunctive Imperfect 後面
  conjugationGroups.splice(
    subjunctiveImperfectID + 1,
    0,
    subjunctiveImperfect2
  );

  return conjugationGroups;
};

/**
 * 依據原形動詞，回傳該動詞所有變化
 * @param {string} infinitive - 該動詞的原形
 * @param {string[]} infinitiveList - 含有所有原形動詞的陣列
 * @returns {Object[]} 該動詞的所有變化 (加入 imperative 1P 及 subjunctive imperfect 2)
 */
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

export { getConjugationGroupsByInfinitive };
