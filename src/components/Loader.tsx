import {useState, useEffect, useContext, useCallback} from 'react'
import DimensionContext from '../contexts/DimensionContext'
import CanvasComponent from './CanvasComponent'

const RADIANS = Math.PI / 180

interface LoaderProps {
    x : number, 
    y : number 
}
const Loader = (props : LoaderProps) => {
    const [rot, setRot] = useState<number>(0)
    const {w, h} = useContext(DimensionContext)
    useEffect(() => {
        const interval = setInterval(() => {
            setRot((prev : number) => prev === 360 ? 10 :  prev + 10)
        }, 20)
        return () => {
            clearInterval(interval)
            setRot(0)
        }
    }, [])
    const size = Math.min(w, h) / 10
    const drawCb =(ctx : CanvasRenderingContext2D | null )  => {
        //console.log("CONTEXT_HERE", rot)
        if (ctx) {
            ctx.clearRect(0, 0, size * 1.5, size * 1.5)
            ctx.lineCap = 'round'
            ctx.lineWidth = 5
            ctx.strokeStyle = 'indigo'
            ctx.save()
            ctx.translate(size * 0.75, size * 0.75)
            ctx.rotate(rot * RADIANS)
            ctx.beginPath()
            for (let j = 0; j < 60; j++) {
                const x : number = size * 0.5 * Math.cos(j * RADIANS)
                const y : number = size * 0.5 * Math.sin(j * RADIANS)
                if (j == 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }
            }
            ctx.stroke()
            ctx.restore()
        }
    }
    return (<CanvasComponent w = {size * 1.5} h = {size * 1.5} cb = {drawCb} style = {{
        position: 'absolute', 
        left: `${props.x}px`,
        top: `${props.y}px`
    }}>
    </CanvasComponent>)
}

export default Loader 