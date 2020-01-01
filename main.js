numbers = "";
result = "";
formula = "";
inputs = [];
isNum = false;

function myDate(value) {
    if (value == "AC") return resetFormula();
    if (value == "=") return outputResult();

    if (!isNaN(value)) {
        inputNumber(value);
    } else {
        inputOperator(value);
    }
}

// 数字をinputs配列に格納
function inputNumber(num) {
    numbers += num;
    isNum = true;
    outputFormula(num);
}

// 比較演算子or小数点をinputs配列に格納
function inputOperator(ope) {
    if (!(ope == "(")) {
        if (!isNum) return;
    }
    inputs.push(numbers);   ///////////////
    numbers = "";

    inputs.push(ope); 
    outputFormula(changeOperator(ope));
}

// 演算子の変換
function changeOperator(value) {
    if (value == "*") return value = "×";
    if (value == "/") return value = "÷";

    return value;
}

// 計算式を出力
function outputFormula(value) {
    formula += value;
    document.getElementById("formula").innerHTML = formula;
}

// 計算結果を出力
function outputResult() {
    inputs.push(numbers);
    for (input of inputs) {
        result += input;
    }
    document.getElementById("ans").innerHTML = "Ans " + eval(result);
}

// 計算をリセット
function resetFormula() {
    numbers = "";
    result = "";
    formula = "";
    inputs = [];
    isNum = false;
    document.getElementById("ans").innerHTML = "Ans = 0";
    document.getElementById("formula").innerHTML = formula;
}
