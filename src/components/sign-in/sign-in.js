import React from "react";
import "./sign-in.styles.scss";
import { connect } from 'react-redux';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.action';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleSubmit = async event => {
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);

  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>{" "}
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
