//Напиши функцію slugify(title), яка приймає заголовок статті, парамерт title  і повертає slug, створенний із цього рядка.
//Значенння параметра title будуть рядки, слова яких розділені лише пробілами.
//Усі слова slug повинні розділені тире.

function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
