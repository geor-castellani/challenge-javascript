
import readline from "readline";
import {students, availableFemaleNames, availableMaleNames, availableGenders, calculateRandomNumber, ExtraPoints, options, isInt, 
} from "./functions-challenge.js";


const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
});


// Añado una promesa y la gestiono
function getOptionFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        rl.question("Choose an option: ", (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
            } else {
                reject("Please enter a valid number");
            }
        })
    })
    return promise;
}

export async function displayOptions() {
    let numberFromConsole
    let femalesList
    let studentsScores
    let studentAges

    do {

      try {
        options()
        numberFromConsole = await getOptionFromConsole();
        
    } catch (error) {
        console.log(error)
        process.exit(0)
    }

    
    switch(numberFromConsole) {
      
      case 1:
          // Muestro en formato de tabla todos los alumnos:
          console.log("Table with students:")
          console.table(students);
          break;

      case 2:
          // Muestro por consola la cantidad de alumnos que hay en clase:
          console.log("Total number of students: ", students.length)
          break;

      case 3:
          // Muestro por consola todos los nombres de los alumnos:
          const namesList = students.map(student => student.name);
          console.log("List of students names: ")
          namesList.forEach(name => console.log(name));
          break;

      case 4:
          // Elimino el último alumno de la clase:
          students.pop();
          console.log("Students after removing the last one from the list: ")
          console.table(students)
          break;

      case 5:
          // Elimino a un alumno aleatoriamente:
          students.splice(calculateRandomNumber(0, students.length), 1);

          console.log("Students after removing a random student: ");
          console.table(students)
          break;

      case 6:
          // Muestro por consola todos los datos de los alumnos que son mujeres:
          femalesList = students.filter(student => student.gender === "female");

          console.log("Class women: ")
          const Females = femalesList.length > 0 ? console.table(femalesList): "There are no women";
          console.log(Females)
          break;

      case 7:
          // Muestro por consola el número de hombres y mujeres que hay en la clase:
          const malesList = students.filter(student => student.gender === "male");
          femalesList = students.filter(student => student.gender === "female");
          
          console.log("Number of female students: ", femalesList.length)
          console.log("Number of male students: ", malesList.length)
          break;

      case 8:
          // Muestro true o false por consola si todos los alumnos de la clase son mujeres:
          const allFemales = students.length > 0 ? students.every(student => student.gender === "female") : false;

          console.log("Are all the students women?: ", allFemales)
          break;

      case 9:
          // Muestro por consola los nombres de los alumnos que tengan entre 20 y 25 años:
          const youngList = students.filter(student => student.age >= 20 && student.age <= 25 );
          const youngListNames = students.length > 0 ? youngList.map(student => student.name) : "There are no students in this class. To add a new student choose option 10"

          console.log("Students between 20 and 25 years of age: ", youngListNames)
          break;

      case 10:
          // Añado un alumno nuevo con los siguientes datos:
          // - nombre aleatorio.
          // - edad aleatoria entre 20 y 50 años.
          // - género aleatorio.
          // - listado de calificaciones vacío.
          
          const randomGender = availableGenders[Math.floor(Math.random()*availableGenders.length)];
          const randomName = randomGender === "female"? availableFemaleNames[Math.floor(Math.random()*availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random()*availableFemaleNames.length)];
          let randomAge = calculateRandomNumber(20, 50);

          students.push({age: randomAge, examScores: [], gender: randomGender, name: randomName});

          console.log("Students after adding a new student randomly: ")
          console.table(students)
          break;

      case 11:
          // Muestro por consola el nombre del alumno más joven de la clase:
          studentAges = students.map(student => student.age);

          const youngerAge = Math.min(...studentAges);
          const youngerStudent = students[studentAges.indexOf(youngerAge)];
          const youngerName = students.length > 0 ?  youngerStudent.name : "There are no students in this class. To add a new one, choose option 10";

          console.log("The youngest student is: ", youngerName)
          break;

      case 12: 
          // Muestro por consola la edad media de todos los alumnos de la clase:
          const sumStudentsAges = students.length > 0 ? studentAges.reduce((sum, n) => sum + n, 0) : 0;
          const avgStudentsAges = students.length > 0 ? Math.round(sumStudentsAges / students.length) : 0; 

          console.log("Average age of all students in the class: ", avgStudentsAges)
          break;

      case 13: 
          // Muestro por consola la edad media de las mujeres de la clase:
          femalesList = students.filter(student => student.gender === "female");

          const femalesAges = femalesList.map(female => female.age);
          const sumFemalesAges = femalesAges.reduce((sum, n) => sum + n, 0);
          const avgFemalesAges = students.length > 0 ? Math.round(sumFemalesAges / femalesList.length) : "There are no students in this class. To add a new one, choose option 10";

          console.log("Average age of female students: ", avgFemalesAges)
          break;

      case 14:
          // Añado una nueva nota a los alumnos. Por cada alumno de la clase, 
          // tendre que calcular una nota de forma aleatoria (número entre 0 y 10) y añadirla a su listado de notas:
          students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10))); 
          
          console.log("Notes of each updated student: ")
          console.table(students)
          break;

      case 15:
          // Ordeno el array de alumnos alfabéticamente según su nombre:
          students.sort((a, b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // si hay nombres iguales:
            return 0;
          });

          console.log("Students in alphabetical order: ")
          console.table(students)
          break;

      case 16:
          // Muestro por consola el alumno de la clase con las mejores notas:
          studentsScores = students.map(student => student.examScores);

          const sumStudentsScores = Array.from(studentsScores, (scores => scores.reduce((sum, n) => sum + n , 0)))
          const bestStudentIndex = sumStudentsScores.indexOf(Math.max(...sumStudentsScores));
          const bestStudent = students.length > 0 ? students[bestStudentIndex].name : "There are no students in this class. To add a new one, choose option 10";

          console.log("The student with the best grades is: ", bestStudent)
          break;

      case 17:
          // Muestro por consola la nota media más alta de la clase y el nombre del alumno al que pertenece:
          studentsScores = students.map(student => student.examScores);
          
          const studentsAvgGrade = Array.from(studentsScores, (scores => scores.length > 0 ? ((scores.reduce((sum, n) => sum + n , 0))/scores.length) : 0));
          const highAverage = Math.max(...studentsAvgGrade);
          const highAverageStudentIndex = studentsAvgGrade.indexOf(highAverage);
          const highAverageStudentName = studentsAvgGrade.every(media => media === 0) ? "No student has notes yet. To add a new note, choose option 14" : students[highAverageStudentIndex].name;

          console.log("The highest average grade is: ", highAverage, "and belongs to: ", highAverageStudentName)
          break;

      case 18:
          // Añado un punto extra a cada nota existente de todos los alumnos. 
          // Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
          console.log("Notes with an extra point: ")
          ExtraPoints()
          break;
      
    }


  } while (numberFromConsole > 0 && numberFromConsole <= 18)

}
