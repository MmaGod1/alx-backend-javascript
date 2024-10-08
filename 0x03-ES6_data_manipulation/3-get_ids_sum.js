export default function getStudentIdsSum(arrObj) {
  return arrObj.reduce((total, student) => total + student.id, 0);
}
