import { useContext } from "react";
import DimensionContext from "../contexts/DimensionContext";
import QuoteComponent from "./QuoteComponent";

interface QuotesProps {
    quotes : string[]
}
const QuotesContaienr = (props : QuotesProps) => {
    const {w, h} = useContext(DimensionContext)
    const size = Math.min(w, h) / 3
    return <div>
        {props.quotes.map((quote : string, i : number) => 
            <QuoteComponent key = {`quote_${i}`} size = {size} x = {size / 2 + (i % 4) * size * 1.2} y = {200 + Math.floor(i / 4) * size * 1.2} text = {quote}></QuoteComponent>)}
    </div>
}
export default QuotesContaienr