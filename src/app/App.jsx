import { HeroSection } from "../components/HeroSection/HeroSection";
import { Layout } from "../layout/Layout";
import { CardLike } from "../ui/CardLike/CardLike";
import { Discount } from "../ui/Discount/Discount";
import { Button } from "../ui/Button/Button";
import "./global/styles/global.css";
import { CardPrice } from "../ui/CardPrice/CardPrice";

function App() {
  return (
    <Layout>
      <Discount discount={10} />
      <CardLike className='right' />
      <Button>В корзину</Button>
      <CardPrice currency="₽" priceCount="30,10" type='basic' />
      <CardPrice currency="₽" priceCount="30,10" type='card' />
    </Layout>
  );
}

export default App;
