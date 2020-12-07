<?php

if (
    !isset($_POST)
    || !isset($_POST['date'])
    || !isset($_POST['depositeAmount'])
    || !isset($_POST['years'])
    || !isset($_POST['isReplenishment'])
    || !isset($_POST['depositReplenishmentAmount'])
) die("Ошибка входных данных");

extract($_POST);

$bankPercent = 0.1;

$summ = $depositeAmount;
$replenishment =  $isReplenishment == "true" ? $depositReplenishmentAmount : 0;
$currentDate = strtotime($date); // <-- timestamp value

for ($i = 0; $i < $years; $i++) {

    for ($j = 0; $j < 12; $j++) {
        $lastSumm = $summ;
        $currentDate += 60 * 60 * 24 * date("t", $currentDate);

        $summ = CapitalizationOfInterestInTheMonth($bankPercent, $currentDate, $lastSumm, $replenishment);
    }
}

function CapitalizationOfInterestInTheMonth($percent, $currentDate, $lastMonthSumm, $replenishment)
{
    $daysInMonth = date("t", $currentDate);
    $daysInYear = date('L', $currentDate) ? 366 : 365;

    $currentMonthSumm = $lastMonthSumm + ($lastMonthSumm + $replenishment) * $daysInMonth * ($percent / $daysInYear);
    // $currentMonthSumm = $lastMonthSumm + $replenishment + $lastMonthSumm * $daysInMonth * ($percent / $daysInYear);

    return $currentMonthSumm;
}

$result = [
    "success" => round($summ, 2)
];

echo json_encode($result);

die();