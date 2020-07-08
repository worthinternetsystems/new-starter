import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <p>
        This is a letter from the WORTH engineering team to you to help you get
        settled in OK. Read on ...
      </p>
      <ul className="home">
        <li>
          <Link href="/launch/ignition">
            <a>Ignition</a>
          </Link>
        </li>
      </ul>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </main>
  );
}
