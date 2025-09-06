import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import CarouselButtonGroup from '../CarouselButtonGroup';
import ProductCard from '../ProductCard';

type Props={
    children?:React.ReactNode;
    topItems?:any[];
    responsive?: any;
}
 const ItemsCarousel = ({children,topItems,responsive}:Props) => {
    const defaultresponsive={
        superLargeDesktop: {
            breakpoint: {max: 4000 , min : 1024 },
            items:6,
            slidesToslide:6,
        },
        desktop: {
              breakpoint: {max: 1024 , min : 768 },
            items:4,
            slidesToslide:4,
        },
        tablet: {
              breakpoint: {max: 768 , min : 640 },
            items:3,
            slidesToslide:3,
        },
        mobile: {
              breakpoint: {max: 640 , min : 0 },
            items:2,
            slidesToslide:2,
        },
    }


  return (
<Carousel
responsive={responsive|| defaultresponsive}
infinite={false}
arrows={false}
renderButtonGroupOutside={true}
customButtonGroup={<CarouselButtonGroup/>}
itemClass='px-2'
> 
{children || topItems?.map((item,i)=>(
    <ProductCard key={i} data ={item}/>
))}   
</Carousel> )
};

export default ItemsCarousel;