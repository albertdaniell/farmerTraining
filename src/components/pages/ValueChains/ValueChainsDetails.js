import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useContext } from "react";
import { LoginContext } from "../../../contexts/LoginContext/LoginContext";
import { makeStyles } from "@material-ui/core/styles";

const valueChains = [
  "Apiculture",
  "Aquaculture",
  "Avocado",
  "Banana",
  "Beans",
  "Beef Cattle",
  "Butternuts",
  "Cabbages",
  "Camel",
  "Cashew Nuts",
  "Cassava",
  "Coconut",
  "Coffee",
  "Comercial Peas",
  "Cotton",
  "Cowpea",
  "Dairy  Cattle",
  "Dairy  Goat",
  "Dolichos",
  "Donkey",
  "Farm Yard Manure",
  "Fodder",
  "Goats",
  "Grain Amaranth",
  "Green Grams",
  "Herbs",
  "Indigineous Vegetables",
  "Irish Potatoes",
  "Kale",
  "Macadamia",
  "Maize",
  "Mangoes",
  "Millet",
  "Miraa",
  "Mushroom",
  "Onion",
  "Oranges",
  "Pearl millet",
  "Pigeon Pea",
  "Pigs",
  "Poultry",
  "Rabbit rearing",
  "Rice",
  "Sea weed",
  "Sericulture",
  "Sheep",
  "Sorghum",
  "Soya-bean",
  "Sugarcane",
  "Sweet Potatoes",
  "Tea",
  "Tobacco",
  "Tomatoes",
  "Trees",
  "Watermelon",
  "Woodlot",
  "Yams",
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function ValueChainsDetails() {
  const { userDetails } = useContext(LoginContext);
  const classes = useStyles();

  return (
    <div>
      <List component="nav" aria-label="secondary mailbox folders">
        {valueChains.map((vc) => {
          if (userDetails[vc] === "1") {
            return (
              <ListItem button>
                <ListItemText primary={vc} />
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );
}

export default ValueChainsDetails;
