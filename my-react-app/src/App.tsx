/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import './App.css'
import { INITIAL_STATE } from './data'
import { AppState } from './interfaces/IAppState'
import { Sub } from "./types";
import List from './components/List'
import Form from './components/Form'



function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])


  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => ({...subs, newSub}))
  }


  return (
    
      <div className='App' ref={divRef}>
        <h1>Subs Local</h1>
        <List subs={subs}/>
        <Form onNewSub={handleNewSub}/>
      </div>
    
  )
}

export default App
