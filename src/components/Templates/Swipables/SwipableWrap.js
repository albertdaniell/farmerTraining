import React, { useContext } from "react";
import SwipeableViews from "react-swipeable-views";
import { IntroContext } from "../../../contexts/IntroContext/IntroContext";
import Swipable1 from "./Swipable1";
import Swipable2 from "./Swipable2";
import Swipable3 from "./Swipable3";
import './Swipables.css';
function SwipableWrap() {
    const {isDoneIntro,setIsDoneIntro}=useContext(IntroContext);
  return (
    <div class="parentSwipable">
      <SwipeableViews>
        <Swipable1 setIsDoneIntro={setIsDoneIntro}></Swipable1>
        <Swipable2></Swipable2>
        <Swipable3 setIsDoneIntro={setIsDoneIntro}></Swipable3>
      </SwipeableViews>
    </div>
  );
}

export default SwipableWrap;
