import Link from 'next/link';

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/news'>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
