function ip() {
    let month = +document.getElementById('month').value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
           document.getElementById('ll').innerHTML = ("thang " + month + " co 31 ngay")
            break;
        case 4:
        case 6:
        case 9:
        case 11:
          document.getElementById('ll').innerHTML=('Thang' + month+ 'co 30 ngay');
            break;
        default:
         document.getElementById('ll').innerHTML=('Thang'+ month+'co 28 ngay hoac 29 ngay');
    }
}


