// Rule: interface-over-type-literal
type Genre = 'tragedy' | 'comedy';
export type PlayTitle = 'hamlet' | 'as-like' | 'othello';
export type PlayTitleMap = {
    [key in PlayTitle]: string
}

export type Play= {
    name: string;
    type: Genre;
};

export type Plays = {
    [playID in PlayTitle]: Play;
};

export interface IPlay {
    PlayTitleMap: Play;
};
