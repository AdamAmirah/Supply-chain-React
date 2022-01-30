import { useEffect, useState } from "react";
import Web3 from "web3";
import * as React from "react";
import "./App.css";
import AddPage from "./routes/AddPage/AddPage";
import HomePage from "./routes/HomePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Transfer from "./routes/transfer/Transfer";
import ReportLost from "./routes/report/ReportLost";
import AuthContext from "./store/auth-context";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./routes/Auth/Auth";

import { SUPPLY_ABI, SUPPLY_ADDRESS } from "./config";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ colors, config });

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  const [supply, setSupply] = useState(); // state variable to set account.
  const [user, setUser] = useState();
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("0");
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      const supply = new web3.eth.Contract(SUPPLY_ABI, SUPPLY_ADDRESS);
      setSupply(supply);
      web3.eth.handleRevert = true;
      const userIdCounter = await supply.methods.user_count().call();

      for (let i = 1; i <= userIdCounter; i++) {
        // call the contacts method to get that particular contact from smart contract
        const userItem = await supply.methods.users(i).call();
        if (userItem[5]) {
          setUser(userItem);
          setIsLoggedIn(userItem);
          setUserType(userItem[3]);
          break;
        }
      }
    }

    load();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLogged,
        userType: userType,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Navbar
            userId={user ? user[0] : false}
            supply={supply}
            account={account}
          />
          <Routes>
            <Route
              exact
              path="/auth"
              element={
                !isLogged ? (
                  <Auth account={account} supply={supply} />
                ) : (
                  <Navigate to={{ pathname: "/" }}></Navigate>
                )
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                isLogged ? (
                  <HomePage account={account} supply={supply} />
                ) : (
                  <Navigate to={{ pathname: "/auth" }}></Navigate>
                )
              }
            ></Route>
            <Route
              exact
              path="/add"
              element={
                userType === "MANUFACTURER" ? (
                  <AddPage
                    account={account}
                    supply={supply}
                    userId={user ? user[0] : false}
                  />
                ) : (
                  <div>not allowed</div>
                )
              }
            ></Route>
            <Route
              exact
              path="/transfer"
              element={
                <Transfer
                  account={account}
                  supply={supply}
                  userId={user ? user[0] : false}
                />
              }
            ></Route>
            <Route
              exact
              path="/report"
              element={
                <ReportLost
                  account={account}
                  supply={supply}
                  userId={user ? user[0] : false}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthContext.Provider>
  );
}

export default App;
