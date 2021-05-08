import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="account">account</Link>
        </li>
        <li>
          <Link href="loans">loans</Link>
        </li>
        <li>
          <Link href="ships">ships</Link>
        </li>
        <li>
          <Link href="login">login</Link>
        </li>
      </ul>
    </nav>
  );
}
