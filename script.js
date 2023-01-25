let newPass1El = document.querySelector("#newPass1-El")
let newPass2El = document.querySelector("#newPass2-El")

let pass1 = []
let pass2 = []

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePass()
{
    for(let i = 0; i < 15; i++)
    {
        let random = Math.floor((Math.random() * 58) + 1);
        pass1 += characters[random];
    }

    for(let i = 0; i < 15; i++)
    {
        let random = Math.floor((Math.random() * 58) + 1);
        pass2 += characters[random];
    }

    newPass1El.textContent = pass1;
    newPass2El.textContent = pass2;

    pass1 = []
    pass2 = []
}