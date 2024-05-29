import { User } from "./user"

export enum AuthActionsKind {
    login,
    logout
}

export type AuthAction = {
    type: AuthActionsKind,
    payload: User | undefined
}

export type AuthState = {
    user: User
}