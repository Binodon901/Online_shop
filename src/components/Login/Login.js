import React, { useContext, useState } from 'react';
import 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { auth} from './Firebase'
import { getAuth, updateProfile } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';




function Login() {
  const [newPerson, setNewPerson] = useState(false);
  const [person, setPerson] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: ''
  })
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  const history=useHistory();
  const location=useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const fbProvider = new FacebookAuthProvider();
  const goProvider = new GoogleAuthProvider();

  const handleChange = (event) => {
    // console.log(event.target.value, event.target.name)
    let isFormValue = true;
    if (event.target.name === "email") {
      isFormValue = /\S+@\S+\.\S+/.test(event.target.value)
    }
    if (event.target.name === "password") {
      const isPasswordValid = (event.target.value).length > 6;
      const passwordHas = /(?=.*?[0-9])/.test(event.target.value)
      isFormValue = isPasswordValid && passwordHas
    }
    if (isFormValue) {
      const newUserInfo = { ...person }
      newUserInfo[event.target.name] = event.target.value;
      // console.log(newUserInfo)
      setPerson(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    // console.log(person.email, person.password)

    if (newPerson && person.email && person.password) {
      createUserWithEmailAndPassword(auth, person.email, person.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(userCredential);
          const newUserInfo = { ...person }

          newUserInfo.error = '';
          newUserInfo.success = true;
          setPerson(newUserInfo);
          updateUserName(person.name)
          setLoggedInUser(newUserInfo)
          history.replace(from)
          console.log(person.name)
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...person }
          newUserInfo.error = error.message;
          console.log(error.message);
          newUserInfo.success = false;
          setPerson(newUserInfo);
          // ..
        });
    }
    if (!newPerson && person.email && person.password) {

      signInWithEmailAndPassword(auth, person.email, person.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          const newUserInfo = {...person }

          newUserInfo.error = '';
          newUserInfo.success = true;
          setPerson(newUserInfo);
          console.log(userCredential.user)
          setLoggedInUser(newUserInfo)
          history.replace(from)
          console.log('sign in user info',userCredential.user.name)
        })
        .catch((error) => {

          const newUserInfo = { ...person }
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setPerson(newUserInfo);

        });
      updateUserName(person.name);

    }
    e.preventDefault()
  }
  const updateUserName = name => {

    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('Profile updated!', name)
      // ...
    }).catch((error) => {
      console.log(error)
      // ...
    });
  }
  const fbButtonHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        // The signed-in user info.
        

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user.email);
        setLoggedInUser(user)
        updateUserName(user.displayName)
        user.name=user.displayName
        history.replace(from)

        console.log(user.displayName)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });

  }
  const goButtonHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, goProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // ...
        ;
        setLoggedInUser(user)
        updateUserName(user.displayName)
        user.name=user.displayName
        history.replace(from)

        console.log(user.displayName)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className="container col-md-6"> 
  
      
      
      <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-end">
      <Button
        variant="primary"
        onClick={goButtonHandler}
        className="d-flex align-items-center"
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-2" /> 
        -Sign in in with Google
      </Button>
      <Button
        variant="primary"
        onClick={fbButtonHandler}
        className="d-flex align-items-center ml-2"
      >
        <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
        -Sign in with Facebook
      </Button>
      </div>
      <br></br>
      <h2>{newPerson ? 'Registration for new User' : "Login"}</h2>
      <Form>
       {newPerson && <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter your full name" required />
        </Form.Group>}


        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" required/>
        </Form.Group>

        <Button variant="primary" type="button"  onClick={handleSubmit} value={newPerson ? 'Register' : "Login"}>
        {newPerson ? 'Register' : "Login"}
        </Button><br></br>

        <div className="form-check ml-2">
        <input
          type="checkbox"
          name="newPerson"
          id="newPerson"
          checked={newPerson}
          onChange={() => setNewPerson(!newPerson)}
          className="form-check-input"
        />
        <label htmlFor="newPerson" style={{ color: 'blue' }} className="form-check-label" onChange={() => setNewPerson(!newPerson)}>
          {newPerson ? 'Already registered? Click Here to Login' : 'Not registered? Click Here For Register'}
        </label>
      </div>
        </Form>
        <br></br>
        <p style={{ color: 'red' }}>{person.error}</p>
      {person.success && <p style={{ color: 'green' }}> {newPerson ? 'Congratulations !!! Registration completed ' : 'Logged in'} Successfully</p>}
      

    </div>
    </div>
    
  );
}

export default Login;