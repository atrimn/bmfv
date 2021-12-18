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
export default function Example() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='relative bg-black rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='absolute inset-0 opacity-50 filter sepia'>
            <img
              src='static/images/mark1.jpeg'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <div className='relative pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl md:text-6xl'>
                <span className='block xl:inline'>About Mark</span>{' '}
                <span className='block text-primary-blue xl:inline'>
                  Lineweaver
                </span>
              </h1>
              <p className=' mt-4 text-base font-bold text-white sm:text-lg md:mt-5 md:text-xl '>
                Mark’s Blue Mountain Forest Vanilla Company started in Loma
                Azul, which is in the Cibao region of the Dominican Republic. It
                is now flourishing in Casa de Campo as well as other areas of
                the Dominican Republic. The tropical Caribbean climate and
                location where vanilla planifolia flourishes, makes Dominican
                Republic an ideal location for vanilla orchid growth. Mark
                currently has hundreds of vines growing up and down tree
                branches in his garden at his residence, where he takes precise
                care of them. Each of these vines has the ability to grow up to
                300 feet in length. An artist by trade, Mark has found the world
                of vanilla to be a harmonious parallel to what comes naturally
                to him in his studio. Mark is continuously educating himself
                about vanilla and is currently experimenting with different
                types of vanilla beans from across the globe.
              </p>
            </div>
          </div>
          <div className='sm:-mt-6 sm:opacity-50 sm:aspect-w-5 sm:aspect-h-3 md:aspect-w-2 md:aspect-h-1'></div>
        </div>
      </div>
    </div>
  )
}
