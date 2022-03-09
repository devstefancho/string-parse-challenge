import { urlParserToGetHostName } from './url';

test('return hostname from url', () => {
  const hostname = urlParserToGetHostName('https://www.google.co.kr/');
  expect(hostname).toBe('www.google.co.kr');
});
