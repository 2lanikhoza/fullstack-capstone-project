const natural = require('natural');

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

function getSentiment(text) {
  const tokens = text.split(' ');
  const score = analyzer.getSentiment(tokens);

  if (score > 0) {
    return 'positive';
  }

  if (score < 0) {
    return 'negative';
  }

  return 'neutral';
}

module.exports = getSentiment;