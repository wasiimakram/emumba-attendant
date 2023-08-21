export type adminAvailablity = string[];
export interface adminStats {
    key:string;
    name:string;
    hours:number;
    average:number;
}
export interface IAdminSettings {
    key:string;
    name: string;
    email:string;
    position:string;
    hours: string;
    avg_hrs: string;
}
export interface ISettingAllUsers{
    key?:string;
    name:string;
    email:string;
    position:string;
    hours:string;
    avg_hrs: string;
}
