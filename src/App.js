import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/header";
import { GlobalStyle } from "./global.styles";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
const HomePage = lazy(() => import("./pages/homepage/Homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);

class App extends React.Component {
  //FIREBASE
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    //Take user information from Firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    //To close auth subscription with unmount
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Suspense fallback={<div>...LOADING</div>}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />

            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
          </Suspense>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
