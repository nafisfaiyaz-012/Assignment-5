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

    //for call button it will run this
    if (event.target.classList.contains("btn-call")) {
      //showing alert
      const serviceName =
        event.target.parentNode.parentNode.childNodes[5].innerText;

      const serviceNumber =
        event.target.parentNode.parentNode.childNodes[7].innerText;

      //reducing coin
      const coinCount = Number(document.getElementById("coin-count").innerText);
      if (coinCount >= 20) {
        alert(" 📞 Calling " + serviceName + " " + serviceNumber);
        const newCoinCount = coinCount - 20;
        document.getElementById("coin-count").innerText = newCoinCount;
      } else {
        alert("😭 Insufficient Coin.");
      }
    }
    
  });
