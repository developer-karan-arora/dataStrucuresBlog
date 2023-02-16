import React from "react";
import Link from "next/link";
import { useState } from "react";
import Utility from "../styles/Utility.module.css";
function Daily() {
  const [codeUrl, setcodeUrl] = useState("");
  return (
    <div>
      <h3>
        <Link href="/" className={Utility.link}>
          GoBack
        </Link>
      </h3>
      <br />
      <hr />
      <br />
      <div className={`${Utility.containerColPair}`}>
        <div className={Utility.displayArea}>
          <embed src={codeUrl} type="text/md" />
        </div>
        <div className={Utility.displayList}>
          <p onClick={()=>{setcodeUrl("/daily/day-1.md")}}>DAY-1</p>
          <p onClick={()=>{setcodeUrl("/daily/day-2.md")}}>DAY-2</p>
          <p onClick={()=>{setcodeUrl("/daily/day-3.md")}}>DAY-3</p>
        </div>
      </div>
    </div>
  );
}

export default Daily;
