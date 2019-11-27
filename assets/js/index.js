// fermeture du collapse lors du click n'importe ou
$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});
// ouverture de l'overlay au click sur la categorie
function openOverlay(){
  // fermeture d'un ouverlay si ouvert
  document.getElementById('overlay').style.width = '0%';
  document.getElementById('overlay').style.width = '100%';
  //document.getElementsByTagName('A').classList.remove('active');
  document.getElementById('home').classList.remove('active');
  document.getElementById('actuality').classList.add('active');
}
// fermeture de l'overlay au click
function closeOverlay(){
  document.getElementById('overlay').style.width = '0%';
  document.getElementById('actuality').classList.remove('active');
  document.getElementById('home').classList.add('active');
}
// ouverture de la categorie 'actuality'
document.getElementById('actuality').addEventListener('click',openOverlay);
// retour à la categorie 'home'
document.getElementById('home').addEventListener('click',closeOverlay);
// fermeture des overlay
document.getElementById('closebtn').addEventListener('click',closeOverlay);

// date
var now = new Date().getTime();
// année actuelle
var year = new Date().getFullYear();
// date de départ
var countDownDate = new Date('Jan 01, '+year+' 00:00:00').getTime();
// temps entre date départ et aujourd'hui
var distance = -(countDownDate - now);
// calcul du temps pour: jours, heures, minutes and secondes
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// statistiques du génocide
var deadPerYear = 25185;
var deadPerDay = Math.round(deadPerYear / 365);
var deadPerHour = Math.round(deadPerDay / 24);
var deadPerMinute = deadPerDay / 1440 ;
// nombre de mort depuis le ...
var deadPerDayToday = deadPerDay * days;
document.getElementById('timer').innerHTML = deadPerDayToday + '<span class="mort">morts</span>';
document.getElementById('sentens').innerHTML = 'depuis le 1er janvier ' + year;

function refreshStat() {
  document.getElementById('timer').innerHTML = deadPerDayToday + Math.trunc(deadPerHour + minutes * deadPerMinute) + '<span class="mort">morts</span>';
}
// premier appel du compteur
//deadRealTime();
// actualisation toutes les minutes du compteur

setInterval(refreshStat(),100);
