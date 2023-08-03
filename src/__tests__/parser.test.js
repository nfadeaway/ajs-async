import json from '../parser';
import read from '../reader';

test('Получаем правильный объект с помощью функции json', (done) => {
  read().then((buffer) => {
    json(buffer).then((str) => {
      expect(str).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
      done();
    });
  });
});
