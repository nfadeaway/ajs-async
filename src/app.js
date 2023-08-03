import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log('Работа без async/await');
  console.log(saving);
}, (error) => {
  throw new Error('Ошибка передачи данных');
});

GameSavingLoader.loadWithAsyncAwait().then((saving) => {
  console.log('Работа с async/await');
  console.log(saving);
}, (error) => {
  throw new Error('Ошибка передачи данных');
});
