import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";


function GreenGramsProtection() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>

          <Typography variant="h6">
            Protection of green gram against insect pests and diseases
          </Typography>
          <Divider></Divider>
          <ul>
            {" "}
            <li>
              Insect pests of economic importance include thrips, aphids, and
              pod sucking bugs, apion beetle and bruchids.
            </li>
            <li>
              Chemical Control Insect pests i). Thrips - Thiodan, sherpa plus,
              duduthrin ii). Aphids - Thiodan, sherpa plus, Karate iii). Pod
              sucking bugs - Dimethoate sherpa plus iv). Apion beetle - Thiodan
              and Karate v). Bruchids - Super Actellic
            </li>
            <li>
              Diseases Diseases include powdery mildew and yellow mosaic virus.
              Powdery mildew is prevalent during the long rains whereas yellow
              mosaic occurs in both seasons. Use Benomyl and Copper oxychloride
              to control the diseases.
            </li>
          </ul>

          <NextPrevious to="/GreengramsHarvest"></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsProtection;
