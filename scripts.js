//create variables 
const ownerName = document.querySelector('#name')
const ownerNameShow = document.querySelector('#owner-name')

const bankName = document.querySelector('#bank')
const bankNameShow = document.querySelector('#bank-name')

const cardNo = document.querySelector('#card-num')
const cardNoShow = document.querySelector('#card-number')

const cardExpire = document.querySelector('#expiration')
const cardExpireShow = document.querySelector('#expire')

const cvcCode = document.querySelector('#cvc')
const cvcCodeShow = document.querySelector('#card-code')

//show name
const showName = () => {
    ownerNameShow.innerHTML = ownerName.value;
}
ownerName.addEventListener('input', showName);

//show bank name
const showBankName = () => {
    bankNameShow.innerHTML = bankName.value.toUpperCase();
}
bankName.addEventListener('input', showBankName);

//show card number
const showCardNumber = () => {
    let format = cardNo.value.trim().split("").map((data, index) => {
        if ((index + 1) % 4 == 0) {
            data = data + " "
        }
        return data
    })
    cardNoShow.innerHTML = format.join("")
}
cardNo.addEventListener("input", showCardNumber);

//show expiration date
const showExpirationDate = () => {
    let format = cardExpire.value.trim().split("").map((data, index) => {
        if ((index + 1) % 2 == 0 && index + 1 !== 4) {
            data = data + "/"
        }
        return data
    })
    cardExpireShow.innerHTML = format.join("")
}
cardExpire.addEventListener("input", showExpirationDate);

//show CVC code
const showCVC = () => {
    cvcCodeShow.innerHTML = cvcCode.value;
}



