import { Invoice, Performance } from './types/invoices';
import { Plays } from './types/play';


export class PerformanceData {
    performance: Performance;
    amount: number;
    credit: number;

    constructor(performance: Performance, amount: number, credit: number) {
        this.performance = Object.assign({}, performance);
        this.amount = amount;
        this.credit = credit;
    }
}

export class StatementData {

    customer: string;
    items = new Array<PerformanceData>();

    constructor(invoice : Invoice){
        this.customer = invoice.customer;
    }

    addStatement(perf: Performance, amount: number, credit: number){
        this.items.push(new PerformanceData(perf, amount, credit));
    }

    getTotalAmount(){
        return this.items.reduce((total, amount)=> total+amount.amount,0);
    }

    getTotalCredit(){
        return this.items.reduce((total, amount)=> total+amount.credit,0);
    }
}


export function createStatementData(invoice : Invoice, plays: Plays){
    const statementData = new StatementData(invoice);
    invoice.performances.forEach(perf => {
        const play = extractPlayID(plays, perf);
        statementData.addStatement(
            perf, 
            calculateAmount(play.type, perf), 
            calculateCredit(play.type, perf)
        );
    });
    return statementData;
}

function extractPlayID(plays: Plays, perf: Performance){
    return plays[perf.playID];
}

function calculateAmount(type: string, perf: Performance){
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

function calculateCredit(type: string, perf: Performance){
     // 포인트를 적립한다.
    let volumeCredits = Math.max(perf.audience - 30, 0);

     // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === type) {
        volumeCredits += Math.floor(perf.audience / 5);
    }
    return volumeCredits;
}
