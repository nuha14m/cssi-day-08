
var numAttemptsRemaining =10;
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    
    messagesRef.on('value', (snapshot)=> {
        numAttemptsRemaining=numAttemptsRemaining-1;
        const passcode_obj = document.querySelector("#passcode");
           const submitButton =  document.querySelector("#viewMsg")
        if(numAttemptsRemaining<=0){
            //disable input
            console.log("done");
            passcode_obj.disabled = true;
           submitButton.disabled = true;
        }
        const data = snapshot.val()
     
        const passcode = passcode_obj.value.toLowerCase();
        const keys = Object.keys(data);
        if(keys.indexOf(passcode)>-1){
            document.querySelector("#message").innerHTML= data[passcode];
            document.querySelector("#modal").classList.add("is-active");  
        }
        else{
            document.querySelector("#message").innerHTML= "";
            alert("Incorrect Passcode. You have "+numAttemptsRemaining+" attempts remaining.")
        }
    })
}

const closeModal = () => {
      document.querySelector("#modal").classList.remove("is-active");
}