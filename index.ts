//Basic Types
let id: number = 5
let company: string = 'Halo'
let isPublished: boolean = true
let x: any = 'HELLO'
let age: number

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

ids = ids.concat(6)

//console.log(arr)

// Tuple
let person: [number, string, boolean] = [5, 'John', true]

// Tuple array
let employee: [number, string][]

employee = [
  [1, 'John'],
  [5, 'Let'],
  [7, 'Fil Necati'],
]

//console.log(employee)

// Union
let pid: string | number = 22
pid = '55'

// Enum
enum Direction1 {
  Up = 7,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

//console.log(Direction2.Left)

// Objects

type User = {
  id: number
  name: string
}

const user = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

// Functions
const addNum = (x: number, y: number): number => {
  return x + y
}

const log = (message: string | number): void => {
  console.log(message)
}

//log(55)
//console.log(addNum(5, 6))

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number // optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

// user1.id = 5 // this cannot be done due to readonly

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad')
const masterchief = new Person(2, 'Master Chief')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Cortana', 'AI')
//console.log(emp.register())

// Generics
const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

strArray.push('hello')
numArray.push(5)

console.log(strArray)
console.log(numArray)
