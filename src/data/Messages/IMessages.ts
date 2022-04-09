export interface IMessages {
    message: string;
    date: Date;
    status: Status;
    firstMessage: boolean;
}

export enum Status {
    sended = 'sended',
    received = 'received',
    visualized = 'visualized',
}
