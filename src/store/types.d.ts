export interface Restrictions {
    id: number;
    restWidth: number;
    restDepth: number;
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
    type?: 'ROOM_DIMENSIONS' | 'RESTRICTIONS';
    payload?: LocalDataState;
}
