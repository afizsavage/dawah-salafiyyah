'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    arabicDesc: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'December 25',
    dateTime: '2025-12-25',
    summary: 'Day one focuses on the foundations and importance of Tawheed.',
    timeSlots: [
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'أهمية التوحيد في طلب الشفاء',
        description: 'The Importance of Tawheed in Seeking Medication',
        start: 'After Fajr',
        end: '',
      },
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'الأربعون حديثا في التحذير من الشرك',
        description: 'Forty Hadith in Warning Against Shirk',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'SH. Salieu Adikali Samura',
        arabicDesc: 'التوحيد: خصائصه وفضائله',
        description: 'Tawheed: Its Unique Characteristics and Virtues',
        start: '10:05AM',
        end: '11:05AM',
      },
      {
        name: 'SH. Murray Bundu Marrah',
        arabicDesc: 'التوحيد: نواقضه ونواقصه',
        description: 'Tawheed, Its Nullifiers and Its Deficiencies',
        start: '11:10AM',
        end: '12:10PM',
      },
      {
        name: 'PRO. Hamad Ibn Muhammad Alhaajiri',
        arabicDesc: 'أهمية التوحيد في حياة الناس',
        description: "The Importance of Tawheed in People's Life",
        start: '5:00PM',
        end: '6:00PM',
      },
      {
        name: 'SH. Solih Nicol',
        arabicDesc: 'التوحيد والاقتصاد',
        description: 'Tawheed And Economics',
        start: '7:15PM',
        end: '8:30PM',
      },
    ],
  },

  {
    date: 'December 26',
    dateTime: '2025-12-26',
    summary: 'Day two highlights Tawheed and its impact on society.',
    timeSlots: [
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'أهمية التوحيد في طلب الشفاء',
        description: 'The Importance of Tawheed in Seeking Medication',
        start: 'After Fajr',
        end: '',
      },
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'الأربعون حديثا في التحذير من الشرك',
        description: 'Forty Hadith in Warning Against Shirk',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: '',
        arabicDesc: 'خطبة الجمعة',
        description: 'Friday Sermon',
        start: '1:00PM',
        end: '1:30PM',
      },
      {
        name: 'SH. Saad Almagribi',
        arabicDesc: 'أهمية العناية بالتوحيد وبيان أثره على المجتمع',
        description:
          'The Importance of Promoting Tawheed and Explaining Its Impact on Society',
        start: '5:00PM',
        end: '6:00PM',
      },
      {
        name: 'SH. Solih Nicol',
        arabicDesc: 'التوحيد والاقتصاد',
        description: 'Tawheed And Economics',
        start: '7:15PM',
        end: '8:30PM',
      },
    ],
  },

  {
    date: 'December 27',
    dateTime: '2025-12-27',
    summary: 'Day three expands on virtues, peace, and the role of Tawheed.',
    timeSlots: [
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'أهمية التوحيد في طلب الشفاء',
        description: 'The Importance of Tawheed in Seeking Medication',
        start: 'After Fajr',
        end: '',
      },
      {
        name: 'SH. Salieu Adikali Samura',
        arabicDesc: 'التوحيد: خصائصه وفضائله',
        description: 'Tawheed: Its Unique Characteristics and Virtues',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'SH. Murray Bundu Marrah',
        arabicDesc: 'التوحيد: نواقضه ونواقصه',
        description: 'Tawheed, Its Nullifiers and Its Deficiencies',
        start: '10:05AM',
        end: '11:05AM',
      },
      {
        name: 'SH. Abu Salamah Muhammad Aideed',
        arabicDesc: 'الأربعون حديثا في فضل التوحيد',
        description: 'Forty Hadiths on the Virtues of Tawheed',
        start: '11:10AM',
        end: '12:10PM',
      },
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'أهمية التوحيد للمرأة المسلمة',
        description: 'The Importance of Tawheed for the Muslim Woman',
        start: '5:00PM',
        end: '6:00PM',
      },
      {
        name: 'SH. Solih Nicol',
        arabicDesc: 'التوحيد والأمن',
        description: 'Tawheed And Peace',
        start: '7:15PM',
        end: '8:30PM',
      },
    ],
  },

  {
    date: 'December 28',
    dateTime: '2025-12-28',
    summary: 'Final day includes evaluation and closing ceremony.',
    timeSlots: [
      {
        name: 'Imam Abu Bakarr Mansaray',
        arabicDesc: 'أقوال وأفعال تخالف عقيدة التوحيد',
        description: 'Words and Deeds That Contradict Tawheed',
        start: 'After Fajr',
        end: '',
      },
      {
        name: 'SH. Salieu Adikali Samura',
        arabicDesc: 'التوحيد: خصائصه وفضائله',
        description: 'Tawheed: Its Unique Characteristics and Virtues',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'SH. Murray Bundu Marrah',
        arabicDesc: 'التوحيد: نواقضه ونواقصه',
        description: 'Tawheed, Its Nullifiers and Its Deficiencies',
        start: '10:05AM',
        end: '11:05AM',
      },
      {
        name: '',
        arabicDesc: '',
        description: 'General Discussion (Conference Evaluation)',
        start: '11:10AM',
        end: '12:10PM',
      },
      {
        name: '',
        arabicDesc: '',
        description: 'Closing Ceremony',
        start: '12:10PM',
        end: '1:00PM',
      },
    ],
  },
];


function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden text-white data-selected:text-yellow-400">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-slate-300">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-slate-800/60 px-10 py-14 text-center shadow-xl shadow-slate-900/5 backdrop-blur-sm border border-slate-700',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} GMT`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-yellow-400/20" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-white">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-white">
              {timeSlot.description}
            </p>
          )}
          {timeSlot.arabicDesc && (
            <p className="mt-2 text-base tracking-tight text-yellow-400 font-medium" dir="rtl">
              {timeSlot.arabicDesc}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-300">
            <time dateTime={`${day.dateTime}T${timeSlot.start}+00:00`}>
              {timeSlot.start}
            </time>{' '}
            {timeSlot.end && (
              <>
                -{' '}
                <time dateTime={`${day.dateTime}T${timeSlot.end}+00:00`}>
                  {timeSlot.end}
                </time>{' '}
              </>
            )}
            GMT
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32 bg-slate-900">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
            Conference Schedule
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white">
            Join us for four days of insightful sessions on Tawheed and its importance in our daily lives.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <Container className="relative z-10">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
