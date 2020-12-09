<template>
  <div class="pb-1">
    <!-- 搜尋區域 -->
    <div class="mx-auto my-4 w-75" id="search-area">
      <h3>Feed a Spanish Verb</h3>

      <div class="input-group pb-3 mb-1 mt-5">
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
            class="btn btn-info font-weight-bold"
            type="button"
            id="button-addon2"
            @click.prevent.stop="checkInput"
          >
            Conjugate
          </button>
        </div>
      </div>
    </div>
    <!-- 錯誤訊息 -->
    <div
      class="alert alert-warning w-75 text-center mx-auto"
      role="alert"
      id="alert"
      v-show="alert"
    >
      <span
        class="float-left font-weight-bold mr-2"
        id="cross"
        @click.stop.prevent="collapseAlert"
      >
        X
      </span>
      <span>{{ alert }}</span>
    </div>
  </div>
</template>

<script>
import datasetAPIs from "../apis/dataset.js";

export default {
  name: "search",
  data() {
    return {
      input: "",
      alert: "",
      infinitives: [],
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
        longEnding === "irse"
      ) {
        return (this.alert = "請移除結尾 -se");
      }

      // 非原形動詞結尾非 -ar, -er, -ir
      const ending = input.substring(input.length - 2);
      if (ending !== "ar" && ending !== "er" && ending !== "ir") {
        return (this.alert = "請輸入原形動詞");
      }

      // 透過 API 確認輸入的動詞存在
      const index = this.infinitives.findIndex(
        (infinitive) => infinitive === input
      );
      if (index === -1) {
        return (this.alert = "資料庫內找不到此動詞");
      }

      // 動詞存在 => 取得動詞的所有變化 + 轉址到 conjugation card 頁面
      const conjugations = datasetAPIs.getConjugations(input);
      console.log("conjugations", conjugations);

      this.$router.push("/conjugation_card");
    },
    collapseAlert() {
      this.alert = "";
    },
  },
};
</script>

<style scoped>
#search-area,
#alert {
  max-width: 450px;
}

#cross:hover {
  cursor: pointer;
}

input::placeholder {
  color: gray;
  opacity: 70%;
}
</style>