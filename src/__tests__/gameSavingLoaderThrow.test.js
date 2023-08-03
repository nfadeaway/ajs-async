import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader.js');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Правильно отрабатываются ошибки loadWithAsyncAwait класса GameSavingLoader', async () => {
  read.mockReturnValue('');
  const saving = await GameSavingLoader.loadWithAsyncAwait();
  expect(saving).toEqual('');
});
