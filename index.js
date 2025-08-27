document
  .getElementById("all-card-container")
  .addEventListener("click", function (event) {
    //for heart button it will run this
    if (event.target.classList.contains("heart-btn")) {
      const heartCounter = Number(
        document.getElementById("heart-counter").innerText
      );

      const newHeartCounter = heartCounter + 1;

      document.getElementById("heart-counter").innerText = newHeartCounter;
    }

    
  });
