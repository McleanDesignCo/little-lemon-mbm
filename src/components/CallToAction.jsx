import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary/80 py-32"
    >

      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Reserve a table
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Don’t miss out on a fantastic experience at the little lemon restaurant book your table now to taste our delicious food.
          </p>
          <Button href="/register" color="yellow" className="mt-10">
            Reserve a table
          </Button>
        </div>
      </Container>
    </section>
  )
}
