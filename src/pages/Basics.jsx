import React from "react";
import { useState } from "react";
import Link from "next/link";
import Utility from "../styles/Utility.module.css";
function Basics() {
  const [codeUrl, setcodeUrl] = useState("");
  return (
    <div>
      <div>
        <h3>
          <Link href="/" className={Utility.link}>
            GoBack
          </Link>
        </h3>
      </div>
      <br />
      <hr />
      <br />
      <div>{/* // container -1 */}</div>
      <div className={`${Utility.containerColPair}`}>
        <div className={Utility.displayArea}>
          <embed src={codeUrl} type="text/cpp" />
        </div>
        <div className={Utility.displayList}>
          <ol>
          <details>
            <summary><b>Simple Programs</b></summary>
            <div className={Utility.summaryDiv}>
              <li onClick={() => {setcodeUrl("/basics/1-simple/hello.cpp");}}>Hello World</li>
              <li onClick={() => {setcodeUrl("/basics/1-simple/one-to-hundred.cpp");}}>One to Hundred</li>
              <li onClick={() => {setcodeUrl("/basics/1-simple/a-to-z.cpp");}}>Print A to Z</li>
              <li onClick={() => {setcodeUrl("/basics/1-simple/odd-even.cpp");}}>Print Odd Even</li>
              <li onClick={() => {setcodeUrl("/basics/1-simple/print-odd-till-n.cpp");}}>Print Odd till N</li>
              <li onClick={() => {setcodeUrl("/basics/1-simple/swap-with-temp.cpp");}}>Swap With Temp varriable</li>
            </div>
          </details>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Basics;
