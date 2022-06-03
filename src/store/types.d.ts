export interface RoomDimension {
    roomWidth?: number;
    roomDepth?: number;
}

export interface Restrictions {
    id?: number;
    restWidth: number;
    restDepth: number;
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

export interface Cabinets {
    id?: number;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
}

export interface CurrentTarget {
    id?: number;
    cabinWidth?: number;
    cabinDepth?: number;
    name?: string;
}

export interface AllkitchenData {
    roomDimension?: RoomDimension;
    restrictions?: Restrictions;
    botCabinets?: Cabinets;
    topCabinets?: Cabinets;
}

export interface LocalDataState {
    kitchenData?: AllkitchenData[];
    currentTarget?: CurrentTarget[] | undefined;
    idIterator: number;
}

export interface LocalDataActions {
    type?: 'ROOM_DIMENSIONS' |'CURRENT_TARGET' | 'ID_ITERATOR';
    payload?: LocalDataState;
}