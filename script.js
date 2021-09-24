// pegar componente por ID
const transactionsUl = document.querySelector('#transactions');
const moneyPlusDisplay = document.querySelector('#money-plus');
const moneyMinusDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');
// const transactionsUl = document.querySelector('#balance')

// declaracao de um objeto literal
const dummyTransactions = [
    { id: 1, name: 'Bolo de brigadeiro', amount: -20 },
    { id: 2, name: 'Salario', amount: 30 },
    { id: 3, name: 'Torta de limao', amount: -20 },
    { id: 4, name: 'Violao', amount: 150 }
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'; // pega o valor
    const amountWithoutOperator = Math.abs(transaction.amount); // deixa o valor absoluto pro - ou + ficar no antes do R$
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    const li = document.createElement('li');
    li.classList.add(CSSClass);
    li.innerHTML = `
            ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator}  </span> 
                                    <button class="delete-btn">x</button>`
    transactionsUl.append(li);
}

//const addTransactionIntoDom = transaction => {
//const operator = transaction.amount < 0 ? 'minus' : 'plus'
//}
//addTransactionIntoDom(dummyTransactions[1]);


/*
Metodo que ira retornar todos os valores somados de receitas e despesas
*/

const updateBalanceValues = () => {

    // pegar todos os valores do objeto dummy
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount);

    // somatorio dos valores retornados
    const total = transactionAmounts
        .reduce((acumulator, transaction) => acumulator + transaction, 0)
        .toFixed(2);

    

    // retorna todas as receitas
    const income = transactionAmounts.filter(values => values > 0 ).reduce((acumulator, values) => acumulator + values, 0).toFixed(2);

    // retorna todas as despesas
    const expense = transactionAmounts
    .filter(values => values < 0 )
    .reduce((acumulator, values) => acumulator - values, 0)
    .toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`
    moneyPlusDisplay.textContent = `R$ ${income}`
    moneyMinusDisplay.textContent = `R$ - ${expense}`
    

}

const init = () => { // inicializa todas as funções da pagina
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();
}

init();