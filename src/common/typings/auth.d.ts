export interface AuthState {
    authUser?: IUser;
    isLoggedIn:boolean;
    isFirstLogin:boolean;
    authError:string;
    authSuccess:string;
}