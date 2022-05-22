import { Fragment } from 'react'
import IconButtonBase from './IconButtonBase'



let CanvasIcon = () =>{
    return(
        <Fragment key="Schedule">
            <IconButtonBase 
                key="canvas"  
                name="Canvas" 
                link='https://canvas.eee.uci.edu/' 
                icon='./icons/canvas.png'
            />
        </Fragment>
    )
}

export default CanvasIcon