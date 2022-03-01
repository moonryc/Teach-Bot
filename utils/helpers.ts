const format_date = (date: string) => {
  return `${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getDate()}/${new Date(date).getFullYear()}`;
};

const format_plural = (word: string, amount: number) => {
  if (amount !== 1) {
    return `${word}s`;
  }

  return word;
};

const capitalize_sentences = (sentence: string) => {
  const arrayOfWords = sentence.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] =
      arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1);
  }
  return arrayOfWords.join(' ');
};

const logger = (object: any) => {
  return console.log(object);
};

export default { logger, capitalize_sentences, format_date, format_plural };
