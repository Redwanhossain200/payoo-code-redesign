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
      div.className = "bg-white p-5 rounded-[2rem] flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100";
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-green-100 p-3 rounded-2xl">
            <img src="./assets/opt-3.png" class="w-8 h-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-neutral text-sm">Sent to: ${accountNumber}</h3>
            <p class="text-slate-400 text-[10px] font-medium mt-0.5">${new Date().toLocaleTimeString()} • Today</p>
          </div>
        </div>
        <div class="text-right">
          <h3 class="font-black text-red-500">-$${amount}</h3>
          <p class="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">Sent</p>
        </div>
      `;
      container.prepend(div);

      alert("Transfer Successful");
    } else {
      alert("Invalid Pin");
    }
  });
