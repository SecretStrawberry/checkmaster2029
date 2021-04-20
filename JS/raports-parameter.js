const testSection1 = document.querySelector(".JS-test-1");
const testSection2 = document.querySelector(".JS-test-2");

const options = document.querySelector("#date");
console.log(date);

testSection2.classList.add("test-hidden");

options.addEventListener("change", function () {
  if (options.value === "date1") {
    testSection1.classList.remove("test-hidden");
    testSection2.classList.add("test-hidden");
  }
  if (options.value === "date2") {
    testSection2.classList.remove("test-hidden");
    testSection1.classList.add("test-hidden");
  }
});
