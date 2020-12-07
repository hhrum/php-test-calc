<?php

$j = file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'dist' . DIRECTORY_SEPARATOR . 'manifest.json'); // в примере все файлы в корне
$manifest = json_decode($j, true);

echo "<pre>";
print_r(time());
echo "</pre>";

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="<?php echo $manifest['main.css']; ?>">
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
            <form action="/calc.php" method="post" class="calculator__form" id="calculatorForm">
                <div class="calculator__input">
                    <label for="date">Дата оформления вклада</label>
                    <input type="text" name="date" id="datepicker" class="calculator__field" autocomplete="off">
                </div>
                <div class="calculator__input">
                    <label for="depositeAmount">Сумма вклада</label>
                    <input type="number" name="depositeAmount" id="depositeAmount" class="calculator__field" value="1000">
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

                    <input type="radio" name="isReplenishment" id="replenishmentFalse" value="false" checked>
                    <label for="replenishmentFalse">Нет</label>

                    <input type="radio" name="isReplenishment" id="replenishmentTrue" value="true">
                    <label for="replenishmentTrue">Да</label>
                </div>
                <div class="calculator__input">
                    <label for="depositReplenishmentAmount">Сумма пополнения вклада</label>
                    <input type="number" name="depositReplenishmentAmount" id="depositReplenishmentAmount" class="calculator__field">
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

    <script src="<?php echo $manifest['main.js']; ?>"></script>
</body>

</html>