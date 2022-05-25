export interface DataState {
    pending: boolean;
    items: [];
    error?: null;
}

export interface FullData {
    fullData: RoomData[];
}

export interface RoomData {
    roomWidth: number;
    roomDepth: number;
}

export interface LocalDataState {
    roomDimensions?:RoomData[];
    textField?: string;
    pagination?: string;
    currency?: string;
    maxPrice:string;
    dlc?: boolean;
}

export interface LocalDataAction {
    type?: 'ROOM_DIMENSIONS' | 'PAGINATION' | 'CURRENCY' | 'MAX_PRICE' | 'DLC';
    payload?: LocalDataState;
}

export interface DataCardAction {
    error?: null;
    type?: 'FETCH_ITEMS_PENDING' | 'FETCH_ITEMS_SUCCESS' | 'FETCH_ITEMS_ERROR';
    payload?: DataState;
}

export interface DataBestPriceAction {
    error?: null;
    type?: 'FETCH_BEST_PRICE_PENDING' | 'FETCH_BEST_PRICE_SUCCESS' | 'FETCH_BEST_PRICE_ERROR';
    payload?: DataState;
}

export interface DataReducer {
    state: DataState[];
    action: DataCardAction;
}
