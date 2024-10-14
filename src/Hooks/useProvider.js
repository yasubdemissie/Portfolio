import { useContext } from "react";
import { AppsContext } from "../Components/AppContext";

export function useProvider() {
    const context = useContext(AppsContext);
    if (!context) {
        throw new Error("useProvider must be used within a AppsProvider");
    }
    return context;
}