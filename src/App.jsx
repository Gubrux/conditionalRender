import React, { useState } from  'react';
    
const UserForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        setHasBeenSubmitted( true );
    };

    const handleTitle = (e) => {
      setUsername(e.target.value); // Cambia setTitle a setUsername
      if(e.target.value.length < 1) {
        setTitleError("Title is required!");
      } else if(e.target.value.length < 3) {
        setTitleError("Title must be 3 characters or longer!");
      } else {
        setTitleError("");
      }
    }

  const handleEmail = (e) => {
      setEmail(e.target.value);
      if(e.target.value.length < 1) {
          setEmailError("Email is required!");
      } else if(!e.target.value.includes("@") || !e.target.value.includes(".com") || e.target.value.length < 5 || e.target.value.includes(" ")) {
          setEmailError("Email must be valid!");
      } else {
          setEmailError("");
      }
  }

  const handlePassword = (e) => {
      setPassword(e.target.value);
      if(e.target.value.length < 1) {
          setPasswordError("Password is required!");
      } else if(e.target.value.length < 8) {
          setPasswordError("Password must be 8 characters or longer!");
      } else {
          setPasswordError("");
      }
  }

    return (
        <form onSubmit={ createUser }>
          {
          hasBeenSubmitted ? 
          <h3>{`Gracias ${username}, por regalarnos tus datos!!`}</h3> :
          <h3>Bienvenido, complete el formulario por favor</h3> 
            }
            <div>
              <label>Username: </label> 
              <input type="text" onChange={ handleTitle } />
              {
                titleError ?
                <p style={{color:'red'}}>{ titleError }</p> :
                ''
              }
            </div>
            <div>
              <label>Email Address: </label> 
              <input type="text" onChange={ handleEmail } />
              { emailError && <p style={{color:'red'}}>{ emailError }</p> }
            </div>
            <div>
              <label>Password: </label>
              <input type="password" onChange={ handlePassword } />
              { passwordError && <p style={{color:'red'}}>{ passwordError }</p> }
            </div>
            <input type="submit" value="submit" disabled={username.length < 3 || emailError || passwordError || !email.includes("@") || password.length < 8}/>
        </form>
    );
};
    
export default UserForm;