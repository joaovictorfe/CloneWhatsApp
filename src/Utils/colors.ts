export type colorName =
    | 'Green'
    | 'primaryGreen'
    | 'secondaryGreen'
    | 'darkGreen'
    | 'blue'
    | 'bgBlack'
    | 'pureWhite'
    | 'white'
    | 'headerBg'
    | 'lowGray'
    | 'primaryGray'
    | 'secondaryGray'
    | 'darkGray';

export const colorClass = {
    Green: '#25D366',
    primaryGreen: '#00af9c',
    secondaryGreen: '#009588',
    darkGreen: '#056162',
    blue: '#34b7f1',
    // bgBlack: '#131C21',
    bgBlack: '#111B21',
    pureWhite: '#FFFFFF',
    white: '#f1f1f2',
    headerBg: '#202C33',
    lowGray: '#d6d7d9',
    primaryGray: '#828689',
    secondaryGray: '#b1b3b5',
    darkGray: '#74787b',
};

export const getColor = (color: colorName): string => colorClass[color];
