const obj = { a: 1, b: 2, c: 3, sum() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d":{}, "e": [1,23,4,43,43], "filho1": [{ "s": 21 }] }'))