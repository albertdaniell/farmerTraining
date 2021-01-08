import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import Spacer from '../../../organisims/Spacer/Spacer'
import AppContainer from '../../../Templates/AppContainer/AppContainer'
import GreenGramsMenuList from '../GreenGrams/GreenGramsMenuList'

function GreenGramsChapters() {
    return (
        <div>
        <AppContainer>
          <div>
            <Spacer spacing={2} padding={1}></Spacer>
            <Typography variant="h5">Green Grams Chapters</Typography> <Divider></Divider>
            <GreenGramsMenuList></GreenGramsMenuList>
            
          </div>
        </AppContainer>
      </div>
    )
}

export default GreenGramsChapters
