function findCoursesByPrice (minPrice, maxPrice, coursesArr) {
  const result = coursesArr.filter((course) => {
    if ((course.prices[0] >= minPrice && course.prices[1] <= maxPrice || course.prices[1] >= minPrice) && course.prices[0] <= maxPrice) {
      return true
    } else if (course.prices[0] >= minPrice && maxPrice === null) {
      return true
    }
  })
  return result.sort(sortCourses)
}

function sortCourses(a, b) {
  return a.prices[0] > b.prices[0] ? 1 : b.prices[0] > a.prices[0] ? -1 : 0;
}

let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

console.log(findCoursesByPrice(null, 200, courses))

console.log(findCoursesByPrice(200, null, courses))

console.log(findCoursesByPrice(100, 350, courses))
