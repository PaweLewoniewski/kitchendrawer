export interface RoomDimension {
    roomWidth: number;
    roomDepth: number;
    distance?:number;
}

export interface Restrictions {
    id:string;
    restWidth: number;
    restDepth: number;
    name?:string;
}

export interface CornerCabinets {
    id:string;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
    xAxis?:number;
    yAxis?:number;
}

export interface Cabinets {
    id:string;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
    xAxis?:number;
    yAxis?:number;
    side?:number;
}

export interface CurrentTarget {
    id:string;
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