class Developer {
    name: string;
    sleepingType: number;

    constructor(name: string, sleepingType: number) {
        this.name = name
        this.sleepingType = sleepingType
    }
}

const d = typeof Developer;
console.log(`d: ${d}`)

type t = typeof Developer;

type t2 = t

const d1: Developer = new Developer("hello", 1)


// const tTypeTest: t = new Developer("hello", 1) 
type A = {
    name: string
}
type B = {
    name: string,
    age: number
}
type C = {
    hobby?: string
}

const testA: A = { name: "박재한" }
const testC: B = { name: "재한 박", age: 26 }
const testB: C = { hobby: undefined }

const BottomSheetMap = {
    a: testA,
    b: testB,
    c: testC
}
export type BOTTOM_SHEET_ID = keyof typeof BottomSheetMap;

type TestType = {
    [t in BOTTOM_SHEET_ID]: {
        name?: string,
        age?: number,
        hobby?: string
    }
}

const testTypeTest: TestType = {
    a: testA,
    b: testB,
    c: testC
}