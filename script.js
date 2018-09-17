const LENGTH = 1000;
let x = 83;
let y = 9;
// console.log(x %=y,x);

let newArr = rNumMobile(LENGTH);
// newArr.sort();
console.log(showNumMobie(newArr, " - 09"));
checkNum(newArr);

// Gọi mảng random
function rNumMobile(length) {                                            // Tạo function nhận thông số chiều dài mà mảng sẽ chứa
    let bigArray = Array(length);                                        // Khởi tạo mảng với chiều dài n (đây giá trị n là biến length)
    addNumMobile(bigArray, function (infoArr, positionArr) {             // Gọi hàm set giá trị cho từng vị trí trong mảng, hàm sẽ nhận 1 giá trị là mảng lớn truyền vào, và 1 giá trị là dạng function
        let value = Math.floor(Math.random() * 71111111) + 11111111;
        bigArray[positionArr] = value;
    });
    return bigArray;
}

// Tạo mảng
function addNumMobile(arr, setvalue) {
    let length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        setvalue(arr[i], i);
    }
}

function showNumMobie(arr, gap) {
    let content = "09";
    addNumMobile(arr, function (element, index) {
        content = content + element + gap;
    });
    console.log(content);
}

// Bài này dùng regex để kiểm tra !!!
function checkNum(arr) {
    flag = 0;
    addNumMobile(arr, function (valueArr, i) {
        let regex = /^[678][23456789][\d]{6,}$/;
        if (regex.test(valueArr)) {
            console.log("09" + valueArr);
        }
    })
}