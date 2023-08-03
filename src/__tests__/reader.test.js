import read from '../reader';

test('Получаем правильный объект с помощью функции read', (done) => {
  read().then((buffer) => {
    expect(buffer.byteLength).toBe(180);
    done();
  });
});
