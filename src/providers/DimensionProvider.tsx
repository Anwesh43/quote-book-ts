import React from "react";
import DimensionContext from "../contexts/DimensionContext";
import useDimension from '../hooks/useDimension'

interface CurrentProps {
    children : React.ReactNode
}
const DimensionProvider = (props : CurrentProps) => {
    const {w, h} = useDimension()
    return <DimensionContext.Provider value={{
        w,
        h
    }}>
        {props.children}
    </DimensionContext.Provider>
}

export default DimensionProvider