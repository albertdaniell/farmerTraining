import React, { createContext } from "react";

export const HandleLeftDrawer = createContext();

export const HandleLeftDrawerProvider = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <HandleLeftDrawer.Provider
      value={{ handleDrawerOpen, handleDrawerClose, open }}
    >
      {props.children}
    </HandleLeftDrawer.Provider>
  );
};
