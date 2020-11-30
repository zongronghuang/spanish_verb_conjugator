<template>
  <div class="container pt-2">
    <div class="row mb-1">
      <div class="col-6 mx-auto position-relative" id="upper-display">
        <button class="btn btn-info mt-3 font-weight-bold" id="add-to-list">
          Add to list
        </button>

        <div class="d-flex flex-column text-center mb-3 mx-1">
          <h1>{{ "comer" | capitalize }}</h1>
          <span class="font-weight-bold h4 mt-2">to eat</span>
        </div>

        <div
          class="mt-3 h4 font-weight-bold"
          id="hits"
          v-show="chosenMode === '2'"
        >
          <span>{{ correctHits }}</span>
          <span>/</span>
          <span>6</span>
        </div>

        <button
          class="btn btn-warning mt-3 font-weight-bold"
          id="peek"
          v-show="chosenMode === '1'"
          @click.stop.prevent="peekToggle"
        >
          {{ displayText ? "Hide" : "Peek" }}
        </button>
      </div>
    </div>

    <div class="row">
      <div class="text-center col-6 mx-auto">
        <span class="h4 my-4">時態名稱</span>
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
              {{ conjugations[0] }}
            </td>

            <!-- mode 1 -->
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? conjugations[0] : "&iquest; &quest;" }}
            </td>

            <!-- mode 2 -->
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[0]" />
            </td>
            <td class="align-middle" v-if="chosenMode === '2'">
              <button
                class="btn btn-warning"
                data-id="0"
                @click.prevent.stop="hintToggle(0)"
                v-show="results[0] === false"
              >
                {{ displayHints[0] ? conjugations[0] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <!-- //////////////////////////////////////////////////////// -->
          <tr class="border">
            <th scope="row" class="w-25 align-middle">tú</th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ conjugations[1] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? conjugations[1] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[1]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="hintToggle(1)"
                v-show="results[1] === false"
              >
                {{ displayHints[1] ? conjugations[1] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              él <br />ella <br />usted
            </th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ conjugations[2] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? conjugations[2] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[2]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="hintToggle(2)"
                v-show="results[2] === false"
              >
                {{ displayHints[2] ? conjugations[2] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">nosotros</th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ conjugations[3] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? conjugations[3] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[3]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="hintToggle(3)"
                v-show="results[3] === false"
              >
                {{ displayHints[3] ? conjugations[3] : "&iexcl; &excl;" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">vosotros</th>
            <td class="align-middle h5" v-show="chosenMode === '0'">
              {{ conjugations[4] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? conjugations[4] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[4]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="hintToggle(4)"
                v-show="results[4] === false"
              >
                {{ displayHints[4] ? conjugations[4] : "&iexcl; &excl;" }}
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
              {{ conjugations[5] }}
            </td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? conjugations[5] : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" v-model="inputs[5]" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning"
                @click.prevent.stop="hintToggle(5)"
                v-show="results[5] === false"
              >
                {{ displayHints[5] ? conjugations[5] : "&iexcl; &excl;" }}
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
export default {
  name: "conjugation-table",
  props: {
    chosenMode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      conjugations: ["como", "comes", "come", "comemos", "coméis", "comen"],
      inputs: Array(6),
      results: Array(6),
      displayText: false,
      correctHits: 0,
      displayHints: Array(6).fill(false),
    };
  },
  filters: {
    capitalize(text) {
      return text.toUpperCase();
    },
  },
  methods: {
    peekToggle() {
      this.displayText = !this.displayText;
    },
    hintToggle(index) {
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

      // 將字母加到輸入框中 + focus 輸入框
      if (target.tagName === "BUTTON") {
        activeInput.value = activeInput.value + character;
        activeInput.focus();
      }
    },
    checkInputs() {
      // 人稱 * 單複數 = 6
      const numberOfConjugations = 6;

      // 之後要決定如何確認：length 數值 === 6 或每個 input 皆有值
      if (this.inputs.length < numberOfConjugations) {
        return alert("所有空格都要填入答案");
      }

      // 強制將輸入文字轉為小寫 + 去除兩旁空格
      this.inputs = this.inputs.map((input) => input.trim().toLowerCase());

      // 比對結果 + 計算正確答案數量
      this.results = [];
      this.correctHits = 0;
      for (let i = 0; i < numberOfConjugations; i++) {
        if (this.inputs[i] === this.conjugations[i]) {
          this.results.push(true);
          this.correctHits++;
        } else {
          this.results.push(false);
        }
      }
    },
  },
  watch: {
    chosenMode: function (newMode) {
      if (newMode === "1") this.displayText = false;
    },
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