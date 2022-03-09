export function urlParserToGetHostName(url: string) {
  const [fullStr, hostname] = url.match(
    /(?:https?:\/\/)((?:w{3}\.)?(?:\w+\.)(?:com|co\.kr|net))/
  );
  return hostname;
}
