function print(val) {
    document.getElementById("result").innerHTML += val;
}

function getResult() {
    let transaction = document.getElementById("result").innerHTML;
    // hesaplama işlemi için eval fonksiyonu kullanıldı.
    document.getElementById("result").innerHTML = eval(transaction);

}

function deleteAll() {
    document.getElementById("result").innerHTML = "";
}