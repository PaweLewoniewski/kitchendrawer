export interface Restrictions {
    id?: number;
    restWidth: number;
    restDepth: number;
}

export interface Cabinets {
    id?: number;
    cabinWidth: number;
    cabinDepth: number;
}

export interface CurrentTarget {
    id?: number;
    cabinWidth?: number;
    cabinDepth?: number;
    name?: string;
}

export interface BottomCabinets {
    id: number;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
}

export interface TopCabinets {
    id: number;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
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
    currentTarget?: CurrentTarget[] | undefined;
}

export interface LocalDataAction {
    type?: 'ROOM_DIMENSIONS' | 'ADD_RESTRICTIONS' | 'BOTTOM_CABIN' | 'TOP_CABIN' | 'CURRENT_TARGET';
    payload?: LocalDataState;
}
