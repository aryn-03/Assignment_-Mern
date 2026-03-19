// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Get only published courses Using filter since this is a selection operation
export function getPublishedCourses() {
  let publishedCourses = courses.filter(
    (course) => course.published === true
  );
  return publishedCourses;
}

// Sort courses by price (High → Low) If first course price is higher, place it first
export function sortByPrice() {
  let sortedCourses = courses.sort(
    (course1, course2) => (course1.price > course2.price ? -1 : 1)
  );
  return sortedCourses;
}

// Extract only title and price from courses
export function extractTitleAndPrice() {
  let data = courses.map((course) => {
    let title = course.title;
    let price = course.price;
    return { title, price };
  });
  return data;
}

// Calculate total value of published courses Using reduce for aggregation
export function getTotalValue() {
  let total = getPublishedCourses().reduce(
    (accumulator, course) => accumulator + course.price,
    0
  );
  return total;
}

// Add a new course immutably
export function addCourse(id, title, price, published) {
  let courseToBeAdded = {
    id: id,
    title: title,
    price: price,
    published: published
  };

  let data = [...courses];
  data.push(courseToBeAdded);

  return data;
}
