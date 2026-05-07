document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const biller = document.getElementById("pay-bill-biller").value;
    const accountNumber = getValueFromInput("pay-bill-number");
    const amount = getValueFromInput("pay-bill-amount");
    const pin = getValueFromInput("pay-bill-pin");

    if (biller === "Select back") {
      alert("Please select a biller");
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
            <img src="./assets/opt-5.png" class="w-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-lg">${biller}</h3>
            <p class="text-neutral/50 text-sm">${new Date().toLocaleTimeString()} Today</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-error">-$${amount}</h3>
           <i class="fa-solid fa-ellipsis-vertical text-neutral/30"></i>
        </div>
      `;
      container.appendChild(div);

      alert(`${biller} Payment Successful`);
    } else {
      alert("Invalid Pin");
    }
  });
