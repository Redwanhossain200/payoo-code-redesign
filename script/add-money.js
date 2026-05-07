document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1- Bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select back") {
    alert("Please select a bank");
    return;
  }
  // 2- get Bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid acc no");
    return;
  }

  // 3- get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
      setBalance(newBalance);

      // Add to history
      const container = document.getElementById("history-container");
      const div = document.createElement("div");
      div.classList.add("flex", "justify-between", "items-center", "bg-base-100", "p-4", "rounded-2xl", "shadow-sm");
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-base-200 p-3 rounded-full">
            <img src="./assets/opt-1.png" class="w-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-lg">Add Money from ${bankAccount}</h3>
            <p class="text-neutral/50 text-sm">${new Date().toLocaleTimeString()} Today</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-success">+$${amount}</h3>
           <i class="fa-solid fa-ellipsis-vertical text-neutral/30"></i>
        </div>
      `;
      container.appendChild(div);
      alert(`Add Money Success From ${bankAccount}`);
    } else {
      alert("Invalid Pin");
    }
});
