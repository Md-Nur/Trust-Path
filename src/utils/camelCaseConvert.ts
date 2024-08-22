const camelToNormal = (str: string) => {
  return str.replace(/([A-Z])/g, " $1").toLowerCase();
};

export default camelToNormal;