export type IconName =
    | 'archived'
    | 'arrowLeft'
    | 'camera'
    | 'cancell'
    | 'chatBorderLeft'
    | 'chatBorderRight'
    | 'clip'
    | 'emotes'
    | 'figure'
    | 'gifs'
    | 'group'
    | 'mic'
    | 'newChat'
    | 'profile'
    | 'sended'
    | 'received'
    | 'search'
    | 'searchSmall'
    | 'shareMessage'
    | 'silenced'
    | 'status'
    | 'threeDots'
    | 'visualized'
    | 'visualizedSmall';

export const iconClasses = {
    archived: 'archived',
    arrowLeft: 'arrow-left',
    camera: 'camera',
    cancell: 'cancell',
    chatBorderLeft: 'chat-border-left',
    chatBorderRight: 'chat-border-right',
    clip: 'clip',
    emotes: 'emotes',
    figure: 'figure',
    gifs: 'gifs',
    group: 'group',
    mic: 'mic',
    newChat: 'new-chat',
    profile: 'profile',
    sended: 'sended',
    received: 'received',
    search: 'search',
    searchSmall: 'search-small',
    shareMessage: 'share-message',
    silenced: 'silenced',
    status: 'status',
    threeDots: 'three-dots',
    visualized: 'visualized',
    visualizedSmall: 'visualized-small',
};

export const getIcon = (iconName: IconName): string => iconClasses[iconName];
