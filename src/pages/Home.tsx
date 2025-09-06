import {
  HeroArea,
  CategoriesList,
  DiscountOffers,
  FeaturedPromo,
  HighlightedPromo,
  ProductsRow,
} from '../components/home';
import ZeptoPromoBanners from '../components/ZeptoPromoBanners';
import Misc from '../lib/data/layout.json';

const Home = () => {
  const productItems: any[] = Misc.filter((item) => item.type === 77).map(
    (el) => ({
      data: el.data,
      objects: el.objects,
    })
  );

  return (
    <div className="_container">
      <HeroArea />
      <CategoriesList />
      <ZeptoPromoBanners />
      <DiscountOffers />
      {productItems.map((products, i) => (
        <ProductsRow key={i} {...products} />
      ))}
    </div>
  );
};

export default Home;
