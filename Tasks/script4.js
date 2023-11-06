function GradeCal(num){
    if(num>=90){
        console.log("Grade A");
    }
    else if(num>=80 && num<=89){
        console.log("Grade B");
    }
    else if(num>=70 && num<=79){
        console.log("Grade C")
    }
    else if(num>=60 && num<=69){
        console.log("Grade D");
    }
    else{
        console.log("Grade F");
    }
}

const num=prompt("Enter the number:");
GradeCal(num);