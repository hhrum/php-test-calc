<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="dist/main.css">
    <title>Калькулятор</title>
</head>

<body>
    <header>
        <div class="head">
            <div class="company-logo">
                <img src="src/logo.png" alt="Company Logo">
            </div>
            <div class="company-contacts">
                <p>8-800-100-5005</p>
                <p>+7 (3452) 522-000</p>
            </div>
        </div>
        <div class="nav">
            <a href="#" class="nav__item">Кредитные карты</a>
            <a href="#" class="nav__item current">Вклады</a>
            <a href="#" class="nav__item">Дебетовая карта</a>
            <a href="#" class="nav__item">Страхование</a>
            <a href="#" class="nav__item">Друзья</a>
            <a href="#" class="nav__item">Интернет банк</a>
        </div>
    </header>

    <div class="container">
        <div class="breadcrumbs">
            <div class="breadcrumbs__item"><a href="#">Главная</a></div>
            <div class="breadcrumbs__item"><a href="#">Вклады</a></div>
            <div class="breadcrumbs__item"><a href="#">Калькулятор</a></div>
        </div>
        <div class="calculator">
            <div class="calculator__title">Калькулятор</div>
            <form action="/calc" method="post" class="calculator__form" id="calculatorForm">
                <div class="calculator__input">
                    <label for="date">Дата оформления вклада</label>
                    <input type="text" name="date" id="datepicker" class="calculator__field" autocomplete="off">
                </div>
                <div class="calculator__input">
                    <label for="depositeAmount">Сумма вклада</label>
                    <input type="number" name="depositeAmount" id="depositeAmount" class="calculator__field"
                        value="1000" min="1000" max="30000">
                    <!-- <input type="range" id="depositeAmountRange" value="1000" min="1000" max="30000"> -->
                </div>
                <div class="calculator__input">
                    <label for="depositeAmount">Срок вклада</label>
                    <select name="years" class="calculator__field">
                        <option selected value="1">1 год</option>
                        <option value="2">2 года</option>
                        <option value="3">3 года</option>
                        <option value="4">4 года</option>
                        <option value="5">5 лет</option>
                    </select>
                </div>
                <div class="calculator__input">
                    <label>Пополнение вклада</label>

                    <input type="radio" name="replenishment" id="replenishmentFalse" value="false" checked>
                    <label for="replenishmentFalse">Нет</label>

                    <input type="radio" name="replenishment" id="replenishmentTrue" value="true">
                    <label for="replenishmentTrue">Да</label>
                </div>
                <div class="calculator__input">
                    <label for="depositReplenishmentAmount">Сумма пополнения вклада</label>
                    <input type="number" name="depositReplenishmentAmount" id="depositReplenishmentAmount"
                        class="calculator__field" value="1000" min="1000" max="30000">
                </div>

                <div class="calculator__footer">
                    <button type="submit" class="calculator__submit">
                        Рассчитать
                    </button>
                    <div class="calculator__result"></div>
                </div>
            </form>
        </div>
    </div>

    <footer>
        <div class="nav">
            <a href="#" class="nav__item">Кредитные карты</a>
            <a href="#" class="nav__item active">Вклады</a>
            <a href="#" class="nav__item">Дебетовая карта</a>
            <a href="#" class="nav__item">Страхование</a>
            <a href="#" class="nav__item">Друзья</a>
            <a href="#" class="nav__item">Интернет банк</a>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="dist/bundle.js"></script>
</body>

</html>