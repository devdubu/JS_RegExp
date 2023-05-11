const str = `
010-1234-1234
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/\./gi))

// 결과 2
console.log(str.match(/\.$/gi))

// 결과 3
console.log(str.match(/\.$/gim))

