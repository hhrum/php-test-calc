import './css/style.css'

// Константные значения
const depositeAmountRange = [1000, 3000000];
const depositReplenishmentAmounttRange = [1000, 3000000];

var calculatorForm = $("#calculatorForm");
calculatorForm.find("#datepicker").datepicker();

$(function () {
    makeSliderForNumericInput("#depositeAmount", depositeAmountRange);
    makeSliderForNumericInput("#depositReplenishmentAmount", depositReplenishmentAmounttRange);

    calculatorForm.submit(function (e) {
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
            success: function (data) {
                alert(data); // show response from the php script.
            }
        });

    });
});

function makeSliderForNumericInput(inputId, range) {
    var depositeAmountInput = $(inputId);
    depositeAmountInput.attr('min', range[0]);
    depositeAmountInput.val(range[0]);

    var slider = $("<div class='calculator__slider'></div>").insertAfter(depositeAmountInput).slider({
        min: range[0],
        max: range[1],
        range: "min",
        value: depositeAmountInput.val(),
        slide: function (event, ui) {
            depositeAmountInput.val(ui.value);
        }
    });
    depositeAmountInput.on("change", function () {
        slider.slider("value", $(this).val());
    });
}

function formIsNotEmpty(form) {
    var inputs = form.serializeArray();
    for (const key in inputs) {
        if (inputs[key].value === "") return false;
    }

    return true;
}