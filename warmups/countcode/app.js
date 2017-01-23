function countCode(str) {
    return str.match(/co[A-z]e/gi).length;
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));