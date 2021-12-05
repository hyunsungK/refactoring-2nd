"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStatement = void 0;
function usd(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(amount);
}
function renderStatement(statementData) {
    let statement = `청구내역 (고객명: ${statementData.customer})\n`;
    statementData.items.forEach(item => {
        statement += `${item.performance.playID} : ${usd(item.amount / 100)} (${item.performance.audience}석)\n`;
    });
    statement += `총액: ${usd(statementData.getTotalAmount() / 100)}\n`;
    statement += `적립 포인트: ${statementData.getTotalCredit()}점\n`;
    return statement;
}
exports.renderStatement = renderStatement;
//# sourceMappingURL=view.js.map