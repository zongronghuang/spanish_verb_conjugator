<template>
  <div>
    <ControlPanel />

    <!-- 搜尋區域 -->
    <div class="mx-auto my-4 w-50">
      <h2>Feed a Spanish Verb</h2>

      <div class="input-group pb-3 mb-1 mt-5">
        <input
          type="text"
          class="form-control font-weight-bold"
          placeholder="Infinitive (-ar, -er, -ir)"
          aria-label="Feed an infinitive Spanish verb"
          aria-describedby="button-addon2"
          v-model.trim="input"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary font-weight-bold"
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
      class="alert alert-warning w-50 text-center mx-auto"
      role="alert"
      v-if="alert"
    >
      {{ alert }}
    </div>
  </div>
</template>

<script>
import ControlPanel from "../components/ControlPanel.vue";

export default {
  name: "search",
  components: {
    ControlPanel,
  },
  data() {
    return {
      input: "",
      alert: "",
    };
  },
  methods: {
    checkInput() {
      console.log("got the input", this.input, Boolean(this.input));
      console.log("length", this.input.length);
      // 不可為空字串

      this.alert = "yayaya";
      console.log("yaya");

      if (!this.input) {
        this.alert = "未輸入動詞，無法搜尋";
      }

      // 不可含數字、特殊符號或空白
      const regex = /[a-záéíóúü]/;
      if (this.input.toLowerCase().search(regex)) {
        this.alert = "不可輸入數字、空白或特殊符號";
      }

      // 結尾是 arse, erse, irse (提醒拿掉 se 即可)
      const longEnding = this.input.substring(this.input.length - 4);
      if (
        longEnding === "arse" ||
        longEnding === "erse" ||
        longEnding === "irse"
      ) {
        this.alert = "不可輸入反身動詞；請移除字尾 -se";
      }

      // 非原形動詞結尾非 -ar, -er, -ir
      const ending = this.input.substring(this.input.length - 2);
      if (ending !== "ar" || ending !== "er" || ending !== "ir") {
        this.alert = "必須輸入原形動詞";
      }

      // 透過 API 確認輸入的動詞存在
    },
  },
};
</script>

<style scoped>
</style>