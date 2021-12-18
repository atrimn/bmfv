/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function ImageLayout() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-16  px-4  sm:px-6 lg:px-8'>
        <div className=' grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
          <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2'>
            <img
              src='static/images/vanilla2.jpg'
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className='object-center object-cover group-hover:opacity-75'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50'
            />
          </div>
          <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full'>
            <img
              src='static/images/flowers.jpeg'
              alt='Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.'
              className='object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
            />
          </div>
          <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full'>
            <img
              src='static/images/vanilla1.jpeg'
              alt='Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk.'
              className='object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full'
            />
            <div
              aria-hidden='true'
              className='bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
