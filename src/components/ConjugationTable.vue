<template>
  <div class="container pt-2">
    <div class="row mb-1">
      <div class="col-6 mx-auto position-relative" id="upper-display">
        <button class="btn btn-info mt-3 font-weight-bold" id="add-to-list">
          Add to list
        </button>

        <div class="d-flex flex-column text-center mb-3 mx-1">
          <h1>comer</h1>
          <span class="font-weight-bold h4 mt-2">to eat</span>
        </div>

        <div
          class="mt-3 h4 font-weight-bold"
          id="hits"
          v-show="chosenMode === '2'"
        >
          <span>X</span>
          <span>%</span>
        </div>

        <button
          class="btn btn-warning mt-3 font-weight-bold"
          id="peek"
          v-show="chosenMode === '1'"
          @click.stop.prevent="textToggle"
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
        <tbody>
          <tr class="border">
            <th scope="row" class="w-50 align-middle">yo</th>

            <!-- mode 0 -->
            <td class="align-middle h5" v-show="chosenMode === '0'">Mark</td>

            <!-- mode 1 -->
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? "Mark" : "&iquest; &quest;" }}
            </td>

            <!-- mode 2 -->
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning error-tooltip"
                @click.prevent.stop="hintToggle"
              >
                {{ displayHint ? "answer" : "!" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">tú</th>
            <td class="align-middle" v-show="chosenMode === '0'">Jacob</td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? "Jacob" : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning error-tooltip"
                @click.prevent.stop="hintToggle"
              >
                {{ displayHint ? "answer" : "!" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              él <br />ella <br />usted
            </th>
            <td class="align-middle" v-show="chosenMode === '0'">Larry</td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? "Larry" : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning error-tooltip"
                @click.prevent.stop="hintToggle"
              >
                {{ displayHint ? "answer" : "!" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">nosotros</th>
            <td class="align-middle" v-show="chosenMode === '0'">Larry</td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? "Larry" : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning error-tooltip"
                @click.prevent.stop="hintToggle"
              >
                {{ displayHint ? "answer" : "!" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">vosotros</th>
            <td class="align-middle" v-show="chosenMode === '0'">Larry</td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? "Larry" : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning error-tooltip"
                @click.prevent.stop="hintToggle"
              >
                {{ displayHint ? "answer" : "!" }}
              </button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              ellos <br />
              ellas <br />
              ustedes
            </th>
            <td class="align-middle" v-show="chosenMode === '0'">Larry</td>
            <td class="align-middle h5" v-show="chosenMode === '1'">
              {{ displayText ? "Larry" : "&iquest; &quest;" }}
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <input type="text" />
            </td>
            <td class="align-middle" v-show="chosenMode === '2'">
              <button
                class="btn btn-warning error-tooltip"
                @click.prevent.stop="hintToggle"
              >
                {{ displayHint ? "answer" : "!" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row" v-show="chosenMode === '2'">
      <div class="col-6 mx-auto" id="lower-display">
        <div id="stressed-letters" class="mr-2">
          <button class="btn btn-info font-weight-bold mr-2">á</button>
          <button class="btn btn-info font-weight-bold mr-2">é</button>
          <button class="btn btn-info font-weight-bold mr-2">í</button>
          <button class="btn btn-info font-weight-bold mr-2">ó</button>
          <button class="btn btn-info font-weight-bold mr-2">ú</button>
          <button class="btn btn-info font-weight-bold mr-2">ü</button>
          <button class="btn btn-info font-weight-bold">ñ</button>
        </div>

        <div id="check">
          <button class="btn btn-warning font-weight-bold">Check</button>
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
      displayText: false,
      displayHint: false,
    };
  },
  methods: {
    textToggle() {
      this.displayText = !this.displayText;
    },
    hintToggle() {
      this.displayHint = !this.displayHint;
    },
  },
  watch: {
    chosenMode: function (oldMode, newMode) {
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
</style>