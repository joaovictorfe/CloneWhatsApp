export type colorName =
    | 'tallDarkGreen'
    | 'chatGreenColor'
    | 'lowDarkGreen'
    | 'Green'
    | 'lightGreen'
    | 'blue'
    | 'white'
    | 'pureWhite'
    | 'textColorChat'
    | 'subText'
    | 'bgBlack'
    | 'grayChat'
    | 'headerGray';

export const colorClass = {
    tallDarkGreen: '#075E54',
    chatGreenColor: '#056162',
    lowDarkGreen: '#128C7E',
    Green: '#25D366',
    lightGreen: '#DCF8C6',
    blue: '#34B7F1',
    white: '#ECE5DD',
    pureWhite: '#FFFFFF',
    textColorChat: '#E7E7E8',
    subText: '#CBCCCD',
    bgBlack: '#131C21',
    grayChat: '#323739',
    headerGray: '#2A2F32',
};

export const getColor = (color: colorName): string => colorClass[color];
