const saveLocalStorageFn = (data) => {

  localStorage.setItem("offlineUserData", JSON.stringify(data));
};

export { saveLocalStorageFn };
