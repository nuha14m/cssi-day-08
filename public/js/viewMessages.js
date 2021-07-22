
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    
    messagesRef.on('value', (snapshot)=> {
        const data = snapshot.val()
        const passcode = document.querySelector("#passcode");
        const keys = Object.keys(data);
        if(keys.indexOf(passcode.value)>-1){
            document.querySelector("#message").innerHTML= data[passcode.value];
        }
        else{
            document.querySelector("#message").innerHTML= "";
            alert("Passcode does not exist!")
        }
        
    })
}