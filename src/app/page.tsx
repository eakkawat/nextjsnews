import logo from '@/assets/logo.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div id='home'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={logo.src} alt='A newspaper' width={200} height={200} />
      </div>
      <h1>A news Site For The Next Generation</h1>
      <p>
        Next News is here to deliver you all the latest news - concise and
        unbiased!
      </p>

      <p>
        NextNews aims to provide you with latest news in a concise and unbiased
        manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed witout
        overwhelming you with unecessay information.
      </p>
    </div>
  );
}
