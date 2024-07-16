
type Player = {
    name: string,
    age?: number
}


// player 객체가 있는데, name은 무조건 가지지만 age는 일부는 가지고 있고 일부는 가지고 있지 않는다 ?
const player: Player = {
    name: "안녕하세요",
    age: 12
}
// name과 age 를 가지는 객체인 player를 생성했음. 근데 optional 하게 할 수 있나 ?

const player2: Player = {
    name: "안녕하세요"
}

// 오류가 남

const player3: Player = {
    name: "안녕하세요"
}
// 물음표 기호 추가 시 타입을 age?: number | undefined 라고 표기하고 있고, 오류가 사라짐

if (player3.age > 3) {
    // 옵셔널은 값이 있는지부터 확인해야 오류가 나지 않음
}

// Player 타입이 아닌, {name: string} 구조를 가지는 무명의 객체 타입을 반환한다고만 아는 함수
function playerMaker(name: string) {
    return {
        name: name,

    }
}

const test = playerMaker("hello")
test.age = 12 // 오류

// Player 타입을 명시적으로 반환할거라는 것을 알고 있음
function playerMakerWithoutAge(name: string) : Player {
    return {
        name: name,

    }
}

const test2 = playerMakerWithoutAge("hello")
test2.age = 12 // 오류 발생 x


const playerMaker2 = (name: string) => {
    name
}

const test3 = playerMaker2("hello")
test3.age = 12 // 오류

const playerMaker3 = (name: string) : Player => ({
    name
}) // 왜 ({}) 이런식으로 쓸까 ?

const test4 = playerMaker3("hello")
test4.age = 12 // 오류 발생 x 

