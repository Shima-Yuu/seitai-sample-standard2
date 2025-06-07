import ServiceSection from "@/components/content/service";
import PriceSection from "@/components/content/price";
export default async function MenuPage() {

  return (
    <main>
      <ServiceSection className="pt-26 lg:pt-32" />
      <PriceSection />
    </main>
  );
}
