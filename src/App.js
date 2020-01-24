import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shop";
import CheckoutPage from "./pages/checkout/checkout";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { checkUserSession } from './redux/user/user.action';
class App extends React.Component {
  //FIREBASE
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    //To close auth subscription with unmount
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
