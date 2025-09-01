// ใช้ var (Code Smell #1)
var msg = "hello";

// duplicate literal / ใช้ var อีกที่หนึ่ง (Code Smell #2)
var another = "hello";

// คอมเมนต์โค้ดทิ้งไว้ยาว ๆ ก็เป็น smell ได้ในบาง rule set
// const x = 42;
// const y = 43;

module.exports = { msg, another };
