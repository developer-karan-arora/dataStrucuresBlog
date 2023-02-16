import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>DevKaranarora025 - DataStructures</h3>
        <br />
        <ol>
          <ul>
            <li><Link href='/Daily'>DailyDocumentation</Link></li>
          </ul>
          <br />
          <hr />
          <br />
          <li><Link href='/Basics'>BasicProgram </Link></li>
          <li>BasicProjetcs </li>
          <li>HiteshChaudhary </li>
          <li>StandardTemplateLibrary</li>
          <li>HarryDataStructure </li>
          <li>AbdulBariAlgorithms </li>
          <li>DSAWarmUp(Leetcode)-[Striver+Babbar] </li>
          <li>DSAPractice(GeeksForGeeks)-[LoveBabbarSheetSol] </li>
          <li>DSACompetition(Leetcode+codecheff)</li>
        </ol>
      </div>
    </>
  );
}