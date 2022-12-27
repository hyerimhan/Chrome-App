const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. <br/> 인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up. <br/> 많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Despite the forecast, live like it’s spring. <br/> 일기예보에도 불구하고, 봄처럼 살아라.",
    author: "Lilly Pulitzer",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value. <br/> 성공한 사람이 되려고 애쓰지 말고, 가치 있는 사람이 되려 애써라.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Don’t be afraid to give up the good to go for the great. <br/> 더 나은 것을 위해 좋은 것을 포기하는 걸 두려워 하지 마라.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "All progress takes place outside the comfort zone. <br/> 모든 진보는 안전 구역 밖에서 이루어진다.",
    author: "Michael John Bobak",
  },
  {
    quote:
      "I never dreamed about success, I worked for it. <br/> 나는 결코 성공에 대해 꿈꾸지 않았다, 나는 꿈을 위해 행동했다.",
    author: "Estee Lauder",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be. <br/> 자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하고 있는 사람들과 어울리는 것이다.",
    author: "Reid Hoffman",
  },
  {
    quote:
      "The only thing worse than starting something and failing … is not starting something. <br/> 무언가를 시작하고 실패하는 것보다 더 나쁜 것은…아무것도 시작하지 않는 것이다.",
    author: "Seth Godin",
  },
  {
    quote:
      "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse. <br/> 무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
    author: "Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
