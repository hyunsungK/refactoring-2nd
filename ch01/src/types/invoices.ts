import { PlayTitle } from './play';

export type Audience = number;

export interface Performance {
    playID: PlayTitle,
    audience: Audience;
}

export interface Invoice {
    customer: string,
    performances: Performance[]
}
