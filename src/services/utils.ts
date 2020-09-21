export const saveTokenSymbolMap = (data: { [key: string]: string }) => {
  window.localStorage.setItem("tokenSymbolMap", JSON.stringify(data));
};

export const getTokenSymbolMap = () => {
  const data = window.localStorage.getItem("tokenSymbolMap");
  if (data) {
    return JSON.parse(data);
  } else {
    return {};
  }
};
