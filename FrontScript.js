


// Register Section 
const submitRegister = async () =>{
    let EmailUserDom = document.querySelector('input[name="Email_User"]')
    let UsernameUserDom = document.querySelector('input[name="Username"]')
    let PasswordUserDom = document.querySelector('input[name="Password"]')
    let ConfirmPasswordUserDom = document.querySelector('input[name="ConfrimePassword"]')
    
  try{

    let userData = {
        Fullname: UsernameUserDom.value,
        Email: EmailUserDom.value,
        Password: PasswordUserDom.value
    }
    const response = await axios.post(
        'http://localhost:3000/user',userData
    )
    Swal.fire({
        title: 'Register Success' , 
        icon: 'success',
        
    }).then(()=>{
        window.location.href = 'index.html'; 
    })
    console.log(response.data)


    



  }catch(error){
    console.log(error)
  }
}




