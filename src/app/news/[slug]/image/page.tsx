import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

function ImagePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) notFound();

  return (
    <div className='fullscreen-image'>
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={1000}
        height={500}
      />
    </div>
  );
}
export default ImagePage;
