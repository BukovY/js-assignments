/**
 * Takes two strings including only letters from a to z.
 * Returns a new sorted string containing distinct letters.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'azy', 'bk' => 'abkyz'
 *   'zxxlal','laxk'    => 'aklxz'
 *   'abcdefghijklmnop',  'lmnopqrstuvwxyz'  => 'abcdefghijklmnopqrstuvwxyz'
 *
 *   https://webformyself.com/kak-proizvesti-udalenie-dublej-massiva-v-es6/ удалить дубли
 *   тут даже я офигел
 */
function distinctLettersString(value1, value2) {
  return Array.from(new Set(value1.split('').concat(value2.split('')))).sort().join('');
}


/**
 * Takes a string with any characters.
 * Returns an object containing appearence of every distinct letters in !!! lower case.
 *
 * @param {string} value
 * @return {Object}
 *
 * @example
 *  'Who you are, Buddy?' => { a:1, d:2, e:1, h:1, o:2, r:1, u:2, y:2 }
 * let arr = value.split('').filter(el => el != ' ').map(el => el.toLowerCase()) // & char at > <
 let obj = {}
 for(let i of arr){
    if(obj[i]){
      obj[i]++
    } else {
      obj[i] = 1
    }
  }
 return obj
 https://sqljunkieshare.com/2012/01/11/ascii-char-string-functions/
 */

function lowerLetters(value) {
  let arr = value.split('').filter(el => (el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123));
  let obj = {};
  for(let i of arr){
    if(obj[i]){
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}

/**
 * Write a function that will convert a string into title case, given an optional
 * list of exception (minor words). The list of minor words will be given as a
 * string with each word separated by a space. Your function should ignore the
 * case of the minor words string - it should behave in the same way even if the
 * case of the minor word is changed
 *
 * @param {string} the original string to be converted
 * @param {string} list of minor words that must always be lowercase except for
 *                  the first word in the string
 * @return {string}
 *
 * @example
 *    'a clash if KINGS', 'a an the of'  =>  'A Clash of Kings'
 *    'THE WIND IN THE WILLOWS', 'The In'  => 'The Wind in the Willows'
 *    'the quick brown fox'  => 'The Quick Brown Fox'
 */

function titleCaseConvert(title, minorWords) {
  // 1 - cut 2 and 1 arg, 2 - map to Xxxx 3 - start 1 ind change exception
  let [baseArr, exceptionWord] = [title.split(' '), minorWords ? minorWords.split(' '): []];
  baseArr = baseArr.map(el => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase());
  exceptionWord = exceptionWord.map(el => el.toLowerCase());

  for(let i=1;i<baseArr.length;i++){
    if(exceptionWord.indexOf(baseArr[i].toLowerCase()) != -1){
      baseArr[i] = baseArr[i].toLowerCase();
    }
  }
  return baseArr.join(' ');
}

/**
 * Your job is to create a calculator which evaluates expressions in Reverse Polish
 * notation (https://en.wikipedia.org/wiki/Reverse_Polish_notation). Empty expression
 * should evaluate to 0. Expression without operation returns the last number.
 *
 * @param {string} RPN string, each number and operation separated by a space
 *
 * @return {Number}
 *
 * @example
 *  ''  =>  0  // empty expression returns 0
 *  '1 2 3'  =>  3  // expression without operation returns the last number
 *  '4 2 +'  =>  6  // 4 + 2
 *  '2 5 * 2 + 3 /'  =>  4   //  ((5 * 2) + 2) / 3
 *  '5 1 2 + 4 * + 3 -'  =>  14   // 5 + ((1 + 2) * 4) -3
 *  https://shareablecode.com/snippets/evaluate-reverse-polish-notation-javascript-solution-GSRD-VfSY
 */

function calcRPN(expr) {
  throw new Error('Not implemented');
}

module.exports = {
  distinctLettersString,
  lowerLetters,
  titleCaseConvert,
  calcRPN
};
