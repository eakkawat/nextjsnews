import Image from 'next/image';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Link from 'next/link';

function NewsDetailPage({ params }: { params: { slug: string } }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            width={200}
            height={200}
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
export default NewsDetailPage;
