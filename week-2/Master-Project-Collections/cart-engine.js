/*
// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses
*/
import { getPublishedCourses } from './course-engine.js';


const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// Merge cart data with published course data
export function mergeCartCourse() {
  let courses = structuredClone(getPublishedCourses());

  let finalCourse = courses.map((course) => {
    // Find matching cart item for the course
    let cartItem = cart.find((item) => item.courseId === course.id);

    // Assign quantity only if course exists in cart
    course.qty = cartItem.qty;

    return course;
  });

  return finalCourse;
}

// Calculate total cart amount
export function getCartTotal() {
  let cartItem = mergeCartCourse();

  let total = cartItem.reduce(
    (accumulator, item) => accumulator + (item.price * item.qty),
    0
  );

  return total;
}

// Increase quantity of a course (immutability intended)
export function increaseQuantity(cartId, qty) {
  let cartItem = structuredClone(mergeCartCourse());

  let increasedCart = cartItem.map((item) => {
    if (cartId === item.id) {
      item.qty = qty;
    }
    return item;
  });

  return increasedCart;
}

// Remove a course from the cart
export function removeItem(cartId) {
  let final = mergeCartCourse();

  let itemIndx = final.findIndex((item) => item.id === cartId);
  if (itemIndx !== -1) {
    final.splice(itemIndx, 1);
  }

  return final;
}

// Check whether all cart items are paid courses
export function checkIfAllPaid() {
  let final = mergeCartCourse();

  let allPaid = true;
  for (let val of final) {
    if (val.price === 0) {
      allPaid = false;
      break;
    }
  }

  return allPaid;
}

console.log(checkIfAllPaid());
