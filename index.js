//call button functionality using event delegation
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
      const serviceName =
        event.target.parentNode.parentNode.childNodes[5].innerText;

      const serviceNumber =
        event.target.parentNode.parentNode.childNodes[7].innerText;

      //showing both alert and implementing reducing coin condition
      const coinCount = Number(document.getElementById("coin-count").innerText);

      if (coinCount >= 20) {
        //showing alert for calling
        alert(" 📞 Calling " + serviceName + " " + serviceNumber);

        const newCoinCount = coinCount - 20;

        document.getElementById("coin-count").innerText = newCoinCount;
        //creating the history element
        const newHistoryElement = document.createElement("div");

        newHistoryElement.innerHTML = `
        <div class="bg-[#fafafa] p-4 flex justify-between items-center rounded-3xl my-5">
                        <div>
                            <p class="font-semibold">${
                              event.target.parentNode.parentNode.childNodes[3]
                                .innerText
                            }</p>
                            <p>${serviceNumber}</p>
                        </div>
                        <div>
                            ${new Date().toLocaleTimeString()}
                        </div>
        </div>
        `;
        document.getElementById("call-history").appendChild(newHistoryElement);
      } else {
        //showing alert for insufficient coin
        alert("😭 Insufficient Coin.");
      }
    }
  });

//history clear button functionality
document.getElementById("btn-clear").addEventListener("click", function () {
  document.getElementById("call-history").innerHTML = "";
});
