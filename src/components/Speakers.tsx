'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

const days = [
  {
    name: 'Day One',
    date: 'December 25',
    dateTime: '2025-12-25',
    speakers: [
      {
        name: 'Imam Abu Bakarr Mansaray',
      },
      {
        name: 'SH. Salieu Adikali Samura',
      },
      {
        name: 'SH. Murray Bundu Marrah',
      },
      {
        name: 'PRO. Hamad Ibn Muhammad Alhaajiri',
      },
      {
        name: 'SH. Solih Nicol',
      },
    ],
  },
  {
    name: 'Day Two',
    date: 'December 26',
    dateTime: '2025-12-26',
    speakers: [
      {
        name: 'Imam Abu Bakarr Mansaray',
      },
      {
        name: 'SH. Saad Almagribi',
      },
      {
        name: 'SH. Solih Nicol',
      },
    ],
  },
  {
    name: 'Day Three',
    date: 'December 27',
    dateTime: '2025-12-27',
    speakers: [
      {
        name: 'Imam Abu Bakarr Mansaray',
      },
      {
        name: 'SH. Salieu Adikali Samura',
      },
      {
        name: 'SH. Murray Bundu Marrah',
      },
      {
        name: 'SH. Abu Salamah Muhammad Aideed',
      },
    ],
  },
  {
    name: 'Day Four',
    date: 'December 28',
    dateTime: '2025-12-28',
    speakers: [
      {
        name: 'Imam Abu Bakarr Mansaray',
      },
      {
        name: 'SH. Salieu Adikali Samura',
      },
      {
        name: 'SH. Murray Bundu Marrah',
      },
    ],
  },
]

export function Speakers() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32 bg-slate-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white">
            Our distinguished speakers will share their knowledge and insights on Tawheed.
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-600 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-yellow-400 stroke-yellow-400'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-yellow-400'
                              : 'text-slate-400',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-white"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-6 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className="bg-slate-800/60 px-6 py-4 rounded-lg border border-slate-700">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                      {speaker.name}
                    </h3>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
