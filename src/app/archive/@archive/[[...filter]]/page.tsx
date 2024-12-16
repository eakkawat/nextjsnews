import { INews } from '@/app/interfaces/news';
import NewsList from '@/components/NewsList';
import {
  getAvailableNewsYears,
  getAvaliableNewsMonths,
  getNewsByYear,
  getNewsByYearAndMonth,
} from '@/libs/news';
import Link from 'next/link';

async function FilterNewsPage({ params }: { params: { filter: string[] } }) {
  const { filter } = await params;
  let error = null;

  // Generate links for year selection ui
  let links = getAvailableNewsYears();

  // If route is "/archive", display no news year provided
  if (!filter) error = <div>No news found for the selected period</div>;

  // Get year and month from filter
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  // If route is "/archive/[year]" and not include month, display news for that year
  if (!selectedYear) error = <div>No news found for the selected period</div>;
  let news: INews[] = [];
  if (selectedYear && !selectedMonth) {
    news = getNewsByYear(selectedYear);
    links = getAvaliableNewsMonths(selectedYear);
    if (!news || news.length === 0)
      error = <div>No news found for the selected period</div>;
  }

  // if route is "/archive/[year]/[month]", display news for that month
  if (selectedYear && selectedMonth) {
    news = getNewsByYearAndMonth(selectedYear, selectedMonth);
    if (!news || news.length === 0)
      throw new Error('No news found for the selected period');
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {error ? error : <NewsList news={news} />}
    </>
  );
}
export default FilterNewsPage;
