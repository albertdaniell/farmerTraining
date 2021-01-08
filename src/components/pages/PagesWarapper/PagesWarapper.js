import React, { useContext } from 'react'
import { IsLoadingContext } from '../../../contexts/IsLoading/IsLoading'
import Routes from '../../../routes/Routes'
import LoadingDialog from '../../organisims/LoadingDialog/LoadingDialog'

function PagesWarapper() {
    const {isLoading}=useContext(IsLoadingContext)
    return (
        <div>
           {
               isLoading? <LoadingDialog></LoadingDialog>:null
           }
            <Routes></Routes>
        </div>
    )
}

export default PagesWarapper
