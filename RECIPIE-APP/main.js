let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInp = document.getElementById("user-inp").value;

fetch(url + "big mac")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // let myMeal = data.meals[0];
    // let count = 1;
    // let ingredients = []
    // console.log(myMeal.strMealThumb)
    // for (let i in myMeal){
    //     let ingredient = "";
    //     let measure = "";
    //     if(i.startsWith("strIngredient") && myMeal[i]){
    //         ingredient = myMeal[i];
    //         measure = myMeal[`strMeasure` = count];
    //         count += 1;
    //         ingredient.push(`$(measure) $(ingredient) `)
    //     }
    // }

    // result.innerHTML = `<img src = ${myMeal.strMealThumb}>`;
  });
