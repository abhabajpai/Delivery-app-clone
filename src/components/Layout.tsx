import { useEffect } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import BrandPromotion from './BrandPromotion';
import CartButtonBig from './cart/CartButtonBig';
import Modal from './Modal';
import CategoryNavigation from './CategoryNavigation';
import ZeptoFooterMessage from './ZeptoFooterMessage';
import { CartPanel } from './cart';
import { useAppSelector } from '../hooks/useAppSelector';

type Props = {
  noFooter?: boolean;
  component: React.ReactElement;
};

const Layout = ({ noFooter, component }: Props) => {
  const modalShown = useAppSelector((state) => state.modal.visible);
  const cartShown = useAppSelector((state) => state.ui.cartPanel);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Header />
        <CategoryNavigation />
        <main className="pt-36 sm:pt-32">{component}</main>
        {!noFooter && (
          <>
            <ZeptoFooterMessage />
            <Footer />
          </>
        )}
        <CartButtonBig />
      </div>
      {cartShown && <CartPanel />}
      {modalShown && <Modal />}
    </>
  );
};

export default Layout;
