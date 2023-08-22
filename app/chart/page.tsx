"use client"

import { useMemo } from "react"
import { AxisOptions, Chart } from "react-charts"
import useDemoConfig from "./use-demo-config"

type DailyStars = {
  date: Date

  stars: number
}

type Series = {
  label: string

  data: DailyStars[]
}

const data: Series[] = [
  {
    label: "React Charts",

    data: [
      {
        date: new Date(),

        stars: 202123,
      },

      // ...
    ],
  },

  {
    label: "React Query",

    data: [
      {
        date: new Date(),

        stars: 10234230,
      },
    ],
  },
]
export default function BarChart() {
  const { data, randomizeData } = useDemoConfig({
    series: 3,
    dataType: "ordinal",
  })

  const primaryAxis = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  )

  const secondaryAxes = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  )

  return (
    <>
      <button
        onClick={randomizeData}
        className='border rounded-2xl py-1 px-4 text-xl hover:border-gray-300'
      >
        Randomize Data
      </button>
      <br />
      <br />
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </>
  )
}
