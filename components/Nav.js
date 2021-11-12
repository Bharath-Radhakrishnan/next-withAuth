import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <div>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
