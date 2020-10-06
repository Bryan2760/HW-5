//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

const cLastNameResults = [];
for (const student of studentList) {
 if (student.lastName[0] === "C") {
 let scoreSum = 0;
 for (const score of student.scores) {
 scoreSum += score;
 }
 const averageScore = scoreSum / student.scores.length;
 for (const min of student.scores){
     
 }
 cLastNameResults.push({
 firstName: student.firstName,
 lastName: student.lastName,
 avgScore: averageScore
 });
 }
}
console.log(cLastNameResults);