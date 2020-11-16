<template>
  <div>
    <ControlPanel />

    <div class="d-flex justify-content-between">
      <LeftPanel />
      <ConjugationTable />
      <RightPanel />
    </div>
    <BottomPanel />

    <TenseCategories />
  </div>
</template>

<script>
import TenseCategories from "../components/TenseCategories.vue";
import ControlPanel from "../components/ControlPanel.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import BottomPanel from "../components/BottomPanel.vue";

// const dummyData = {
//   id: "comer",
//   metadata: {
//     operation: "retrieve",
//     provider: "Oxford University Press",
//     schema: "Inflections",
//   },
//   results: [
//     {
//       id: "comer",
//       language: "es",
//       lexicalEntries: [
//         {
//           inflections: [
//             {
//               inflectedForm: "coma",
//             },
//             {
//               inflectedForm: "comamos",
//             },
//             {
//               inflectedForm: "coman",
//             },
//             {
//               inflectedForm: "comas",
//             },
//             {
//               inflectedForm: "come",
//             },
//             {
//               inflectedForm: "comed",
//             },
//             {
//               inflectedForm: "comemos",
//             },
//             {
//               inflectedForm: "comen",
//             },
//             {
//               inflectedForm: "comer",
//             },
//             {
//               inflectedForm: "comeremos",
//             },
//             {
//               inflectedForm: "comerá",
//             },
//             {
//               inflectedForm: "comerán",
//             },
//             {
//               inflectedForm: "comerás",
//             },
//             {
//               inflectedForm: "comeré",
//             },
//             {
//               inflectedForm: "comeréis",
//             },
//             {
//               inflectedForm: "comería",
//             },
//             {
//               inflectedForm: "comeríais",
//             },
//             {
//               inflectedForm: "comeríamos",
//             },
//             {
//               inflectedForm: "comerían",
//             },
//             {
//               inflectedForm: "comerías",
//             },
//             {
//               inflectedForm: "comes",
//             },
//             {
//               inflectedForm: "comida",
//             },
//             {
//               inflectedForm: "comidas",
//             },
//             {
//               inflectedForm: "comido",
//             },
//             {
//               inflectedForm: "comidos",
//             },
//             {
//               inflectedForm: "comiendo",
//             },
//             {
//               inflectedForm: "comiera",
//             },
//             {
//               inflectedForm: "comierais",
//             },
//             {
//               inflectedForm: "comieran",
//             },
//             {
//               inflectedForm: "comieras",
//             },
//             {
//               inflectedForm: "comiere",
//             },
//             {
//               inflectedForm: "comiereis",
//             },
//             {
//               inflectedForm: "comieren",
//             },
//             {
//               inflectedForm: "comieres",
//             },
//             {
//               inflectedForm: "comieron",
//             },
//             {
//               inflectedForm: "comiese",
//             },
//             {
//               inflectedForm: "comieseis",
//             },
//             {
//               inflectedForm: "comiesen",
//             },
//             {
//               inflectedForm: "comieses",
//             },
//             {
//               inflectedForm: "comimos",
//             },
//             {
//               inflectedForm: "comiste",
//             },
//             {
//               inflectedForm: "comisteis",
//             },
//             {
//               inflectedForm: "comiéramos",
//             },
//             {
//               inflectedForm: "comiéremos",
//             },
//             {
//               inflectedForm: "comiésemos",
//             },
//             {
//               inflectedForm: "comió",
//             },
//             {
//               inflectedForm: "como",
//             },
//             {
//               inflectedForm: "comáis",
//             },
//             {
//               inflectedForm: "coméis",
//             },
//             {
//               inflectedForm: "comés",
//             },
//             {
//               inflectedForm: "comí",
//             },
//             {
//               inflectedForm: "comía",
//             },
//             {
//               inflectedForm: "comíais",
//             },
//             {
//               inflectedForm: "comíamos",
//             },
//             {
//               inflectedForm: "comían",
//             },
//             {
//               inflectedForm: "comías",
//             },
//           ],
//           language: "spa",
//           lexicalCategory: {
//             id: "verb",
//             text: "Verb",
//           },
//         },
//         {
//           inflections: [
//             {
//               inflectedForm: "comer",
//             },
//           ],
//           language: "spa",
//           lexicalCategory: {
//             id: "noun",
//             text: "Noun",
//           },
//         },
//       ],
//       text: "comer",
//     },
//   ],
// };

export default {
  name: "word-card",
  components: {
    TenseCategories,
    ControlPanel,
    ConjugationTable,
    LeftPanel,
    RightPanel,
    BottomPanel,
  },
};
</script>

<style scoped>
</style>