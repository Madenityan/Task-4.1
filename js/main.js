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
let items = [1,2,3];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

items.myForEach(number => console.log(number * 2));

/*------------------------- 2 ------------------------------*/

let digest = [5, 6, 7];

Array.prototype.myMap = function(callback) {
    let resultArr = [];

    for (let i = 0; i < this.length; i++) {
        resultArr.push(callback(this[i]));
    }
    return resultArr;
};

digest.myMap(item => console.log(item * 2));

/*------------------------- 3 ------------------------------*/

let sort = [100,50,608,790];

Array.prototype.mySort = function (callback) {
    for (let i = 0; i < this.length; i++) {
        for(let m = i; m < this.length; m++) {
            if (this[i] < this[m]) {
                let initialVal = this[i];
                this[i] = this[m];
                this[m] = initialVal;
            }
        }
    }
};

sort.mySort((a, b) => a - b);
console.log(sort);

/*------------------------- 4 ------------------------------*/

let arrFilter = ['Apple','Orange', 'Berry', 'Strawberry'];
let newArrFilter = [];

Array.prototype.myFilter = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].length > 5) {
            newArrFilter.push(this[i]);
        }
    }
};

arrFilter.myFilter(item => newArrFilter);
console.log(newArrFilter);

/*------------------------- 5 ------------------------------*/

let arrPush = [4, 7, 8];

Array.prototype.myPush = function (callback) {

    arrPush[arrPush.length] = 'Hello!';
    for(let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
};

arrPush.myPush(item => arrPush);
console.log(arrPush);
