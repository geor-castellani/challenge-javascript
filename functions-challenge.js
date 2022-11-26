
export const students = [{
    age: 32,
    examScores: [],
    gender: "male",
    name: "edu"
    },
    {
    age: 37,
    examScores: [],
    gender: "female",
    name: "silvia"
    },
    {
    age: 26,
    examScores: [],
    gender: "female",
    name: "georgina"
    },
    {
    age: 29,
    examScores: [],
    gender: "male",
    name: "luca"
    },
    {
    age: 38,
    examScores: [],
    gender: "male",
    name: "juan"
    },
    {
    age: 27,
    examScores: [],
    gender: "female",
    name: "ana"
    },
    {
    age: 22,
    examScores: [],
    gender: "female",
    name: "luisa"
    },
    {
    age: 30,
    examScores: [],
    gender: "female",
    name: "isabel"
    },
    {
    age: 24,
    examScores: [],
    gender: "male",
    name: "victor"
    },
    {
    age: 33,
    examScores: [],
    gender: "female",
    name: "virginia"
    },
    {
    age: 25,
    examScores: [],
    gender: "male",
    name: "leo"
    },
    {
    age: 27,
    examScores: [],
    gender: "male",
    name: "francisco"
    },
    {
    age: 31,
    examScores: [],
    gender: "male",
    name: "carlos"
    },
]

export const availableMaleNames = ["luca", "juan", "victor", "leo", "francisco", "carlos", "edu"];
export const availableFemaleNames = ["georgina", "ana", "luisa", "silvia", "isabel", "virginia"];
export const availableGenders = ["male", "female"];


// Menú con opciones
const menuOptions = `
Type a number from the following list to access its corresponding functionality:
To exit the application: Choose 0 (or any other number than the options).

1 - All students
2 - Number of students in class
3 - Names of all students
4 - Remove the last student from the list
5 - Remove a student randomly
6 - Info of female students
7 - Number of women and men in the class
8 - Are all the students women? (true/false)
9 - Name of the students between 20 and 25 years old
10 - Add a new student with the following data:
 - Random name
 - Random age between 20 and 50
 - Random gender
 - Grades (empty list)
11 - Name of the youngest student in the class
12 - Average age of all students in the class
13 - Average age of the women in the class
14 - Add a new random grade to each student (between 0 and 10)
15 - Sort the students alphabetically according to his name
16 - Student of the class with the best grades
17 - Highest average grade of the class and to which student belongs
18 - Add an extra point to each existing grade of all students
(grade maximum possible: 10. If there is no record yet, first note: 10)
\n`


// Muestro las opciones al usuario:
export const options = () => {
    console.log(menuOptions)
}

// Compruebo si lo que ingresa el usuario es un número:
export const isInt = (num) => {
    return !Number.isNaN(num)
}

// Calculo un número aleatorio:
export function calculateRandomNumber(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
}

// Sumo un punto extra a cada alumno en cada una de sus notas:
export const ExtraPoints = () => {
    
    for (let i = 0; i < students.length; i++) {
        const student = students[i]
        
        if (student.examScores.length !== 0) {

            student.examScores = student.examScores.map(score => score < 10 ? ++score : score);
            debugger;

        } else if (student.examScores.length === 0) {
            student.examScores.push(10);
            
        }
        
    } console.table(students);
        
}

