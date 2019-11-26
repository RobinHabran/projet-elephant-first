// ouverture de l'overlay
document.getElementById('actuality').onclick = function(){
  document.getElementById('overlayActuality').style.width = '100%';
}
// fermeture de l'overlay
document.getElementsByClassName('closebtn').onclick = function(){
  document.getElementById('overlayActuality').style.width = '0';
}

// Set the date we're counting down to
var now = new Date().getTime();
var countDownDate = new Date("Jan 01, 2019 00:00:00").getTime();
var x = setInterval(function() {
  // Get today's date and time

  var distance = -(countDownDate - now);
   // Time calculations for days, hours, minutes and seconds
   var year = new Date().getFullYear()
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   var deadPerDay = 69; var deadPerYear = 25185;
   // nombre de mort depuis le ...
   document.getElementById("timer").innerHTML = (days * deadPerDay) + '<span class="mort">morts</span>';
   document.getElementById("sentens").innerHTML = 'depuis le 1er janvier ' + year;
}, 1000);
