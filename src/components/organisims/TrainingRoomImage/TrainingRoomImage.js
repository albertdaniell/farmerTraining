import { Grid } from '@material-ui/core'
import React from 'react'
import './TrainingRoomImage.css'
function TrainingRoomImage(props) {
    return (
        <div>
             <Grid id="trainRoomImage" item md={12} sm={12} xs={12}>
                 <img id="trainRoomImage" src={props.src}></img>
             </Grid>
        </div>
    )
}

export default TrainingRoomImage
