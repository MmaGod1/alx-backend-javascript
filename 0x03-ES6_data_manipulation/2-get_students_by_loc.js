export default function getStudentsByLocation(arrObj, city) {
  return arrObj.filter((students) => students.location === city);
}
