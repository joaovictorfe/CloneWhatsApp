export type colorName =
    | 'darkGreen'
    | 'secondaryGreen'
    | 'primaryGreen'
    | 'blue'
    | 'white'
    | 'pureWhite'
    | 'lowGray'
    | 'secondaryGray'
    | 'bgBlack'
    | 'secondaryGray'
    | 'primaryGray';

export const colorClass = {
    Green: '#25D366',
    pureWhite: '#FFFFFF',
    bgBlack: '#131C21',
    darkGreen: '#056162',
    secondaryGreen: '#009588',
    primaryGreen: '#00af9c',
    blue: '#34b7f1',
    darkGray: '#74787b',
    primaryGray: '#828689',
    secondaryGray: '#b1b3b5',
    lowGray: '#d6d7d9',
    white: '#f1f1f2',
};

export const getColor = (color: colorName): string => colorClass[color];
