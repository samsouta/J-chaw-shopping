import React from 'react'
import WebView from './Child/WebView'
import DailySales from './Child/DailySales'
import TastsChart from './Child/TastsChart'

const ChartIndex = () => {
  return (
    <div className=' flex gap-x-2' >
      <WebView/>
      <DailySales/>
      <TastsChart/>
    </div>
  )
}

export default ChartIndex
