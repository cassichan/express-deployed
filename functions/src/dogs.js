export function getDogs(req, res) {
  res.send([
    { name: "Ryder", age: 4, breed: "Silly", gender: "MN" },
    { name: "Duke", age: 2, breed: "Rotwielier", gender: "M" },
  ]);
}

export function testApi(req, res) {
  res.send({ success: true, message: "Api is working!" });
}
