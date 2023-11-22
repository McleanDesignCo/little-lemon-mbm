import Image from 'next/image'
import React from 'react'




export default function About() {
    return (
      <div id='about' className="relative isolate overflow-hidden bg-primary  py-24 sm:py-32">
        <Image
          src="/Restaurant-1.jpg"
          width={1097}
          height={845}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-normal"
        />
       

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-white/80 ">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
            </p>
          </div>
        </div>
      </div>
    )
  }
