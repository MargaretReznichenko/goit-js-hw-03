//Напиши функцію під назвою makeArray, якф приймає три параметри firstArray(масив), secondArray(масив) maxLenght(число).
//Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
//Якщо кількість елементів у новому масиві перевищує maxLenght, функція повинна повернути копію масиву з довжиною maxLenght елементів.firstArray.
//В іншому випадку функція повинна повернути весь новий масив.


function makeArray(firstArray, secondArray, maxLength) {
    const thirdArray = firstArray.concat(secondArray);
    return thirdArray.slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []