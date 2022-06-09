export interface RoomDimension {
    roomWidth: number;
    roomDepth: number;
    distance?:number;
}

export interface Restrictions {
    restWidth: number;
    restDepth: number;
}

export interface BottomCabinets {
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
}

export interface TopCabinets {
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
}

export interface Cabinets {
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
    xAxis?:number;
    yAxis?:number;
    side?:number;
}

export interface CurrentTarget {
    cabinWidth?: number;
    cabinDepth?: number;
    name?: string;
    xAxis?:number;
    yAxis?:number;
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
}

export interface LocalDataActions {
    type?: 'ROOM_DIMENSIONS' |'CURRENT_TARGET';
    payload?: LocalDataState;
}