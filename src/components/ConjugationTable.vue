<template>
  <div class="container mt-4">
    <div class="row d-flex justify-content-center">
      <div class="col offset-2 border">
        <button class="btn btn-info">Add to list</button>
      </div>

      <div class="d-flex flex-column text-center mx-5 col border">
        <h1>comer</h1>
        <small>to eat</small>
      </div>

      <div class="font-weight-bold col border">
        <span>Hits</span>:
        <span>100</span>
      </div>
    </div>

    <!-- 時態選單 -->
    <div class="row">
      <div class="dropdown col text-center border">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          選擇時態
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Present indicative</a>
          <a class="dropdown-item" href="#">Preterite indicative</a>
          <a class="dropdown-item" href="#">Imperfect indicative</a>
        </div>
      </div>
    </div>

    <div class="row">
      <table class="table mx-auto mt-3 mb-5 col-6">
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
</style>