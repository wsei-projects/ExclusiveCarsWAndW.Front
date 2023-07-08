import { ReactNode } from "react";

export interface User {
    Id: number;
    Email: string;
    Role: { Id: number, Name: string };
    RoleId: number;
}

export interface Login {
    email: string;
    password: string;
}

export interface Register {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

export type AuthAction = { type: "UPDATE_USER"; payload: { user: User, isAuthenticated: boolean } } | { type: "LOGOUT" };

export type AuthActionPayload = { user: User, isAuthenticated: boolean };

export interface Car {
    id: number;
    brand: string;
    class: number;
    model: string;
    year: number;
    pricePerDay: number;
    imageUrl: string;
    description: string;
}
