var staticObject = {
  name: "static object",
  explain : "미리, 혹은 이미 작성된 객체"
};
console.dir(typeof(staticObject)); // 'object'
console.log(staticObject.name); // static object
console.log(staticObject.explain); // 미리, 혹은 이미 작성된 객체

var dynamicObject = {};
dynamicObject.name = "dynamic object";
dynamicObject.explain = "동적으로 생성된 객체";
console.dir(typeof(dynamicObject)) // 'object'
console.log(dynamicObject.name); // dynamic object
console.log(dynamicObject.explain); // 동적으로 생성된 객체

let dynamicObj = {};
dynamicObj.age = 20;
dynamicObj.address = "대전광역시"
console.log(dynamicObj) // {age:20, address: '대전광역시'}