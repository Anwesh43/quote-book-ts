import React, {useState} from 'react'
interface TextInputProps {
    setFinalText : (p : string) => void
}
const TextInput = (props : TextInputProps) => {
    const [text, setText] = useState<string>("")
    return <textarea rows = {5} cols = {100} onKeyUp = {(e) => {
       setText((e.target as HTMLTextAreaElement).value)
    }} onBlur = {() => {
        props.setFinalText(text)
    }}></textarea>
}

export default TextInput