function fibnum() {

    let num = 10;
    let num1 = 0;
    let num2 = 1;
    let num3; 
    console.log(num1); 
    console.log(num2); 
    for (i=2; i<num;i++) {
        num3 = num1+num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;


    }
}
fibnum()