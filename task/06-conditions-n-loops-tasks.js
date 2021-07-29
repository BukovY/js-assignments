
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if(num % 3 == 0 && num % 5 == 0){
    return 'FizzBuzz'
  } else if(num % 3 == 0) {
    return 'Fizz'
  } else if(num % 5 == 0){
    return "Buzz"
  }
  return num
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let factorial = 1;
  for(let i=1; i<=n;i++){
    factorial = factorial*i
  }
  return factorial;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 *   return  new Array(n2-n1+1).reduce((prev) => {return prev+1},n1).reduce((prev, cur) => {return prev + cur}, 0)
 */
function getSumBetweenNumbers(n1, n2) {
  return new Array(n2-n1).fill(n1).reduce((prev, next) => {return [...prev, prev[prev.length-1]+1]},[n1]).reduce((prev, next) => {return prev+next},0)
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 *   https://younglinux.info/python/task/triangle
 */
function isTriangle(a, b, c) {
  return a+b>c && a+c>b && b+c>a;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 * нижняя точка верхнего находилась ниже верхней второго
 * принадлежат ли точки отрезкам
 *
 if(rect1.top + rect1.height < rect2.top){ // начало второго за пределами первого по у
    return false
  }
 if(rect1.top> rect2.top + rect2.height){ // начало первого за пределами конца второго по н
    return false
  }
 if(rect1.left + rect1.width < rect2.left){ // начало второго за пределами первого по х
    return false
  }
 if(rect2.left + rect2.width > rect1.left){
    return false
  }
 return true
 *
 *
 *
 * let isOnOy = (rect1.top + rect1.height > rect2.top) || (rect1.top < rect2.top + rect2.height);
 console.log('y')
 console.log(rect1.top + rect1.height > rect2.top)
 console.log(rect1.top < rect2.top + rect2.height)
 let isOnOx = (rect1.left + rect1.width > rect2.left) || (rect2.left + rect2.width < rect1.left);
 console.log('x')
 console.log(rect1.left + rect1.width > rect2.left)
 console.log(rect2.left + rect2.width < rect1.left)
 return isOnOy && isOnOx

 @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *   // нужно чтоб пересекалось по 2 плоскостям
 *     let oyUpr2 = rect1.top <= rect2.top && rect1.top + rect1.width >= rect2.top// 0< 25 || 0+90 > 25
 let oyDown2 = (rect1.top <= rect2.top + rect2.width) && (rect1.top + rect1.width >= rect2.top + rect2.width) //0 < 25 + 10 || 0+90 > 25+10
 let oxUpr2 = rect1.left <= rect2.left && rect1.left + rect1.height >= rect2.left // 0 < 100 || 0+90 > 100
 let oxDown2 = (rect1.left <= rect2.left + rect2.height) && (rect1.left + rect1.height <= rect2.left + rect2.height) // 0< 100+90 || 90 < 100


 // да блин почему это неверно
 let rect1Oy = new Array(rect1.height + 1).fill(rect1.top).reduce((prev, next, index) => {return [...prev,next+index]}, []);
 let rect1Ox = new Array(rect1.width + 1).fill(rect1.left).reduce((prev, next, index) => {return [...prev,next+index]}, []);
 // проверим 4 точки на принадлежность
 console.log(rect1Oy)
 console.log(rect1Ox)
 console.log(rect2)
 let isr2oyUp = rect1Oy.indexOf(rect2.top)
 let isr2oyDown = rect1Oy.indexOf(rect2.top+rect2.height)
 let isr2oxUp = rect1Ox.indexOf(rect2.left)
 let isr2oxDown = rect1Ox.indexOf(rect2.left+rect2.width)
 console.log((isr2oyUp || isr2oyDown) && (isr2oxUp || isr2oxDown))
 return new Boolean((isr2oyUp || isr2oyDown) && (isr2oxUp || isr2oxDown))
 */
function doRectanglesOverlap(rect1, rect2) {
  throw new Error('Not implemented');
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 * https://xhtml.ru/2020/javascript/calculate-the-distance-between-two-points-on-earth-using-javascript/
 */
function isInsideCircle(circle, point) {
  let distance = Math.sqrt(Math.pow((circle.center.x - point.x),2)+Math.pow((circle.center.y - point.y),2))
  return distance < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 *   сосчитать символы в объектб пройтись по строке как ключу объекта и если 1 вернуть ключили цикл на индекс оф со 2 ллемента если прошел всю строку вернуть нулл
 */
function findFirstSingleChar(str) {
  let obj = {};
  for(let i of str.split('')){
    obj[i] ?  obj[i]++ :  obj[i] = 1;}
  for(let i of str.split('')){
    if(obj[i] == 1){return i}}
  return null
}


/**
 * Returns the string representation of math interval, specified by two points and
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let arr = [a,b].sort();
  let str = `${isStartIncluded ? '[' : '('}${arr[0]}, ${arr[1]}${isEndIncluded ? ']' : ')'}`
  return str
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 *   https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0
 *     function isMoreThanNine(el){
    return parseInt(el.toString().split('').map(el=>parseInt(el)).reduce((prev, next)=>{prev+next}))
  }
 let arr = ccn.toString().split('').map(el => parseInt(el));
 arr = arr.reduce((prev, next, index) => {
    return [...prev, index == arr.length-1 ? next : index%2 == 0 ? next*2:next]
  },[])
 arr = arr.map(el => el > 9 ? isMoreThanNine(el) : el).reduce((prev,next)=>{return prev+next})
 return algoritmCount %  10 == 0 ? true : false;
 }
 function isCreditCardNumber(ccn) {
  let arr = ccn.toString().split('').map(el => parseInt(el))
  console.log(arr)
  let doubled = arr.reduce((prev, next, index) => {return [...prev, index%2 == 0? next*2:next]}, [])
  arr = [...doubled.slice(0,-1), arr[arr.length-1]]
  console.log(arr)
  arr = arr.map(el => el > 9 ? el-9 : el)
  console.log(arr)
  let algoritmCount = arr.reduce((prev, next) => {return parseInt(prev)+ parseInt(next)})
  console.log(algoritmCount)
}
 */
function isCreditCardNumber(ccn) {
  let arr = ccn.toString().split('').map(el=>parseInt(el))
  let length = arr.length
  if(length%2){ // нечетное 1-3-5-7-9
    arr=arr.reduce((prev,next,index)=> {
      return [...prev, index % 2 == 1 && index < length ? next*2 : next]
    }, []).map(el => el>9? el-9:el)

  } else { // четное 2-4-6-8
    arr=arr.reduce((prev,next,index)=> {
      return [...prev, index % 2 == 0 && index < length ? next*2 : next]
    }, []).map(el => el>9? el-9:el)
  }
  return arr.reduce((prev, next)=> {return prev+next}) %10 == 0
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  num = num.toString().split('').map(el => parseInt(el)).reduce((prev, next) => {return prev+ next})
  return num > 9 ? getDigitalRoot(num) : num
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true  ][][[]
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 *   сравним по картам и механизм палиндрома, при этом в первой половине смотрим по 1 карте
 *   function isBracketsBalanced(str) {
  let mapOpen = ['[','(','{','&lt;'];
  let mapClose = [']',')','}','&gt;'];
  let arr = str.split('');
  console.log(arr)
  if(str.length % 2 == 1){ // невозможно
    return false
  }
  for(let i=0; i<str.length/2; i++){
    console.log(arr[i])
    console.log(arr[str.length-i-1])
    if(mapOpen.indexOf(arr[i]) != mapClose.indexOf(arr[str.length-i-1])){
      return false
    }
  }
  return true
}
 находим открывающий элемент, ищем закрывающий если найден оба вырезаем и повторяем
  if(str.length == 0){
    return true
  }
  if(str.length%2 == 1){
    return false
  }
  let mapOpen = ['[','(','{','&lt;'];
  let mapClose = [']',')','}','&gt;'];
  if(mapClose.indexOf(str[0]) > -1){
    return false
  }
  if(str.length == 2){
    console.log(`i am here: ${str}`)
    console.log(mapOpen.indexOf(str[0]))
    console.log(mapClose.indexOf(str[1]))
    if(mapOpen.indexOf(str[0]) == mapClose.indexOf(str[1])){
      return true
    }
  }
  let elemNow = str[0]
  let closeElement = mapClose[mapOpen.indexOf(elemNow)]
  let indexClose = str.indexOf(closeElement)
  let newSter = str.slice(1,indexClose)+str.slice(indexClose+1)
  console.log(newSter)
  isBracketsBalanced(newSter)
    if(str.length == 0){
    return true
  }
  if(str.length%2 == 1){
    return false
  }
  let mapOpen = ['[','(','{','<'];
  let mapClose = [']',')','}','>'];
  if(mapClose.indexOf(str[0]) > -1){
    return false
  }
  for(let i = 0; i=str.length /2; i++){
    let elemNow = str[0]
    let closeElement = mapClose[mapOpen.indexOf(elemNow)]
    let indexClose = str.indexOf(closeElement)
    if(closeElement == -1 || indexClose ==-1){
      return false
    }
    str = str.slice(1,indexClose)+str.slice(indexClose+1)
  }

  return true
 */
function isBracketsBalanced(str) {
  throw new Error('Not implemented');
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
  let bettwen = endDate.getTime() - startDate.getTime();
  const sec = 1000;
  const min = sec *60;
  const hour = min *60;
  const day = hour *24;
  if (bettwen <= 45 * sec) {
    return 'a few seconds ago';
  }
  if (bettwen <= 90 * sec) {
    return 'a minute ago';}
  if (bettwen <= 45 * min) {
    return `${Math.round((bettwen - 1) / min)} minutes ago`;
  }
  if (bettwen <= 90 * min) {
    return 'an hour ago';
  }
  if (bettwen <= 22 * hour) {
    return `${Math.round((bettwen - 1) / hour)} hours ago`;
  }
  if (bettwen <= 36 * hour) {
    return 'a day ago';
  }
  if (bettwen <= 25 * day) {
    return `${Math.round((bettwen - 1) / day)} days ago`;
  }
  if (bettwen <= 45 * day) {
    return 'a month ago';
  }
  if (bettwen <= 345 * day) {
    return `${Math.round(bettwen / 30 / day)} months ago`;
  }
  if (bettwen <= 545 * day) {
    return 'a year ago';
  }
  return `${Math.round(bettwen / 365 / day)} years ago`;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 *    https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
 */
function toNaryString(num, n) {
  return num.toString(n)
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let finalString = ''
  let isContinue = true
  let minLength = pathes.map(el => el.length).reduce((prev, next) => {
    return next < prev ? next : prev
  })
  for (let i = 0; i < minLength; i++) {
    let now = pathes[0][i]
    for (let k of pathes) {
      if (now != k[i]) {
        isContinue = false
      }
    }
    isContinue ? finalString = finalString + now : ''
  }
  if (finalString.lastIndexOf('/')+1 != finalString.length) {
    finalString = finalString.slice(0, finalString.lastIndexOf('/') + 1)
  }
  return finalString
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *  // есди все одинаковые в массиве = вернем элемент
 // если все одинаковые по индексам вернем элемент
 // если не сработало проверим кресты
 // возьмем все случаи победителя и пройдемся по ним
 let winCombine = [
 [ [0,0], [1,0],[2,0] ],
 [ [0,1], [1,1],[2,1] ],
 [ [0,2], [1,2],[2,2] ],
 [ [0,0], [0,1],[0,2] ],
 [ [1,0], [1,1],[1,2] ],
 [ [2,0], [2,1],[2,2] ],
 [ [0,0], [1,1],[2,2] ],
 [ [0,2], [1,1],[2,0] ],
 ]
 for(let i of winCombine){ // [ [1,0], [1,1],[1,2] ],
    let row = i[

      ]
    let now = position[i[0][0]][i[0][1]]
    if(now == position[i[1][0]][i[1][1]] && now == position[i[2][0]][i[2][1]]){
      return now
    }
  }
 return undefined

      [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 */
function evaluateTicTacToePosition(position) {
  let winCombine = [
    [ [0,0], [1,0],[2,0] ],
    [ [0,1], [1,1],[2,1] ],
    [ [0,2], [1,2],[2,2] ],
    [ [0,0], [0,1],[0,2] ],
    [ [1,0], [1,1],[1,2] ],
    [ [2,0], [2,1],[2,2] ],
    [ [0,0], [1,1],[2,2] ],
    [ [0,2], [1,1],[2,0] ],
  ]
  for(let i of winCombine){ // [ [1,0], [1,1],[1,2] ],
    let [one, two, three] = [...i]
    let now = position[one[0]][one[1]] == 'X' || position[one[0]][one[1]] == '0' ? position[one[0]][one[1]] : 'r';
    if(now == position[two[0]][two[1]] && now == position[three[0]][three[1]]){
      return now
    }
  }
  return undefined
}

module.exports = {
  getFizzBuzz: getFizzBuzz,
  getFactorial: getFactorial,
  getSumBetweenNumbers: getSumBetweenNumbers,
  isTriangle: isTriangle,
  doRectanglesOverlap: doRectanglesOverlap,
  isInsideCircle: isInsideCircle,
  findFirstSingleChar: findFirstSingleChar,
  getIntervalString : getIntervalString,
  reverseString: reverseString,
  reverseInteger: reverseInteger,
  isCreditCardNumber: isCreditCardNumber,
  getDigitalRoot: getDigitalRoot,
  isBracketsBalanced: isBracketsBalanced,
  timespanToHumanString : timespanToHumanString,
  toNaryString: toNaryString,
  getCommonDirectoryPath: getCommonDirectoryPath,
  getMatrixProduct: getMatrixProduct,
  evaluateTicTacToePosition : evaluateTicTacToePosition
};
