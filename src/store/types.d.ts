export interface Restrictions {
    // id: number;
    restWidth: number;
    restDepth: number;
}

export interface Cabinets {
    id?: number;
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
    type?: 'ROOM_DIMENSIONS' | 'ADD_RESTRICTIONS' | 'BOTTOM_CABIN' | 'TOP_CABIN';
    payload?: LocalDataState;
}
