$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js",

    function (data) {
        $('#usd').html((data.Valute.USD.Value < data.Valute.USD.Previous ? '<i class="fas fa-long-arrow-alt-down"></i>' : '<i class="fas fa-long-arrow-alt-up"></i>') + '<i class="fas fa-dollar-sign"></i>' + data.Valute.USD.Value.toFixed(2) + ' <i class="fas fa-ruble-sign"></i>');
    });