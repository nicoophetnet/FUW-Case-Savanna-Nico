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

let allesCorrectIngevuld = true;

// control functions

function controleerAankomstDate() {
  let today = new Date();
  if (aankomstDate < today.getDate()) {
    document.getElementById("aankomst_error").innerHTML =
      "Kies een dag in de toekomst!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("aankomst_error").innerHTML = "";
  }
}

function controleerVertrekDate() {
  if (aankomstDate >= vertrekDate) {
    document.getElementById("vertrek_error").innerHTML =
      "Kies voor een latere dag!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("vertrek_error").innerHTML = "";
  }
}

function controleerVoorwaardenVoornaam() {
  if (voornaamTxt.length < 2) {
    document.getElementById("voornaam_error").innerHTML =
      "Voornaam moet minstens 2 karakters lang zijn!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("voornaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenAchternaam() {
  if (voornaamTxt.length < 2) {
    document.getElementById("achternaam_error").innerHTML =
      "Achternaam moet minstens 2 karakters lang zijn!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("achternaam_error").innerHTML = "";
  }
}

function controleerVoorwaardenEmail() {
  let regEx = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
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
  if (straatnaamTxt.length < 2) {
    document.getElementById("straatnaam_error").innerHTML =
      "Straatnaam moet minstens 2 karakters lang zijn!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("straatnaam_error").innerHTML = "";
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
  if (woonplaatsTxt.length < 2) {
    document.getElementById("plaats_error").innerHTML =
      "Woonplaats moet minstens 2 karakters lang zijn!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("plaats_error").innerHTML = "";
  }
}

function controleerVoorwaardenLand() {
  if (landTxt.length < 2) {
    document.getElementById("land_error").innerHTML =
      "Land moet minstens 2 karakters lang zijn!";
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
  aantalBezoekers = document.getElementById("achternaam").value;

  voornaamTxt = document.getElementById("voornaam").value;
  achternaamTxt = document.getElementById("aantalbezoekers").value;
  emailTxt = document.getElementById("email").value;
  emailHerhaalTxt = document.getElementById("emailherhaal").value;
  telTxt = document.getElementById("telefoonnr").value;

  straatnaamTxt = document.getElementById("straatnaam").value;
  straatnummerTxt = document.getElementById("straatnummer").value;
  busTxt = document.getElementById("bus").value;
  postcodeTxt = document.getElementById("postcode").value;
  woonplaatsTxt = document.getElementById("plaats").value;
  landTxt = document.getElementById("land").value;

  let allesCorrectIngevuld = true;

  if (logementKeuze == 0) {
    document.getElementById("logement_error").innerHTML = "Maak een keuze...";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("logement_error").innerHTML = "";
  }

  if (voornaamTxt.length == 0) {
    document.getElementById("voornaam_error").innerHTML =
      "Vul hier je voornaam in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenVoornaam();
  }

  if (achternaamTxt.length == 0) {
    document.getElementById("achternaam").innerHTML =
      "Vul hier je achternaam in.";
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
      "Vul hier telefoonnummer in a.u.b.";
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
    document.getElementById("land_error").innerHTML = "Vul hier uw land in.";
    allesCorrectIngevuld = false;
  } else {
    controleerVoorwaardenLand();
  }
}
// send to mail
if (allesCorrectIngevuld) {
  let link =
    "mailto:" +
    encodeURIComponent("hello@twijngaardhof@testmail.be;") +
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
