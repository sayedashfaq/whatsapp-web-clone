import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AccountProvider } from "./context/AccountProvider";

function App() {
  // clent id from console.google.auth.......something like that blah blah.....copy pasted hereb and wrapped proivider here
  const clientId =
    "702225708435-pn1lhgmeeehtb1kis55op4pmrlnijq91.apps.googleusercontent.com";

    // Account provider is  account context imported the whole values also from context file; 
     //- Mr Thanguuuu settt Aanallo::::::::::::::::
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
              