import invoicesData from './data/invoices.json';
import playsData from './data/play.json';

import { createStatementData } from "./logic";
import { renderStatement } from "./view";


const [invoice] =  JSON.parse(JSON.stringify(invoicesData));
const plays =  JSON.parse(JSON.stringify(playsData));

const statement = renderStatement(createStatementData(invoice, plays));
console.log(statement);
