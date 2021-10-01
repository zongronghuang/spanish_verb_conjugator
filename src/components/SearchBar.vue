<template>
  <div
    id="search-area"
    class="d-flex flex-column justify-content-between"
    @keyup.enter="searchByInput"
    @keyup.up="navigateSuggestionsByUpArrow"
    @keyup.down="navigateSuggestionsByDownArrow"
  >
    <div class="input-group position-relative" id="search-bar">
      <input
        type="text"
        class="form-control font-weight-bold"
        placeholder="Infinitive (-ar, -er, -ir, -se)"
        aria-label="Feed an infinitive Spanish verb"
        aria-describedby="button-addon2"
        v-model.trim="input"
        @input.prevent.stop="handleInput"
        ref="searchInput"
      />

      <!-- 虛擬鍵盤呼叫和搜尋鍵 -->
      <div class="input-group-append shadow">
        <button
          class="btn btn-info btn-outline-light"
          type="button"
          title="Open the keyboard to type in special characters in Spanish"
          @click.stop.prevent="toggleKeyboard"
        >
          <font-awesome-icon :icon="['fas', 'keyboard']" size="1x" />
        </button>

        <button
          class="btn btn-primary btn-outline-light rounded-right"
          type="button"
          id="search-btn"
          title="Find the verb's conjugations"
          @click.prevent.stop="searchByInput"
        >
          <font-awesome-icon :icon="['fas', 'search']" size="1x" />
        </button>
      </div>

      <!-- autocomplete 搜尋提示 -->
      <div
        id="autocomplete-pane"
        class="w-100"
        v-show="matchedInfinitives.length"
        ref="autocompletePane"
      >
        <div
          v-for="(entry, id) in matchedInfinitives"
          :key="entry"
          :data-entry="entry"
          :data-id="id"
          class="bg-light"
        >
          <router-link
            class="text-decoration-none ml-3 text-muted"
            :to="`/spanish-conjugator/${entry}`"
            >{{ entry }}</router-link
          >
        </div>
      </div>
    </div>

    <!-- 輸入輔助鍵 -->
    <div
      class="
        w-25
        mt-1
        py-1
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

    <!-- 錯誤訊息 -->
    <div
      class="alert alert-warning w-100 mt-1 mx-auto rounded-lg shadow"
      role="alert"
      id="alert"
      v-show="alert"
    >
      <span class="text-left">{{ alert }}</span>
      <span
        class="float-right font-weight-bold mr-2"
        id="cross"
        @click.stop.prevent="collapseAlert"
      >
        <font-awesome-icon :icon="['fas', 'window-close']" size="1x" />
      </span>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "search-bar",
  data() {
    return {
      input: "",
      alert: "",
      keyboard: false,
      currentSuggestionID: 0,
      isNavigatingSuggestions: false,
      selectedSuggestion: "",
    };
  },
  created() {
    console.log("[created] SearchBar");
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

      // 必須是原形動詞結尾 (-ar, -er, -ir, -se)
      const ending = input.substring(input.length - 2);
      const validEndingCondition =
        ending === "ar" ||
        ending === "er" ||
        ending === "ir" ||
        ending === "ír" ||
        ending === "se";
      if (!validEndingCondition) {
        this.alert = "Enter an infinitive verb";
        return false;
      }

      return true;
    },
    checkInfinitiveExistence() {
      const infinitive = this.input.toLowerCase();

      // infinitives 中找得到 infinitive，轉址 (再取得動詞變化)
      // 找不到 infinitive，不轉址並提供錯誤訊息
      if (this.infinitives.includes(infinitive)) {
        this.$router.push(`/spanish-conjugator/${infinitive}`);
      } else {
        this.alert = "Oops, it's not in the database";
      }
    },
    searchByInput() {
      // 優先搜尋使用者主動選擇的 autocomplete suggestion
      // 如果沒有選擇 autocomplete suggestion，則以 input 欄位的值進行搜尋
      if (this.selectedSuggestion) {
        this.input = this.selectedSuggestion;
        this.checkInfinitiveExistence();
      } else {
        if (this.isInputValid()) this.checkInfinitiveExistence();
      }
    },
    collapseAlert() {
      this.alert = "";
    },
    toggleKeyboard() {
      this.keyboard = !this.keyboard;
    },
    inputSpecialCharacter(event) {
      const target = event.target;
      const character = target.innerText;
      const inputField = document.querySelector("input");

      // 將字母加到輸入框中 + focus 輸入框
      if (target.tagName === "BUTTON") {
        const value = inputField.value;
        const start = inputField.selectionStart; // 取得游標插入點開頭位置
        const end = inputField.selectionEnd; // 取得游標插入點結尾位置

        // 如果 start 和 end 一樣，代表只移動滑鼠游標 => 直接插入特殊字元
        // 如果 start 和 end 不一樣，代表選取一段文字 => 文字區塊替換成特殊字元
        const newValue = value.slice(0, start) + character + value.slice(end);

        inputField.value = newValue;
        this.input = newValue;

        // 重新設定游標插入點 (新輸入的字元位置)
        inputField.setSelectionRange(start + 1, start + 1);
        inputField.focus();
      }
    },
    changeBorderCorners(event) {
      const searchInput = event.target;
      const searchBtn = document.querySelector("#search-btn");

      // 沒有 autocomplete suggestion，搜尋欄下方顯示圓角
      if (this.matchedInfinitives.length === 0) {
        searchInput.style.setProperty(
          "border-radius",
          "5px 0px 0px 5px",
          "important"
        );
        searchBtn.style.setProperty(
          "border-radius",
          "0px 5px 5px 0px",
          "important"
        );
      }

      // 有 autocomplete suggestion，搜尋欄下方顯示直角
      if (this.matchedInfinitives.length !== 0) {
        searchInput.style.setProperty(
          "border-radius",
          "5px 0px 0px 0px",
          "important"
        );
        searchBtn.style.setProperty(
          "border-radius",
          "0px 5px 0px 0px",
          "important"
        );
      }
    },
    handleInput(event) {
      this.changeBorderCorners(event);
      this.resetSuggestionNavigation();
    },
    navigateSuggestionsByUpArrow() {
      const { children: suggestions } = this.$refs.autocompletePane;
      const numOfSuggestions = suggestions.length;
      const currentID = this.currentSuggestionID;
      const nextID = currentID - 1;
      const minID = 0;

      if (numOfSuggestions === 0) return;

      // 在使用者停止輸入文字後，第一次用按鍵瀏覽，進行初始化
      // => highlight 第一個選項，搜尋欄位帶入選項文字
      if (!this.isNavigatingSuggestions) {
        this.isNavigatingSuggestions = true;
        suggestions[0].classList.add("nav-location");
        this.$refs.searchInput.value = suggestions[0].dataset.entry;
        this.selectedSuggestion = suggestions[0].dataset.entry;
        this.currentSuggestionID = 0;
      }

      // 持續按向上箭頭瀏覽
      // => 下方選項移除 highlight，上方選項加上 highlight，搜尋欄位帶入上方選項文字
      if (currentID > minID) {
        suggestions[currentID].classList.remove("nav-location");
        suggestions[nextID].classList.add("nav-location");
        this.$refs.searchInput.value = suggestions[nextID].dataset.entry;
        this.selectedSuggestion = suggestions[nextID].dataset.entry;
        this.currentSuggestionID = nextID;
      }

      // 瀏覽到最上方選項
      // => 無法再往上，搜尋欄位帶入最上方選項文字
      if (currentID === minID) {
        suggestions[currentID].classList.add("nav-location");
        this.$refs.searchInput.value = suggestions[currentID].dataset.entry;
        this.selectedSuggestion = suggestions[currentID].dataset.entry;
        this.currentSuggestionID = currentID;
      }
    },
    navigateSuggestionsByDownArrow() {
      const { children: suggestions } = this.$refs.autocompletePane;
      const numOfSuggestions = suggestions.length;
      const currentID = this.currentSuggestionID;
      const nextID = currentID + 1;
      const maxID = numOfSuggestions - 1;

      if (numOfSuggestions === 0) return;

      // 在使用者停止輸入文字後，第一次用按鍵瀏覽，進行初始化
      // => highlight 第一個選項，搜尋欄位帶入選項文字
      if (!this.isNavigatingSuggestions) {
        this.isNavigatingSuggestions = true;
        suggestions[0].classList.add("nav-location");
        this.$refs.searchInput.value = suggestions[0].dataset.entry;
        this.selectedSuggestion = suggestions[0].dataset.entry;
        this.currentSuggestionID = 0;
        return;
      }

      // 持續按向下箭頭瀏覽
      // => 上方選項移除 highlight，下方選項加上 highlight，搜尋欄位帶入下方選項文字
      if (currentID < maxID) {
        suggestions[currentID].classList.remove("nav-location");
        suggestions[nextID].classList.add("nav-location");
        this.$refs.searchInput.value = suggestions[nextID].dataset.entry;
        this.selectedSuggestion = suggestions[nextID].dataset.entry;
        this.currentSuggestionID = nextID;
      }

      // 瀏覽到最下方選項
      // => 無法再往下，搜尋欄位帶入最下方選項文字
      if (currentID === maxID) {
        suggestions[currentID].classList.add("nav-location");
        this.$refs.searchInput.value = suggestions[currentID].dataset.entry;
        this.selectedSuggestion = suggestions[currentID].dataset.entry;
        this.currentSuggestionID = currentID;
      }
    },
    resetSuggestionNavigation() {
      this.isNavigatingSuggestions = false;
      this.currentSuggestionID = 0;
      this.selectedSuggestion = "";
    },
  },
  watch: {},
  computed: {
    ...mapState(["infinitives"]),
    matchedInfinitives() {
      if (!this.input) return [];

      // 把 this.input 的即時小寫字串作為篩選條件
      const regex = new RegExp(`^${this.input.toLowerCase()}`);
      const matchedEntries = this.infinitives.filter((entry) =>
        entry.match(regex)
      );

      // 最多列出 3 個符合項目
      const maxEntries = 3;
      if (matchedEntries.length > maxEntries) {
        const slicedMatchedEntries = matchedEntries.slice(0, maxEntries);
        return slicedMatchedEntries;
      }

      return matchedEntries;
    },
  },
};
</script>

