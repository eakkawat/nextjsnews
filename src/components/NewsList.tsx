import Image from 'next/image';
import Link from 'next/link';
import { INews } from '@/interfaces/news';

function NewsList({ news }: { news: INews[] }) {
  return (
    <ul className='news-list'>
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={200}
              height={200}
            />
            <p>{newsItem.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NewsList;
