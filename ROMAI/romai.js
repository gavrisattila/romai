console.log(1000);


function romai(n) {

    var romaiSzam="";


    while (n>0) {

        if (n-1000) {
            n-=1000;
            romaiSzam+="M";
        }else if (n-500) {
            n-=500;
            romaiSzam+="D";
     
        }else if (n-100) {
            n-=100;
            romaiSzam+="C";
     
        }else if (n-50) {
            n-=50;
            romaiSzam+="L";
     
        }else if (n-=10>0) {
            n-=10;
            romaiSzam+="X";
        }else if (n-9>0) {
            n-=9;
            romaiSzam+="IX";
        }else if (n-5>0) {
            n-=5;
            romaiSzam+="V";
        }else if (n-4>0) {
            n-=4;
            romaiSzam+="IV";
        }else if (n-1>0) {
            n-=1;
            romaiSzam+="I";
        }
    return romaiSzam;        
    }
}