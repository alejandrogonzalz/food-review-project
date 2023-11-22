import GRILLED_CHICKEN_BLT_SALAD from "./assets/grilled_chicken_blt_salad.png";
import RAMEN from "./assets/ramen.png";
import TACOS from "./assets/tacos.png";
import YAKITORI from "./assets/yakitori.png";
import TERIYAKI_CHICKEN_BOWL from "./assets/teriyaki_chicken_bowl.png";
import MEAT_PIZZA from "./assets/meat_pizza.png";
import SUSHI from "./assets/sushi.png";
import LASAGNA from "./assets/lasagna.png";
import FISH_AND_CHIPS from "./assets/fish_and_chips.png";
import BUTTER_CHICKEN from "./assets/butter_chicken.png";
import JAPANESE_CURRY from "./assets/curry.png";
import RED_POZOLE from "./assets/pozole.png";

const foodArr = [
  {
    id: 0,
    title: "Meat Pizza",
    cookingTime: 25,
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Pepperoni",
      "Sausage",
      "Bell peppers",
    ],
    calories: 550,
    dinerScore: 2.9,
    image: MEAT_PIZZA,
    description:
      "Meat pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, and bell peppers.",
  },
  {
    id: 1,
    title: "Ramen",
    cookingTime: 15,
    ingredients: [
      "Ramen noodles",
      "Broth",
      "Soy sauce",
      "Green onions",
      "Boiled eggs",
      "Sliced pork",
    ],
    calories: 450,
    dinerScore: 4.7,
    image: RAMEN,
    description:
      "Comforting ramen with noodles, flavorful broth, soy sauce, green onions, boiled eggs, and sliced pork.",
  },

  {
    id: 2,
    title: "Tacos",
    cookingTime: 20,
    ingredients: [
      "Tortillas",
      "Ground beef",
      "Lettuce",
      "Tomatoes",
      // Shared ingredient
      "Cheese",
      "Salsa",
    ],
    calories: 350,
    dinerScore: 4.9,
    image: TACOS,
    description:
      "Classic tacos with seasoned ground beef, lettuce, tomatoes, cheese, and salsa.",
  },
  {
    id: 3,
    title: "Yakitori",
    cookingTime: 30,
    ingredients: ["Chicken skewers", "Soy sauce", "Mirin", "Sake", "Sugar"],
    calories: 480,
    dinerScore: 3.9,
    image: YAKITORI,
    description:
      "Delicious chicken skewers grilled and glazed with a savory soy-based sauce.",
  },
  // Additional meals with shared ingredients

  {
    id: 4,
    title: "Vegan Sushi Rolls",
    cookingTime: 35,
    ingredients: [
      "Sushi rice",
      "Nori seaweed",
      // Shared ingredient
      "Cucumber",
      "Carrot",
      "Bell pepper",
      "Avocado",
      "Soy sauce",
      "Wasabi",
    ],
    calories: 420,
    dinerScore: 4.1,
    image: SUSHI,
    description:
      "Vegan sushi rolls with sushi rice, nori seaweed, carrot, bell pepper, cucumber, avocado, soy sauce, and wasabi.",
  },
  {
    id: 5,
    title: "Lasagna",
    cookingTime: 40,
    ingredients: [
      "Lasagna noodles",
      "Ground beef",
      "Tomato sauce",
      // Shared ingredient
      "Mozzarella cheese",
      "Ricotta cheese",
    ],
    calories: 600,
    dinerScore: 4.3,
    image: LASAGNA,
    description:
      "Classic lasagna with savory ground beef, tomato sauce, ricotta cheese, and mozzarella cheese.",
  },

  {
    id: 6,
    title: "Butter Chicken",
    cookingTime: 45,
    ingredients: [
      "Chicken thighs",
      "Tomato sauce",
      "Butter",
      "Cream",
      "Garam masala",
      "Garlic",
      "Ginger",
    ],
    calories: 650,
    dinerScore: 4.6,
    image: BUTTER_CHICKEN,
    description:
      "Butter chicken - a rich and creamy Indian dish with tender chicken cooked in a flavorful tomato and butter sauce.",
  },
  {
    id: 7,
    title: "Japanese Curry",
    cookingTime: 35,
    ingredients: [
      // Shared ingredient
      "Carrots",
      "Chicken or vegetables",
      "Japanese curry roux",
      "Potatoes",
      "Onions",
    ],
    calories: 550,
    dinerScore: 4.8,
    image: JAPANESE_CURRY,
    description:
      "Japanese curry with your choice of chicken or vegetables, served with carrots, potatoes, and onions in a savory curry sauce.",
  },
  {
    id: 8,
    title: "Red Pozole",
    cookingTime: 60,
    ingredients: [
      "Pork shoulder",
      "Hominy",
      "Dried chilies",
      "Garlic",
      "Cabbage",
      "Radishes",
    ],
    calories: 600,
    dinerScore: 4.5,
    image: RED_POZOLE,
    description:
      "Red pozole - a traditional Mexican soup with pork, hominy, dried chilies, garlic, and topped with cabbage and radishes.",
  },
  {
    id: 9,
    title: "Fish and Chips",
    cookingTime: 30,
    ingredients: [
      "White fish fillets",
      "Potatoes",
      "Flour",
      "Beer",
      "Vegetable oil",
      "Salt",
      "Lemon wedges",
    ],
    calories: 500,
    dinerScore: 3.4,
    image: FISH_AND_CHIPS,
    description:
      "Classic fish and chips with crispy battered white fish fillets, golden fries, and a side of lemon wedges.",
  },
  {
    id: 10,
    title: "Teriyaki Chicken Bowl",
    cookingTime: 25,
    ingredients: [
      "Teriyaki chicken",
      "Steamed rice",
      "Broccoli",
      "Carrots",
      "Sesame seeds",
      // Shared ingredient
      "Soy sauce",
    ],
    calories: 600,
    dinerScore: 4.3,
    image: TERIYAKI_CHICKEN_BOWL,
    description:
      "Teriyaki chicken bowl with tender chicken, steamed rice, broccoli, carrots, and sesame seeds.",
  },
  {
    id: 11,
    title: "Grilled Chicken Salad",
    cookingTime: 20,
    ingredients: [
      "Grilled chicken breast",
      // Shared ingredient
      "Lettuce",
      "Cherry tomatoes",
      "Cucumber",
      "Feta cheese",
      "Balsamic vinaigrette",
    ],
    calories: 400,
    dinerScore: 1.9,
    image: GRILLED_CHICKEN_BLT_SALAD,
    description:
      "Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, feta cheese, and balsamic vinaigrette.",
  },
];

