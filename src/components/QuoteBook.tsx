import React from "react";
import { useQuery, useQueryClient } from "react-query";
import ErrorComponent from "./Error";
import Loader from "./Loader";
import QuotesContaienr from "./QuotesContainer";

interface QuoteBookProps extends React.PropsWithChildren{
  
}

interface QuoteData {
    quotes : Array<string>,  
}

const QuoteBook = (props : QuoteBookProps) => {
    
    const t  = useQuery("quotes", () => fetch('http://localhost:8000/quotes/all').then(async (res) => {
        const data = await res.json()
        console.log("DATA Here", data)
        if (data.statusCode == 500) {
            throw new Error("500 error")
        }
        return data 
    }), {
        retry: 0
    })
    console.log("T_NOW", t)
    if (t.isError) {
        return <ErrorComponent></ErrorComponent>
    }
    if (t.isLoading) {
        return <Loader x = {window.innerWidth / 2} y = {window.innerHeight / 2}></Loader>
    }
    const dataQuotes = t.data as QuoteData
    return (
        <QuotesContaienr quotes={dataQuotes?.quotes}></QuotesContaienr>       
    )
}

export default QuoteBook 