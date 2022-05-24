export interface RoomData {
    width: number;
    depth: number;
}

export interface LocationParams {
    pathname: string;
    state: RoomData;
    search: string;
    hash: string;
    key: string;
  }