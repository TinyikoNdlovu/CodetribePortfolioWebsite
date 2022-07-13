let talk = 'contact me.';
let locations = 'Current Location,';
let provinces = 'Province: Gauteng';
let speak = 'I will love to here from you, whether it is about <br> a project, job opportunity or just a chat. Feel <br> free to contact me.';
let gettouch = 'Get In Touch';
                
document.getElementById('contact').innerHTML = talk;
document.getElementById('location').innerHTML = locations;
document.getElementById('province').innerHTML = provinces;
document.getElementById('chat').innerHTML = speak;
document.getElementById('inTuoch').innerHTML = gettouch;

function allow_alphabets(element){
    let textInput = element.value;
    textInput = textInput.replace(/[^A-Za-z ]*$/gm, ""); 
    element.value = textInput;
}

function check_for_numbers(element){
    let textInput = element.value;
    let pattern = /[0-9]+/gm;
    if(pattern.test(textInput)){
        console.log("String contains Numbers.");
    }else{
        console.log("String does not contain Numbers.");
    }

    element.value = textInput;
}

function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  