// *****************************************
// TO CREATE NECESARY DATA FOR THE DASHBOARD
// *****************************************
const obj = {};
const calories = [];
let i = 0;

for (let i = 0; i < foodArr.length; i++) {
  if (Object.hasOwn(obj, foodArr[i].calories)) {
    obj[foodArr[i].calories] += 1;
  } else {
    obj[foodArr[i].calories] = 1;
  }
}

for (const key in obj) {
  if (obj[key] > 1) {
    calories.push({ name: key, value: obj[key] });
  } else {
    i++;
  }
}
calories.push({ name: "Other", value: i });

const sortedCalories = Object.keys(obj).sort((a, b) => a - b);
const maxCalories = Math.max(sortedCalories[sortedCalories.length - 1]);
const minCalories = Math.max(sortedCalories[0]);

let foodWithMaxCal,
  foodWithMinCal,
  avgCookingTime = 0;
for (const item of foodArr) {
  if (item["calories"] === maxCalories) foodWithMaxCal = item.title;
  if (item["calories"] === minCalories) foodWithMinCal = item.title;

  avgCookingTime += item["cookingTime"];
}
avgCookingTime = (avgCookingTime / foodArr.length).toFixed(1);
const totalRecipes = foodArr.length;

export {
  foodArr,
  calories,
  maxCalories,
  minCalories,
  foodWithMaxCal,
  foodWithMinCal,
  avgCookingTime,
  totalRecipes,
};
