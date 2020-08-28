document.addEventListener(`DOMContentLoaded`, function () {
  const buttons = document.querySelectorAll(".js__modelButton");
  const tabsContent = document.querySelectorAll(".js__modelContent");
  const repairContent = document.querySelector(".js__modelRepairContent");
  const refillContent = document.querySelector(".js__modelRefillContent");
  const buyContent = document.querySelector(".js__modelBuyContent");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

			clearTabsBtns();

			clearTabs();

      button.classList.add("active");

      switch (e.target.id) {
        case "js__modelRepair":
          repairContent.classList.add("active");
          break;

        case "js__modelRefill":
          refillContent.classList.add("active");

          break;

        case "js__modelBuy":
          buyContent.classList.add("active");

          break;

        default:
          break;
      }
    });
  });

  function clearTabsBtns() {
    buttons.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });
  }
  function clearTabs() {
    tabsContent.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });
  }
});
