// Basic Types
let id: number = 5
let company: string = "Hello World"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, "hello"]

// Tuple
let person: [number, string, boolean] = [1, "Charles", true]

// Tuple Array
let employee: [number, string][] = [
  [1, "Charles"],
  [2, "Gemuel"]
]

// Union
let pid: string | number
pid = "hi"
pid = 19

// Enum
enum Direction1 {
  Up, // default  0
  Down, // 1
  Left, // 2
  Right // 3
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

// Objects

// const user: {
//   id: number
//   name: string
// } = {
//   id: 1,
//   name: "Charles"
// }

type User = {
  id: number
  name: string
}

const user: User = {
  id: 2,
  name: "Charles"
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
customerId = 23

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message)
}

log("Keep it up!")

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "Charles"
}

// Cannot assign to 'id' because it is a read-only
// user1.id = 5

// Function Interface

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x + y
const sub: MathFunc = (x: number, y: number) => x - y

// Classes
class Person {
  private id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

const charles = new Person(1, "Charles ")
const john = new Person(2, "John")

console.log(charles, john)

// charles.id = 3

// private
// protected
// public

// Implement Interface in class
interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person2 implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return "1"
  }
}

const joe = new Person2(2, "Joe")

console.log(joe.register())
