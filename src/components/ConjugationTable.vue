<template>
  <div class="container mt-4">
    <div class="row mb-3">
      <div class="col-6 mx-auto position-relative" id="upper-display">
        <button class="btn btn-info mt-3" id="add-to-list">Add to list</button>

        <div class="d-flex flex-column text-center mb-3 mx-1">
          <h1>comer</h1>
          <small>to eat</small>
        </div>

        <div class="mt-3 h4 font-weight-bold" id="hits">
          <span>Hits</span>
          <span class="align-text-top">:</span>
          <span>100</span>
        </div>

        <!-- <button class="btn btn-warning mt-3" id="peek">Peek</button> -->
      </div>
    </div>

    <div class="row">
      <div class="col text-center col-6 mx-auto">
        <span class="h4 my-4">時態名稱</span>
      </div>
    </div>

    <div class="row">
      <table class="table mx-auto mt-3 mb-5 col-6 text-center">
        <tbody>
          <tr class="border">
            <th scope="row" class="w-50">yo</th>
            <td>Mark</td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-50">tu</th>
            <td>Jacob</td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-50">
              el / ella <br />
              usted
            </th>
            <td>Larry</td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-50">nosotros</th>
            <td>Larry</td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-50">vosotros</th>
            <td>Larry</td>
          </tr>
          <tr class="border">
            <th scope="row" class="w-50">
              ellos/ellas <br />
              ustedes
            </th>
            <td>Larry</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "conjugation-table",
};
</script>

<style scoped>
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

#upper-display {
  min-width: 400px;
}
</style>