import RestaurantItem from "./restaurant-item";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { db } from "@/lib/prisma";

export default async function RestaurantList() {
  const restaurants = await db.restaurant.findMany({ take: 10 });

  return (
    <Carousel className="cursor-grab">
      <CarouselContent className="-ml-0 flex gap-4 pb-2">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
