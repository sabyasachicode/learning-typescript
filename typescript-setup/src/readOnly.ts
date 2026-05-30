
// you can not overwrite properties declared with readonly type

let colleges: readonly string[] = ['IIT', 'AIIMS'] 

let tuple: [number, string];
tuple = [10,'sdah']

let newTuple :[number, string, boolean?]

newTuple = [20, "jefgfjhg"]
newTuple = [25,'dmkgfvjh', true]

enum choice {
    WINDOW,
    MIDDLE,
    AISLE
}

let seat = choice.AISLE