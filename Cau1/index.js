let n;
do {
    n = +prompt("Nhập số lượng phần tử (1 - 50):");
} while (isNaN(n) || n <= 0 || n > 50);

let arr = [];
for (let i = 0; i < n; i++) {
    let element;
    do {
        element = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    } while (isNaN(element));
    arr.push(element);
}

function sumNum(arr1) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 3 === 0) {
            sum += arr1[i];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

let result = sumNum(arr);
document.write("Trung bình cộng các phần tử chia hết cho 3: " + result);
