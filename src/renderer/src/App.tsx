import Versions from './components/Versions'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="bg-slate-800 text-gray-200 p-10 h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Versions></Versions>
    </div>
  )
}

export default App
