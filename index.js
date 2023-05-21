let amount = document.querySelector(".amount");
let currency = document.querySelector(".currency");
let convert = document.querySelector(".convert");
let result = document.querySelector(".result");

currency.addEventListener("input", () => {
  amount.value = "";
  result.innerHTML = "";
});

convert.addEventListener("click", () => {
  getData(
    "https://openexchangerates.org/api/latest.json?app_id=341f0fe35a594c68b253bfc415f5a4f3",
    amount.value,
    currency.value
  );
});

async function getData(api, amount, currency) {
  try {
    let response = await fetch(api);
    let data = await response.json();
    result.innerHTML = (amount * data.rates[currency]).toFixed(2);
  } catch (reason) {
    console.log(reason);
  } finally {
  }
}
