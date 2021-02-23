import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import "./SorghumIntro.css";
import SorghumImage from "../../../../../../assets/images/sorghum-image.jpg";

function SorghumIntro() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Sorghum</Typography>
          <TrainingRoomImage src={SorghumImage}></TrainingRoomImage>
          <Typography variant="h6">Sorghum Growing in Kenya</Typography>
          <Divider></Divider>
          <ul>
            <li>
              Sorghum is the firth most important cereal grown in the world. It
              is an indigenous crop to Kenya and is a basic staple food crop for
              many rural communities in the country, especially in more
              drought-prone areas. It is important for food, animal fodder,
              bio-fuel and production of alcohol and beverages.
            </li>
            <li>
              The crop is adapted to a wide range of environments, able to
              perform better than most crops under extreme climatic conditions,
              from excessive dry spells to excessively moist conditions, and
              under varied temperatures and soil types
            </li>
            <h5>Sorghum tolerance to drought </h5>
            <li>
              It can survive drought conditions for some weeks by rolling up its
              leaves and thus decreasing transpiration. The major advantage of
              sorghum as a drought tolerant crop is that it can become dormant
              under adverse conditions and can resume growth after relatively
              severe drought.
            </li>
            <li>
              Early drought (pre-flowering drought) stops growth before floral
              initiation and the plant remains vegetative; it will resume leaf
              production and flower when conditions again become favorable for
              growth.
            </li>
            <li>
              Late drought stops (post-flowering drought) leaf development but
              not floral initiation .Signs of drought intolerance in sorghum
              include leaf rolling, death of lower leaves (senescence), stunted
              growth and low yields.
            </li>
          </ul>

          <NextPrevious to="/GreengramsVariety"></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default SorghumIntro;
