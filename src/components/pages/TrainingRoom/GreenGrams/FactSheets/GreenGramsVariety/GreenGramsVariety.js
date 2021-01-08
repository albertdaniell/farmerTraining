import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";

function GreenGramsVariety() {
    return (
        <div>
            <AppContainer>
                <div>
                    <Spacer spacing={2} padding={1}></Spacer>
                    <Typography variant="h5">Green Grams</Typography>
                    <TrainingRoomImage src={greengramImage }></TrainingRoomImage>
                    <Typography variant="h6">Choice of varieties</Typography>
                    <Divider></Divider>
                    <ul>
                        <li>
                            The local green gram variety - Has small seeds. - Plants mature at
                            different times. - Matures late. - Has a lot of stony seeds, which
                            makes green gram meal difficult to eat.
            </li>
                        <li>
                            The improved variety K26 - Has large seeds. - Gives high yields
                            and plants ripen at the same time. - Matures early. - Does well in
                            dry areas.
            </li>
                    </ul>

                    <NextPrevious to='/GreengramsPlanting'></NextPrevious>
                </div>
            </AppContainer>
        </div>
    );
}

export default GreenGramsVariety;
