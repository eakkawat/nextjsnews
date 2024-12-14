
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/NewsList';

function NewsPage() {
  return (
    <>
      <h1
        className='
        text-2xl 
        font-bold
      '>
        News Page
      </h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
export default NewsPage;
