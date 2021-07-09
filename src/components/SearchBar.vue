<template>
  <div id="search-area" @keyup.enter="getVerbConjugations(checkInput())">
    <div class="input-group pb-1">
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
          @click.prevent.stop="getVerbConjugations(checkInput())"
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
      @click.stop.prevent="typeCharacter"
      v-if="keyboard"
    >
      <button class="btn btn-info font-weight-bold mr-2">á</button>
      <button class="btn btn-info font-weight-bold mr-2">é</button>
      <button class="btn btn-info font-weight-bold mr-2">í</button>
      <button class="btn btn-info font-weight-bold mr-2">ó</button>
      <button class="btn btn-info font-weight-bold mr-2">ú</button>
      <button class="btn btn-info font-weight-bold mr-2">ü</button>
      <button class="btn btn-info font-weight-bold">ñ</button>
    </div>

    <!-- 錯誤訊息 -->
    <div
      class="alert alert-warning w-25 text-center mx-auto rounded-pill shadow"
      role="alert"
      id="alert"
      v-if="alert"
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
  name: "search",
  data() {
    return {
      input: "",
      alert: "",
      keyboard: false,
    };
  },
  methods: {
    checkInput() {
      const input = this.input.toLowerCase();
      this.alert = "";

      // 不可為空字串
      if (!input) {
        return (this.alert = "未輸入動詞，無法搜尋");
      }

      // 只接受西班牙文字母 (不可有數字、特殊符號或空白)
      const regex = /[^a-záéíóúüñ]/;
      if (input.search(regex) !== -1) {
        return (this.alert = "不可輸入數字、空白或特殊符號");
      }

      // 結尾是 arse, erse, irse (提醒拿掉 se 即可)
      const longEnding = input.substring(input.length - 4);
      if (
        longEnding === "arse" ||
        longEnding === "erse" ||
        longEnding === "irse" ||
        longEnding === "írse"
      ) {
        return (this.alert = "請移除結尾 -se");
      }

      // 非原形動詞結尾非 -ar, -er, -ir
      const ending = input.substring(input.length - 2);
      if (
        ending !== "ar" &&
        ending !== "er" &&
        ending !== "ir" &&
        ending !== "ír"
      ) {
        return (this.alert = "請輸入原形動詞");
      }

      return {
        isPossibleVerb: true,
        input,
      };

      // 動詞存在 => 將動詞的所有變化和 metadata 放到 vuex
      // const result = datasetAPIs.getAllConjugations(input, this.infinitives);
      // if (result.length > 0) {
      //   this.$store.commit("setVerb", result);
      // } else {
      //   return (this.alert = "Verb not found in the database");
      // }

      // // 轉址到 conjugation card 頁面
      // this.$router.push("/conjugation_card");
    },
    getVerbConjugations({ isPossibleVerb, input }) {
      if (!isPossibleVerb) return;

      // 動詞存在 => 將動詞的所有變化和 metadata 放到 vuex
      const result = datasetAPIs.getAllConjugations(input, this.infinitives);

      if (result.length > 0) {
        this.$store.commit("setVerb", result);
      } else {
        return (this.alert = "Verb not found in the database");
      }

      // 轉址到 conjugation card 頁面
      this.$router.push("/conjugation_card");
    },
    collapseAlert() {
      this.alert = "";
    },
    toggleKeyboard() {
      this.keyboard = !this.keyboard;
    },
    // 待簡化
    typeCharacter(event) {
      const target = event.target;
      const character = target.innerText;
      const input = document.querySelector("input");

      // 將字母加到輸入框中 + focus 輸入框
      if (target.tagName === "BUTTON" && input) {
        input.value = input.value + character;
        this.input = input.value;
        input.focus();
      }
    },
  },
  computed: {
    ...mapState(["infinitives"]),
  },
};
</script>