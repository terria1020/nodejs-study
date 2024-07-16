// readonly 변수? 


type AnotherPlayer = {
    readonly name: string,
    age?: number
}

const p1 : Player = { name: "hello", age: 12 }

const numbers: readonly number[] = [1, 2, 3, 4]

numbers.push(5) // 에러: readonly number[] 타입에는 push 함수가 없음

numbers.map(a => {

}) // Map는 순회만 하지 배열을 변경하지 않기 때문에 호출 가능