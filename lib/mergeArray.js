export function countStars(arrayOfArrays) {
  const starCounts = {};

  arrayOfArrays.forEach((innerArray) => {
    innerArray.forEach((object) => {
      Object.keys(object).forEach((key) => {
        if (!starCounts[key]) {
          starCounts[key] = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
          };
        }
        const value = object[key];
        if (value >= 1 && value <= 5) {
          starCounts[key][value]++;
        }
      });
    });
  });

  return starCounts;
}

// const arrayOfArrays = [
//   [
//     { Cleanliness: 4, Fast: 3, Jindal: 2 },
//     { Cleanliness: 4, Fast: 2, Jindal: 3 },
//   ],
// ];

// const result = countStars(arrayOfArrays);
// console.log(result);
