import * as React from "react"
import { useCarousel } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type DotButtonProps = {
  selected: boolean
  onClick: () => void
}

function DotButton({ selected, onClick }: DotButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-2 h-2 rounded-full transition-colors hover:cursor-pointer",
        selected ? "bg-black" : "bg-gray-400"
      )}
      aria-label="Go to slide"
    />
  )
}

function CarouselDots({ className }: { className?: string }) {
  const { api } = useCarousel()
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      setScrollSnaps(api.scrollSnapList())
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on("select", update)
    api.on("reInit", update)

    update()

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  const scrollTo = (index: number) => {
    if (api) api.scrollTo(index)
  }

  return (
    <div className={cn("flex justify-center gap-2 mt-1", className)}>
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          selected={index === selectedIndex}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  )
}

export { CarouselDots }
