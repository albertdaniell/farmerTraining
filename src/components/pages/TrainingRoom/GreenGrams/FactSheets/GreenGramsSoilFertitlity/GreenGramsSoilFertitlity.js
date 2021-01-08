import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'

function GreenGramsSoilFertitlity() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>

          <Typography variant="h6">Soil fertility</Typography>
          <Divider></Divider>
          <ul>
            {" "}
            <strong>Soil fertility requirements</strong>
            <li>
              Mung beans do not respond well to nitrogen and phosphate
              fertilizer application. In most cases it is not necessary to apply
              them. However, where the soils are highly eroded and very
              deficient in these nutrients, a basal dose of 10-15kg/ha of
              nitrogen and 20-25kg/ha of single or triple super phosphate
              fertilizers may be broadcast
            </li>
            <strong>Soil fertility management</strong>
            <li>
              Mung beans do not respond well to nitrogen and phosphate
              fertilizer application. In most cases it is not necessary to apply
              them. However, where the soils are highly eroded and very
              deficient in these nutrients, a basal dose of 10-15kg/ha of
              nitrogen and 20-25kg/ha of single or triple super phosphate
              fertilizers may be broadcasted
            </li>
            <strong>Organic fertilizers/manures</strong>
            <li>
              Green grams will respond to fertiliser or manure application but
              will normally give satisfactory results if grown on relatively
              good soil. Green gram is grown mainly on smallholdings, often as
              mixed crops or intercrops. Associated crops are usually of longer
              duration than green gram (sugar-cane, cotton, sorghum).
            </li>
            <li>
              To make use of a short cropping period, short-duration green gram
              is often relay-cropped.
            </li>
            <li>
              If the soils are poor, you can apply up to 12 gorogoros or 1/2 bag
              of DAP per acre.
            </li>
            <strong>Inorganic fertilizers</strong>
            <li>Avoid excess use of nitrogen.</li>
            <li>Growth enhancers and micronutrient fertilizers</li>
            <li>Management of acid soils</li>
            <li>Management of saline soils</li>
          </ul>

          <NextPrevious to="/GreengramsRoutine"></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsSoilFertitlity;
