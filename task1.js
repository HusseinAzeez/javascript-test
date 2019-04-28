
// input array of words
const inputArray = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN',
  'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
const output1 = document.querySelector('.output1');

// helper function
const tokenizer = word => (word ? word.split('').sort().join('') : []);

// main function
const getSimilarWords = (input) => {
  const anagrams = {};
  input.forEach((word) => {
    const sortedWord = tokenizer(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
};

// Store the result in a variable called groupedAnagrams
const words = getSimilarWords(inputArray);

// iterate over words, printing out each key:value pair on an individual line
for (const sortedWord in words) {
  output1.innerHTML += `${words[sortedWord]}<br/>`;
}
