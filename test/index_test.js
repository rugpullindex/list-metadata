const test = require("ava");

test("if list of data tokens can be required in JavaScript", t => {
  t.truthy(require("../src/index.js"));
});
