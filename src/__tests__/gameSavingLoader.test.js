import GameSavingLoader from '../gameSavingLoader';

test('Правильно работает метод load класса GameSavingLoader', () => {
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
});

test('Правильно работает метод loadWithAsyncAwait класса GameSavingLoader', async () => {
  const saving = await GameSavingLoader.loadWithAsyncAwait();
  expect(saving).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
