<template>
  <div class="pt-2 px-0 mx-0" id="conjugation-table">
    <div class="row mb-1">
      <div class="col-6 mx-auto position-relative" id="upper-display">
        <div
          class="d-flex flex-column text-center mb-3 mx-1"
          @mouseover.prevent.stop="toggleParticipleTagVisibility"
          @mouseout.prevent.stop="toggleParticipleTagVisibility"
        >
          <h2 class="mt-1">{{ verb.infinitive | capitalize }}</h2>
          <h6 class="mt-1">{{ verb.infinitive_english }}</h6>

          <ParticipleTag
            :gerund="verb.gerund"
            :pastParticiple="verb.pastParticiple"
            v-if="isParticipleTagVisible"
          />
        </div>

        <!-- Peek 按鍵 -->
        <button
          class="btn btn-warning mt-3 font-weight-bold"
          id="peek"
          v-show="mode === 'memory'"
          @click.stop.prevent="toggleMemoryButtonVisibility"
        >
          <font-awesome-icon
            v-show="canPeekAtAnswers"
            :icon="['fas', 'eye-slash']"
            size="1x"
          />

          <font-awesome-icon
            v-show="!canPeekAtAnswers"
            :icon="['fas', 'eye']"
            size="1x"
          />
        </button>
      </div>
    </div>

    <!-- 動詞基本資料 -->
    <div class="row">
      <div class="text-center col-6 mx-auto">
        <h5>{{ verb.mood_english }} {{ verb.tense_english }}</h5>
      </div>
    </div>

    <!-- 動詞變化表格 -->
    <div class="row mt-3 mb-1">
      <table class="table mx-auto col-6 text-center shadow">
        <tbody @click.prevent.stop="markActiveInput">
          <tr class="border" v-for="(person, id) in persons" :key="id">
            <th scope="row" class="w-25 align-middle">
              {{ persons[id] | breakIntoLines }}
            </th>

            <!-- view mode -->
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[id] }}
            </td>

            <!-- memory mode -->
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ canPeekAtAnswers ? conjugations[id] : "&iquest; &quest;" }}
            </td>

            <!-- fill-in mode -->
            <td
              class="align-middle"
              v-show="mode === 'fill-in' && conjugations[id]"
            >
              <input type="text" v-model="inputs[id]" />
            </td>
            <td
              class="align-middle"
              v-show="mode === 'fill-in' && conjugations[id]"
            >
              <button
                class="btn btn-warning"
                data-id="0"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(id)"
                v-show="areInputsCorrect[id] === false"
              >
                {{
                  areAnswersVisible[id] ? conjugations[id] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 特殊字元輸入鍵盤 & 確認按鍵 -->
    <div class="row" v-show="mode === 'fill-in'">
      <div class="col-6 mx-auto" id="lower-display">
        <div
          id="stressed-letters"
          class="mr-2"
          @click.prevent.stop="typeCharacter"
        >
          <button class="btn btn-info font-weight-bold mr-2">á</button>
          <button class="btn btn-info font-weight-bold mr-2">é</button>
          <button class="btn btn-info font-weight-bold mr-2">í</button>
          <button class="btn btn-info font-weight-bold mr-2">ó</button>
          <button class="btn btn-info font-weight-bold mr-2">ú</button>
          <button class="btn btn-info font-weight-bold mr-2">ü</button>
          <button class="btn btn-info font-weight-bold">ñ</button>
        </div>

        <div id="check">
          <button
            class="btn btn-warning font-weight-bold"
            @click.stop.prevent="checkInputs"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ParticipleTag from "./ParticipleTag.vue";

export default {
  name: "conjugation-table",
  components: {
    ParticipleTag,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
    // [{...}]
    selectedConjugations: {
      type: Array,
    },
  },
  data() {
    return {
      persons: [
        "yo",
        "tú",
        "él ella usted",
        "nosotros",
        "vosotros",
        "ellos ellas ustedes",
      ],
      conjugations: [],
      inputs: Array(6).fill(""),
      areInputsCorrect: Array(6).fill(undefined),
      canPeekAtAnswers: false,
      areAnswersVisible: Array(6).fill(false),
      isParticipleTagVisible: false,
    };
  },
  filters: {
    capitalize(text) {
      return text.toUpperCase();
    },
    // 搭配 white-space: pre-wrap
    breakIntoLines(text) {
      if (!text.includes(" ")) return text;

      const words = text.split(" ");

      const brokenText = words.reduce((base, word, index) => {
        if (index === words.length - 1) return base + word;
        return base + word + "\n";
      }, ``);

      return brokenText;
    },
  },
  created() {
    this.getVerb();
  },
  methods: {
    getVerb() {
      const { mood_english, tense_english } = this.verb;

      console.log("this.verb.allConjugations", this.verb.allConjugations);
      const conjugationGroup = this.verb.allConjugations.filter(
        (conjugation) =>
          conjugation.mood_english === mood_english &&
          conjugation.tense_english === tense_english
      )[0];

      // console.log("conjugations in ConjugationTable", conjugationGroup);

      const { form_1s, form_2s, form_3s, form_1p, form_2p, form_3p } =
        conjugationGroup;

      this.conjugations = [
        form_1s,
        form_2s,
        form_3s,
        form_1p,
        form_2p,
        form_3p,
      ];
    },
    toggleMemoryButtonVisibility() {
      this.canPeekAtAnswers = !this.canPeekAtAnswers;
    },
    toggleAnswerVisibilityByIndex(index) {
      // 動詞變化答案按鍵各自獨立，不會一起打開
      const visibility = !this.areAnswersVisible[index];
      this.areAnswersVisible.splice(index, 1, visibility);
    },
    toggleParticipleTagVisibility(event) {
      if (event.type === "mouseover") {
        console.log({ type: event.type });
        this.isParticipleTagVisible = true;
      }

      if (event.type === "mouseout") {
        console.log({ type: event.type });
        this.isParticipleTagVisible = false;
      }
    },
    markActiveInput(event) {
      const currentInput = event.target;
      const inputs = document.querySelectorAll("td > input");

      // 清除所有 input 的 activeInput class
      inputs.forEach((input) => {
        if (input.classList.contains("activeInput"))
          input.classList.remove("activeInput");
      });

      // 把按到的 input 加上 activeInput class
      if (currentInput.tagName === "INPUT") {
        currentInput.classList.add("activeInput");
      }
    },
    typeCharacter(event) {
      const target = event.target;
      const character = target.innerText;
      const activeInput = document.querySelector(".activeInput");

      // td > input 避免選到最上方的搜尋 input 元素
      const inputs = document.querySelectorAll("td > input");
      const activeInputId = [...inputs].findIndex(
        (input) => input === activeInput
      );

      // 將字母加到輸入框中 + focus 輸入框
      if (target.tagName === "BUTTON" && activeInput) {
        const updatedInputs = [...this.inputs];

        activeInput.value = activeInput.value + character;
        updatedInputs[activeInputId] = activeInput.value;
        this.inputs = [...updatedInputs];

        activeInput.focus();
      }
    },
    checkInputs() {
      // 強制將輸入文字轉為小寫 + 去除兩旁空格
      this.inputs = this.inputs.map((input) =>
        input ? input.trim().toLowerCase() : ""
      );

      // 比對結果 + 計算正確答案數量
      this.areInputsCorrect = this.areInputsCorrect.map(
        (result, i) => this.inputs[i] === this.conjugations[i]
      );
    },
  },
  watch: {
    mode: function (newMode) {
      if (newMode === "memory") this.canPeekAtAnswers = false;
    },
    // 關注 vuex 中的 verb 物件是否改變 (處理 IrregularInfinitiveList 所選的特殊動詞)
    verb: function (newVerb) {
      const { allConjugations, tense_english, mood_english } = newVerb;

      const conjugations = allConjugations.filter(
        (conjugations) =>
          conjugations.tense_english === tense_english &&
          conjugations.mood_english === mood_english
      );

      this.conjugations = [
        conjugations[0].form_1s,
        conjugations[0].form_2s,
        conjugations[0].form_3s,
        conjugations[0].form_1p,
        conjugations[0].form_2p,
        conjugations[0].form_3p,
      ];
    },
    // 處理 TenseMenu 傳入的動態變化
    selectedConjugations: function (newSelectedConjugations) {
      // 選取新的動詞變化，重設每個人稱的動詞變化
      this.conjugations = [
        newSelectedConjugations[0].form_1s,
        newSelectedConjugations[0].form_2s,
        newSelectedConjugations[0].form_3s,
        newSelectedConjugations[0].form_1p,
        newSelectedConjugations[0].form_2p,
        newSelectedConjugations[0].form_3p,
      ];

      // 清除之前輸入內容、清除答案比對結果、隱藏答案提示按鍵
      this.inputs = Array(6).fill("");
      this.areInputsCorrect = Array(6).fill(undefined);
      this.areAnswersVisible = Array(6).fill(false);
    },
  },
  computed: {
    ...mapState({
      verb: (state) => {
        console.log("computed verb from CT");
        return state.verb;
      },
      infinitives: (state) => state.infinitives,
    }),
  },
};
</script>

<style scoped>
#conjugation-table {
  min-width: 400px;
}

#upper-display,
#lower-display,
table {
  max-width: 400px;
  min-width: 300px;
}

#peek {
  position: absolute;
  right: 0%;
  top: 0%;
}

#stressed-letters {
  position: absolute;
  left: 0%;
  margin-bottom: 15px;
}

#check {
  position: absolute;
  right: 0%;
}

#lower-display {
  margin-bottom: 60px;
}

#participle-tag {
  left: 200px;
  z-index: 50;
  background-color: yellow;
}

.activeInput {
  font-weight: bold;
}

.blurry-table {
  filter: blur(5px);
}

th {
  white-space: pre-wrap;
}
</style>