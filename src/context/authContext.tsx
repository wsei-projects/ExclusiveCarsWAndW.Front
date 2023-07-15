/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useReducer } from "react";
import { AuthState, AuthAction, AuthProviderProps, Login, Register, AuthActionPayload } from "../types/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

export const AuthContext = createContext({
    state: initialState,
    login: async (login: Login): Promise<any> => {
        return false;
    },
    register: async (register: Register): Promise<any> => {},
    logout: () => {},
    updateDataUser: (payload: AuthActionPayload) => {},
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: action.payload.isAuthenticated,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (user: Login): Promise<any> => {
        try {
            const response = await axios.post("/api/account/login", { email: user.email, password: user.password });

            const token = response.data.Token;
            Cookies.set("token", token, { expires: 14 });
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            updateDataUser({ user: response.data.User, isAuthenticated: true });

            toast(response.data.Message, { type: "success" });

            return response;
        } catch (ex: any) {
            toast(ex.response.data.message, { type: "error" });
            return ex.response;
        }
    };

    const register = async (user: Register): Promise<any> => {
        try {
            const response = await axios.post("/api/account/register", {
                email: user.email,
                password: user.password,
                confirmPassword: user.confirmPassword,
            });

            toast(response.data.message, { type: "success" });

            return response;
        } catch (ex: any) {
            const message = (Object.values(ex.response.data.errors)[0] as any)[0];

            toast(message, { type: "error" });
            return ex.response;
        }
    };

    const logout = () => {
        Cookies.remove("token");
        axios.defaults.headers.common["Authorization"] = null;
        dispatch({ type: "LOGOUT" });
        toast("Logout succesfull", { type: "success" });
    };

    const updateDataUser = (payload: AuthActionPayload) => {
        dispatch({ type: "UPDATE_USER", payload: payload });
    };

    return <AuthContext.Provider value={{ state, login, register, logout, updateDataUser }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
