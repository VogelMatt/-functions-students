const createStudent = (name1,grade1) => {
    return {
        name: name1,
        grade: grade1,
    }
}
const addMathGrade = (gradeobj) => {
    return gradeobj.math = "B"
}
const addHistoryGrade = (gradeobj) => {
    return gradeobj.history = "C"
}
const addScienceGrade = (gradeobj) => {
    return gradeobj.science = "A"
}
const student = createStudent("James", "7th");
addMathGrade(student);
addHistoryGrade(student);
addScienceGrade(student);
console.log(student);