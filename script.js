"use strict";
//VARIABLES
const viewsContent = document.querySelector(".views span");
const ratesContent = document.querySelector(".rates span");
const rangeInput = document.getElementById("rangeInput");
const toggleInput = document.getElementById("mySwitch");

const rates = {
  rate1: 8,
  rate2: 12,
  rate3: 16,
  rate4: 24,
  rate5: 36,
};
const views = {
  view1: 10,
  view2: 50,
  view3: 100,
  view4: 500,
  view5: 1,
};

const showRates = (val) => {
  let view, rate;
  switch (val) {
    case "1":
      rate = rates.rate1;
      view = views.view1;
      break;
    case "2":
      rate = rates.rate2;
      view = views.view2;
      break;
    case "3":
      rate = rates.rate3;
      view = views.view3;
      break;
    case "4":
      rate = rates.rate4;
      view = views.view4;
      break;
    case "5":
      rate = rates.rate5;
      view = views.view5;
      break;
    default:
      rate = 0;
      view = 0;
  }
  toggleInput.checked
    ? (ratesContent.innerHTML = (rate * (25 / 100)).toFixed(2))
    : (ratesContent.innerHTML = rate.toFixed(2));
  viewsContent.innerHTML = view == 1 ? `${view}M` : `${view}K`;
};
//Events handlers

rangeInput.oninput = function (e) {
  let rangeValue =
    ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;

  e.target.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) " +
    rangeValue +
    "%, hsl(224, 65%, 95%) " +
    rangeValue +
    "%, hsl(224, 65%, 95%)100%)";
  showRates(rangeInput.value);
};


/* - 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */
