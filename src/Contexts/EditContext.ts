
import React from 'react'
interface EditContextProps {
    isEdit: boolean
}

const defaultEditContext: EditContextProps = {
    isEdit: false
}


const EditContext = React.createContext<EditContextProps>(defaultEditContext)
export default EditContext