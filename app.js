//Budget Controller
var budgetContoller = (function(){
   //some code
})(); 



//UI controller
var UIcontroller = (function(){
    var DOMStirngs = {
        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function(){
           return {
            type: document.querySelector(DOMStirngs.inputType).value, // wheather the inc or exp
            description: document.querySelector(DOMStirngs.inputDescription).value,
            value: document.querySelector(DOMStirngs.inputValue).value} 
        },

        getDOMStrings: function(){
            return DOMStirngs; 
        }
    }


})();


//Global App Controller
var controller = (function(budgetCtrl, UIctrl){

    var setUpEventLitsners = function (){
        var DOM = UIctrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function(){
        //1. Get the field input data
        var input = UIctrl.getInput();
        console.log(input)
        //2. Add the Item to the budgetCottroller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Dispaly the budget on the UI

    }
    return {
        init: function(){
            console.log("App has been started");
            setUpEventLitsners();
        }
        } 
})(budgetContoller, UIcontroller);

controller.init();