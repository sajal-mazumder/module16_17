

/***
 * loops types
 * 1. for loop
 * 2. while loop
 * 3.do while loop
 * 4. for of loop ---> use in array
 * 5. for in loop ---> uee in object
 */

let nums = [1, 2,  3, 4, 5, 54, 5332, 45,56, 544, 4456];


// apply for of loop
// for(num of nums){
    //     console.log(num);
    // }
    
    // apply for loop
    
// for(let i = 0; i < nums.length; i++){
    //     // console.log(i);
    //     console.log(nums[i]);
    // }
    
    // apply while loop
    
    // let i = 0;
    // while (i < nums.length) {
        //     // console.log(i);
        //     console.log(nums[i]);
        //     i++;
        //     // console.log(nums[i]); // shows an undefined result at the end bcz of i++
        // }

    // reverse array: 
    // apply reverse method

        let nums1 = [1, 2,  3, 4, 5, 54, 5332, 45,56, 544, 4456];

        // nums1.reverse();
        // console.log(nums1);

        // let reversed = nums1.reverse();
        // console.log(reversed);

        // using for of loop

        // let rev_num = [];
        // for(num of nums1){
        //     // console.log(num);
        //     rev_num.push(num);
        //     // console.log(rev_num); // result as original array
        //     rev_num.unshift(num);
        //     // console.log(rev_num); // result shows reverse and multi times for its iteration
        // }
        // console.log(rev_num); // result reverse for one time

        // apply for loop

        // let reVersed = [];
        // for(let i = 0; i < nums1.length; i++){
        //     // console.log(i) // shows index numbers
        //     let num = nums1[i];
        //     reVersed.unshift(num);
        //     console.log(reVersed); // shows multi result for its every iteration
        // }
        // console.log(reVersed);  // shows only one result


        // using decrement in for loop and apply push method

        // let reV_num = [];
        
        // for(let i = nums1.length - 1; i >= 0; i--){
        //     // console.log(i); // shows index reverse way
        //     // console.log(nums1[i]); // shows every element separately by its index number
        //     let num = nums1[i];
        //     reV_num.push(num);
        // }
        // console.log(reV_num); // result returns as reverse array


        // sorting an array 
        // ascending sort: ---> smaller to larger
        // descending sort: ----> larger to smaller
        // sorting behaviors as string

        // let numbersArr = [1, 2, 4, 6, 3, 7, 5, 8];
        // let sortNum = numbersArr.sort();
        // // console.log(sortNum); // smaller to larger

        let numArray = [32, 334, 12, 43, 7, 5, 9, 445, 103];
        // let sortArr = numArray.sort(function (a, b) { return a - b});  // ascending
        // let sortArr = [...numArray].sort(function (a, b) { return a - b});  // ascending
        // let sort_arr = numArray.sort(function (a, b) { return b - a});  // descending
        let sort_arr = [...numArray].sort(function (a, b) { return b - a});  // descending
        console.log(sort_arr);
        // console.log(sortArr);


        // let names = ['sajal', 'mukta', 'borsa', 'shubro', 'abhro', 'purnima', 'argho'];
        // let sortName = names.sort();
        // console.log(sortName);  // ascending by letter