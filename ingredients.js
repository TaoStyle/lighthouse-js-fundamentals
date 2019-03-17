var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let counter = 0;
while (counter < ingredients.length){
  console.log(ingredients[counter]);
  counter++;
}
console.log('-----');
// Write a for loop that prints out the contents of ingredients:
for(let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
console.log('-----');
// Write any loop (while or for) that prints out the contents of ingredients backward
for(let i = ingredients.length - 1; i >= 0 ; i--){
  console.log(ingredients[i]);
}
