const axios = require("axios");
var qs = require("qs");
const username = "mosesolum@gmail.com";
const password = "123@Olum";

const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");

const headers = { headers: { "Content-Type": "application/json" } };

const AxiosGetService = (url) => {
  
  // console.log(tok.data.token)
  let headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*'
  };

  const promise = axios.get(url,headers);
  const dataPromise = promise.then(response => response);
  return dataPromise;
};

//post service

const AxiosPostService = (url, data) => {
  console.log({data})
  const promise = axios.post(url, data, {
 
  });
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};


const AxiosPostService2 = (url, data) => {
  // console.log({data})
  const promise = axios.post(url, data, {
 
  });
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};
//put request

const AxiosPutService = (url, data) => {
  console.log(data)
  const promise = axios.put(url, data, {
 
  });
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

//delete request

const AxiosDeleteService = (url, data) => {
  const promise = axios.delete(url, data, {
 
  });
  const dataPromise = promise.then((response) => response);
  return dataPromise;
};

function convertDate(d){
  var parts =d.toString().split(" ");
  var months = {Jan: "01",Feb: "02",Mar: "03",Apr: "04",May: "05",Jun: "06",Jul: "07",Aug: "08",Sep: "09",Oct: "10",Nov: "11",Dec: "12"};
  return parts[3]+"-"+months[parts[1]]+"-"+parts[2];
 }

 
function convertTime(d){
  console.log(d)
  var parts =  d.toString().split(" ");
  var months = {Jan: "01",Feb: "02",Mar: "03",Apr: "04",May: "05",Jun: "06",Jul: "07",Aug: "08",Sep: "09",Oct: "10",Nov: "11",Dec: "12"};
  return parts[4];
 }
 
 var d = "Fri Jan 31 2014 00:00:00 GMT-0800 (Pacific Standard Time)";
//  alert(convertTime(d));
 

export {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
  AxiosDeleteService,
  AxiosPostService2,
  convertDate,
  convertTime
};