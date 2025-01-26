import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CoffeeCard } from "./CoffeeCard"

interface Coffee {
  id: string
  name: string
  description: string
  roastLevel: string
  tags: string[]
  imageUrl: string
  price: number
}

interface RecommendationCarouselProps {
  recommendations: Coffee[]
  onSelect: (coffee: Coffee) => void
}

export function RecommendationCarousel({
  recommendations,
  onSelect,
}: RecommendationCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {recommendations.map((coffee) => (
          <CarouselItem key={coffee.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <CoffeeCard
                name={coffee.name}
                description={coffee.description}
                roastLevel={coffee.roastLevel}
                tags={coffee.tags}
                imageUrl={coffee.imageUrl}
                price={coffee.price}
                onSelect={() => onSelect(coffee)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}