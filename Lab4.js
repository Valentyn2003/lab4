
  /*// 1 Завдання
function permutations(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i + 1);
    }
  
    function nextPermutation() {
      let i = n - 2;
      while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
      }
  
      if (i < 0) {
        return false;
      }
  
      let j = n - 1;
      while (j > i && arr[j] <= arr[i]) {
        j--;
      }
  
      [arr[i], arr[j]] = [arr[j], arr[i]];
  
      let k = i + 1;
      let l = n - 1;
      while (k < l) {
        [arr[k], arr[l]] = [arr[l], arr[k]];
        k++;
        l--;
      }
  
      return true;
    }
  
    let first = true;
    while (true) {
      if (first) {
        console.log(arr.join(', '));
        first = false;
      } else if (!nextPermutation()) {
        break;
      }
  
      console.log(arr.join(', '));
    }
  }
  
  const n = 4; // Змініть значення n
  permutations(n);

  */
// 2 Завдання
// Функція для знаходження наступного сполучення
function nextCombination(n, r, arr) {
  let i = r - 1;
  // Знаходимо перший зліва елемент, який можна збільшити
  while (i >= 0 && arr[i] === n - r + i + 1) {
      i--;
  }
  // Якщо такого елемента немає, то сполучення завершені
  if (i === -1) {
      return false;
  }

  arr[i]++; // Збільшуємо цей елемент
  // Заповнюємо решту елементів послідовністю
  for (let j = i + 1; j < r; j++) {
      arr[j] = arr[j - 1] + 1;
  }
  return true;
}

// Головна функція для знаходження всіх сполучень
function combinations(n, r) {
  let arr = Array.from({ length: r }, (_, i) => i + 1); // Початкове сполучення [1, 2, ..., r]
  let result = [arr.slice()]; // Зберігаємо перше сполучення

  while (true) {
      if (!nextCombination(n, r, arr)) { // Знаходимо наступне сполучення
          break;
      }
      result.push(arr.slice()); // Додаємо сполучення до результату
  }

  return result;
}

let n = 5;
let r = 3;
let result = combinations(n, r);
console.log(result.map(c => c.join(' '))); // Виводимо всі сполучення

module.exports = { combinations };