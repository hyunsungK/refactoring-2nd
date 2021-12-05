import { StatementData } from './logic';

function usd(amount: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(amount);
}


export function renderStatement(statementData: StatementData){ 
    let statement = `청구내역 (고객명: ${statementData.customer})\n`;

    statementData.items.forEach(item => {
        statement += `${item.performance.playID} : ${usd(item.amount/100)} (${item.performance.audience}석)\n`;
    });

    statement += `총액: ${usd(statementData.getTotalAmount() / 100)}\n`;
    statement += `적립 포인트: ${statementData.getTotalCredit()}점\n`;
    return statement;
}
