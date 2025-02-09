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
    <div className='modal-backdrop'>
      <dialog className='modal' open>
        <div style={{ width: '100%', height: '100%' }}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            fill
            objectFit='contain'
          />
        </div>
      </dialog>
    </div>
  );
}
export default InterceptedImagePage;
