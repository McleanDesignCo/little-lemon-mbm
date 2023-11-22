import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'




export function Hero() {
  return (
    <Container className="py-20 text-center sm:text-left lg:py-40">
      <h1 className="mx-auto sm:mx-0 max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
       Little Lemon{' '}
        <p className="flex justify-center sm:justify-normal text-3xl text-yellow-400">
          <span className='mt-2 mr-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </span>
          Chicago
        </p>
      </h1>
      <p className="mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.
      </p>
      <div className="mt-10 flex justify-center sm:justify-normal gap-x-3">
        <Button href="/register" color='yellow'>Reserve a Table</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <span>Order Online</span>
        </Button>
      </div>

    </Container>
  )
}
