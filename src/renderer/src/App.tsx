// import Versions from './components/Versions'
import { HashRouter, Routes, Route } from 'react-router'
import MapComponent from './components/MapEditor'
import { NavMenu } from './components/layout/NavMenu'
import { useState } from 'react'
import { AppSidebar } from './components/app-sidebar'
import Layout from './app/layout'
// import Layout from './components/layout'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const RADIO_ITEMS = ['Dark', 'Light']
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[0])

  return (
    <Layout children={ <></>} />
  )
}

export default App
