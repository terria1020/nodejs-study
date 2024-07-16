// 타입스크립트만의 데이터 타입?
let a: unknown;
// 타입을 확인하고 가야 한다?

let b = 2

let c = a + b // a가 어떤 타입인지를 명시하든 확인하든 하고 가야 한다는 오류

if (typeof a === 'number') {
    let d = a + b // a의 타입을 확정하고 있기 때문에 최소한 이 블럭 내에서는 오류 X
}
// 타입을 잘은 모르지만 강타입으로 만든다고 보면 될듯


// 아무것도 반환하지 않을 함수: void 타입
function foo() {
    console.log("hello world!")
}

// void 타입을 명시할 수도 있음
function foo2() : void {
    console.log("hello world!")
}

// "절대 반환하지 않을 함수" 명시: never 
function foo3() : never {
    throw new Error("error")
}