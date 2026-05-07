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
      div.className = "bg-white p-5 rounded-[2rem] flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100";
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-blue-100 p-3 rounded-2xl">
            <img src="./assets/opt-1.png" class="w-8 h-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-neutral text-sm">Top Up: ${bankAccount}</h3>
            <p class="text-slate-400 text-[10px] font-medium mt-0.5">${new Date().toLocaleTimeString()} • Today</p>
          </div>
        </div>
        <div class="text-right">
          <h3 class="font-black text-green-500">+$${amount}</h3>
          <p class="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">Success</p>
        </div>
      `;
      container.prepend(div);
      alert(`Add Money Success From ${bankAccount}`);
    } else {
      alert("Invalid Pin");
    }
});
