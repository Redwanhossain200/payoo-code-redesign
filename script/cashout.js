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
      div.className = "bg-white p-5 rounded-[2rem] flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100";
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-orange-100 p-3 rounded-2xl">
            <img src="./assets/opt-2.png" class="w-8 h-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-neutral text-sm">Cashout: ${cashoutNumber}</h3>
            <p class="text-slate-400 text-[10px] font-medium mt-0.5">${new Date().toLocaleTimeString()} • Today</p>
          </div>
        </div>
        <div class="text-right">
          <h3 class="font-black text-red-500">-$${cashoutAmount}</h3>
          <p class="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">Withdrawal</p>
        </div>
      `;
      container.prepend(div);
      alert("Cashout Successful");
    } else {
      alert("Invalid Pin");
      return;
    }
  });
