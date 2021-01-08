import { Divider, Typography } from "@material-ui/core";
import React from "react";
import NextPrevious from "../../../../../organisims/NextPrevious/NextPrevious";
import Spacer from "../../../../../organisims/Spacer/Spacer";
import AppContainer from "../../../../../Templates/AppContainer/AppContainer";
import greengramImage from '../../../../../../assets/images/greengrams.jpg'
import TrainingRoomImage from "../../../../../organisims/TrainingRoomImage/TrainingRoomImage";


function GreenGramsHarvest() {
  return (
    <div>
      <AppContainer>
        <div>
          <Spacer spacing={2} padding={1}></Spacer>
          <Typography variant="h5">Green Grams</Typography>
          <TrainingRoomImage src={greengramImage }></TrainingRoomImage>

          <Typography variant="h6">Harvest, processing and storage</Typography>
          <Divider></Divider>
          <ul>
            <strong>Harvest</strong>
            <li>
              Harvest when 95% of the pods have turned black. When pods do not
              mature at the same time uproot the entire plant and dry in the sun
              before threshing.
            </li>
            <li>
              Chemical Control Insect pests i). Thrips - Thiodan, sherpa plus,
              duduthrin ii). Aphids - Thiodan, sherpa plus, Karate iii). Pod
              sucking bugs - Dimethoate sherpa plus iv). Apion beetle - Thiodan
              and Karate v). Bruchids - Super Actellic
            </li>
            <li>
              Harvesting is generally by two to five hand-pickings at weekly
              intervals and is the most expensive single operation in growing
              green gram.
            </li>

            <li>
              Short-duration cultivars, which ripen more uniformly, may be
              processed as whole plants on small rice threshers.Cultivars differ
              markedly in harvesting efficiency, depending on position (above or
              within canopy) and size of pods. Harvesting before the maturity of
              crop, usually result in lower yields, higher proportion of
              immature seeds, poor grain quality and more chances of infestation
              during storage.
            </li>

            <li>
              Delay in harvesting results in shattering of pods and other losses
              caused by pests.
            </li>

            <li>
              Harvesting during adverse weather condition i.e. rains and
              overcast weather should be avoided. Such weather is conducive to
              fungal infection. The harvested bundles should be kept in one
              direction in order to ascertain efficient threshing. They should
              be stacked in a dry, clean place in cubical way to facilitate
              circulation of the air around.
            </li>

            <li>Need for mechanization to ease drudgery at harvesting</li>

            <strong>Processing</strong>
            <li>Threshing</li>
            <li>Winnowing</li>
            <li>Sorting</li>
            <li>Splitting into two</li>
            <li>Milling</li>

            <strong>Storage Storage</strong>

            <li>
              Drying well before storage to avoid weevil attack, growth of fungi
              and contamination with aflatoxins
            </li>
            <li>
              Store the dry grain in covered tins, drums, pots, sealed
              containers or bags. When stored in bags, the grain should be
              protected from weevils. Add ash or neem leaves to the dried grain,
              or mix with acetylic at 50g per 90 kg bag.
            </li>

            <strong>Markets</strong>
            <li>
              Local markrt: retail and wholesale. Exported and the biggest
              export markets are either India or Pakistan. 
            </li>
          </ul>

        
        </div>
      </AppContainer>
    </div>
  );
}

export default GreenGramsHarvest;
