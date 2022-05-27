export interface FullData {
    fullData: RoomData[];
}

export interface Restrictions {
    id:number;
    restWidth: number;
    restDepth: number;
}

export interface BottomCabinets {
    id:number;
    cabinWidth:number;
    cabinDepth:number;
}

export interface TopCabinets {
    id:number;
    cabinWidth:number;
    cabinDepth:number;
}

export interface RoomData {
    roomWidth: number;
    roomDepth: number;
    // restrictions:Restrictions[];
    // botCabinets:BottomCabinets[];
    // topCabinets:TopCabinets[];
}

export interface LocalDataState {
    fullData?:RoomData[];
    refresh?:boolean;
}

export interface LocalDataAction {
    type?: 'ROOM_DIMENSIONS' | 'REFRESH';
    payload?: LocalDataState;
}
