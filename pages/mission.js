import { Fragment } from 'react'
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  GlobeIcon,
  UserGroupIcon,
  EmojiHappyIcon,
  MailIcon,
} from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Footer from '../components/footer'

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Recipes', href: '#' },
  { name: 'Our mission', href: '#' },
  { name: 'Camping', href: '#' },
]
const supportLinks = [
  {
    name: 'Organic',
    href: '#',
    description: 'All growth is promoted by organic methods by composting.',
    icon: GlobeIcon,
  },
  {
    name: 'Recreation',
    href: '#',
    description:
      'Create and maintain trails for recreation and educational objectives.',
    icon: EmojiHappyIcon,
  },
  {
    name: 'Community',
    href: '#',
    description:
      'Develop a center for studio activities such as art classes, personal development and nature studies.',
    icon: UserGroupIcon,
  },
]

export default function Mission() {
  return (
    <div className='h-screen'>
      <div className='relative bg-gray-50 overflow-hidden'>
        <div
          className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
          aria-hidden='true'
        >
          <div className='relative h-full max-w-7xl mx-auto'>
            <svg
              className='absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'
            >
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
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
                height={784}
                fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
              />
            </svg>
            <svg
              className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'
            >
              <defs>
                <pattern
                  id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
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
                height={784}
                fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
              />
            </svg>
          </div>
        </div>

        <div className='relative pt-6 pb-8 sm:pb-16'>
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
        </div>
      </div>
      <div className='bg-gray-50'>
        {/* Header */}
        <div className='relative pb-32 bg-gray-800'>
          <div className='absolute inset-0'>
            <img
              className='w-full h-full object-cover'
              src='static/images/bmfbg.png'
              alt=''
            />
            <div
              className='absolute inset-0 filter backdrop-sepia-0 opacity-20 mix-blend-multiply'
              aria-hidden='true'
            />
          </div>
          <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'></div>
        </div>

        {/* Overlapping cards */}
        <section
          className='-mt-32 max-w-7xl mx-auto relative z-10  px-4 sm:px-6 lg:px-8'
          aria-labelledby='contact-heading'
        >
          <h2 className='sr-only' id='contact-heading'>
            Contact us
          </h2>
          <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className='flex flex-col bg-white rounded-2xl shadow-xl'
              >
                <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                  <div className='absolute top-0 p-5 inline-block bg-primary-blue rounded-xl shadow-lg transform -translate-y-1/2'>
                    <link.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className='text-xl font-medium text-gray-900'>
                    {link.name}
                  </h3>
                  <p className='mt-4 text-base text-gray-500'>
                    {link.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='relative bg-white shadow-xl'>
            <h2 className='sr-only'>Contact us</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
              {/* Contact information */}
              <div className='relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12'>
                <div
                  className='absolute inset-0 pointer-events-none sm:hidden'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute inset-0 w-full h-full'
                    width={343}
                    height={388}
                    viewBox='0 0 343 388'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                      fill='url(#linear1)'
                      fillOpacity='.1'
                    />
                    <defs>
                      <linearGradient
                        id='linear1'
                        x1='254.553'
                        y1='107.554'
                        x2='961.66'
                        y2='814.66'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute inset-0 w-full h-full'
                    width={359}
                    height={339}
                    viewBox='0 0 359 339'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                      fill='url(#linear2)'
                      fillOpacity='.1'
                    />
                    <defs>
                      <linearGradient
                        id='linear2'
                        x1='192.553'
                        y1='28.553'
                        x2='899.66'
                        y2='735.66'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute inset-0 w-full h-full'
                    width={160}
                    height={678}
                    viewBox='0 0 160 678'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                      fill='url(#linear3)'
                      fillOpacity='.1'
                    />
                    <defs>
                      <linearGradient
                        id='linear3'
                        x1='192.553'
                        y1='325.553'
                        x2='899.66'
                        y2='1032.66'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className='text-lg font-medium text-white'>
                  Contact information
                </h3>
                <p className='mt-6 text-base text-indigo-50 max-w-3xl'>
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl className='mt-8 space-y-6'>
                  <dt>
                    <span className='sr-only'>Phone number</span>
                  </dt>
                  <dd className='flex text-base text-indigo-50'>
                    <PhoneIcon
                      className='flex-shrink-0 w-6 h-6 text-indigo-200'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>+1 (555) 123-4567</span>
                  </dd>
                  <dt>
                    <span className='sr-only'>Email</span>
                  </dt>
                  <dd className='flex text-base text-indigo-50'>
                    <MailIcon
                      className='flex-shrink-0 w-6 h-6 text-indigo-200'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>support@workcation.com</span>
                  </dd>
                </dl>
                <ul role='list' className='mt-8 flex space-x-12'>
                  <li>
                    <a
                      className='text-indigo-200 hover:text-indigo-100'
                      href='#'
                    >
                      <span className='sr-only'>Facebook</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        aria-hidden='true'
                      >
                        <path
                          d='M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-indigo-200 hover:text-indigo-100'
                      href='#'
                    >
                      <span className='sr-only'>GitHub</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        aria-hidden='true'
                      >
                        <path
                          d='M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-indigo-200 hover:text-indigo-100'
                      href='#'
                    >
                      <span className='sr-only'>Twitter</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        aria-hidden='true'
                      >
                        <path
                          d='M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                <h3 className='text-lg font-medium text-gray-900'>
                  Send us a message
                </h3>
                <form
                  action='#'
                  method='POST'
                  className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <div>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-900'
                    >
                      First name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Last name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Email
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-900'
                      >
                        Phone
                      </label>
                      <span
                        id='phone-optional'
                        className='text-sm text-gray-500'
                      >
                        Optional
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='tel'
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                        aria-describedby='phone-optional'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Subject
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-900'
                      >
                        Message
                      </label>
                      <span id='message-max' className='text-sm text-gray-500'>
                        Max. 500 characters
                      </span>
                    </div>
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                        aria-describedby='message-max'
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2 sm:flex sm:justify-end'>
                    <button
                      type='submit'
                      className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
