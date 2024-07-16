
// player 객체가 있는데, name은 무조건 가지지만 age는 일부는 가지고 있고 일부는 가지고 있지 않는다 ?
const player: {
    name: string,
    age: number
} = {
    name: "안녕하세요",
    age: 12
}
// name과 age 를 가지는 객체인 player를 생성했음. 근데 optional 하게 할 수 있나 ?

const player2: {
    name: string,
    age: number
} = {
    name: "안녕하세요"
}

// 오류가 남

const player3: {
    name: string,
    age?: number
} = {
    name: "안녕하세요"
}
// 물음표 기호 추가 시 타입을 age?: number | undefined 라고 표기하고 있고, 오류가 사라짐