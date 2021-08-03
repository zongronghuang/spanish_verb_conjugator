<template>
  <div
    id="search-area"
    class="w-25 d-flex align-items-around position-relative"
    @keyup.enter="isInputValid() && getConjugationsByVerb()"
  >
    <!-- 錯誤訊息 -->
    <div
      class="alert alert-warning w-100 mt-1 mx-auto rounded-lg shadow"
      role="alert"
      id="alert"
      v-show="alert"
    >
      <span class="text-start">{{ alert }}</span>
      <span
        class="float-right font-weight-bold mr-2"
        id="cross"
        @click.stop.prevent="collapseAlert"
      >
        <font-awesome-icon :icon="['fas', 'window-close']" size="1x" />
      </span>
    </div>

    <!-- 搜尋欄 -->
    <div class="input-group" id="search-bar">
      <input
        type="text"
        class="form-control shadow font-weight-bold"
        placeholder="Infinitive (-ar, -er, -ir, -se)"
        aria-label="Feed an infinitive Spanish verb"
        aria-describedby="button-addon2"
        v-model.trim="input"
      />

      <!-- 虛擬鍵盤呼叫和搜尋鍵 -->
      <div class="input-group-append shadow">
        <button
          class="btn btn-info btn-outline-light"
          @click.stop.prevent="toggleKeyboard"
        >
          <font-awesome-icon :icon="['fas', 'keyboard']" size="1x" />
        </button>

        <button
          class="btn btn-primary btn-outline-light"
          type="button"
          id="button-addon2"
          @click.prevent.stop="isInputValid() && getConjugationsByVerb()"
        >
          <font-awesome-icon :icon="['fas', 'search']" size="1x" />
        </button>
      </div>
    </div>

    <!-- 輸入輔助鍵 -->
    <div
      class="
        w-25
        mt-1
        py-2
        d-flex
        justify-content-around
        bg-primary
        rounded-lg
        shadow
      "
      id="keyboard"
      v-if="keyboard"
      @click.stop.prevent="inputSpecialCharacter"
    >
      <button class="btn btn-info font-weight-bold">á</button>
      <button class="btn btn-info font-weight-bold">é</button>
      <button class="btn btn-info font-weight-bold">í</button>
      <button class="btn btn-info font-weight-bold">ó</button>
      <button class="btn btn-info font-weight-bold">ú</button>
      <button class="btn btn-info font-weight-bold">ü</button>
      <button class="btn btn-info font-weight-bold">ñ</button>
    </div>
  </div>
</template>

<style scoped>
#search-area,
#alert,
#keyboard {
  max-width: 450px;
  min-width: 350px;
}

#keyboard {
  position: absolute;
  top: 100%;
  z-index: 10;
}

#alert {
  position: absolute;
  top: 110%;
  z-index: 20;
}

#search-bar {
  position: absolute;
  bottom: 0px;
}

#cross:hover {
  cursor: pointer;
}

input::placeholder {
  color: gray;
  opacity: 70%;
}
</style>

<script>
import datasetAPIs from "../apis/dataset.js";
import { mapState } from "vuex";

export default {
  name: "search-bar",
  data() {
    return {
      input: "",
      alert: "",
      keyboard: false,
    };
  },
  methods: {
    isInputValid() {
      const input = this.input.toLowerCase();
      this.alert = "";

      // 不可為空字串
      if (!input) {
        this.alert = "The input cannot be blank";
        return false;
      }

      // 只接受西班牙文字母 (不可有數字、特殊符號或空白)
      const regex = /[^a-záéíóúüñ]/;
      if (input.search(regex) !== -1) {
        this.alert = "You can only enter Spanish characters";
        return false;
      }

      // 非原形動詞結尾非 -ar, -er, -ir
      const ending = input.substring(input.length - 2);
      if (
        ending !== "ar" &&
        ending !== "er" &&
        ending !== "ir" &&
        ending !== "ír" &&
        ending !== "se"
      ) {
        this.alert = "Enter an infinitive verb";
        return false;
      }

      return true;
    },
    getConjugationsByVerb() {
      const infinitive = this.input.toLowerCase();

      // 動詞存在 => 將動詞的所有變化和 metadata 放到 vuex
      // conjugations [{...}, {...}, ...]
      const conjugations = datasetAPIs.getAllConjugationsByVerb(
        infinitive,
        this.infinitives
      );

      if (conjugations.length > 0) {
        this.$store.commit("setVerb", conjugations);
        localStorage.setItem("verb_conjugations", JSON.stringify(conjugations));
      } else {
        this.alert = "Oops, it's not in the database";
        return;
      }

      // 轉址到 conjugation card 頁面
      this.$router.push(`/spanish-conjugator/${infinitive}`);
    },
    collapseAlert() {
      this.alert = "";
    },
    toggleKeyboard() {
      this.keyboard = !this.keyboard;
    },
    // 待簡化
    inputSpecialCharacter(event) {
      const target = event.target;
      const character = target.innerText;
      const inputField = document.querySelector("input");

      // 將字母加到輸入框中 + focus 輸入框
      if (target.tagName === "BUTTON") {
        inputField.value = inputField.value + character;
        this.input = inputField.value;
        inputField.focus();
      }
    },
  },
  computed: {
    ...mapState(["infinitives"]),
  },
};
</script>