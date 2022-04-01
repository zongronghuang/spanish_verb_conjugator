<template>
  <div class="card-frame">
    <div
      ref="cardFront"
      class="card-front d-flex align-items-center justify-content-center"
      @mouseenter.prevent.stop="getCardSize"
    >
      <div class="card">
        <!-- 動詞名稱 + 時態名稱 -->
        <div
          class="
            card-header
            d-flex
            justify-content-between
            align-items-center
            p-1
          "
        >
          <button
            id="verb-name"
            class="verb-name align-middle mr-2"
            data-toggle="modal"
            data-target="#verbInfoDialog"
            title="Check verb definition and more"
          >
            {{ verb.infinitive }}
          </button>

          <span id="mood-tense" class="mood-tense align-middle mx-1 py-0 small text-center">
            {{ verb.mood_english }} {{ verb.tense_english }}
          </span>

          <div class="d-flex h-100">
            <button
              id="flip-icon"
              class="flip-icon align-middle py-1 rounded-lg"
              title="Flip the card to hide the content"
              v-if="configs.useMode === 'memory'"
              @click.prevent.stop="addCardFlippingEffect"
            >
              <font-awesome-icon :icon="['fas', 'eye-slash']" size="1x" :style="{ color: 'white' }" />
            </button>
          </div>
        </div>

        <!-- 動詞變化卡片 -->
        <div class="card-body px-0 py-0">
          <table
            class="table table-striped table-borderless my-0"
            @input.prevent.stop="markActiveInput"
            @click.prevent.stop="markActiveInput"
          >
            <tbody class="container-fluid">
              <tr v-for="(person, id) in persons" :key="id">
                <th
                  scope="row"
                  class="col-4 align-middle my-0 py-0 small text-left"
                >
                  {{ person }}
                </th>

                <!-- view 和 memory 模式 -->
                <td
                  v-if="configs.useMode !== 'fill-in'"
                  class="col-6 align-middle  mx-0 py-1"
                >
                  {{ conjugations[id] }}
                </td>

                <!-- fill-in 模式 -->
                <td v-else class="col-7 align-middle py-0">
                  <input
                    type="text"
                    class="form-control table-input my-1"
                    :data-id="id"
                    v-model="inputs[id]"
                  />
                </td>

                <!-- fill-in 模式的答對/答錯提示 -->
                <td
                  v-if="configs.useMode === 'fill-in'"
                  class="col-1 align-middle py-0"
                >
                  <!-- 答案正確 -->

                  <span
                    class="
                      badge badge-warning
                      d-flex
                      justify-content-center
                      align-middle
                      ml-2
                      p-2
                    "
                    title="Correct!"
                    v-if="areInputsCorrect[id] === true"
                  >
                    <font-awesome-icon :icon="['fas', 'check']" size="1x" />
                  </span>

                  <!-- 答案錯誤 -->
                  <span
                    class="
                      badge badge-warning
                      d-flex
                      justify-content-center
                      align-middle
                      ml-2
                      p-2
                    "
                    :title="`Answer: ${conjugations[id]}`"
                    v-if="areInputsCorrect[id] === false"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'exclamation']"
                      flip="both"
                      size="1x"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'exclamation']"
                      size="1x"
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- 特殊字元鍵盤 -->
          <div
            class="card-footer d-flex flex-row justify-content-between px-2"
            v-if="configs.useMode === 'fill-in'"
          >
            <div
              class="d-flex flex-row flex-wrap"
              @click.stop.prevent="inputSpecialCharacter"
            >
              <button
                class="special-character btn btn-primary mr-1 mt-1"
                v-for="(character, id) in specialCharacters"
                :key="id"
                :value="character"
              >
                {{ character }}
              </button>
            </div>

            <button class="btn btn-info mt-1" @click.stop.prevent="checkInputs">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 卡片背面 -->
    <div
      ref="cardBack"
      class="card-back d-flex align-items-center justify-content-center"
      :style="cardBackImgStyle"
      title="Flip the card to show the content"
      @click.prevent.stop="removeCardFlippingEffect"
    >
      <font-awesome-icon class="open-icon" :icon="['fas', 'eye']" size="2x" />
      <img
        src="../assets/rotiv-artic-g_wXjMR2n8M-unsplash.jpg"
        :style="cardBackImgStyle"
        class="rounded-lg"
        alt="Spanish flag"
      />

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "conjugation-table",
  components: {},
  props: {
    // [{...}]
    selectedConjugations: {
      type: Array,
    },
  },
  data() {
    return {
      persons: [
        "Yo",
        "Tú",
        "Él · Ella · Usted",
        "Nosotros",
        "Vosotros",
        "Ellos · Ellas · Ustedes",
      ],
      specialCharacters: ["á", "é", "í", "ó", "ú", "ü", "ñ"],
      conjugations: [],
      inputs: Array(6).fill(""),
      areInputsCorrect: Array(6).fill(undefined),
      cardBackImgStyle: {
        width: "",
        height: "",
      },
    };
  },
  created() {
    console.log("[created] ConjugationTable");
    this.getVerb();
  },
  methods: {
    getVerb() {
      const { mood_english, tense_english } = this.verb;
      const conjugationGroup = this.verb.allConjugations.filter(
        (conjugation) =>
          conjugation.mood_english === mood_english &&
          conjugation.tense_english === tense_english
      )[0];

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
    markActiveInput(event) {
      if (!event.target.classList.contains("table-input")) return;

      const focusedInput = event.target;
      const tableInputs = document.querySelectorAll(".table-input");

      // 移除所有 tableInputs 的 active class
      tableInputs.forEach((input) => {
        if (input.classList.contains("active")) {
          input.classList.remove("active");
        }
      });

      // 有 focus 的 input 加上 active class
      focusedInput.classList.add("active");
    },
    inputSpecialCharacter(event) {
      if (!event.target.classList.contains("special-character")) return;

      const specialCharacter = event.target.value;

      // 找到目前正在填寫的 iput 並取出資料
      const activeInput = document.querySelector(".table-input.active");
      const {
        value,
        selectionStart: start,
        selectionEnd: end,
        dataset: { id: dataId },
      } = activeInput;

      // 如果 start 和 end 一樣，代表只移動滑鼠游標 => 直接插入特殊字元
      // 如果 start 和 end 不一樣，代表選取一段文字 => 文字區塊替換成特殊字
      const newValue =
        value.slice(0, start) + specialCharacter + value.slice(end);

      // 更新畫面上 input 欄位的值和元件 data
      activeInput.value = newValue;
      this.inputs[dataId] = newValue;
      this.inputs = [...this.inputs];

      // 重新設定游標插入點 (新輸入的字元位置)
      activeInput.setSelectionRange(start + 1, start + 1);
      activeInput.focus();
    },
    checkInputs() {
      // 強制將輸入文字轉為小寫 + 去除兩旁空格
      const userInputs = this.inputs.map((input) =>
        input ? input.trim().toLowerCase() : ""
      );

      // 比對結果 + 計算正確答案
      this.areInputsCorrect = this.areInputsCorrect.map(
        (result, index) => userInputs[index] === this.conjugations[index]
      );
    },
    getCardSize() {
      const card = document.querySelector(".card");
      const { scrollHeight, scrollWidth, offsetLeft, offsetTop } = card;

      this.cardBackImgStyle = {
        ...this.cardBackImgStyle,
        height: scrollHeight + "px",
        width: scrollWidth + "px",
        top: offsetTop + 'px',
        left: offsetLeft + 'px'
      };
    },
    addCardFlippingEffect() {
      this.$refs.cardFront.classList.add("flipping-card-front");
      this.$refs.cardBack.classList.add("flipping-card-back");
    },
    removeCardFlippingEffect() {
      this.$refs.cardFront.classList.remove("flipping-card-front");
      this.$refs.cardBack.classList.remove("flipping-card-back");
    },
  },
  watch: {
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
        console.log("computed verb from CT", state);
        return state.verb;
      },
      infinitives: (state) => state.infinitives,
      configs: (state) => state.configs,
    }),
  },
};
</script>

