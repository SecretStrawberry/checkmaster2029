///////////////////////////////////
// ADD NEW COMPANY SELECTORS
///////////////////////////////////
const addCompanyButton = document.querySelector(".js-button-add-company");
const addCompany = document.querySelector(".js-new-company");

const companies = document.querySelector(".companies");

////////////////////////////////////////
// ADD NEW POI BUTTON SELECTOR
////////////////////////////////////////

const addNewPoi = document.querySelector(".js-btn-company-add-poi");

//////////////////////////////////////
// HIDE THE FORM THAT ADDS NEW COMPANY
//////////////////////////////////////

addCompanyButton.addEventListener("click", function () {
  if (addCompany.classList.contains("hidden")) {
    addCompany.classList.remove("hidden");
    companies.style.zIndex = "-2000";
  } else {
    addCompany.classList.add("hidden");
    companies.style.zIndex = "2000";
  }
});

////////////////////////////////////////
// REDIRECT THE ADD POI BUTTON TO THE CORECT PAGE
////////////////////////////////////////

addNewPoi.addEventListener("click", function () {});
