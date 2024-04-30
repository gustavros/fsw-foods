import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import ProductList from "@/components/product-list";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src={"/promo-banner-01.png"}
          alt="Até 30% de desconto em pizzas."
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="px-5">
        <div className="flex items-center justify-between pb-4 pt-6">
          <h2 className="font-semibold">Pedidos recomendados</h2>

          <Button
            variant={"link"}
            className="flex items-center px-0 text-primary"
          >
            Ver todos
            <ChevronRight size={16} />
          </Button>
        </div>

        <ProductList products={products} />
      </div>
    </>
  );
}
