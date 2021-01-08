import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";

function GreenGramsPlanting() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>

          <Typography variant="h6">Planting </Typography>
          <Divider></Divider>
          <strong>Site selection</strong>
          <ul>
            <li>N22 thrives best in well-drained sandy loamy soils</li>
            <li>N26 is suited to well- drained sandy loams</li>

            <li>
              The field should be well prepared without big soil clods and have
              a fine filth. Hoe, oxen and tractor can be used for ploughing.
            </li>
            <li>
              Early planting is recommended but not before 30mm of rainfall is
              received. Spatial planting is also recommended. Method of
              planting: When using oxen plough for planting, place the seed at
              the side of the furrow
            </li>

            <li>
              Number of plants per hill: At least 2 Depth of planting: The depth
              should be kept at 4-5cm. Sole cropping spacing: The distance
              between rows should be 45cm and between plants 15cm
            </li>
          </ul>

          <NextPrevious to='/GreengramsSoil'></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsPlanting;
