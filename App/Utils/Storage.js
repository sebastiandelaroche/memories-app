import {
  AsyncStorage
} from 'react-native';

const convertToString = value => {
  return typeof value === "object"?JSON.stringify(value):value;
};


export default class Storage {

  async query(key) {
    try {
      const result = await AsyncStorage.getItem(key);
      return JSON.parse(result);
    } catch (err) {
      throw err;
    }
  }

  async insert(key, value) {
    try {
      return await AsyncStorage.setItem(key, convertToString(value));
    } catch (err) {
      throw err;
    }
  }

  async update(key, value) {
    try {
      return await AsyncStorage.setItem(key, convertToString(value));
    } catch (err) {
      throw err;
    }
  }

  async delete(key) {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (err) {
      throw err;
    }
  }

}
