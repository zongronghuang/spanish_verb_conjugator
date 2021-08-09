<template>
  <div class="px-0 mx-0 py-0 mb-0" id="conjugation-table">
    <div class="w-100 row">
      <div class="col-10 mx-auto position-relative" id="upper-display">
        <div
          class="d-flex flex-row justify-content-start text-start mb-1"
          id="infinitive-profile"
          @mouseenter.prevent.stop="toggleMoreInfoTagVisibility"
          @mouseleave.prevent.stop="toggleMoreInfoTagVisibility"
        >
          <span class="h3 w-25 font-weight-bold">{{
            verb.infinitive | capitalize
          }}</span>
          <span
            class="
              w-75
              ml-3
              text-center
              font-weight-bold font-italic
              py-1
              mb-0
              h4
              align-middle
            "
            >{{ verb.mood_english }} {{ verb.tense_english }}</span
          >
        </div>

        <PeekButton
          :canPeekAtAnswers="canPeekAtAnswers"
          v-if="mode === 'memory'"
          @update-can-peek-at-answers="updateCanPeekAtAnswers"
        />
      </div>
    </div>

    <MoreInfoTag
      v-if="isMoreInfoTagVisible"
      :gerund="verb.gerund"
      :pastParticiple="verb.pastParticiple"
      :definition="verb.infinitive_english"
    />

    <!-- 動詞變化表格 -->
    <div class="w-100 mx-auto py-0">
      <table class="w-100 col-10 table mb-1 mx-auto shadow">
        <tbody class="py-0 my-0" @click.prevent.stop="markActiveInput">
          <tr
            class="border py-0 my-0"
            v-for="(person, id) in persons"
            :key="id"
          >
            <th scope="row" class="w-25 align-middle py-0 my-0">
              {{ persons[id] }}
            </th>

            <!-- view mode -->
            <td
              class="align-middle h5 pl-5 border-left text-center"
              v-if="mode === 'view'"
            >
              {{ conjugations[id] }}
            </td>

            <!-- memory mode -->
            <td
              class="align-middle h5 pl-5 border-left text-center"
              v-if="mode === 'memory' && canPeekAtAnswers === true"
            >
              {{ conjugations[id] }}
            </td>

            <td
              class="
                align-middle
                h5
                bg-info
                border-left
                mb-0
                d-flex
                flex-row
                justify-content-center
              "
              v-if="mode === 'memory' && canPeekAtAnswers === false"
            >
              <font-awesome-icon
                :icon="['fas', 'question']"
                flip="both"
                size="1x"
                class="my-0 py-0"
              />
              <font-awesome-icon
                :icon="['fas', 'question']"
                size="1x"
                class="my-0 py-0"
              />
            </td>

            <!-- fill-in mode -->
            <td
              class="align-middle w-50 px-1 py-0 border-left"
              v-if="mode === 'fill-in' && conjugations[id]"
            >
              <input
                type="text"
                v-model="inputs[id]"
                class="my-0 px-0 w-100 mx-auto"
              />
            </td>

            <td
              class="
                border-0
                mx-1
                px-0
                d-flex
                justify-content-center
                align-items-center
              "
              v-if="mode === 'fill-in' && conjugations[id]"
            >
              <!-- 答案正確圖示 -->

              <span
                class="
                  badge badge-warning
                  align-middle
                  my-0
                  py-1
                  px-3
                  d-flex
                  flex-row
                "
                title="Correct!"
                v-if="areInputsCorrect[id] === true"
              >
                <font-awesome-icon :icon="['fas', 'check']" size="1x" />
              </span>

              <!-- 答案錯誤圖示 -->

              <span
                class="
                  badge badge-warning
                  my-0
                  py-1
                  px-3
                  d-flex
                  flex-row
                  align-middle
                "
                :title="`Answer: ${conjugations[id]}`"
                v-if="areInputsCorrect[id] === false"
              >
                <font-awesome-icon
                  :icon="['fas', 'exclamation']"
                  flip="both"
                  size="1x"
                /><font-awesome-icon :icon="['fas', 'exclamation']" size="1x" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 特殊字元輸入鍵盤 & 確認按鍵 -->
    <div
      class="
        mx-auto
        w-100
        col-10
        px-0
        py-0
        mt-2
        mb-0
        d-flex
        justify-content-between
        flex-row
      "
      v-if="mode === 'fill-in'"
    >
      <div
        class="d-flex flex-row flex-nowrap justify-content-start w-75"
        id="stressed-letters"
        @click.prevent.stop="inputSpecialCharacter"
      >
        <button class="btn btn-info border font-weight-bold border-light mr-1">
          á
        </button>
        <button class="btn btn-info border font-weight-bold border-light mr-1">
          é
        </button>
        <button class="btn btn-info border font-weight-bold border-light mr-1">
          í
        </button>
        <button class="btn btn-info border font-weight-bold border-light mr-1">
          ó
        </button>
        <button class="btn btn-info border font-weight-bold border-light mr-1">
          ú
        </button>
        <button class="btn btn-info border font-weight-bold border-light mr-1">
          ü
        </button>
        <button class="btn btn-info border font-weight-bold border-light">
          ñ
        </button>
      </div>

      <button
        class="
          btn btn-warning
          py-0
          ml-1
          mr-0
          border border-light
          font-weight-bold
        "
        @click.stop.prevent="checkInputs"
      >
        Check
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MoreInfoTag from "./subcomponents/MoreInfoTag.vue";
import PeekButton from "./subcomponents/PeekButton.vue";

