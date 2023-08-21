export interface IUser {
    userName:string;
    password:string;
    type:string;
}
export interface userAuthData{
    userName:string;
    password:string;
    type:string;
    isFirstLogin:boolean,
    name:string;
}
export interface userTable {
    key:string;
    date: string;
    status: string;
}