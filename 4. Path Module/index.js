import path from "path";

// console.log(path.basename("c:\\node.js\\index.js"));
// console.log(path.dirname("c:\\node.js\\courses\\i(())
// console.log(path.extname("c:\\node.js\\courses\\index.js"));

// console.log(path.join("c:", "sagar-web", "courses", "redux-toolkit"));

// console.log(path.join("c:", "sagar-web", "courses", "redex-tookit", ".."));
// console.log(
//   path.join("c:", "sagar-web", "courses", "redex-tookit", "..", "..")
// );
console.log(path.normalize("c:\\node.js\\courses\\index.js"));
console.log(path.parse("c:\\node.js\\courses\\index.js"));
