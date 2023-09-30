import Nav from "./component/Nav";
import CustomerReviews from "./section/CustomerReviews";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Services from "./section/Services";
import SpecialOffer from "./section/SpecialOffer";
import Subscribe from "./section/Subscribe";
import SuperQuality from "./section/SuperQuality";
import PopularProducts from "./section/popularProducts";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
