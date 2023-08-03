import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const value = read().then((buffer) => json(buffer));
      resolve(value);
    });
  }

  static async loadWithAsyncAwait() {
    const data = await read();
    const value = await json(data);
    return value;
  }
}
