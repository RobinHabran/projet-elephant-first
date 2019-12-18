// fermeture du collapse lors du click n'importe ou
$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
  $('[data-toggle="tooltip"]').tooltip();
});
// ouverture de l'overlay au click sur la categorie
function openOverlay(objet){
  // fermeture d'un ouverlay si ouvert
  console.log(objet);
  objet.style.width = '0%';
  objet.style.width = '100%';
  //document.getElementById('myCollapsNavbar').getElementsByTagName('a').classList.remove('active');
  objet.classList.add('active');
}
// fermeture de l'overlay au click
function closeOverlay(){
  document.getElementById('overlay').style.width = '0%';
  document.getElementById('actuality').classList.remove('active');
  //document.getElementById('statistic').classList.remove('active');
  //document.getElementById('organisation').classList.remove('active');
  document.getElementById('home').classList.add('active');
}

function openOneCloseAll(id){
  closeOverlay();
  closeOverlay(id);
}

// timer
function refreshStat() {
  setInterval(function boucle() {
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
    var deadPerYear = 20000;
    var deadPerDay = Math.round(deadPerYear / 365);
    var deadPerHour = Math.round(deadPerDay / 24);
    var deadPerMinute = deadPerDay / 1440 ;
    var deadPerDayToday = deadPerDay * days;
    var deadEverySecond = (seconds * (2.875/60)/3600);
    // calcul en temps réel
    var total = deadPerMinute*minutes + deadPerHour*hours + deadPerDay*days;
    total += deadEverySecond;
    // nombre de mort depuis le ...
    document.getElementById('timer').innerHTML = Math.trunc(total) + '<span class="mort">morts</span>';
    document.getElementById('sentens').innerHTML = 'depuis le 1er janvier ' + year;

    // timer every 1 minute
  },1000);
};

// appels
  // ouverture de la categorie 'actuality'
  document.getElementById('actuality').addEventListener('click',openOverlay(document.getElementById('actuality')));
  // retour à la categorie 'home'
  document.getElementById('home').addEventListener('click',closeOverlay());
  // fermeture des overlay
  document.getElementById('closebtn').addEventListener('click',closeOverlay());
  // appel du 'compteur
  refreshStat();
