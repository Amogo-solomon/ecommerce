import Hero from "./components/Hero";
import NewProducts from './components/NewProducts';
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  )
}
