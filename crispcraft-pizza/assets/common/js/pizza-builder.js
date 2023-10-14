document.addEventListener("DOMContentLoaded", function () {
  var totalPrice = 7.99; //initial price of a cheese pizza
  var pizzaIngredients = {
    sauces: [
      //Sauces
      {
        name: "Tomato Sauce",
        type: "sauce",
        imgId: "tomatoSauceImg",
        inputId: "tomatoSauceCheck",
        price: 0,
      },
      {
        name: "BBQ Sauce",
        type: "sauce",
        imgId: "bbqSauceImg",
        inputId: "bbqSauceCheck",
        price: 0,
      },
      {
        name: "Pesto Sauce",
        type: "sauce",
        imgId: "pestoSauceImg",
        inputId: "pestoSauceCheck",
        price: 0,
      },
    ],
    toppings: [
      //these toppings all use checkboxes
      //Non-Meat Toppings
      {
        name: "Tomatoes",
        type: "non-meat-topping",
        imgId: "tomatoesImg",
        inputId: "tomatoesCheck",
        price: 100,
      },
      {
        name: "Spinach",
        type: "non-meat-topping",
        imgId: "spinachImg",
        inputId: "spinachCheck",
        price: 100,
      },
      {
        name: "Mushrooms",
        type: "non-meat-topping",
        imgId: "mushroomsImg",
        inputId: "mushroomsCheck",
        price: 100,
      },
      {
        name: "Green Peppers",
        type: "non-meat-topping",
        imgId: "greenPeppersImg",
        inputId: "greenPeppersCheck",
        price: 100,
      },
      {
        name: "Red Peppers",
        type: "non-meat-topping",
        imgId: "redPeppersImg",
        inputId: "redPeppersCheck",
        price: 100,
      },
      {
        name: "Onions",
        type: "non-meat-topping",
        imgId: "onionsImg",
        inputId: "onionsCheck",
        price: 100,
      },
      {
        name: "Black Olives",
        type: "non-meat-topping",
        imgId: "blackOlivesImg",
        inputId: "blackOlivesCheck",
        price: 100,
      },
      {
        name: "Corn",
        type: "non-meat-topping",
        imgId: "cornImg",
        inputId: "cornCheck",
        price: 100,
      },
      {
        name: "Pineapples",
        type: "non-meat-topping",
        imgId: "pineapplesImg",
        inputId: "pineapplesCheck",
        price: 100,
      },
      //Dressings
      {
        name: "BBQ Sauce",
        type: "dressing",
        imgId: "bbqTopSauceImg",
        inputId: "bbqTopSauceCheck",
        price: 0.75,
      },
      {
        name: "Hot Sauce",
        type: "dressing",
        imgId: "hotSauceImg",
        inputId: "hotSauceCheck",
        price: 0.75,
      },
      {
        name: "Ranch Dressing",
        type: "dressing",
        imgId: "ranchDressingImg",
        inputId: "ranchDressingCheck",
        price: 0.75,
      },
    ],
  };
  var radioButtonIngredients = {
    //function used to make image when radio button is checked and other radio button images disappear
    init: function () {
      for (var i = 0; i < pizzaIngredients.sauces.length; i++) {
        //i starts at 0 and goes less than 3 because those are the radio buttons
        (function (j) {
          var imgId = pizzaIngredients.sauces[j].imgId;
          var imgDiv = document.getElementById(imgId);
          var inputId = pizzaIngredients.sauces[j].inputId;
          var radioDiv = document.getElementById(inputId);
          radioDiv.addEventListener("click", function () {
            $(".sauces").addClass("display-off");
            if (radioDiv.checked) {
              imgDiv.classList.remove("display-off");
            }
          });
        })(i); //This is a closure. Without one, the checkboxes would only be refering to the last i in the for-loop.
      }
    },
  };
  var checkboxIngredients = {
    //function used to make image appear or disappear when corresponding checkbox is checked or unchecked
    init: function () {
      for (var i = 0; i < pizzaIngredients.toppings.length; i++) {
        //i starts at 3 because the first 3 ingredients use radio buttons
        (function (j) {
          var imgId = pizzaIngredients.toppings[j].imgId;
          var imgDiv = document.getElementById(imgId);
          var inputId = pizzaIngredients.toppings[j].inputId;
          var checkBoxDiv = document.getElementById(inputId);
          // var price = pizzaIngredients[j].price;
          checkBoxDiv.addEventListener("click", function () {
            if (checkBoxDiv.checked) {
              imgDiv.classList.remove("display-off");
              // totalPrice += price;
            } else {
              imgDiv.classList.add("display-off");
              // totalPrice -= price;
              /* Thomas's Note: Look at the commented out code above. I was originally go to add the price of the ingredient to totalPrice each time I clicked the input. 
							This worked fine for checkboxes. However, things got wonky when I tried to incorporate this approach to radio buttons. As a radio button isn't technically deselected
							in the same way a checkbox is, the price would not be removed from totalPrice if I clicked another radio button. Since I was not going to show the user
							the price of the pizza until he/she decided to complete the order, I decided to add a function (calculateTotalPrice) that fired when the user clicked on a "complete 
							order" button which would loop through the inputs and check  if input is chcked, add price to totalPrice.  */
            }
          });
        })(i);
      }
    },
  };
  //Order Button
  var orderButton = {
    init: function () {
      var that = this;
      $("#order").click(function (event) {
        event.preventDefault();
        that.calculateTotalPrice();
        $("#priceSpan").text(totalPrice.toFixed(2));
        window.location.href = "#confirmModal";
        // alert("Thanks for ordering. That will be $" + totalPrice.toFixed(2));
        that.confirmOrder();
      });
    },
    calculateTotalPrice: function () {
      totalPrice = 7.99;
      for (var i = 0; i < pizzaIngredients.toppings.length; i++) {
        var inputId = pizzaIngredients.toppings[i].inputId;
        var inputDiv = document.getElementById(inputId);
        if (inputDiv.checked) {
          totalPrice += pizzaIngredients.toppings[i].price;
        }
      }
    },
    //this is what happens when the user confirms the order
    confirmOrder: function () {
      $("#confirmOrder").click(function () {
        main.defaultAppearance();
        window.location.href = "#";
      });
    },
  };
  var main = {
    init: function () {
      this.defaultAppearance();
      radioButtonIngredients.init();
      checkboxIngredients.init();
      orderButton.init();
    },
    //removes images, checked boxes, checked radio buttons that aren't supposed to on refresh or page load; needed to make certain browsers behave as intended
    /*Without this code, if I checked off a bunch of ingredients and refreshed the page in firefox, the checkboxes would still be checked
			and the images would be gone. Most divs holding images have the display-off class on load which makes their display none. When the user clicks a check box, 
			the display-off class is removed. Without this code, that won't happen in firefox after a refresh; sometimes unchecking a box would've actually made the image appear.*/
    defaultAppearance: function () {
      $(".pizza2")
        .not("#crustImg")
        .not("#cheeseImg")
        .not("#tomatoSauceImg")
        .addClass("display-off"); //add display-off class to all divs with pizza2 class except those with ids crustImg or cheeseImg or tomatoSauceImg
      $("input").prop("checked", false); //unchecks all inputs
      $("#tomatoSauceCheck").prop("checked", true); //checks off tomato sauce
      /*the above 2 lines of code achieves the same thing as this code:
				var inputs = document.getElementsByTagName('input');
					for (i=0;i<inputs.length;i++){
						inputs[i].checked=false;
					}
				document.getElementById('tomatoSauceCheck').checked=true;
				document.getElementById('tomatoSauceCheck').checked="checked"; */
      $("#tomatoSauceImg").removeClass("display-off");
    },
  };
  main.init();
});
