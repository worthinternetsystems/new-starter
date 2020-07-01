import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul className="home">
          <li>
            <Link href="/launch/ignition">
              <a>Ignition</a>
            </Link>
          </li>
          <li>
            <Link href="/launch/lift-off">
              <a>Lift off!</a>
            </Link>
          </li>
          <li>
            <Link href="/launch/stage-one-seperation">
              <a>Stage 1 Seperation</a>
            </Link>
          </li>
          <li>
            <Link href="/launch/stage-two-seperation">
              <a>Stage 2 Seperation</a>
            </Link>
          </li>
          <li>
            <Link href="/launch/orbital">
              <a>Orbital</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
