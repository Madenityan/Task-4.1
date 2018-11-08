// Создать свои собственные методы.

// 1) myForEach - тот же самый forEach
// 2) myMap- тот же самый map
// 3) mySort - тот же самый sort
// 4) myFilter - тот же самый filter
// 5) myPush - тот же самый push

// потрібно написати всі методи, без використання цих же функцій типу, написати forEach
// без використання самого forEach
// // так не можна:
// // myForEach = () => arr.forEach

/*------------------------- 1 ------------------------------*/
let items = [5, 10, 15];

function myForEach(arr = [], callback = () => {}) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
myForEach(items);

myForEach(items, item => {
    console.log(item);
});

/*------------------------- 2 ------------------------------*/

let digest = [5, 6, 7];

function myMap(arr = [], callback = () => {}) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callback(arr[i], i, arr));
    }

    return resultArr;
}

let resultMap = myMap(digest,(item, index) => {
    return item * 2;
});
console.log(resultMap);

/*------------------------- 3 ------------------------------*/

let arrSort = ['30', '40', '50', '60'];

function mySort() {


}

mySort(arrSort);
















