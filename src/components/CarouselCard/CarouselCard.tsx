import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Autoplay from 'embla-carousel-autoplay'
import { CarouselDots } from '../ui/CarouselDots'

interface Props {
    imgList: {
      path: string
    }[],
    range?: number
  }

const CarouselCard = ({imgList, range}: Props) => {

        if (!imgList || imgList.length === 0) return null

        return (
          <Carousel
            plugins={[
              Autoplay({
                delay: range || 4000,
              }),
            ]}
          >
            <CarouselContent className='hover:cursor-pointer'>
              {imgList.map(({ path }, index) => (
                <CarouselItem key={index}>
                  <Card className="cardTransparent">
                    <CardContent className="carouselItems">
                      <img
                        src={path}
                        alt={`slide-${index}`}
                        className="carouselImgAspect"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
    )
}

export default CarouselCard