import { useEffect, useState } from "react"
const useDimension = () =>  {
    const [w, setW] = useState<number>(window.innerWidth)
    const [h, setH] = useState<number>(window.innerHeight)
    useEffect(() => {
        const listener = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        window.addEventListener('resize', listener, undefined) 
        return () => {
           window.removeEventListener('resize', listener)
        }
    })
    return {
        w, 
        h 
    }
}


export default useDimension