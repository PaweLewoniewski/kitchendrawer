
export interface FullData {
    fullData: RoomData[];
}

export interface RoomData {
    roomWidth: number;
    roomDepth: number;
}

export interface LocationParams {
    pathname: string;
    state: RoomData;
    search: string;
    hash: string;
    key: string;
  }