document.getElementById("btn").addEventListener("click", function () {
  let horses = document.querySelectorAll(".horses");
  horses.forEach(function (horse) {
    horse.style.transition = "none";
    let distance = Math.floor(Math.random() * 1000) + 500;
    horse.style.transform = `translateX(0)`;
    setTimeout(function () {
      horse.style.transition = "all 4s ease";
      horse.style.transform = `translateX(${distance}px)`;
    }, 100);
  });

  let finishedHorses = 0; // Bitiş çizgisine ulaşan at sayısı

  function checkRaceStatus() {
    finishedHorses++;
    if (finishedHorses === horses.length) {
      let winnerHorse = null;
      let maxDistance = 0;

      horses.forEach(function (horse) {
        let horseDistance = parseInt(horse.style.transform.split("(")[1]);
        if (horseDistance > maxDistance) {
          maxDistance = horseDistance;
          winnerHorse = horse;
        }
      });

      document.getElementById("btn").innerHTML = "Tekrar Yarış!";

      document.getElementById(
        "winner"
      ).textContent = `Yarışı Kazanan: ${winnerHorse.textContent}`;
    }
  }

  horses.forEach(function (horse) {
    horse.addEventListener("transitionend", checkRaceStatus);
  });
});
