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
    "add-money",
    "cashout",
    "transfer-money",
    "get-bonus",
    "pay-bill",
    "history",
  ];

  // sobaike hide kore dao
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add("hidden");
    }
  }

  // id wala element ta ke show kora
  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.remove("hidden");
  }
}
