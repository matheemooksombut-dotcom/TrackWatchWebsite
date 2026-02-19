

// Connecting Form
document.addEventListener("DOMContentLoaded",()=>{
  const RegisterForm = document.querySelector('#registerForm')
  const Loginform = document.querySelector('#loginForm')



  if(RegisterForm){
    RegisterForm.addEventListener("submit" , async(e)=>{
      e.preventDefault()
      await submitRegister()

    })
  }
  if(Loginform){
    Loginform.addEventListener("submit" , async(e)=>{
      e.preventDefault()
      await submitLogin()

    });
  }
})






// Register Section 
const submitRegister = async () =>{
    let EmailUserDom = document.querySelector('input[name="Email_User"]')
    let UsernameUserDom = document.querySelector('input[name="Username"]')
    let PasswordUserDom = document.querySelector('input[name="Password"]')
    let ConfirmPasswordUserDom = document.querySelector('input[name="ConfrimePassword"]')
     const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
    const thaiPattern = /[\u0E00-\u0E7F]/;

    if (thaiPattern.test(PasswordUserDom.value)) {
        Swal.fire({
            title: 'Invalid Input',
            text: 'Password cannot contain Thai characters',
            icon: 'warning'
        });
        return;
    }



    if (PasswordUserDom.value !== ConfirmPasswordUserDom.value) {
            Swal.fire({
            title: 'Password Error',
            text: 'Password not match',
            icon: 'warning'
        });
        return;
    }  
    if (!strongPassword.test(PasswordUserDom.value)) {
        Swal.fire({
        title: 'Password Error',
        text: ' Password must contain letters, numbers and at least 6 characters and Special characters',
        icon: 'warning'
    });
    return;
    }
  try{

    let userData = {
        Username: UsernameUserDom.value,
        Password: PasswordUserDom.value,
        Email: EmailUserDom.value
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

// Login Section
const submitLogin = async () =>{ 
  let UsernameDom = document.querySelector('input[name="Username"]')
  let PasswordDom = document.querySelector('input[name="Password"]')


  if(UsernameDom.value === '' || PasswordDom.value === ''){
      Swal.fire({
        title: 'Please Enter Username and Password',
        text: 'Try Again',
        icon: 'warning'
      })
      return; 
  }

  try{
    await axios.post('http://localhost:3000/login',{
      Username: UsernameDom.value,
      Password: PasswordDom.value
    })

    Swal.fire({
      title: 'Login Success' , 
      icon: 'success',
      
  }).then(()=>{
      window.location.href = '../UserSection/index.html'; 
  })

    

  }catch(error){
    console.log(error)

    Swal.fire({
      title: 'Login Failed' , 
      icon: 'error',
      
  })
  }
}







