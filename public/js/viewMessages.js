
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    
    messagesRef.on('value', (snapshot)=> {
        const data = snapshot.val()
        const passcode = document.querySelector("#passcode");
        document.querySelector("#message").innerHTML= data[passcode.value];
    })
}