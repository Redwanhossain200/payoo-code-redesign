document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1- get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Amount");
    return;
  }

  // 2- get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");
  const currentBalance = getBalance();

  // 4- Calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
      setBalance(newBalance);

      // Add to history
      const container = document.getElementById("history-container");
      const div = document.createElement("div");
      div.classList.add("flex", "justify-between", "items-center", "bg-base-100", "p-4", "rounded-2xl", "shadow-sm");
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-base-200 p-3 rounded-full">
            <img src="./assets/opt-2.png" class="w-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-lg">Cashout to ${cashoutNumber}</h3>
            <p class="text-neutral/50 text-sm">${new Date().toLocaleTimeString()} Today</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-error">-$${cashoutAmount}</h3>
           <i class="fa-solid fa-ellipsis-vertical text-neutral/30"></i>
        </div>
      `;
      container.appendChild(div);
      alert("Cashout Successful");
    } else {
      alert("Invalid Pin");
      return;
    }
  });
