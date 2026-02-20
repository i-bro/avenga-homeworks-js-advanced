  async function getStudents() {
     return fetch("https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/refs/heads/main/G2/Homeworks/students.json")
    .then(response =>  response.json())
    .then(data => {
        return data;
    })
    .catch(error => console.log("error in fetching", error))
}

//All students with an average grade higher than 3
 getStudents().then(students => {
    const studentsAboveThree = students.filter(student => student.averageGrade > 3)
    console.log(studentsAboveThree);
    
})

//All female student names with an average grade of 5
getStudents().then(students => {
    const femaleGradeFive = students.filter(student => student.gender === "Female" && student.averageGrade === 5).map(student => student.firstName);
    console.log(femaleGradeFive);
    
})

//All male student full names who live in Skopje and are over 18 years old
getStudents().then(student => {
    const studentsWhoLiveInSkopje = student.filter(stud => stud.city === "Skopje" && stud.age > 18 && stud.gender === "Male").map(stud => `${stud.firstName} ${stud.lastName}`)
    console.log(studentsWhoLiveInSkopje);
    
})

// The average grades of all female students over the age of 24
getStudents().then(student => {
    const femaleOver24 = student.filter(st => st.gender === "Female" && st.age > 24);

    const average = femaleOver24.reduce((accumulate, current) => accumulate + current.averageGrade, 0) / femaleOver24.length;
    console.log("average grade:", average);
})

//All male students with a name starting with B and average grade over 2
getStudents().then(student => {
    const studentWithNameB = student.filter(st => st.firstName[0] === "B" && st.averageGrade > 2)
    console.log(studentWithNameB);
})

//Student emails of all female students with age between 20 and 30 years, ordered ascending
getStudents().then(student => {
    const studentEmailsOfFemails = student.filter(st => st.gender === "Female" && st.age >= 20 && st.age <= 30).map(st => st.email).toSorted((a, b) => a.localeCompare(b))
    console.log(studentEmailsOfFemails);
})

//Students full names of students above 40, ordered descending
getStudents().then(student => {
    const fullNames = student.filter(st => st.age > 40).map(st => `${st.firstName} ${st.lastName}`).toSorted((a, b) => b.localeCompare(a))
    console.log(fullNames);  
})

//Count of students using google mail
getStudents().then(student => {
    const googleMail = student.filter(st => st.email.includes("google"))
    console.log(googleMail.length);
})

//The average age of female students living in Skopje
getStudents().then(student => {
    const averageSkopje = student.filter(st => st.city === "Skopje" && st.gender === "Female")
    const average = averageSkopje.reduce((acc, curr) => acc + curr.age, 0) / averageSkopje.length;
    console.log( average);
})

