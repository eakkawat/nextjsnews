import { getAvailableNewsYears } from '@/libs/news';
import Link from 'next/link';

function FilterNewsPage({ params }: { params: { filter: [] } }) {
  const filter = params.filter;
  const links = getAvailableNewsYears();
  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div>{filter}</div>
    </>
  );
  // const news = getNewsByYear(newsYear);
  // if (!news) {
  //   return <div>No news found for the year {newsYear}</div>;
  // }

  // return <NewsList news={news} />;
}
export default FilterNewsPage;
