import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";

function GreenGramsRoutine() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>

          <Typography variant="h6">Routine management practices</Typography>
          <Divider></Divider>
          <ul>
            {" "}
            <strong>Land preparation</strong>
            <br></br>
            The field should be well prepared without big soil clods and have a
            fine filth. Hoe, oxen and tractor can be used for ploughing.
            <li>
              Time of planting: Early planting is recommended but not before
              30mm of rainfall is received. Spatial planting is also
              recommended. Method of planting: When using oxen plough for
              planting, place the seed at the side of the furrow. Seed rate:
              10-15kg/ha (4-6kg/acre)
            </li>
            <li>
              Number of plants per hill: At least 2 Depth of planting: The depth
              should be kept at 4-5cm.
            </li>
            <strong>Spacing and plant population per hectare</strong>
            <li>
              When planted alone, sow it 11/2 ft between rows and 1/2 ft between
              plants. One acre of land will require 2 to 4 gorogoros (4 to 8 kg)
              of seed for planting.
            </li>
            <strong>Intercropping</strong>
            <li>
              green gram and cereals provides farmers with alternatives to
              diversify their farming systems and improve soil fertility through
              nitrogen fixation
            </li>
            <strong>Crop rotation</strong>
            <li>Practise crop rotation with non-legumes such as cereals.</li>
            <strong>Weeding</strong>
            <li>
              The first weeding should be done 2 weeks after emergence and the
              second weeding before flowering.
            </li>
            <strong>Thinning</strong>
            <strong>Rogueing</strong>
          </ul>

          <NextPrevious to="/GreengramsProtection"></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsRoutine;
