/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useReducer } from "react";
import { AuthState, AuthAction, AuthProviderProps, Login, AuthActionPayload } from "../types/interfaces";
import axios from "axios";
import Cookies from "js-cookie";

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

export const AuthContext = createContext({
    state: initialState,
    login: async (login: Login): Promise<any> => {
        return false;
    },
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

            const token = response.data.token;
            Cookies.set("token", token, { expires: 14 });
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            console.log(Cookies.get("token"));

            updateDataUser({ user: response.data.user, isAuthenticated: true });

            return response;
        } catch (ex: any) {
            return ex.response;
        }
    };

    const logout = () => {
        Cookies.remove("token");
        axios.defaults.headers.common["Authorization"] = null;
        dispatch({ type: "LOGOUT" });
    };

    const updateDataUser = (payload: AuthActionPayload) => {
        dispatch({ type: "UPDATE_USER", payload: payload });
    };

    return <AuthContext.Provider value={{ state, login, logout, updateDataUser }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
