import React from 'react'
interface IconContextProps {
    index: number
    callback: (index:number)=>void
}

const defaultIconContext: IconContextProps = {
    index: -1,
    callback: ()=>{}
}


const IconContext = React.createContext<IconContextProps>(defaultIconContext)
export default IconContext