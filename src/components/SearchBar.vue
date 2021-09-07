<template>
  <div
    id="search-area"
    class="w-25 d-flex flex-column justify-content-between position-relative"
    @keyup.enter="searchByInput"
    @keyup.up="navigateAutocompleteSuggestionsByUpArrow"
    @keyup.down="navigateAutocompleteSuggestionsByDownArrow"
>

  
    <div class="input-group" id="search-bar">
      <input
        type="text"
        class="form-control font-weight-bold"
        placeholder="Infinitive (-ar, -er, -ir, -se)"
        aria-label="Feed an infinitive Spanish verb"
        aria-describedby="button-addon2"
        v-model.trim="input"
        @input.prevent.stop="changeBorderCorners"
        ref="searchInput"
      />

      <!-- 虛擬鍵盤呼叫和搜尋鍵 -->
      <div class="input-group-append shadow">
        <button
          class="btn btn-info btn-outline-light"
          type="button"
          @click.stop.prevent="toggleKeyboard"
        >
          <font-awesome-icon :icon="['fas', 'keyboard']" size="1x" />
        </button>

        <button
          class="btn btn-primary btn-outline-light rounded-right"
          type="button"
          id="search-btn"
          @click.prevent.stop="searchByInput"
        >
          <font-awesome-icon :icon="['fas', 'search']" size="1x" />
        </button>
      </div>

      <!-- autocomplete 搜尋提示 -->
      <div
        id="autocomplete-pane"
        class="position-absolute w-100"
        v-show="matchedInfinitives.length"
        ref="autocompletePane"
  >
      >
        <div v-for="entry in matchedInfinitives" :key="entry" :data-entry="entry" class="bg-light">
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
      currentSuggestionID: -1,
      isNavigatingByArrowKeys: false,
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

      // 非原形動詞結尾非 -ar, -er, -ir
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
      this.input = this.$refs.searchInput.value
  
      if (!this.isInputValid()) return
      this.checkInfinitiveExistence()
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
    navigateAutocompleteSuggestionsByUpArrow() {
      console.log('up up up')
      const {children} = this.$refs.autocompletePane
      const suggestionID = this.currentSuggestionID

      if (children.length <= 1) return
      if (suggestionID === 0) {
        children[suggestionID].classList.add('nav-location')
        return
      }

      children[suggestionID].classList.remove('nav-location')
      children[suggestionID - 1].classList.add('nav-location')

      this.$refs.searchInput.value = children[suggestionID].dataset.entry
      this.currentSuggestionID = suggestionID - 1
    },
    navigateAutocompleteSuggestionsByDownArrow() {
      console.log('down down down')
      const {children} = this.$refs.autocompletePane
      const suggestionID = this.currentSuggestionID

      if (children.length <= 1) return
      if (suggestionID === children.length - 1) {
        return
      }

      children[suggestionID].classList.remove('nav-location')
      children[suggestionID + 1].classList.add('nav-location')
     
      this.$refs.searchInput.value = children[suggestionID].dataset.entry
      this.currentSuggestionID = suggestionID + 1
    }, 
  },
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
#alert,
#keyboard {
  max-width: 450px;
  min-width: 350px;
}

#keyboard {
  position: absolute;
  top: 100%;
  z-index: 10;
  transform: translateY(50%);
}

#keyboard button {
  background-color: var(--spanish-yellow);
  color: black;
}

#alert {
  position: absolute;
  top: 100%;
  transform: translateY(50%);
  z-index: 20;
}

#search-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
}

#autocomplete-pane {
  top: 100%;
}

#autocomplete-pane > div:last-child {
  border-radius: 0px 0px 5px 5px !important;
}

.nav-location, .nav-location:hover {
  background-color: lightgray !important;
}

</style>