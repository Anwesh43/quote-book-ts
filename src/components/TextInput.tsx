import React, {CSSProperties, Fragment, useRef, useState} from 'react'
import { useMutation, useQueryClient } from 'react-query'
interface TextInputProps {
    setFinalText : (p : string) => void
}

const blockStyle = () : CSSProperties => {
    return {
        display: 'flex',
        alignItems: 'center', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '120px',
        width: '100%',
        position: 'fixed',
        zIndex : 10
    }
}
const TextInput = (props : TextInputProps) => {
    const [text, setText] = useState<string>("")
    const qc = useQueryClient()
    const mutation = useMutation((data : {quote : string}) => 
                    fetch('http://localhost:8000/quotes/addQuote', {method: 'POST', body : JSON.stringify(data), headers : {'Content-type': 'application/json'}})
                    .then(res => res.json()), {
                        onSuccess() {
                            qc.invalidateQueries("quotes")
                        }
                    })
    const m1 = useRef<HTMLTextAreaElement>(null)
    return <div style = {blockStyle()}>
        <textarea ref = {m1} rows = {5} cols = {100} defaultValue = {text} onKeyUp = {(e) => {
       setText((e.target as HTMLTextAreaElement).value)
    }}></textarea>
    <button style = {{backgroundColor: '#008CBA', borderRadius: '8.2%', color : 'white'}} onClick = {() => {
       // props.setFinalText(text)
        mutation.mutate({quote:text})
        const t = m1.current as HTMLTextAreaElement
        t.value = ""
        //qc.invalidateQueries("quotes")
    }}>Submit</button>
    </div>
}

export default TextInput