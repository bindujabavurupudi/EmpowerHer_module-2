import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
]

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0)

  return (
    <Card className="max-w-md mx-auto mt-6 text-center">
      <CardContent>
        <img src={images[index]} className="mx-auto mb-4" />

        <div className="flex justify-between">
          <Button
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          >
            Previous
          </Button>

          <Button
            onClick={() => setIndex((index + 1) % images.length)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
