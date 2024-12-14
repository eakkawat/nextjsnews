import NewsList from '@/components/NewsList';
import { getNewsByYear } from '../../../../libs/news';

function FilterNewsPage({ params }: { params: { year: string } }) {
  const newsYear = params.year;
  const news = getNewsByYear(newsYear);
  if (!news) {
    return <div>No news found for the year {newsYear}</div>;
  }

  return <NewsList news={news} />;
}
export default FilterNewsPage;
