import CanvasComponent from "./CanvasComponent";
import React, { useContext } from "react";
import DimensionContext from "../contexts/DimensionContext";

const ErrorComponent = () => {
    const {w, h} = useContext(DimensionContext)
    const size = Math.min(w, h) / 5
    return <CanvasComponent style = {{
        position: 'absolute',
        left : `${w / 2}px`,
        top : `${h / 2}px`
    }} w = {w} h = {h} cb = {(ctx : CanvasRenderingContext2D | null) => {
        if (ctx) {
            ctx.lineCap = 'round'
            ctx.lineWidth = Math.min(w, h) / 20
            ctx.strokeStyle = 'red'
            for (let j = 0; j < 2; j++) {
                ctx.save()
                ctx.translate(size / 2, size / 2)
                ctx.rotate((1 - 2 * j) * Math.PI / 4)
                ctx.beginPath()
                ctx.moveTo(0, -size * 0.45)
                ctx.lineTo(0, size * 0.45)
                ctx.stroke()
                ctx.restore()
            }
        }
    }}></CanvasComponent>
}

export default ErrorComponent