export default {
  name: "conjugation-table",
  components: {
    MoreInfoTag,
    PeekButton,
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
        "él/ella/usted",
        "nosotros",
        "vosotros",
        "ellos/ellas/ustedes",
      ],
      conjugations: [],
      inputs: Array(6).fill(""),
      areInputsCorrect: Array(6).fill(undefined),
      canPeekAtAnswers: false,
      isMoreInfoTagVisible: false,
    };
  },
  filters: {
    capitalize(text) {
      return text.toUpperCase();
    },
    // 搭配 white-space: pre 置中
    breakIntoLines(text) {
      if (!text.includes(" ")) return text;

      const words = text.split(" ");

      const brokenText = words.reduce((base, word, index) => {
        if (index === words.length - 1) return base + word;
        return base + word + "\n ";
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
    updateCanPeekAtAnswers(isPeekable) {
      this.canPeekAtAnswers = isPeekable;
    },
    toggleMoreInfoTagVisibility(event) {
      if (event.type === "mouseenter") {
        this.isMoreInfoTagVisible = true;
      }

      if (event.type === "mouseleave") {
        this.isMoreInfoTagVisible = false;
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
    inputSpecialCharacter(event) {
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
        const value = activeInput.value;
        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;

        // 如果 start 和 end 一樣，代表只移動滑鼠游標 => 直接插入特殊字元
        // 如果 start 和 end 不一樣，代表選取一段文字 => 文字區塊替換成特殊字
        const newValue = value.slice(0, start) + character + value.slice(end);

        activeInput.value = newValue;

        this.inputs[activeInputId] = newValue;
        this.inputs = [...this.inputs];

        // 重新設定游標插入點 (新輸入的字元位置)
        activeInput.setSelectionRange(start + 1, start + 1);
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

      // 清除之前輸入內容、清除答案比對結果、隱藏答案提示按鍵
      this.inputs = Array(6).fill("");
      this.areInputsCorrect = Array(6).fill(undefined);
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
  width: 80%;
}

#upper-display {
  min-width: 300px;
}

#infinitive-profile {
  cursor: help;
}

.activeInput {
  font-weight: bold;
}

tr:nth-child(odd) {
  background-color: lightseagreen;
}

tr {
  line-height: 3rem;
}
</style>