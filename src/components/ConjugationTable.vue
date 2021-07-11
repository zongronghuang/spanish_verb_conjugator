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
          v-show="chosenMode === '1'"
          @click.stop.prevent="togglePeekStatus"
        >
          {{ displayToggle ? "Hide" : "Peek" }}

          <!-- 
            hide: <i class="fas fa-eye-slash"></i>
            peek: <i class="fas fa-eye"></i>
           -->
        </button>
      </div>
    </div>

    <!-- <div class="row mb-4">
      <div class="text-center col-6 mx-auto h5 font-weight-bold text-primary">
        <span class="float-left">Gerund: {{ verb.gerund }} </span>
        <span class="float-right">Participle: {{ verb.pastParticiple }}</span>
      </div>
    </div> -->

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

            <!-- mode 0 -->
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ verbData.conjugations[0] }}
            </td>

            <!-- mode 1 -->
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{
                displayToggle ? verbData.conjugations[0] : "&iquest; &quest;"
              }}
            </td>

            <!-- mode 2 -->
            <td
              class="align-middle"
              v-show="chosenMode === '2' && verbData.conjugations[0]"
            >
              <input type="text" v-model="inputs[0]" />
            </td>
            <td
              class="align-middle"
              v-show="chosenMode === '2' && verbData.conjugations[0]"
            >
              <button
                class="btn btn-warning"
                data-id="0"
                @click.prevent.stop="toggleHintStatus(0)"
                v-show="results[0] === false"
              >
                {{
                  displayHints[0] ? verbData.conjugations[0] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
          <!-- //////////////////////////////////////////////////////// -->
          <tr class="border">
            <th scope="row" class="w-25 align-middle">tú</th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ verbData.conjugations[1] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{
                displayToggle ? verbData.conjugations[1] : "&iquest; &quest;"
              }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[1]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleHintStatus(1)"
                v-show="results[1] === false"
              >
                {{
                  displayHints[1] ? verbData.conjugations[1] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              él <br />ella <br />usted
            </th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ verbData.conjugations[2] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{
                displayToggle ? verbData.conjugations[2] : "&iquest; &quest;"
              }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[2]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleHintStatus(2)"
                v-show="results[2] === false"
              >
                {{
                  displayHints[2] ? verbData.conjugations[2] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">nosotros</th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ verbData.conjugations[3] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{
                displayToggle ? verbData.conjugations[3] : "&iquest; &quest;"
              }}
            </td>
            <td
              class="align-middle"
              v-show="chosenMode === '2' && verbData.conjugations[3]"
            >
              <input type="text" v-model="inputs[3]" />
            </td>
            <td
              class="align-middle"
              v-show="chosenMode === '2' && verbData.conjugations[3]"
            >
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleHintStatus(3)"
                v-show="results[3] === false"
              >
                {{
                  displayHints[3] ? verbData.conjugations[3] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">vosotros</th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ verbData.conjugations[4] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{
                displayToggle ? verbData.conjugations[4] : "&iquest; &quest;"
              }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[4]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleHintStatus(4)"
                v-show="results[4] === false"
              >
                {{
                  displayHints[4] ? verbData.conjugations[4] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              ellos <br />
              ellas <br />
              ustedes
            </th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ verbData.conjugations[5] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{
                displayToggle ? verbData.conjugations[5] : "&iquest; &quest;"
              }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[5]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="toggleHintStatus(5)"
                v-show="results[5] === false"
              >
                {{
                  displayHints[5] ? verbData.conjugations[5] : "&iexcl; &excl;"
                }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row" v-show="chosenMode === '2'">
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
    chosenMode: {
      type: String,
      required: true,
    },
    conjugationSet: {
      type: Array,
    },
  },
  data() {
    return {
      verbData: {
        infinitive: "",
        infinitive_english: "",
        mood: "",
        mood_english: "",
        tense: "",
        tense_english: "",
        conjugations: [],
      },
      inputs: Array(6),
      results: Array(6),
      displayToggle: false,
      displayHints: Array(6).fill(false),
    };
  },
  filters: {
    capitalize(text) {
      return text.toUpperCase();
    },
  },
  created() {
    // const savedVerbConjugations = JSON.parse(
    //   localStorage.getItem("verb_conjugations")
    // );
    // console.log("saved verb conjugations", savedVerbConjugations);

    // if (!this.verb.infinitive && savedVerbConjugations) {
    //   this.$store.commit("setVerb", [...savedVerbConjugations]);
    // }

    this.getVerb();
  },
  methods: {
    getVerb() {
      const {
        infinitive,
        infinitive_english,
        mood,
        mood_english,
        tense,
        tense_english,
      } = this.verb;

      const conjugationSet = this.verb.allConjugations.filter(
        (conjugation) =>
          conjugation.mood_english === mood_english &&
          conjugation.tense_english === tense_english
      )[0];

      let conjugations = [];

      if (mood_english.split(" ")[0] === "Imperative") {
        conjugations = [
          "",
          conjugationSet.form_2s,
          conjugationSet.form_3s,
          "",
          conjugationSet.form_2p,
          conjugationSet.form_3p,
        ];
      } else {
        conjugations = [
          conjugationSet.form_1s,
          conjugationSet.form_2s,
          conjugationSet.form_3s,
          conjugationSet.form_1p,
          conjugationSet.form_2p,
          conjugationSet.form_3p,
        ];
      }

      this.verbData = {
        infinitive,
        infinitive_english,
        mood,
        mood_english,
        tense,
        tense_english,
        conjugations,
      };
    },
    togglePeekStatus() {
      this.displayToggle = !this.displayToggle;
    },
    toggleHintStatus(index) {
      // 開關個別 tooltip
      const status = !this.displayHints[index];
      this.displayHints.splice(index, 1, status);
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
      // 人稱 * 單複數 = 6
      const numberOfConjugations = 6;

      // 強制將輸入文字轉為小寫 + 去除兩旁空格
      this.inputs = this.inputs.map((input) => {
        if (input) {
          return input.trim().toLowerCase();
        } else {
          return undefined;
        }
      });

      // 比對結果 + 計算正確答案數量
      this.results = [];
      for (let i = 0; i < numberOfConjugations; i++) {
        if (this.inputs[i] === this.verbData.conjugations[i]) {
          this.results.push(true);
        } else {
          this.results.push(false);
        }
      }
    },
  },
  watch: {
    chosenMode: function (newMode) {
      if (newMode === "1") this.displayToggle = false;
    },
    conjugationSet: function (newConjugations) {
      if (newConjugations.length > 0) {
        this.verbData.conjugations = [
          newConjugations[0].form_1s,
          newConjugations[0].form_2s,
          newConjugations[0].form_3s,
          newConjugations[0].form_1p,
          newConjugations[0].form_2p,
          newConjugations[0].form_3p,
        ];
      }
    },
    verbData: {
      handler: function (newValues) {
        if (newValues) {
          this.inputs = Array(6);
          this.results = Array(6);
          this.displayHints = Array(6).fill(false);
        }
      },
      deep: true,
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