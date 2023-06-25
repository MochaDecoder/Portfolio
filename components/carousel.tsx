import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

export default function ResponsiveCarousel({ imageList }: { imageList: Array<string> }) {
  return (
    <div>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        className="mt-10"

      >
        {imageList.map((item, i) => (
          <div key={i}>
            <Image src={`/assets/${item}`} className='w-1/3 rounded-lg shadow-md' alt="work picture" width={400}
              height={500} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}