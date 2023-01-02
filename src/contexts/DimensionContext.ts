import { createContext } from "react";

export interface Dimension {
    w : number, 
    h : number 
}
const DimensionContext = createContext<Dimension>({
    w : 0, 
    h : 0 
})

export default DimensionContext