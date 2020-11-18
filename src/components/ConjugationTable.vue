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

        <div class="mt-3 h4 font-weight-bold" id="hits">
          <span>Hits</span>
          <span class="align-text-top">:</span>
          <span>100</span>
        </div>

        <button class="btn btn-warning mt-3 font-weight-bold" id="peek">
          Peek
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
            <th scope="row" class="w-25 align-middle">yo</th>
            <td class="align-middle">Mark</td>
            <td class="align-middle">
              <button class="btn btn-warning error-tooltip">!</button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">tu</th>
            <td class="align-middle">Jacob</td>
            <td class="align-middle">
              <button class="btn btn-warning error-tooltip">!</button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              el <br />ella <br />usted
            </th>
            <td class="align-middle">Larry</td>
            <td class="align-middle">
              <button class="btn btn-warning error-tooltip">!</button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">nosotros</th>
            <td class="align-middle">Larry</td>
            <td class="align-middle">
              <button class="btn btn-warning error-tooltip">!</button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">vosotros</th>
            <td class="align-middle">Larry</td>
            <td class="align-middle">
              <button class="btn btn-warning error-tooltip">!</button>
            </td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-25 align-middle">
              ellos <br />
              ellas <br />
              ustedes
            </th>
            <td class="align-middle">Larry</td>
            <td class="align-middle">
              <button class="btn btn-warning error-tooltip">!</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
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
</style>