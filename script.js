const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const myResult = document.getElementById("myResult");

myBtn.onclick = function(){
   let score = Number(myInput.value);
    switch(true) {
      case  score>= 90:
        myResult.textContent = "The grade is A";
        break;

        case score>= 80:
            myResult.textContent = "The grade is B";
            break;

            case score>= 70:
                myResult.textContent = "The grade is C";
                break;

                case score>= 60:
                    myResult.textContent = "The grade is D";
                    break;
                    
                    default:
                        myResult.textContent = "The grade is F";
                        break;
    }
        

    }
