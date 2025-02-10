'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

function InterceptedImagePage() {
  const router = useRouter();
  const { slug: newsItemSlug } = useParams<{ slug: string }>();
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) notFound();

  return (
    <div className='modal-backdrop' onClick={router.back}>
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
