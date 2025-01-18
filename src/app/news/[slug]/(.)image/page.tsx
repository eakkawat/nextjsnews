import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Image from 'next/image';

async function InterceptedImagePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug: newsItemSlug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) notFound();

  return (
    <>
      <h2>Intercept</h2>
      <div className='fullscreen-image'>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          width={1000}
          height={500}
        />
      </div>
    </>
  );
}
export default InterceptedImagePage;
