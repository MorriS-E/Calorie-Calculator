class FoodItems {
  constructor(food_name, food_kcal) {
    this.food_name = food_name;
    this.food_kcal = food_kcal;
  }
}

let food_input = document.querySelector("#food-input");
let weight_input_top = document.querySelector("#weight-input-top");
let kcal_input = document.querySelector("#kcal-input");
let add_button = document.querySelector("#add-btn");
let food_select = document.querySelector("#food-select");
let weight_input_bottom = document.querySelector("#weight-input-bottom");
let calc_button = document.querySelector("#calc-btn");
let res_label = document.querySelector("#result");

let food_dict = [];

function addItem() {
  let new_option = document.createElement("option");
  food_select.appendChild(new_option);
  new_option.textContent = food_input.value;
  one_kcal = +weight_input_top.value / +kcal_input.value;
  let newItem = new FoodItems(food_input.value, one_kcal);
  food_dict.push(newItem);
  food_input.value = "";
  weight_input_top.value = "";
  kcal_input.value = "";
}

function calculate() {
  for (let i = 0; i < food_dict.length; i++) {
    const element1 = food_dict[i];
    for (let j = 0; j < food_select.length; j++) {
      const element2 = food_select[j];
      if (element1.food_name === element2.textContent) {
        res = element1.food_kcal * weight_input_bottom.value;
        res_label.textContent = `${res} KCAL`;
      }
    }
  }
}

add_button.addEventListener("click", addItem);
calc_button.addEventListener("click", calculate);
