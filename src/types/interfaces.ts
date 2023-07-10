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

export interface Post {
    id: number;
    carId: number;
    car: Car;
    title: string;
    dateOfCreate: string;
    description: string;
    longDescription: string;
    imageUrl: string;
}

export interface Comment {
    id: number;
    postId: number;
    userId: number;
    user: User;
    userComment: string;
}

export interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    classId: number;
    description: string;
}
