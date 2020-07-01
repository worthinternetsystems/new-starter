import Head from "next/head";

export default function Home() {
  return (
      <main>
        <h2>Lift Off</h2>
        <p>Let's help get you started & installed </p>
        <ul>
          <li>Who Worth is?</li>
          <li>Values</li>
          <li>People at Worth</li>
        </ul>
        <p>

         - access Harvest Timetastic Slack Orientation & Logistics
        Access to project bitbucket/azure etc Invitations to events - standups/
        meetings / digidrinks Ceremony invites for their project Describe the
        way that we work - code in the open, embrace failure and ignorance,
        testing Practical pairing/mobbing - simple starting exercise Mob can be
        responsible for the bootstrap / introducing new person to how we work
        Guilds Ceremonies Digidrinks Tech guild (Friday Guild) NL Guilds</p>

    <ul className="raci">
      <li className="responsible">Get coding - get stuff installed</li>
      <li className="accountable">Commit some code. Are you logging your time?</li>
      <li className="consulted">Have you been given what you need to start work? Any blockers?</li>
        <li className="informed">
          Have you been told that you have to do a presentation about
          yourself yet? Have you been talked through the code base that you’re
          working on. Have you been introduced to all of your squadmates?
        </li>
    </ul>
        We'll help you learn about
        <ul>
          <li>Test Pyramid</li>
          <li>TDD / BDD</li>
          <li>Mobbing</li>
          <li>Automation</li>
          <li>Being a polyglot</li>
          <li>Being T-Shaped</li>
        </ul>
      </main>
  );
}
