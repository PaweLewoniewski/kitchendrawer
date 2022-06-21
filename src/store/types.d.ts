export interface RoomDimension {
    roomWidth: number;
    roomDepth: number;
    distance?:number;
}

export interface Restrictions {
    id:string;
    cabinWidth: number;
    cabinDepth: number;
    name?:string;
    xAxis?:number;
    yAxis?:number;
}

export interface CornerCabinetsNames {
    name?: string;
}

export interface CornerCabinets {
    id:string;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
    xAxis?:number;
    yAxis?:number;
    side?:number;
    sideA:number;
    sideB:number;
}

export interface Cabinets {
    id:string;
    cabinWidth: number;
    cabinDepth: number;
    name?: string;
    xAxis?:number;
    yAxis?:number;
    side?:number;
    image?:string;
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
    cornersBot?: CornerCabinets;
    cornersTop?: CornerCabinets;
}

export interface LocalDataState {
    kitchenData?: AllkitchenData[];
    currentTarget?: CurrentTarget[] | undefined;
}

export interface LocalDataActions {
    type?: 'ROOM_DIMENSIONS' |'CURRENT_TARGET';
    payload?: LocalDataState;
}