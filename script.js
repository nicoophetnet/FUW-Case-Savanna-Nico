"use strict";

// global variables

let aankomstDate;
let vertrekDate;
let logementKeuze;
let aantalBezoekers;

let voornaamTxt;
let achternaamTxt;
let emailTxt;
let emailHerhaalTxt;
let telTxt;

let straatnaamTxt;
let straatnummerTxt;
let busTxt;
let postcodeTxt;
let woonplaatsTxt;
let landTxt;

let voorwaarden;

let allesCorrectIngevuld;

// control functions

function controleerVoorwaardenAankomstDate() {
  let today = Date.parse(new Date());
  let arrival = Date.parse(aankomstDate);

  if (arrival < today) {
    document.getElementById("aankomst_error").innerHTML =
      "Kies een dag in de toekomst!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("aankomst_error").innerHTML = "";
  }
}

function controleerVoorwaardenVertrekDate() {
  let arrival = Date.parse(aankomstDate);
  let departure = Date.parse(vertrekDate);

  if (arrival >= departure) {
    document.getElementById("vertrek_error").innerHTML =
      "Kies voor een latere dag!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("vertrek_error").innerHTML = "";
  }
}

function controleerVoorwaardenVoornaam() {
  let regEx = /^[A-ZÀ-ÿa-z']*[\s]*[A-ZÀ-ÿa-z'\s]*[a-z]$/gm;

  if (regEx.test(voornaamTxt) == false) {
    document.getElementById("voornaam_error").innerHTML =
      "Gelieve een geldige voornaam op te geven. Minstens 2 letters en geen cijfers of vreemde tekens!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("voornaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenAchternaam() {
  let regEx = /^[A-ZÀ-ÿa-z']*[\s]*[A-ZÀ-ÿa-z'\s]*[a-z]$/gm;

  if (regEx.test(achternaamTxt) == false) {
    document.getElementById("achternaam_error").innerHTML =
      "Gelieve een geldige achternaam op te geven. Minstens 2 letters en geen cijfers of vreemde tekens!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("achternaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenEmail() {
  let regEx = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/gm;

  if (regEx.test(emailTxt) == false) {
    document.getElementById("email_error").innerHTML =
      "Gelieve een correct e-mailadres invullen!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("email_error").innerHTML = "";
  }
}

function controleerVoorwaardenEmailHerhaal() {
  if (emailTxt != emailHerhaalTxt) {
    document.getElementById("emailherhaal_error").innerHTML =
      "De e-mailadressen komen niet overeen!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("emailherhaal_error").innerHTML = "";
  }
}

function controleerVoorwaardenTelefoonnr() {
  let regEx =
    /^[\+]?[\s]?[0-9]{2}[\s]?[0-9]{1,3}[\/]?[\s]?[0-9]{2,3}[\s]?[0-9]{1,3}[\s]?[0-9]{1,3}[\s]?[0-9]{1,3}$/;

  if (regEx.test(telTxt) == false) {
    document.getElementById("telefoonnr_error").innerHTML =
      "Gelieve een correct telefoonnummer invullen!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("telefoonnr_error").innerHTML = "";
  }
}

function controleerVoorwaardenStraatnaam() {
  let regEx = /^[a-zÀ-ÿA-Z\s\-]{2,45}$/gm;

  if (regEx.test(straatnaamTxt) == false) {
    document.getElementById("straat_error").innerHTML =
      "Gelieve een geldige straat op te geven. Minstens 2 letters en geen cijfers of vreemde tekens!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("straat_error").innerHTML = "";
  }
}

function controleerVoorwaardenStraatnummer() {
  if (straatnummerTxt.search(/^\d/) == -1) {
    document.getElementById("straatnummer_error").innerHTML =
      "Minstens 1 cijfer invullen!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("straatnummer_error").innerHTML = "";
  }
}

function controleerVoorwaardenPostcode() {
  if (postcodeTxt.search(/^[1-9]\d{3}$/) == -1) {
    document.getElementById("postcode_error").innerHTML =
      "Gelieve een geldige postcode invullen!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("postcode_error").innerHTML = "";
  }
}

function controleerVoorwaardenWoonplaats() {
  let regEx = /^[a-zÀ-ÿA-Z\s]{2,45}$/gm;

  if (regEx.test(woonplaatsTxt) == false) {
    document.getElementById("plaats_error").innerHTML =
      "Gelieve een geldige woonplaats op te geven. Minstens 2 letters en geen cijfers of vreemde tekens!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("plaats_error").innerHTML = "";
  }
}

function controleerVoorwaardenLand() {
  let regEx = /^[a-zÀ-ÿA-Z\s]{2,45}$/gm;

  if (regEx.test(landTxt) == false) {
    document.getElementById("land_error").innerHTML =
      "Gelieve een geldig land op te geven. Minstens 2 letters en geen cijfers of vreemde tekens!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("land_error").innerHTML = "";
  }
}

// send function
function verstuur() {
  aankomstDate = document.getElementById("aankomst").value;
  vertrekDate = document.getElementById("vertrek").value;
  logementKeuze = document.getElementById("logement").value;
  aantalBezoekers = document.getElementById("aantalbezoekers").value;

  voornaamTxt = document.getElementById("voornaam").value;
  achternaamTxt = document.getElementById("achternaam").value;
  emailTxt = document.getElementById("email").value;
  emailHerhaalTxt = document.getElementById("emailherhaal").value;
  telTxt = document.getElementById("telefoonnr").value;

  straatnaamTxt = document.getElementById("straat").value;
  straatnummerTxt = document.getElementById("straatnummer").value;
  busTxt = document.getElementById("bus").value;
  postcodeTxt = document.getElementById("postcode").value;
  woonplaatsTxt = document.getElementById("plaats").value;
  landTxt = document.getElementById("land").value;

  voorwaarden = document.getElementById("voorwaarden");

  allesCorrectIngevuld = true;

  if (aankomstDate == 0) {
    document.getElementById("aankomst_error").innerHTML = "Maak een keuze...";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenAankomstDate();
  }

  if (vertrekDate == 0) {
    document.getElementById("vertrek_error").innerHTML = "Maak een keuze...";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("vertrek_error").innerHTML = "";
    controleerVoorwaardenVertrekDate();
  }

  if (logementKeuze == 0) {
    document.getElementById("logement_error").innerHTML = "Maak een keuze...";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("logement_error").innerHTML = "";
  }

  if (aantalBezoekers == 0) {
    document.getElementById("aantalbezoekers_error").innerHTML =
      "Gelieve het aantal bezoekers aan te geven.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("aantalbezoekers_error").innerHTML = "";
  }

  if (voornaamTxt.length == 0) {
    document.getElementById("voornaam_error").innerHTML =
      "Vul hier uw voornaam in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenVoornaam();
  }

  if (achternaamTxt.length == 0) {
    document.getElementById("achternaam_error").innerHTML =
      "Vul hier uw achternaam in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenAchternaam();
  }

  if (emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML =
      "Vul hier uw e-mail adres in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenEmail();
  }

  if (emailHerhaalTxt.length == 0) {
    document.getElementById("emailherhaal_error").innerHTML =
      "Vul hier uw e-mail adres opnieuw in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenEmailHerhaal();
  }

  if (telTxt.length == 0) {
    document.getElementById("telefoonnr_error").innerHTML =
      "Vul hier uw telefoonnummer in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenTelefoonnr();
  }

  if (straatnaamTxt.length == 0) {
    document.getElementById("straat_error").innerHTML =
      "Vul hier de naam van uw straat in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenStraatnaam();
  }

  if (straatnummerTxt.length == 0) {
    document.getElementById("straatnummer_error").innerHTML =
      "Vul hier uw straatnummer in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenStraatnummer();
  }

  if (postcodeTxt.length == 0) {
    document.getElementById("postcode_error").innerHTML =
      "Vul hier uw postcode in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenPostcode();
  }

  if (woonplaatsTxt.length == 0) {
    document.getElementById("plaats_error").innerHTML =
      "Vul hier uw woonplaats in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenWoonplaats();
  }

  if (landTxt.length == 0) {
    document.getElementById("land_error").innerHTML =
      "Vul hier de naam van uw land in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenLand();
  }

  if (voorwaarden.checked == false) {
    document.getElementById("voorwaarden_error").innerHTML =
      "U bent verplicht het regelement en de voorwaarden te lezen en akkoord te gaan.";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("voorwaarden_error").innerHTML = "";
  }

  // send to mail
  if (allesCorrectIngevuld) {
    let link =
      "mailto:" +
      encodeURIComponent("hello@twijngaardhof@testmail.be;") +
      "?cc=" +
      encodeURIComponent(document.getElementById("email").value) +
      "&subject=" +
      encodeURIComponent("Booking 't Wijngaardhof") +
      "&body=" +
      "Aankomst datum: " +
      encodeURIComponent(aankomstDate) +
      encodeURIComponent("\r\n\n") +
      "Vertrek datum: " +
      encodeURIComponent(vertrekDate) +
      encodeURIComponent("\r\n\n") +
      "Keuze logement: " +
      encodeURIComponent(logementKeuze) +
      encodeURIComponent("\r\n\n") +
      "Aantal personen: " +
      encodeURIComponent(aantalBezoekers) +
      encodeURIComponent("\r\n\n") +
      "voornaam: " +
      encodeURIComponent(voornaamTxt) +
      encodeURIComponent("\r\n\n") +
      "achternaam: " +
      encodeURIComponent(achternaamTxt) +
      encodeURIComponent("\r\n\n") +
      "email:" +
      encodeURIComponent(emailTxt) +
      encodeURIComponent("\r\n\n") +
      "telefoonnummer: " +
      encodeURIComponent(telTxt) +
      encodeURIComponent("\r\n\n") +
      "straat: " +
      encodeURIComponent(straatnaamTxt) +
      encodeURIComponent("\r\n\n") +
      "adres gegevens:" +
      encodeURIComponent(straatnaamTxt) +
      encodeURIComponent(" ") +
      encodeURIComponent(straatnummerTxt) +
      encodeURIComponent(" ") +
      encodeURIComponent(busTxt) +
      encodeURIComponent("\r\n\n") +
      encodeURIComponent(woonplaatsTxt) +
      encodeURIComponent(" ") +
      encodeURIComponent(postcodeTxt) +
      encodeURIComponent(" ") +
      encodeURIComponent(landTxt);
    window.location.href = link;
  }
}
