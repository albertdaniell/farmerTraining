import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import './GreenGramsIntroduction.css'
import greengramImage from '../../../../../../assets/images/greengrams.jpg'

function GreenGramsIntroduction() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>
          <Typography variant="h6">Introduction</Typography>
          <Divider></Divider>
          <ul>
            <li>
              Grams are annual legume crops grown for their seed. Grams could be
              green, black or yellow in colour.
            </li>
            <li>
              The seeds or the flour may be used in a variety of dishes like
              soups, porridge, snacks, bread, noodles and even ice cream. Green
              gram also produces great sprouts, which can be sold in health food
              shops or eaten at home.
            </li>
            <li>
              It’s a low-cost excellent source of dietary protein (24–28%),
              folate and iron
            </li>
            <li>
              Green gram value chain is a major food and income generating
              agro-enterprise for the rural communities contributing KES 32
              billion to the Kenyan economy.
            </li>
            <li>
              The crop is grown in an area of 302,000 ha, which produces 149,000
              tons annually attributed to expansion of Green gram to
              non-traditional growing areas due to climate change.
            </li>
            <li>
              Development of climate smart technologies is the most effective
              and efficient strategy of reversing the declining productivity.
            </li>
            <li>
              The crop is grown in an area of 302,000 ha, which produces 149,000
              tons annually
            </li>
          </ul>

          <NextPrevious to='/GreengramsVariety'></NextPrevious>
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsIntroduction;
