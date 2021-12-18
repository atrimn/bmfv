/* This example requires Tailwind CSS v2.0+ */
export default function Testimonial() {
  return (
    <div className='bg-gray-50 py-16'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative flex justify-center py-24 px-8 bg-primary-blue rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-1 lg:gap-x-8'>
          <div className='absolute inset-0 opacity-95 filter saturate-0 mix-blend-multiply'>
            <img
              src='static/images/panorama.png'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <div className='relative text-center lg:col-span-1'>
            <blockquote className='mt-6 text-slate-50'>
              <p className='text-xl font-medium sm:text-xl italic'>
                Dominican Vanilla is extremely interesting and of fine quality.
                Its sweet aroma is intense and with hints of floral, toasted,
                leather and tobacco leave. Most of the vanilla on the market is
                harvested in Tahiti. Dominican vanilla is a great alternative as
                we can be sure it is a fresh product at the peak of its
                ripeness.
              </p>
              <footer className='mt-6'>
                <p className='flex flex-col font-medium'>
                  <span>Chef Cesar Bermúdez</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
