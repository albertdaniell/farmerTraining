
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
// http://137.184.22.30:38/api/valuechain/

const APP_URL="/api/"
// const APP_URL="http://0.0.0.0:8000/api/"

// const SERVER_URL="http://0.0.0.0:8000"
// const SERVER_URL="http://137.184.22.30:39"

const SERVER_URL="http://127.0.0.1:38"



const SINGIN_URL=`http://137.184.22.30:38/api/webuser/login/`
let LOGIN_SUCCESS='Login Success'
let CONTENT_URL=`${APP_URL}englishcontent/`
let VC_URL=`${APP_URL}valuechain/`


export { valueChains,SINGIN_URL ,LOGIN_SUCCESS,CONTENT_URL,VC_URL,SERVER_URL};
