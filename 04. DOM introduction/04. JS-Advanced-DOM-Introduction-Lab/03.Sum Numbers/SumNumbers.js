function calc() {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let suma = document.getElementById('sum')
    let res = (Number(n1) + Number(n2)).toString();
    suma.value = res
  
}
