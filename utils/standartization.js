const camelToSnakeCase = (str) => {
  let new_str = str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  return new_str;
};

const snakeToCamelCase = (str) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
};

export const objToSnakeCase = (obj) => {
  const new_obj = {};
  Object.keys(obj).forEach(
    (key) => (new_obj[camelToSnakeCase(key)] = obj[key])
  );
  return new_obj;
};

export const objToCamelCase = (obj) => {
  const new_obj = {};
  Object.keys(obj).forEach(
    (key) => (new_obj[snakeToCamelCase(key)] = obj[key])
  );
  return new_obj;
};
