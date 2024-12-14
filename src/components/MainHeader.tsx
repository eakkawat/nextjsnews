import Link from 'next/link';

function MainHeader() {
  return (
    <header id='main-header'>
      <nav>
        <div id='logo'>
          <Link href='/'>NextNews</Link>
        </div>
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
