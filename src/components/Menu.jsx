import Image from "next/image"
import { Button } from "./Button"

const food = [
    {
      name: 'Greek Salad',
      price: '12.99',
      imageUrl:
        '/Food-1.jpg',
      decription: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.',
    },
    {
        name: 'Bruschetta',
        price: '16.99',
        imageUrl:
          '/Food-2.jpg',
        decription: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.',
      },
      {
        name: 'Lemon Dessert',
        price: '8.50',
        imageUrl:
          '/Food-3.jpg',
        decription: 'resh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.',
      },
      {
        name: 'Spaghetti Fresca',
        price: '14.99',
        imageUrl:
          '/Food-4.jpg',
        decription: 'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.',
      },
      {
          name: 'Salad Pinchetto',
          price: '16.99',
          imageUrl:
            '/Food-5.jpg',
          decription: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.',
        },
        {
          name: 'Queso Di Parmagio',
          price: '8.50',
          imageUrl:
            '/Food-6.jpg',
          decription: 'resh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.',
        },
    // More food...
  ]
  
  export default function Menu() {
    return (
      <div id='menu' className="bg-light/25 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Menu</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {food.map((fooditem) => (
              <li key={fooditem.name}>
                <Image className="aspect-[2/3] w-full rounded-sm object-cover hover:opacity-80 hover:cursor-pointer transition-all duration-500 ease-in-out" src={fooditem.imageUrl} alt={fooditem.name} width={1920} height={1080} />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{fooditem.name}</h3>
                <p className="text-base leading-7 text-gray-600">£{fooditem.price}</p>
                <p className="text-sm mt-2  text-gray-600">{fooditem.decription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  