"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatementData = exports.StatementData = exports.PerformanceData = void 0;
class PerformanceData {
    constructor(performance, amount, credit) {
        this.performance = Object.assign({}, performance);
        this.amount = amount;
        this.credit = credit;
    }
}
exports.PerformanceData = PerformanceData;
class StatementData {
    constructor(invoice) {
        this.items = new Array();
        this.customer = invoice.customer;
    }
    addStatement(perf, amount, credit) {
        this.items.push(new PerformanceData(perf, amount, credit));
    }
    getTotalAmount() {
        return this.items.reduce((total, amount) => total + amount.amount, 0);
    }
    getTotalCredit() {
        return this.items.reduce((total, amount) => total + amount.credit, 0);
    }
}
exports.StatementData = StatementData;
function createStatementData(invoice, plays) {
    const statementData = new StatementData(invoice);
    invoice.performances.forEach(perf => {
        const play = extractPlayID(plays, perf);
        statementData.addStatement(perf, calculateAmount(play.type, perf), calculateCredit(play.type, perf));
    });
    return statementData;
}
exports.createStatementData = createStatementData;
function extractPlayID(plays, perf) {
    return plays[perf.playID];
}
function calculateAmount(type, perf) {
    let thisAmount = 0;
    switch (type) {
        case 'tragedy': // 비극
            thisAmount = 40000;
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case 'comedy': // 희극
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 10000 + 500 * (perf.audience - 20);
            }
            thisAmount += 300 * perf.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르 : ${type}`);
    }
    return thisAmount;
}
function calculateCredit(type, perf) {
    // 포인트를 적립한다.
    let volumeCredits = Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === type) {
        volumeCredits += Math.floor(perf.audience / 5);
    }
    return volumeCredits;
}
//# sourceMappingURL=logic.js.map