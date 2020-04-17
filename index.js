currency = function () {
  const curren1 = document.getElementById("curren1"),
    curren2 = document.getElementById("curren2"),
    tmp = curren1.selectedIndex;
  curren1.selectedIndex = curren2.selectedIndex;
  curren2.selectedIndex = tmp;
  convertNBU();
};

convertNBU = function () {
  const curren1 = document.getElementById("curren1"),
    curren2 = document.getElementById("curren2"),
    input1 = document.getElementById("res_curren1"),
    input2 = document.getElementById("res_curren2");
  var res,
    k1 = window.kurs[curren1.value],
    k2 = window.kurs[curren2.value];
  res = (k1 * res_curren1.value) / k2;
  input2.value = res.toFixed(2);
};

showConvert = function (cc) {
  if (cc == undefined) cc = ["USD", "EUR", "PLN"];
  cc.push("UAN");
  var ajax = new XMLHttpRequest();
  ajax.open(
    "GET",
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  ajax.responseType = "json";
  ajax.onload = function () {
    window.kurs = { UAN: 1 };
    for (var i = 0; i < this.response.length; i++) {
      kurs[this.response[i].cc] = this.response[i].rate;
    }
    var s = "";
    for (var i = 0; i < cc.length; i++)
      s += '<option value="' + cc[i] + '">' + cc[i] + "</option>";
    document.getElementById("curren1").innerHTML = s;
    document.getElementById("curren2").innerHTML = s;
  };
  ajax.send(null);
};

showConvert(["USD", "EUR", "PLN", "CAD"]);

//Calculation

function calc() {
  transport = document.getElementById("transport").value;
  switch (transport) {
    case "truck":
      price = 1.3;
      break;
    case "plane":
      price = 3;
      break;
    case "ship":
      price = 0.7;
      break;
    default:
      price = 1;
      break;
  }

  weight = document.getElementById("weight").value;
  distance = document.getElementById("distance").value;

  if (weight == "") {
    alert("Put cargo weight");
  } else if (distance == "") {
    alert("Put carrier distance");
  } else {
    rate = parseFloat(weight) * parseFloat(distance);
    document.getElementById("rate").innerHTML =
      "Basic rate: " + rate + " ton*km";
    sum = rate * price;
    document.getElementById("summ").innerHTML = "Total Price: " + sum + "UAH";
  }
}

$(function () {
  $(".menuBurger").on("click", function () {
    $(".menu").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
});
