import React, {useRef, useEffect, CSSProperties} from 'react'

interface CanvasProps extends React.PropsWithChildren{
    w : number,
    h : number, 
    style: CSSProperties,
    cb : (context : CanvasRenderingContext2D | null) => void 
}

const CanvasComponent = (props : CanvasProps) => {
    const r1 = useRef(null)
    useEffect(() => {
        if (r1 && r1.current) {
            const obj = r1.current as HTMLCanvasElement
            props.cb(obj.getContext('2d'))
        }
    })
    return <canvas ref = {r1} width = {`${props.w}px`} height = {`${props.h}px`} style = {props.style}>
    </canvas>
}

export default CanvasComponent