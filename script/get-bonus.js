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
      div.classList.add("flex", "justify-between", "items-center", "bg-base-100", "p-4", "rounded-2xl", "shadow-sm");
      div.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-base-200 p-3 rounded-full">
            <img src="./assets/opt-4.png" class="w-8" alt="" />
          </div>
          <div>
            <h3 class="font-bold text-lg">Get Bonus</h3>
            <p class="text-neutral/50 text-sm">${new Date().toLocaleTimeString()} Today</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-success">+$${bonusAmount}</h3>
           <i class="fa-solid fa-ellipsis-vertical text-neutral/30"></i>
        </div>
      `;
      container.appendChild(div);

      alert(`Congratulations! You've got $${bonusAmount} bonus.`);
    } else {
      alert("Invalid Coupon Code");
    }
  });
