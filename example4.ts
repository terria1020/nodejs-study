
// any == 간단히 말해서 무엇이든 될 수 있음

const a: any[] = [ 1, 2, 3, 4 ]
const b: any = true

console.log(a + b) // js에서 되던 것도 타입스크립트에서 허용됨

// any는 잘 써야겠다 