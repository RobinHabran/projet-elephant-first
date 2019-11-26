// fermeture du collapse lors du click n'importe ou
$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});
// ouverture de l'overlay au click sur la categorie
document.getElementById('actuality').onclick = function openOverlay(){
  document.getElementById('overlayActuality').style.width = '100%';
}
// fermeture de l'overlay au click
document.getElementById('closebtn').onclickfunction = function closeOverlay(){
  document.getElementById('overlayActuality').style.width = '0%';
}

function deadRealTime() {
  // date
  var now = new Date().getTime();
  // année actuelle
  var year = new Date().getFullYear();
  // date de départ
  var countDownDate = new Date("Jan 01, 2019 00:00:00").getTime();
  // temps entre date départ et aujourd'hui
  var distance = -(countDownDate - now);
  // statistiques du génocide
  var deadPerDay = 69; var deadPerYear = 25185;
   // calcul du temps pour: jours, heures, minutes and secondes
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   // nombre de mort depuis le ...
   document.getElementById("timer").innerHTML = (days * deadPerDay) + '<span class="mort">morts</span>';
   document.getElementById("sentens").innerHTML = 'depuis le 1er janvier ' + year;
}
// premier appel du compteur
deadRealTime();
// actualisation toutes les minutes du compteur
setInterval(deadRealTime,60000);
