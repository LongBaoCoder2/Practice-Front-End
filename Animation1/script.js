const nguyetQuynh = document.getElementById('number').innerHTML

function animateNumber(duration = 5000, lastNumber, firstNumber = 0, callback) {
    let startNumber = firstNumber
    function setUpNumber(){
        if (startNumber < lastNumber){
            let inc = Math.ceil(lastNumber / (duration / 17))
            if (inc + startNumber > lastNumber){
                startNumber = lastNumber
                callback(startNumber)
            } else{
                startNumber += inc
                callback(startNumber)
                requestAnimationFrame(setUpNumber)
            }
        }
    }
    requestAnimationFrame(setUpNumber)
}

animateNumber(5000, nguyetQuynh, 0 , function(startNumber){
    const formattedNumber = startNumber.toLocaleString()
    document.getElementById('number').innerHTML = formattedNumber
})

// // const nguyetQuynh = 822004

// // document.getElementById('number').innerHTML = nguyetQuynh.toLocaleString()

// function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
//     let currentNumber = startNumber
//     function updateNumber() {
//       if (currentNumber < finalNumber) {
//         let inc = Math.ceil(finalNumber / (duration / 17))
//         if (currentNumber + inc > finalNumber) {
//           currentNumber = finalNumber
//           callback(currentNumber)
//         } else {
//           currentNumber += inc
//           callback(currentNumber)
//           requestAnimationFrame(updateNumber)
//         }
//       }
//     }
//     requestAnimationFrame(updateNumber)
//   }
  
  
//     animateNumber(822004, 3000, 0, function (number) {
//       const formattedNumber = number.toLocaleString()
//       document.getElementById('number').innerText = formattedNumber
//     })

