// Константные значения
const depositeAmountRange = [1000, 30000];
const depositReplenishmentAmounttRange = [1000, 30000];

var calculatorForm = $("#calculatorForm");

calculatorForm.submit(function(e) {
    e.preventDefault(); 

    if (!formIsNotEmpty(calculatorForm)) {
        alert("Не все поля заполнены!");
        return
    }

    var url = calculatorForm.attr('action');

    $.ajax({
           type: "POST",
           url: url,
           data: calculatorForm.serialize(), 
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    
});

function formIsNotEmpty(form) {
    var inputs = form.serializeArray();
    for (const key in inputs) {
        if (inputs[key].value === "") return false;
    }

    return true;
}