import React from "react";
import cropImage from "../../../assets/images/icons8-barley-100.png";

function AppLoginLogo(props) {
  return (
    <div style={{marginBottom:15,textAlign:props.textAlign}}>
     
        <img src={cropImage} style={{ height: 60 }}></img>
        <br></br>
        <span style={{ fontWeight: "bold", marginBottom: 10,color:'rgba(0,0,0,.7)' }}>
          {props.name}
        </span>
        <br></br>
        <br></br>
        
        <span style={{ color: "purple", marginTop: 20,letterSpacing:5,fontSize:11,textTransform:'uppercase' }}>{props.pageTitle}</span>
     
    </div>
  );
}

export default AppLoginLogo;
