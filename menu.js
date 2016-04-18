// begin with a blank/new order
var order = [];

var burgers = ["None", "Double Double Burger","Cheeseburger","Hamburger", ];
var fries  = ["None", "Regular Fries","Cheesy Fries", ];
var shakes = ["None", "Chocolate Shake", "Strawberry Shake", "Vanilla Shake", "None"];

// build a function to ask questions

function question(foodArray) {

  var orderPrompt = "Choose an option. Please enter number: \n";
  var answerPrompt = "notanumber";

  for(i=0;i<foodArray.length;i++){
    orderPrompt += i + " - " + foodArray[i] + "\n";
  }

  while(isNaN(answerPrompt)){
    answerPrompt = prompt(orderPrompt);
  }

 if(answerPrompt != 0){
   order.push(foodArray[answerPrompt]);
  }
}

question(burgers);
question(fries);
question(shakes);

// output their order

for(j=0;j<order.length;j++){
  document.write("<p>You ordered: " + order[j] + "<p>");
}
