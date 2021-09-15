import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import CardMenuWrapper from "../../Templates/CardMenu/CardMenuWrapper";
import Divider from "@material-ui/core/Divider";
import Spacer from "../../organisims/Spacer/Spacer";

import { LoginContext } from "../../../contexts/LoginContext/LoginContext";
import ValueChainCard from "./ValueChainCard";
import { SERVER_URL } from "../../../common/common/commonVariables";
import { Link } from "react-router-dom";

function ValueChain() {
const {valuechains}=useContext(LoginContext)
// alert(JSON.stringify(valuechains))
  return (
    <div>
      <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Training Room</Typography> <Divider></Divider>
      {
          valuechains.length !== 0&&valuechains.map((val)=>{
              return(
                  <div id="card">
                <Link to={`viewcontent?vcid=${val.id}&vcName=${val.name}`}  class="card" className="col-sm-12">
                <img style={{}} height="500"  src={`${SERVER_URL}${val.image}`} class="card-img-top" alt={`${SERVER_URL}${val.image}`} />
                <div class="card-body">
                  <h5 class="card-title">{val.name}</h5>
                  <p class="card-text">
                  <div id="introDiv"
                  dangerouslySetInnerHTML={{
                    __html: `${val.intro}`,
                  }}
                />
                  </p>
                  <Link to={`viewcontent?vcid=${val.id}&vcName=${val.name}`} class="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </Link>
              </div>
              )
          })
      }
      
      </AppContainer>
    </div>
  );
}

export default ValueChain;
