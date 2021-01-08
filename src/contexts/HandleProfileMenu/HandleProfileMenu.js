import React, { createContext,} from "react";

export const HandleProfileMenu = createContext();

export const HandleProfileMenuProvider = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HandleProfileMenu.Provider value={{ anchorEl, handleClose, handleMenu }}>
      {props.children}
    </HandleProfileMenu.Provider>
  );
};
