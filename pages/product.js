import Head from 'next/head'
import Image from 'next/image'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, CameraIcon } from '@heroicons/react/outline'
import Footer from '../components/footer'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Recipes', href: '#' },
  { name: 'Our mission', href: '#' },
  { name: 'Camping', href: '#' },
]

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

const features = [
  {
    name: 'Origin',
    description: 'South and Central America and the Caribbean',
  },
  {
    name: 'Planted',
    description: '10,000 vanilla plants',
  },
  { name: 'Dimensions', description: '12-18 cm.' },
]

export default function Product() {
  return (
    <div>
      <div className='relative bg-gray-50 overflow-hidden'>
        <div
          className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
          aria-hidden='true'
        ></div>

        <div className='relative pt-6'>
          <Popover>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
              <nav
                className='relative flex items-center justify-between sm:h-10 md:justify-center'
                aria-label='Global'
              >
                <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <a href='#'>
                      <span className='sr-only'>
                        Blue Mountain Forest Vanilla
                      </span>
                      <img
                        className='h-8 w-auto sm:h-10'
                        src='logo.svg'
                        alt=''
                      />
                    </a>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <Popover.Button className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Open main menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='hidden md:flex md:space-x-10'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='font-medium text-gray-500 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div>
                      <img className='h-8 w-auto' src='logo.svg' alt='' />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className='mt-8 mx-auto sm:mt-8'>
            <div className='bg-white'>
              <div aria-hidden='true' className='relative'>
                <img
                  src='static/images/bmfbg.png'
                  alt=''
                  className='w-full h-1/6 sm:h-96 object-cover object-bottom'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-white' />
              </div>
              <div className='bg-white overflow-hidden'>
                <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
                  <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
                  <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
                    <div>
                      <h2 className='text-base text-primary-blue font-semibold tracking-wide uppercase'>
                        Dominican
                      </h2>
                      <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                        Vanilla Bean
                      </h3>
                    </div>
                  </div>
                  <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
                    <div className='relative lg:row-start-1 lg:col-start-2'>
                      <svg
                        className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                        width={404}
                        height={384}
                        fill='none'
                        viewBox='0 0 404 384'
                        aria-hidden='true'
                      >
                        <defs>
                          <pattern
                            id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits='userSpaceOnUse'
                          >
                            <rect
                              x={0}
                              y={0}
                              width={4}
                              height={4}
                              className='text-gray-200'
                              fill='currentColor'
                            />
                          </pattern>
                        </defs>
                        <rect
                          width={404}
                          height={384}
                          fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                        />
                      </svg>
                      <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                        <figure>
                          <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                            <img
                              className='rounded-lg shadow-lg object-cover object-center'
                              src='static/images/vanilla4.png'
                              alt='Whitney leaning against a railing on a downtown street'
                              width={1184}
                              height={1376}
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div className='mt-8 lg:mt-0'>
                      <div className='text-base max-w-prose mx-auto lg:max-w-none'>
                        <p className='text-lg text-gray-500'>
                          Blue Mountain Forest Vanilla is a permaculture project
                          located in Loma Azul, which is part of a mountainous
                          region located in the Cordillera Septentrional. The
                          Cordillera remains a forested area of the northeast
                          region of the Dominican Republic. The area
                          traditionally produces coffee and cacao, which is why
                          the forest cover has been preserved.
                        </p>
                      </div>
                      <div className='mt-8 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                        <p>
                          Since 1993, we have been cultivating Vanilla
                          planifolia on 20 acres of forested land. Our local
                          climate is perfectly suited for growth and propagation
                          of Vanilla orchids. The prevailing winds provide
                          micro-nutrients from Africa and the rainfall combined
                          with the dew that condenses every night provide the
                          necessary humidity. We are currently home to about
                          10,000 vanilla plants growing in the forest cover.
                          Tahitian vanilla and vanilla pompona will also
                          cultivated.
                        </p>

                        <p className='mt-8'>
                          Our main objective is to produce the highest quality
                          vanilla bean in the Carribean. We pride ourselves in
                          making our product be the purest form of vanilla you
                          can buy. Its purity is a result of the thriving
                          mountain conditions where the vanilla planifolia grows
                          best.
                        </p>

                        <p className='mt-8'>
                          The Dominican vanilla planifolia bean ranges from
                          12-18 cm. These are the purest and most gourmet
                          vanilla beans you can buy. The flavoring is
                          incredible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div
                  className='absolute inset-0 flex items-center'
                  aria-hidden='true'
                >
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative bg-white py-16 sm:py-24'>
                  <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
                    <div className='relative sm:py-16 lg:py-0'>
                      <div
                        aria-hidden='true'
                        className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
                      >
                        <div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72' />
                        <svg
                          className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                          width={404}
                          height={392}
                          fill='none'
                          viewBox='0 0 404 392'
                        >
                          <defs>
                            <pattern
                              id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits='userSpaceOnUse'
                            >
                              <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className='text-gray-200'
                                fill='currentColor'
                              />
                            </pattern>
                          </defs>
                          <rect
                            width={404}
                            height={392}
                            fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                          />
                        </svg>
                      </div>
                      <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
                        {/* Testimonial card*/}
                        <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
                          <img
                            className='absolute inset-0 h-full w-full object-cover'
                            src='static/images/vanilla3.png'
                            alt=''
                          />
                          <div className='absolute inset-0  mix-blend-multiply' />
                          <div className='absolute inset-0 bg-gradient-to-t from-primary-blue via-transparent opacity-90' />
                          <div className='relative px-8'>
                            <div>
                              <img
                                className='h-12'
                                src='logo.svg'
                                alt='blue mountain forest logo'
                              />
                            </div>
                            <blockquote className='mt-8'>
                              <footer className='mt-4'>
                                <p className='text-base font-semibold text-white'>
                                  Vanilla at Loma Azul
                                </p>
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
                      {/* Content area */}
                      <div className='pt-12 sm:pt-16 lg:pt-20'>
                        <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
                          Bourbon Process
                        </h2>
                        <div className='mt-6 text-gray-500 space-y-6'>
                          <p className='text-lg'>
                            The vanilla beans are harvested when they become
                            ripe. The beans will then turn yellow, and are then
                            put in 165 degree water. This process kills the
                            metabolism of the bean. After this, place the beans
                            in the sun every day for two hours so that the bean
                            will get over 120 degrees. Then wrap it up and place
                            the beans back in the sun until the bean loses its
                            interior structure, which takes roughly 2 weeks.
                          </p>
                          <p className='text-base leading-7'>
                            When the interior structure is gone, put the beans
                            in a regular environment and let them dry for a
                            month until the water content is 25%. When that
                            occurs, wrap up the beans, seal them, and let the
                            beans mature for 2 more months. this process has
                            been effective in creating high quality vanilla for
                            our consumers.
                          </p>
                        </div>
                      </div>

                      {/* Stats section */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
