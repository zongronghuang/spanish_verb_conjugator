export const blurAndUnblurConjugationTable = {
  methods: {
    blurAndUnblurConjugationTable() {
      const conjugationTable = document.querySelector("#conjugation-table");

      conjugationTable.classList.add("blurry-table");
      setTimeout(() => conjugationTable.classList.remove("blurry-table"), 500);
    }
  }
}