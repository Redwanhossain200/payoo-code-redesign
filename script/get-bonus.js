document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const coupon = getValueFromInput("coupon-code");

    if (coupon === "PAYOO2026") {
      const bonusAmount = 500;
      const balance = getBalance();
      const newBalance = balance + bonusAmount;
      setBalance(newBalance);

      // Add to history
      const container = document.getElementById("history-container");
      const div = document.createElement("div");
      div.className = "bg-white p-5 rounded-[2rem] flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100";
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-purple-100 p-3 rounded-2xl">
            <img src="./assets/opt-4.png" class="w-8 h-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-neutral text-sm">Reward Claimed</h3>
            <p class="text-slate-400 text-[10px] font-medium mt-0.5">${new Date().toLocaleTimeString()} • Today</p>
          </div>
        </div>
        <div class="text-right">
          <h3 class="font-black text-green-500">+$${bonusAmount}</h3>
          <p class="text-[9px] text-slate-300 font-bold uppercase tracking-tighter">Bonus</p>
        </div>
      `;
      container.prepend(div);

      alert(`Congratulations! You've got $${bonusAmount} bonus.`);
    } else {
      alert("Invalid Coupon Code");
    }
  });
