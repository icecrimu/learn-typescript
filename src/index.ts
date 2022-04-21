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
