var sliderMedbLon = document.getElementById("storlek");
var sliderNettoMottagare = document.getElementById("nettomottagare");
var outputStorlek = document.getElementById("visaStorlek");
var outputResultat = document.getElementById("resultat");


sliderMedbLon.oninput = function () {
    outputStorlek.innerHTML = " Vald storlek på medborgarlön: " + sliderMedbLon.value + " Sek/Mån";
    var storlekMedborgarlon = sliderMedbLon.value;
    var totalKostnad = (storlekMedborgarlon * sliderNettoMottagare.value * 12 / 1000000000).toFixed(2);
    var nettoMottagare = (sliderNettoMottagare.value / 1000000).toFixed(2);
    outputResultat.innerHTML = "Enligt valt scenario ska ca <b>" + nettoMottagare + "</b> miljoner människor vara nettomottagare av en medborgarlön på <b>" + storlekMedborgarlon + "</b> Sek/mån.<br><br>" + "Totalkostnaden blir<b>: " + totalKostnad + "</b> Miljarder Sek/år" + "<br><br>" + "Detta utgör ca <b>" + (totalKostnad * 100 / 939.6).toFixed(2) + "%</b> av statens totala budget för 2018." + "<br><br>Om vi skrotar försörjningsstödet (ca <b>11</b> miljarder), arbetsförmedlingen (ca <b>64</b> miljarder), statens reella kostnader för studiemedlen (ca <b>17</b> miljarder) och de momsrabatter som idag existerar (ca <b>50</b> miljarder) så erhåller vi på finansieringssidan: <b>142</b> miljarder Sek.<br><br>Dessa <b>142</b> miljarder skulle finansiera <b>" + (100 * 142 / totalKostnad).toFixed(2) + "%</b> av reformen.";
};

sliderNettoMottagare.oninput = function () {
    var storlekMedborgarlon = sliderMedbLon.value;
    var totalKostnad = (storlekMedborgarlon * sliderNettoMottagare.value * 12 / 1000000000).toFixed(2);
    var nettoMottagare = (sliderNettoMottagare.value / 1000000).toFixed(2);
    outputResultat.innerHTML = "Enligt valt scenario ska ca <b>" + nettoMottagare + "</b> miljoner människor vara nettomottagare av en medborgarlön på <b>" + storlekMedborgarlon + "</b> Sek/mån.<br><br>" + "Totalkostnaden blir<b>: " + totalKostnad + "</b> Miljarder Sek/år" + "<br><br>" + "Detta utgör ca <b>" + (totalKostnad * 100 / 939.6).toFixed(2) + "%</b> av statens totala budget för 2018." + "<br><br>Om vi skrotar försörjningsstödet (ca <b>11</b> miljarder), arbetsförmedlingen (ca <b>64</b> miljarder), statens reella kostnader för studiemedlen (ca <b>17</b> miljarder) och de momsrabatter som idag existerar (ca <b>50</b> miljarder) så erhåller vi på finansieringssidan: <b>142</b> miljarder Sek.<br><br>Dessa <b>142</b> miljarder skulle finansiera <b>" + (100 * 142 / totalKostnad).toFixed(2) + "%</b> av reformen.";
};