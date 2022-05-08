function CalsCalculated(numbers){
    window.msg.innerHTML += numbers + "<br>";
}
function run(){
    var num1 = parseInt(window.wgt.value);
    var num2 = parseInt(window.wk.value);
    var num3 = parseInt(window.hor.value);
    CalsCalculated(num1 * num2 * num3 );
}

function calculated(numbers) {
        window.msg4.innerHTML += numbers + "<br>"; 
    }
    function run7() {
   var n1 = window.br2.value;
   var r1 = 0.5;
   calculated(n1 * r1);
    }

    function calculated2(numbers) {
    window.msg5.innerHTML += numbers + "<br>"; 
    }

    function run8() {
   var n2= window.br3.value;
   const r2 = 0.7;
   calculated2(n2 * r2);
    }

    function calculated3(numbers) {
        window.msg6.innerHTML += numbers + "<br>"; 
    }
    function run9() {
   var n3 = parseInt(window.br4.value);
   var n1 = parseInt(window.br2.value);
   const r1 = 0.5;
        calculated3(n3 + (n1 * r1));
    }