<style scoped>
#search-area,
#search-bar,
#alert,
#keyboard {
  max-width: 600px;
  min-width: 280px;
  font-family: "Open Sans", sans-serif;
}

#keyboard {
  position: absolute;
  top: 100%;
  z-index: 10;
  transform: translateY(10%);
}

#keyboard button {
  background-color: var(--spanish-yellow);
  color: black;
}

#alert {
  position: absolute;
  top: 100%;
  transform: translateY(10%);
  z-index: 20;
}

#cross:hover {
  cursor: pointer;
}

input {
  border-radius: 5px 0px 0px 5px !important;
}

input::placeholder {
  color: gray;
  opacity: 70%;
  font-size: 0.9rem;
}

#autocomplete-pane {
  position: absolute;
  top: 100%;
  font-size: 0.9rem;
}

#autocomplete-pane > div:last-child {
  border-radius: 0px 0px 5px 5px !important;
}

#autocomplete-pane > div:hover,
.nav-location {
  background-color: gainsboro !important;
}


/* tablets + portrait orientation */

@media screen and (min-width: 768px) and (orientation: portrait) {
    input {
    height: 2.5rem;
  }

  #search-bar button {
    width: 2.5rem;
    font-size: 1.1rem;
  }

   input::placeholder {
    font-size: 1rem;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  input {
    height: 3.5rem;
  }

  #search-bar button {
    width: 3.5rem;
    font-size: 1.4rem;
  }

   input::placeholder {
    font-size: 1.4rem;
  }
}
</style>