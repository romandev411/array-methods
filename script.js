// 1. Даны два массива - [1, 2, 3] и [4, 5, 6]. Объедините их вместе (concat)

const concatArr = [1, 2, 3].concat([4, 5, 6]);

console.log('-----------1---------------');
console.log(concatArr);
console.log('-----------1---------------');

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
// (reverse).

const reverseArr = [1, 2, 3].reverse();

console.log('-----------2---------------');
console.log(reverseArr);
console.log('-----------2---------------');

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

const pushArr = [1, 2, 3];
pushArr.push(4, 5, 6);

console.log('-----------3---------------');
console.log(pushArr);
console.log('-----------3---------------');

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало 7, 8, 9.

const unshiftArr = [1, 2, 3];
unshiftArr.unshift(7, 8, 9);

console.log('-----------4---------------');
console.log(unshiftArr);
console.log('-----------4---------------');

// 5. Дан массив ['aaa', 'bbb', 'ccc']. Выведите на экран первый элемент и удалите его.

const shiftArr = ['aaa', 'bbb', 'ccc'];
shiftArr.shift();

console.log('-----------5---------------');
console.log(shiftArr.shift());
console.log('-----------5---------------');

// 6. Дан массив ['ddd', 'fff', 'eee']. Выведите последний элемент на экран.

const lenArr = ['ddd', 'fff', 'eee'];

console.log('-----------6---------------');
console.log(lenArr[lenArr.length-1]);
console.log('-----------6---------------');

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы с третьего по пятый.

const sliceArr = [1, 2, 3, 4, 5];
const newSliceArr = sliceArr.slice(2,5)

console.log('-----------7---------------');
console.log(newSliceArr);
console.log('-----------7---------------');

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы со второго по четвертый.

const sliceArr2 = [1, 2, 3, 4, 5];
const newSliceArr2 = sliceArr2.slice(1,4)

console.log('-----------8---------------');
console.log(newSliceArr2);
console.log('-----------8---------------');

// 9. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 4, 5]

const spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(1, 2)

console.log('-----------9---------------');
console.log(spliceArr);
console.log('-----------9---------------');

// 10. С помощью метода splice из массива [1, 2, 3, 4, 5] запишите в новый массив элементы [2, 3, 4].

const spliceArr2 = [1, 2, 3, 4, 5];
const newArrSplice2 = spliceArr2.splice(1, 3)

console.log('-----------10---------------');
console.log(newArrSplice2);
console.log('-----------10---------------');

// 11. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 'w', 'tr', 2, 3, 4, 'vv', 5, 'a']

const spliceArr3 = [1, 2, 3, 4, 5];
spliceArr3.splice(1, 0, 'w', 'tr');
spliceArr3.splice(6, 0, 'vv');
spliceArr3.splice(spliceArr3.length, 0, 'a');

console.log('-----------11---------------');
console.log(spliceArr3);
console.log('-----------11---------------');

// 12. Дан массив [5, 8, 2, 4, 7, 1]. Отсортируйте его по возрастанию.

const sortArr = [5, 8, 2, 4, 7, 1];
const newSortArr = sortArr.sort();

console.log('-----------12---------------');
console.log(newSortArr);
console.log('-----------12---------------');
