<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="mt-4">comer</h1>

    <small class="mt-1 mb-3">to eat</small>

    <!-- 時態選單 -->
    <div class="dropdown">
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

    <table class="table w-50 mx-auto mt-3 mb-5">
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
</template>

<script>
export default {
  name: "conjugation-table",
};
</script>

<style scoped>
</style>