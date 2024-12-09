import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1
        className='
        text-2xl 
        font-bold
      '>
        NewsPage
      </h1>
      <ul className='text-blue-600'>
        <li>
          <Link href='/news/1'>News 1</Link>
        </li>
        <li>
          <Link href='/news/2'>News 2</Link>
        </li>
        <li>
          <Link href='/news/3'>News 3</Link>
        </li>
      </ul>{' '}
    </>
  );
}
export default NewsPage;
