import {useState, useEffect, useContext, useCallback} from 'react'
import DimensionContext from '../contexts/DimensionContext'
import CanvasComponent from './CanvasComponent'

const RADIANS = Math.PI / 180

const Loader = (x : number, y : number) => {
    const [rot, setRot] = useState<number>(0)
    const {w, h} = useContext(DimensionContext)
    useEffect(() => {
        const interval = setInterval(() => {
            setRot((prev : number) => prev === 360 ? 0 :  prev + 10)
        }, 30)
        return () => {
            clearInterval(interval)
            setRot(0)
        }
    })
    const size = Math.min(w, h) / 10
    const drawCb = useCallback((ctx : CanvasRenderingContext2D | null ) => () => {
        if (ctx) {
            ctx.save()
            ctx.translate(size / 2, size / 2)
            ctx.rotate(rot * RADIANS)
            ctx.beginPath()
            for (let j = 0; j < 45; j++) {
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
    }, [w, h])
    return (<CanvasComponent w = {size} h = {size} cb = {drawCb} style = {{
        position: 'absolute', 
        left: `${x}px`,
        top: `${y}px`
    }}>
    </CanvasComponent>)
}

export default Loader 