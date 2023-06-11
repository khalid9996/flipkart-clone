import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import app from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider/StateProvider";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //user is logged in
        console.log(`Logging in ${authUser}`);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        console.log(`Logging out`);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any Cleanup operation goes here
      unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <>
              {/* <Home /> */}
              <Login />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
