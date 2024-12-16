import Link from 'next/link';
import NavLink from './NavLink';

const navLinks = [
  { path: '/', text: 'Home' },
  { path: '/news', text: 'News' },
  { path: '/archive', text: 'Archive' },
];

function MainHeader() {
  console.log('rerender main header');
  return (
    <header id='main-header'>
      <nav>
        <div id='logo'>
          <Link href='/'>NextNews</Link>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink href={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
