// console.log("Machine Added");

// machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}
// machine -> balance()
function getBalance() {
  const balanceAmount = document.getElementById("balance");
  const balance = balanceAmount.innerText;
  console.log("Current Balance", Number(balance));
  return Number(balance);
}

// machine value -> set balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// machine id > hide all > Show id
function showOnly(id) {
  const sections = [
    "main-home",
    "add-money",
    "cashout",
    "transfer-money",
    "get-bonus",
    "pay-bill",
    "history",
  ];

  const targetId = id === "home" ? "main-home" : id;

  // sobaike hide kore dao
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add("hidden");
      section.classList.remove("section-transition");
    }
  }

  // id wala element ta ke show kora
  const selected = document.getElementById(targetId);
  if (selected) {
    selected.classList.remove("hidden");
    selected.classList.add("section-transition");
  }

  // Update Bottom Nav Icons (UI Only)
  updateNavUI(id);
}

function updateNavUI(id) {
  const navButtons = document.querySelectorAll("nav button");
  navButtons.forEach((btn) => {
    const btnId = btn.getAttribute("onclick").match(/'([^']+)'/)[1];
    const iconDiv = btn.querySelector("div");
    const span = btn.querySelector("span");

    if (btnId === id) {
      btn.classList.add("text-primary");
      btn.classList.remove("text-slate-400");
      if (iconDiv) iconDiv.classList.add("bg-primary/10");
    } else {
      btn.classList.remove("text-primary");
      btn.classList.add("text-slate-400");
      if (iconDiv) iconDiv.classList.remove("bg-primary/10");
    }
  });
}
