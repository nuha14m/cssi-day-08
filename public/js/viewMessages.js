
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    
    messagesRef.on('value', (snapshot)=> {
        const data = snapshot.val()
        const passcode_obj = document.querySelector("#passcode");
        const passcode = passcode_obj.value.toLowerCase();
        const keys = Object.keys(data);
        if(keys.indexOf(passcode)>-1){
            document.querySelector("#message").innerHTML= data[passcode];
            document.querySelector("#modal").classList.add("is-active");  
        }
        else{
            document.querySelector("#message").innerHTML= "";
            alert("Passcode does not exist!")
        }
    })
}

const closeModal = () => {
      document.querySelector("#modal").classList.remove("is-active");
}