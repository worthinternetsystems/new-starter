import { useRouter } from 'next/router';
import Link from 'next/link';

const Menu = () => {
  const router = useRouter();
  const menu = [
    {
      address: '/launch/ignition',
      label: 'Ignition',
    },
    {
      address: '/launch/lift-off',
      label: 'Lift off!',
    },
    {
      address: '/launch/stage-one-seperation',
      label: 'Stage 1 Separation',
    },
    {
      address: '/launch/stage-two-seperation',
      label: 'Stage 2 Separation',
    },
    {
      address: '/launch/orbital',
      label: 'Orbital',
    },
  ];
  const MenuItem = ({ address, label }) => {
    const activeClass = router.pathname === address ? 'active' : '';
    return (
      <li className={activeClass}>
        <Link href={address}>
          <a className={activeClass}>{label}</a>
        </Link>
      </li>
    );
  };
  return (
    <ul className="menu">
      {menu.map(({ address, label }) => (
        <MenuItem address={address} label={label} key={address} />
      ))}
    </ul>
  );
};

export default Menu;
