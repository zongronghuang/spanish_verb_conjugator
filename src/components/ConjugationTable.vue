<template>
  <div class="container pt-2">
    <div class="row mb-1">
      <div class="col-6 mx-auto position-relative" id="upper-display">
        <div class="d-flex flex-column text-center mb-3 mx-1">
          <h1>{{ verb.infinitive | capitalize }}</h1>
          <span class="h4 mt-2">{{ verb.infinitive_english }}</span>
        </div>

        <button
          class="btn btn-warning mt-3 font-weight-bold"
          id="peek"
          v-show="mode === 'memory'"
          @click.stop.prevent="togglePeekButtonVisibility"
        >
          <!-- 顯示動詞變化按鍵 -->
          <font-awesome-icon
            v-show="isPeekButtonVisible"
            :icon="['fas', 'eye-slash']"
            size="1x"
          />

          <!-- 隱藏動詞變化按鍵 -->
          <font-awesome-icon
            v-show="!isPeekButtonVisible"
            :icon="['fas', 'eye']"
            size="1x"
          />
        </button>
      </div>
    </div>

    <div class="row">
      <div class="text-center col-6 mx-auto">
        <span class="h4 my-4"
          >{{ verb.mood_english }} {{ verb.tense_english }}</span
        >
      </div>
    </div>

    <div class="row mt-3 mb-1">
      <table class="table mx-auto col-6 text-center shadow">
        <tbody @click.prevent.stop="markAsActiveInput">
          <!-- //////////////////////////////////////////////////// -->
          <tr class="border">
            <th scope="row" class="w-25 align-middle">yo</th>

            <!-- view mode -->
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[0] }}
            </td>

            <!-- memory mode -->
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ isPeekButtonVisible ? conjugations[0] : "&iquest; &quest;" }}
            </td>

            <!-- fill-in mode -->
            <td
              class="align-middle"
              v-show="mode === 'fill-in' && conjugations[0]"
            >
              <input type="text" v-model="inputs[0]" />
            </td>
            <td
              class="align-middle"
              v-show="mode === 'fill-in' && conjugations[0]"
            >
              <button
                class="btn btn-warning"
                data-id="0"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(0)"
                v-show="areInputsCorrect[0] === false"
              >
                {{ areAnswersVisible[0] ? conjugations[0] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <!-- //////////////////////////////////////////////////////// -->
          <tr class="border">
            <th scope="row" class="w-25 align-middle">tú</th>
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[1] }}
            </td>
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ isPeekButtonVisible ? conjugations[1] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <input type="text" v-model="inputs[1]" />
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(1)"
                v-show="areInputsCorrect[1] === false"
              >
                {{ areAnswersVisible[1] ? conjugations[1] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              él <br />ella <br />usted
            </th>
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[2] }}
            </td>
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ isPeekButtonVisible ? conjugations[2] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <input type="text" v-model="inputs[2]" />
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(2)"
                v-show="areInputsCorrect[2] === false"
              >
                {{ areAnswersVisible[2] ? conjugations[2] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">nosotros</th>
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[3] }}
            </td>
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ isPeekButtonVisible ? conjugations[3] : "&iquest; &quest;" }}
            </td>
            <td
              class="align-middle"
              v-show="mode === 'fill-in' && conjugations[3]"
            >
              <input type="text" v-model="inputs[3]" />
            </td>
            <td
              class="align-middle"
              v-show="mode === 'fill-in' && conjugations[3]"
            >
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(3)"
                v-show="areInputsCorrect[3] === false"
              >
                {{ areAnswersVisible[3] ? conjugations[3] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">vosotros</th>
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[4] }}
            </td>
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ isPeekButtonVisible ? conjugations[4] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <input type="text" v-model="inputs[4]" />
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(4)"
                v-show="areInputsCorrect[4] === false"
              >
                {{ areAnswersVisible[4] ? conjugations[4] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              ellos <br />
              ellas <br />
              ustedes
            </th>
            <td class="align-middle h5" v-show="mode === 'view'">
              {{ conjugations[5] }}
            </td>
            <td class="align-middle h5" v-show="mode === 'memory'">
              {{ isPeekButtonVisible ? conjugations[5] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <input type="text" v-model="inputs[5]" />
            </td>
            <td class="align-middle" v-show="mode === 'fill-in'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleAnswerVisibilityByIndex(5)"
                v-show="areInputsCorrect[5] === false"
              >
                {{ areAnswersVisible[5] ? conjugations[5] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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

export default {
  name: "conjugation-table",
  props: {
    mode: {
      type: String,
      required: true,
    },
    // [{...}]
    // [TODO] 改名字，這是指從 tenseCategory 選出的時態，然後傳出來的動詞變化
    selectedConjugations: {
      type: Array,
    },
  },
  data() {
    return {
      conjugations: [],
      inputs: Array(6).fill(""),
      areInputsCorrect: Array(6).fill(undefined),
      isPeekButtonVisible: false,
      areAnswersVisible: Array(6).fill(false),
    };
  },
  filters: {
    capitalize(text) {
      return text.toUpperCase();
    },
  },
  created() {
    this.getVerb();
  },
  methods: {
    getVerb() {
      const { mood_english, tense_english } = this.verb;

      // console.log("this.verb.allConjugations", this.verb.allConjugations);
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
    togglePeekButtonVisibility() {
      this.isPeekButtonVisible = !this.isPeekButtonVisible;
    },
    toggleAnswerVisibilityByIndex(index) {
      // 動詞變化答案按鍵各自獨立，不會一起打開
      const visibility = !this.areAnswersVisible[index];
      this.areAnswersVisible.splice(index, 1, visibility);
    },
    markAsActiveInput(event) {
      const currentInput = event.target;
      const inputs = document.querySelectorAll("input");

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
      const inputs = document.querySelectorAll("input");
      const activeInputId = [...inputs].findIndex(
        (input) => input === activeInput
      );

      // 將字母加到輸入框中 + focus 輸入框
      if (target.tagName === "BUTTON" && activeInput) {
        const updatedInputs = [...this.inputs];

        activeInput.value = activeInput.value + character;
        updatedInputs[activeInputId] = activeInput.value;
        this.inputs = [];
        updatedInputs.forEach((update) => this.inputs.push(update));

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
      if (newMode === "memory") this.isPeekButtonVisible = false;
    },
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
      verb: (state) => state.verb,
      verbAlias: "verb",
    }),
  },
};
</script>

<style scoped>
#upper-display,
#lower-display,
table {
  min-width: 400px;
}

#peek {
  position: absolute;
  right: 0%;
  top: 0%;
}

#add-to-list {
  position: absolute;
  left: 0%;
  top: -5%;
}

#hits {
  position: absolute;
  top: 0%;
  right: 0%;
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

#xxx {
  filter: blur(5px);
}

.activeInput {
  font-weight: bold;
}
</style>