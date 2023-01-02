import React, { useContext } from "react";
import CanvasComponent from "./CanvasComponent";

interface QuoteProps {
    text : string,
    x : number, 
    y : number,
    size : number
}
const QuoteComponent = (props : QuoteProps) => {
    const size = props.size 
    console.log("QUOTE", props.text, size)
    return (
        <CanvasComponent w = {size} h = {size} cb = {(ctx : CanvasRenderingContext2D | null) => {
            if (ctx) {
                ctx.fillStyle = '#212121'
                ctx.fillRect(0, 0, size, size)
                ctx.font = `italic ${size / 7}px sans-seriff`
                console.log("FONT", ctx.font)
                ctx.fillStyle = 'white'
                const text = `"${props.text}"`
                const tw = ctx.measureText(text).width 
                ctx.fillText(text, size / 2 - tw / 2, size / 2 - size / 12, size)
            }
        }} style = {
            {
                position : 'absolute',
                left : `${props.x}px`, 
                top : `${props.y}px`
            }
        }>

        </CanvasComponent>
    )
}

export default QuoteComponent