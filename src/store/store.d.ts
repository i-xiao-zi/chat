export interface User {
    icon: string;
}

export interface I18n {
    lang: string;
}

export interface DialogOption {
    animation?: boolean;
    type?: string;
    'is-mask-click'?: boolean;
    'mask-background-color'?: string;
    'background-color'?: string;
    'safe-area'?: boolean;
}

export interface DialogItemAction {
    label: string;
    callback: any;
}

export interface DialogItem {
    id:         string;
    title:      string;
    content:    string;
    actions:    DialogItemAction[];
    period:     number;
    start_at:   number;
    next_at:    number;
    end_at:     number;
    options?:   DialogOption;
}

export interface Dialog {
    queue: DialogItem[];
    current?: DialogItem;
}

export declare interface Debugger {
    visible: boolean;
    // #ifdef H5
    vConsole: boolean;
    // #endif
    debug: boolean;
    debug_domain: string;
}
