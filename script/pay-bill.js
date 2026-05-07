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
      div.className = "bg-white p-5 rounded-[2rem] flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100";
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-red-100 p-3 rounded-2xl">
            <img src="./assets/opt-5.png" class="w-8 h-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-neutral text-sm">${biller}</h3>
            <p class="text-slate-400 text-[10px] font-medium mt-0.5">${new Date().toLocaleTimeString()} • Today</p>
          </div>
        </div>
        <div class="text-right">
          <h3 class="font-black text-red-500">-$${amount}</h3>
          <p class="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">Paid</p>
        </div>
      `;
      container.prepend(div);

      alert(`${biller} Payment Successful`);
    } else {
      alert("Invalid Pin");
    }
  });
