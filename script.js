
// declaracao de um objeto literal  
const dummyTransactions = (
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salario', amount: 30},
    {id: 3, name: 'Torta de limao', amount: -20},
    {id: 4, name: 'Violao', amount: 150}
)

const addTransactionIntoDom = transaction =>{
    const operator = transaction.amount < 0 ? 'minus' : 'plus';

    console.log(operator);
}

addTransactionIntoDom(dummyTransactions[1]);