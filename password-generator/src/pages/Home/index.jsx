import React, { useState } from 'react'
import styles from './index.module.css'
import { FaRegCopy } from "react-icons/fa";

const Home = () => {
    const [password,setPassword]=useState('');
    const [includenumber,setIncludeNumber] = useState(true);
    const [length,setLength] = useState(5)


     const numbers = "1234567890";
     const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";
     let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <>
      <div className={styles.container}>
        <div className={styles["generate-container"]}>
          <h1>Password Generator</h1>
          <div className={styles["input-container"]}>
            <input type="text" />
            <FaRegCopy className={styles.icon} />
          </div>
          <div className={styles["condition-input-container"]}>
            <label htmlFor='number'>Password length</label>
            <input
              className={styles["input"]}
              type="number"
              value={5}
              name="length"
              id="length"
            />
          </div>
          <div className={styles["condition-input-container"]}>
            <label for="uppercase">Include uppercase letters</label>
            <input type="checkbox" name="uppercase" id="uppercase" />
          </div>
          <div className={styles["condition-input-container"]}>
            <label for="uppercase">Include nowercase letters</label>
            <input type="checkbox" name="uppercase" id="uppercase" />
          </div>
          <div className={styles["condition-input-container"]}>
            <label for="uppercase">Include numbers</label>
            <input type="checkbox" name="uppercase" id="uppercase" />
          </div>
          <div className={styles["condition-input-container"]}>
            <label for="uppercase">Include symbols</label>
            <input type="checkbox" name="uppercase" id="uppercase" />
          </div>
          <button>Generate Password</button>
        </div>
      </div>
    </>
  );
}

export default Home
