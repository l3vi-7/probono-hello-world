import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LoginPage } from "./loginpage";
import Todo from "./toDo";

const firebaseConfig = {
  apiKey: "AIzaSyBRbmnyd7clVMm5S8Oz4crbiDgkFxpqIo0",
  authDomain: "rare-shuttle-303010.firebaseapp.com",
  projectId: "rare-shuttle-303010",
  storageBucket: "rare-shuttle-303010.appspot.com",
  messagingSenderId: "207383173936",
  appId: "1:207383173936:web:cf058159a3a62572a286f5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <LoginPage></LoginPage>
      <Todo></Todo>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
