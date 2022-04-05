import { datastore, numOfVerbConjugationGroups } from "./configs";

const getInfinitiveList = () => {
  const infinitiveList = [];
  if (!datastore.length) throw new Error("The JSON datastore is empty");
  for (let i = 0; i < datastore.length; i = i + numOfVerbConjugationGroups) {
    infinitiveList.push(datastore[i].infinitive);
  }

  return infinitiveList;
};

export { getInfinitiveList };
