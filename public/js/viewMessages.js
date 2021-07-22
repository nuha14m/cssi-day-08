
var numAttemptsRemaining =10;
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    
    messagesRef.on('value', (snapshot)=> {
        numAttemptsRemaining-=1;
        const passcode_obj = document.querySelector("#passcode");
        const submitButton =  document.querySelector("#viewMsg")
        if(numAttemptsRemaining<=0){
            //disable input
            console.log("done");s
            passcode_obj.disabled = true;
           submitButton.disabled = true;
        }
        const data = snapshot.val()
     
        const mypasscode = passcode_obj.value.toLowerCase();
        const keys =  Object.keys(data);
   
        var found = false;
         for(let val in keys ){
             if(data[keys[val]].passcode.toLowerCase() === mypasscode){
                 document.querySelector("#message").innerHTML= data[keys[val]].message;
                 document.querySelector("#modal").classList.add("is-active");  
                 found = true;
                 break;
             }
         }
        
        if(found===false){
            document.querySelector("#message").innerHTML= "";
            alert("Incorrect Passcode. You have "+numAttemptsRemaining+" attempts remaining.")
        }
    })
}

const closeModal = () => {
      document.querySelector("#modal").classList.remove("is-active");
}