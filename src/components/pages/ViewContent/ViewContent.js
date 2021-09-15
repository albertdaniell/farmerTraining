import React, { useContext, useEffect } from "react";
import AppContainer from "../../Templates/AppContainer/AppContainer";
import Spacer from "../../organisims/Spacer/Spacer";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import queryString from "query-string";
import { LoginContext } from "../../../contexts/LoginContext/LoginContext";

function ViewContent({ location }) {
  const qValue = queryString.parse(location.search);
  const { vcid, vcName } = qValue;
const {valuechains,contentsFromVC,getContentFromVC}=useContext(LoginContext)


  useEffect(() => {
    
    getContentFromVC(vcid);
    return () => {
      // cleanup
    
      // setContentsFromVC([]);
    };
  }, [vcid]);
  return (
    <div>
       <AppContainer>
        <Spacer spacing={2} padding={1}></Spacer>
        <Typography variant="h5">Training Room</Typography> <Divider></Divider>
      {contentsFromVC !== undefined && contentsFromVC.length !== 0 && (
        <>
          {contentsFromVC.map((value, index) => {
            return (
              <div
                id="introDiv"
                dangerouslySetInnerHTML={{
                  __html: `${value.content}`,
                }}
              />
            );
          })}
        </>
      )}
       </AppContainer>
    </div>
  );
}

export default ViewContent;
