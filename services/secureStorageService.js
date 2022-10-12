import * as SecureStore from "expo-secure-store";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    console.log("okay");
    return result;
  } else {
    console.log("error123");
  }
}

export async function deleteValueFor(key) {
  let result = await SecureStore.deleteItemAsync(key);
  if (result) {
    console.log("okay");
  } else {
    console.log("error333");
  }
}

const secureStorage = {
  save,
  getValueFor,
  deleteValueFor,
};

export default secureStorage;
