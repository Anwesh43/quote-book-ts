import { useEffect, useState } from "react"
const useDimension = () =>  {
    const [w, setW] = useState<number>(window.innerWidth)
    const [h, setH] = useState<number>(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
           window.removeEventListener('resize')
        }
    })
    return {
        w, 
        h 
    }
}


export default useDimension