export default function Home() {
  return (
    <main>
      <h2>
        Stage 1 Separation
        {' '}
        <span role="img" aria-label="">🧑‍🚀</span>
      </h2>
      <p>
        You should be now engaged in your team and in flow. Sharing your ideas and
        building products that add value. Hopefully you now most of your team by now and know who to go to when you need help.
      </p>
      <ul className="raci">
        <li className="responsible">
          Being opinionated, challenging your team (approach etc), helping
          your team
        </li>
        <li className="accountable">
          Deliver your presentation on who you are and something only you can
          do. Can you spin up the system you’re working on up and running on
          your machine by yourself?
        </li>
        <li className="consulted">Has your 1-2-1er (wanter-wanner) checked you’re okay?</li>
        <li className="informed">
          Do you know the company values? Do you know the mission/objective
          of your project?
        </li>
      </ul>
    </main>
  );
}
