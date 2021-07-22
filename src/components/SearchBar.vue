<template>
  <div
    id="search-area"
    class="d-flex align-items-around position-relative"
    @keyup.enter="isInputValid() && getConjugationsByVerb()"
  >
    <!-- 錯誤訊息 -->
    <div
      class="alert alert-warning w-25 text-center mx-auto rounded-pill shadow"
      role="alert"
      id="alert"
      v-show="alert"
    >
      <span>{{ alert }}</span>
      <span
        class="float-right font-weight-bold mr-2"
        id="cross"
        @click.stop.prevent="collapseAlert"
      >
        X
      </span>
    </div>

    <!-- 搜尋欄 -->
    <div class="input-group pb-1" id="search-bar">
      <input
        type="text"
        class="form-control shadow font-weight-bold"
        placeholder="Infinitive (-ar, -er, -ir)"
        aria-label="Feed an infinitive Spanish verb"
        aria-describedby="button-addon2"
        v-model.trim="input"
      />
      <div class="input-group-append shadow">
        <button
          class="btn btn-info font-weight-bold border border-white"
          @click.stop.prevent="toggleKeyboard"
        >
          <font-awesome-icon :icon="['fas', 'keyboard']" size="1x" />
        </button>
        <button
          class="btn btn-primary font-weight-bold border border-white"
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
        mx-auto
        mb-2
        d-flex
        justify-content-center
        rounded-pill
        mt-1
        shadow
      "
      id="keyboard"
      v-if="keyboard"
      @click.stop.prevent="inputSpecialCharacter"
    >
      <button class="btn btn-info font-weight-bold mr-2">á</button>
      <button class="btn btn-info font-weight-bold mr-2">é</button>
      <button class="btn btn-info font-weight-bold mr-2">í</button>
      <button class="btn btn-info font-weight-bold mr-2">ó</button>
      <button class="btn btn-info font-weight-bold mr-2">ú</button>
      <button class="btn btn-info font-weight-bold mr-2">ü</button>
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
  z-index: 10;
  backdrop-filter: blur(5px);
}

#alert {
  position: absolute;
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
        this.alert = "未輸入動詞，無法搜尋";
        return false;
      }

      // 只接受西班牙文字母 (不可有數字、特殊符號或空白)
      const regex = /[^a-záéíóúüñ]/;
      if (input.search(regex) !== -1) {
        this.alert = "不可輸入數字、空白或特殊符號";
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
        this.alert = "請輸入原形動詞";
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
        this.alert = "資料庫內找不到這個動詞";
        return;
      }

      // 轉址到 conjugation card 頁面
      this.$router.push("/spanish-conjugator");
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