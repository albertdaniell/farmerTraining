import React from "react";
import { AppMessagestProvider } from "../contexts/AppMessages/AppMessages";
import { FirebaseCloudMessagingProv } from "../contexts/FirebaseCloudMessaging/FirebaseCloudMessaging";
import { GeocoodinatesContextProvider } from "../contexts/Geocoodinates/Geocoodinates";
import { HandleLeftDrawerProvider } from "../contexts/HandleLeftDrawer/HandleLeftDrawer";
import { HandleProfileMenuProvider } from "../contexts/HandleProfileMenu/HandleProfileMenu";
import { IntroContextProvider } from "../contexts/IntroContext/IntroContext";
import {
  IsLoadingContext,
  IsLoadingContextProvider,
} from "../contexts/IsLoading/IsLoading";
import { LoginContextProvider } from "../contexts/LoginContext/LoginContext";

function ContextProvider(props) {
  return (
    <FirebaseCloudMessagingProv>
      <AppMessagestProvider>
        <IsLoadingContextProvider>
          <LoginContextProvider>
            <GeocoodinatesContextProvider>
              <HandleLeftDrawerProvider>
                <HandleProfileMenuProvider>
                  <IntroContextProvider>{props.children}</IntroContextProvider>
                </HandleProfileMenuProvider>
              </HandleLeftDrawerProvider>
            </GeocoodinatesContextProvider>
          </LoginContextProvider>
        </IsLoadingContextProvider>
      </AppMessagestProvider>
    </FirebaseCloudMessagingProv>
  );
}

export default ContextProvider;