<style scoped>
/* >>> card flipping effect >>> */
.card-frame {
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0;
  transform-style: preserve-3d;
  font-size: calc(1em + 1.6vw);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition-duration: 700ms;
}

.card-back {
  top: 0%;
  left: 0%;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  transform: rotateY(180deg);
}

.card-back:hover .open-icon {
  visibility: visible;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25%;
  height: 25%;
  z-index: 5;
  color: rgba(100%, 100%, 100%, 0.5);
  transform: translate(-50%, -50%);
  transition-delay: 500ms;
}

.card-back:not(:hover) .open-icon {
  display: none;
}

.flipping-card-front {
  transform: rotateY(180deg);
}

.flipping-card-back {
  transform: none;
}

img {
  object-fit: cover;
  filter: saturate(150%);
}
/* <<< card flipping effect <<< */

.card,
.card-back {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.card {
  width: 100%;
}

.card-header {
  background-color: var(--spanish-yellow);
  letter-spacing: -0.05rem;
  color: #333;
}

svg {
  color: var(--spanish-red);
}

.verb-name {
  background-color: var(--spanish-red);
  color: white;
  padding: 2px 4px;
  border-radius: 5px;
  letter-spacing: -0.1rem;
}

th {
  letter-spacing: -0.05rem;
  color: #333;
}

td {
  letter-spacing: -0.05rem;
  word-spacing: 0.3rem;
  color: #333;
}

input {
  font-size: 1.2rem;
  color: #333;
}

.active {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--spanish-red);
}

.flip-icon {
 background-color: var(--spanish-red);
}
</style>