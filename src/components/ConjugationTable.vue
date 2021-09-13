<template>
  <div class="card-frame w-75">
    <div
      ref="cardFront"
      class="card-front"
      @mouseenter.prevent.stop="getCardFrontSize"
    >
      <div class="card border border-warning w-100">
        <!-- 動詞名稱 + 時態名稱 -->
        <div
          class="
            card-header
            d-flex
            flex-row
            justify-content-between
            align-items-center
            py-2
          "
        >
          <span
            class="h2 font-weight-bold align-middle font-italic mr-3 py-0 my-0"
          >
            {{ verb.infinitive | capitalize }}
          </span>
          <span class="h4 align-middle font-italic mr-1 py-0 my-0">
            {{ verb.mood_english }} {{ verb.tense_english }}
          </span>

          <div>
            <a
              href=""
              class="mr-3 align-middle"
              title="Flip the card to hide the content"
              v-if="configs.useMode === 'memory'"
              @click.prevent.stop="addCardFlippingEffect"
            >
              <font-awesome-icon :icon="['fas', 'eye-slash']" size="2x" />
            </a>
            <a
              href=""
              data-toggle="modal"
              data-target="#verbInfoDialog"
              title="Check verb definition and more"
              class="align-middle"
            >
              <font-awesome-icon :icon="['fas', 'info']" size="2x" />
            </a>
          </div>
        </div>

        <!-- 動詞變化卡片 -->
        <div class="card-body px-0 py-0">
          <table
            class="table table-striped table-borderless my-0"
            @input.prevent.stop="markActiveInput"
          >
            <tbody class="container-fluid">
              <tr v-for="(person, id) in persons" :key="id">
                <th scope="row" class="col-4 text-left align-middle">
                  {{ person }}
                </th>

                <!-- view 和 memory 模式 -->
                <td
                  v-if="configs.useMode !== 'fill-in'"
                  class="col-6 h5 align-middle"
                >
                  {{ conjugations[id] }}
                </td>

                <!-- fill-in 模式 -->
                <td v-else class="col-6 py-0 align-middle">
                  <input
                    type="text"
                    class="form-control table-input"
                    :data-id="id"
                    v-model="inputs[id]"
                  />
                </td>

                <!-- fill-in 模式的答對/答錯提示 -->
                <td
                  v-if="configs.useMode === 'fill-in'"
                  class="col-2 d-flex justify-content-center align-items-center"
                >
                  <!-- 答案正確 -->

                  <span
                    class="
                      position-absolute
                      float-right
                      badge badge-warning
                      align-middle
                      p-2
                      ml-5
                      mt-4
                      d-flex
                      flex-row
                      justify-content-center
                    "
                    title="Correct!"
                    v-if="areInputsCorrect[id] === true"
                  >
                    <font-awesome-icon :icon="['fas', 'check']" size="2x" />
                  </span>

                  <!-- 答案錯誤 -->
                  <span
                    class="
                      position-absolute
                      float-right
                      badge badge-warning
                      align-middle
                      d-flex
                      p-2
                      ml-5
                      mt-4
                      flex-row
                      justify-content-center
                    "
                    :title="`Answer: ${conjugations[id]}`"
                    v-if="areInputsCorrect[id] === false"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'exclamation']"
                      flip="both"
                      size="2x"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'exclamation']"
                      size="2x"
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- 特殊字元鍵盤 -->
          <div
            class="card-footer d-flex flex-row justify-content-between"
            v-if="configs.useMode === 'fill-in'"
          >
            <div
              class="d-flex flex-row"
              @click.stop.prevent="inputSpecialCharacter"
            >
              <button
                class="btn btn-primary mr-1 special-character"
                v-for="(character, id) in specialCharacters"
                :key="id"
                :value="character"
              >
                {{ character }}
              </button>
            </div>

            <button class="btn btn-primary" @click.stop.prevent="checkInputs">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 卡片背面 -->
    <div
      ref="cardBack"
      class="card-back"
      :style="cardBackImgStyle"
      title="Flip the card to show the content"
      @click.prevent.stop="removeCardFlippingEffect"
    >
      <font-awesome-icon id="open-icon" :icon="['fas', 'eye']" size="2x" />
      <img
        src="../assets/rotiv-artic-g_wXjMR2n8M-unsplash.jpg"
        :style="cardBackImgStyle"
        class="rounded-lg"
        alt=""
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
        "yo",
        "tú",
        "él/ella/usted",
        "nosotros",
        "vosotros",
        "ellos/ellas/ustedes",
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
  filters: {
    capitalize(text) {
      return text.toUpperCase();
    },
  },
  created() {
    console.log("[created] ConjugationTable");
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
    getCardFrontSize() {
      // 用 clientwidth clientheight 試試看?
      const cardFront = document.querySelector(".card-front");
      const { scrollHeight, scrollWidth } = cardFront;

      this.cardBackImgStyle = {
        ...this.cardBackImgStyle,
        height: scrollHeight + "px",
        width: scrollWidth + "px",
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
        console.log("computed verb from CT");
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
  position: absolute;
  top: -350%;
  left: 12.5%;
  width: 75%;
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition-duration: 700ms;
}

.card-front {
  transform: none;
}

.card-back {
  top: 0%;
  left: 0%;
  overflow: hidden;
  border: 1px dotted var(--spanish-yellow);
  border-radius: 5px;
  cursor: pointer;
  transform: rotateY(180deg);
}

.card-back:hover #open-icon {
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

.card-back:not(:hover) #open-icon {
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

.card-header {
  background-color: var(--spanish-yellow);
}

svg {
  color: var(--spanish-red);
}

.active {
  color: blue;
  font-weight: bold;
}
</style>