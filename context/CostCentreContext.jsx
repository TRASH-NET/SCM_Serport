'use client'

import { createContext, useContext, useState } from "react";

export const CostCentreContext = createContext();

export const useCostCentre = () => {
    const context = useContext(CostCentreContext);

    if (!context)
        throw new Error("useCostCentre must be used within a CostCentreProvider");


    return context;
}

export const CostCentreProvider = ({ children }) => {

    const [systems, setSystems] = useState([]);
    const [component, setComponent] = useState({});

    return (
        <CostCentreContext.Provider value={{ systems, setSystems, component, setComponent }}>
            {children}
        </CostCentreContext.Provider>
    )
}