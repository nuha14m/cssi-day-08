
console.log("writeMessage")
const onSubmit = () =>{
     
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput =  document.querySelector("#message").value;
    console.log(passcodeInput)
    console.log(messageInput)
    const payload = {
        passcode: passcodeInput,
        message: messageInput
    }
    
    firebase.database().ref().push(payload);
     

}