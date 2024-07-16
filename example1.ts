let a = "hello" // 묵시적 타입 설정 (타입 추론)
let b: boolean = false // 명시적 타입 설정

b = true

b = "true" // 명시적 타입 설정으로 타입이 다르다는 것을 알게 됨 

a = true // 묵시적일지라도 타입 추론으로 타입이 다르다는 것을 알게 됨

const player = {
    hello: "world"
}

player.hello