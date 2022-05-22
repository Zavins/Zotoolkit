
import React from 'react'
interface DockContextProps {
    onDock: boolean
}

const defaultDockContext: DockContextProps = {
    onDock: false
}


const DockContext = React.createContext<DockContextProps>(defaultDockContext)
export default DockContext