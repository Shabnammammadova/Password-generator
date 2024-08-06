import { useState } from "react";
import styles from "./index.module.css";
import { FaRegCopy } from "react-icons/fa";
// import { COPY_FAILED,COPY_SUCESS } from './message';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(5);
  const [symbol, setSymbol] = useState(false);
  const [useLowercase, setUseLowerCase] = useState(false);
  const [useUppercase, setUseUpperCase] = useState(false);

  const numbers = "1234567890";
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const COPY_SUCESS = "Password succesfully copy to clipboard";
  const COPY_FAILED = "Password failed copy to clipboard";

  const handleGeneratePassword = () => {
    if (!number && !symbol && !useLowercase && !useUppercase) {
      notify("Must choose at least one checkbox", true);
    } else {
      let characterList = "";
      if (number) {
        characterList += numbers;
      }
      if (symbol) {
        characterList += symbols;
      }
      if (useLowercase) {
        characterList += lowerCase;
      }
      if (useUppercase) {
        characterList += upperCase;
      }
      setPassword(createPassword(characterList));
    }
  };
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleCopyPassword = () => {
    if (password === "") {
      notify(COPY_FAILED, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCESS);
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      password += characterList.charAt(characterIndex);
    }
    return password;
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles["generate-container"]}>
          <h1>Password Generator</h1>
          <div className={styles["input-container"]}>
            <input type="text" value={password} />
            <FaRegCopy className={styles.icon} onClick={handleCopyPassword} />
          </div>
          <div className={styles["condition-input-container"]}>
            <label htmlFor="number">Password length</label>
            <input
              className={styles["input"]}
              type="number"
              value={length}
              name="length"
              id="length"
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
          </div>
          <div className={styles["condition-input-container"]}>
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={useUppercase}
              onChange={(e) => setUseUpperCase(e.target.checked)}
            />
          </div>
          <div className={styles["condition-input-container"]}>
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={useLowercase}
              onChange={(e) => setUseLowerCase(e.target.checked)}
            />
          </div>
          <div className={styles["condition-input-container"]}>
            <label>Include numbers</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
          </div>
          <div className={styles["condition-input-container"]}>
            <label>Include symbols</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
            />
          </div>
          <button onClick={handleGeneratePassword}>Generate Password</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default App;
