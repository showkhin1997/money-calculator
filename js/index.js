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
    document.getElementById('total-expense').innerText = totalExpense;
    document.getElementById('balance').innerText = balance;
    console.log(totalExpense);
}

document.getElementById('calculate-button').addEventListener('click', function () {
    incomeExpenseCalculate()
});