function incomeExpenseCalculate() {
    const incomeInputField = document.getElementById('income-input-field');
    const incomeInputText = parseFloat(incomeInputField.value);
    const foodInputField = document.getElementById('food-expense-field');
    const foodInputText = parseFloat(foodInputField.value);
    const rentInputField = document.getElementById('rent-expense-field');
    const rentInputText = parseFloat(rentInputField.value);
    const othersInputField = document.getElementById('others-expense-field');
    const othersInputText = parseFloat(othersInputField.value);
    const totalExpense = foodInputText + rentInputText + othersInputText;
    const balance = incomeInputText - totalExpense;

    // not a number NAN handle
    if (isNaN(balance)) {

    }
    else {
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('balance').innerText = balance;
    }


    // reset input field
    // incomeInputField.value = '';
    foodInputField.value = '';
    rentInputField.value = '';
    othersInputField.value = '';
}

function savingAmmountInput() {
    const savingAmmountField = document.getElementById('saving-input');
    const savingAmmountText = parseInt(savingAmmountField.value) / 100;
    savingAmmountField.value = '';
    return savingAmmountText;
}

function incomeSaving() {
    const incomeInputField = document.getElementById('income-input-field');
    const incomeInputText = parseFloat(incomeInputField.value);

    const savingAmmount = incomeInputText * savingAmmountInput();
    // not a number NAN handle
    if (isNaN(savingAmmount)) {

    }
    else {
        document.getElementById('saving-ammount').innerText = savingAmmount;
    }

    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);

    if (balanceText != 0) {
        const remainingBalance = balanceText - savingAmmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }

    // reset input field
    incomeInputField.value = '';

}

document.getElementById('calculate-button').addEventListener('click', function () {
    incomeExpenseCalculate();
});

document.getElementById('save-button').addEventListener('click', function () {
    incomeSaving();
});