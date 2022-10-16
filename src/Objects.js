/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
    } else {
        if (!data.hasOwnProperty('income')) {
            data.income = 100000;
        }
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    let keys3 = Object.keys(obj3);
    let arr = [...keys1, ...keys2, ...keys3];
    arr.sort();
    return arr;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let myObj = deepClone(obj);
        myObj.id = i;
        arr[i] = myObj;
    }
    return arr;
}

function deepClone(obj) {
    const myObj = {};
    for (let key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
            myObj[key] = deepClone(obj[key]);
            continue;
        }
        myObj[key] = obj[key];
    }
    return myObj;
}
