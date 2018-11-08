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

function mySort(arr = [], callback = () => {}) {
    for (let i = 0; i < arr.length; i++) {
        for(let m = i; m < arr.length; m++) {
            if (arr[i] < arr[m]) {
                let initialVal = arr[i];
                arr[i] = arr[m];
                arr[m] = initialVal;
            }
        }
    }
    return arr;
}

console.log(mySort([100,50,608,790]));

/*------------------------- 4 ------------------------------*/

let arrFilter = ['Apple','Orange', 'Berry', 'Strawberry'];
let newArrFilter = [];

function myFilter(arr = [], callback = () => {}) {

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > 5) {
            newArrFilter.push(arr[i]);
        }
    }
}

myFilter(arrFilter);
console.log(newArrFilter);













