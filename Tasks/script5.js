//leap year
function CheckLaeapYear(year){
    if(year%4==0 || year%100!=0 && year%400==0){
        console.log("leap year");
    }
    else{
        console.log("not an leap year")
    }
}
const year=prompt("enter the leap year:");
CheckLaeapYear(year);