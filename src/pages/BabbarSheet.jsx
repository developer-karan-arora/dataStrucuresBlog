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
          {/* <details>
            <summary><b>Simple Programs</b></summary> */}
            <div className={Utility.summaryDiv}>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/1-reverseArray.md");}}>Reverse Array</li>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/2-MaxMin.md");}}>Max Min</li>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/3-kthSmallestEle.md");}}>Kth Smallest ele</li>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/4-Sort012.md");}}>Sort 012</li>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/print-odd-till-n.cpp");}}>MoveNegative</li>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/swap-with-temp.cpp");}}>Union Intersection</li>
              <li onClick={() => {setcodeUrl("/7-BabbarSheet/Array/swap-without-temp.cpp");}}>Cyclic Rotate</li>
            </div>
          {/* </details> */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Basics;