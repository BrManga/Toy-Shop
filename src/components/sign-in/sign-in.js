import React, {useState} from "react";
import "./sign-in.styles.scss";
import { connect } from 'react-redux';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.action';
const SignIn=({ emailSignInStart,googleSignInStart })=> {
 const [userCredentials, setCredentials] = useState({email:'', password:''})
 const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault()

    emailSignInStart(email, password);

  };
  const handleChange = event => {
    const {value, name}=event.target
    setCredentials({...userCredentials, [name]: value });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>{" "}
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
