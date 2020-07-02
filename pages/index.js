import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <main>
        <p>This is a letter from the WORTH engineering
          team to you to help you get settled OK. Read on ...</p>
        <ul className="home">
          <li>
            <Link href="/launch/ignition">
              <a>Ignition</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
