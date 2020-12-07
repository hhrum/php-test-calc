import * as $ from 'jquery'
import './css/style.css'

// Подключаю jquery-ui 
require('webpack-jquery-ui')

// Константные значения
const depositeAmountRange = [1000, 3000000];
const depositReplenishmentAmounttRange = [1000, 3000000];
const sliderStep = 10;

var calculatorForm = $("#calculatorForm");
calculatorForm.find("#datepicker").datepicker();
calculatorForm.find("#datepicker").datepicker("option", "dateFormat", "dd.mm.yy");

$(function () {
    // Добавляю слайдеры для конкретных полей
    makeSliderForNumericInput("#depositeAmount", depositeAmountRange);
    makeSliderForNumericInput("#depositReplenishmentAmount", depositReplenishmentAmounttRange);

    calculatorForm.find(".calculator__submit").on("click", function (e) {
        e.preventDefault();

        if (!formIsNotEmpty(calculatorForm)) {
            alert("Не все поля заполнены!");
            return
        }

        var url = calculatorForm.attr('action');
        const data = calculatorForm.serializeArray();

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data) {
                const result = JSON.parse(data)
                $(".calculator__result").html(result.success.toLocaleString('ru') + " руб");
            }
        });

    });
});

function makeSliderForNumericInput(inputId, range) {
    var depositeAmountInput = $(inputId);
    depositeAmountInput.attr(
        {
            "min": range[0],
            "max": range[1]
        }
    );
    depositeAmountInput.val(range[0]);

    var slider = $("<div class='calculator__slider'></div>").insertAfter(depositeAmountInput).slider({
        min: range[0],
        max: range[1],
        range: "min",
        step: sliderStep,
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