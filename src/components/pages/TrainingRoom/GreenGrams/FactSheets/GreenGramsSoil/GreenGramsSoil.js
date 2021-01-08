import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'


function GreenGramsSoil() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>

          <Typography variant="h6">
            Soil and water conservation measures{" "}
          </Typography>
          <Divider></Divider>

          <ul>
            <li>
              Mulch with rice straw. The mulch covers the seed leaves
              (cotyledons) making them inaccessible for egg laying.
            </li>
            <li>
              Tied-ridges are soil and moisture conservation structures that
              involve the construction of small rectangular basins formed within
              the furrow of cultivated fields mainly to harvest and increase
              storage of rain water and allow more time for rainfall to
              infiltrate the soil. The stored water is used by the plants for a
              longer period of time better than it can be used in a situation of
              runoff. The Technology consist of water flowing down the small
              trenches/furrows running parallel and infiltrates into crop root
              zones.
            </li>

            <li>
            urrow irrigation significantly increases yields
            </li>
           
          </ul>

          <NextPrevious to="/GreengramsSoilFertility"></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsSoil;
