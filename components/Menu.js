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
      label: 'Stage 1 Seperation',
    },
    {
      address: '/launch/stage-two-seperation',
      label: 'Stage 2 Seperation',
    },
    {
      address: '/launch/orbital',
      label: 'Orbital',
    },
  ];
  const MenuItem = ({ address, label }) => (
    <li>
      <Link href={address}>
        <a className={router.pathname === address ? 'active' : ''}>{label}</a>
      </Link>
    </li>
  );
  return (
    <ul className="menu">
      {menu.map(({ address, label }) => (
        <MenuItem address={address} label={label} key={address} />
      ))}
    </ul>
  );
};

export default Menu;
