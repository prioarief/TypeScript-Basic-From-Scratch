// String
let my_name: string = 'Prio'

// Number
let age: number = 18

// Boolean
let isMarried: boolean = false

// any = no spesific type
let heroes:any = "Iron Man"
heroes = 20

// array
let array: number[] = [1, 2, 3]

// tuples
let biodata: [string, number]
biodata = ['Tangerang', 18] // no error
// biodata = ['Tangerang', true] //  error
// biodata = ['Tangerang', 20, 20] //  error, because biodata is not assignable to type '[string, number]'. Source has 3 element(s) but target allows only 2

// enum
    // numeric enum
    // enum month {
    //     JAN = 1, // default value 0
    //     FEB, // increment from prev value
    //     MAR
    // }

    // string enum
    enum month {
        JAN = "Januari", 
        FEB = "Februari", 
        MAR = "Maret"
    }