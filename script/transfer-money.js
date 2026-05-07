document
  .getElementById("transfer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = getValueFromInput("transfer-number");
    const amount = getValueFromInput("transfer-amount");
    const pin = getValueFromInput("transfer-pin");

    if (accountNumber.length !== 11) {
      alert("Invalid Account Number");
      return;
    }

    if (pin === "1234") {
      const balance = getBalance();
      if (Number(amount) > balance) {
        alert("Insufficient Balance");
        return;
      }

      const newBalance = balance - Number(amount);
      setBalance(newBalance);

      // Add to history
      const container = document.getElementById("history-container");
      const div = document.createElement("div");
      div.classList.add("flex", "justify-between", "items-center", "bg-base-100", "p-4", "rounded-2xl", "shadow-sm");
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-base-200 p-3 rounded-full">
            <img src="./assets/opt-3.png" class="w-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-lg">Transfer Money</h3>
            <p class="text-neutral/50 text-sm">${new Date().toLocaleTimeString()} Today</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-error">-$${amount}</h3>
           <i class="fa-solid fa-ellipsis-vertical text-neutral/30"></i>
        </div>
      `;
      container.appendChild(div);

      alert("Transfer Successful");
    } else {
      alert("Invalid Pin");
    }
  });
