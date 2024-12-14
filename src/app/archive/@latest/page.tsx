import { getLatestNews } from '@/libs/news';
import NewsList from '@/components/NewsList';

function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
export default LatestNewsPage;
