export interface Restrictions {
    // id: number;
    restWidth: number;
    restDepth: number;
}

export interface Cabinets {
    cabinWidth: number;
    cabinDepth: number;
}

export interface BottomCabinets {
    id: number;
    cabinWidth: number;
    cabinDepth: number;
}

export interface TopCabinets {
    id: number;
    cabinWidth: number;
    cabinDepth: number;
}

export interface RoomData {
    roomWidth: number;
    roomDepth: number;
}

export interface LocalDataState {
    roomData?: RoomData[];
    restrictions?: Restrictions[];
    botCabinets?: BottomCabinets[];
    topCabinets?: TopCabinets[];
}

export interface LocalDataAction {
    type?: 'ROOM_DIMENSIONS' | 'ADD_RESTRICTIONS' | 'ADD_BOTTOM_CABIN' | 'ADD_TOP_CABIN';
    payload?: LocalDataState;
}
