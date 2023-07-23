//IIFE

// (
//     function one() {
//         console.log(`db connected`);
//     }
// )();

const a = ((nums1 = 10, nums2 = 20) => {
    return nums1 + nums2;
})(30,20);

console.log(a);