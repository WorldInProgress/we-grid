import Layout from './app/layout'
function App(): JSX.Element {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  fetch('/1.json').then(res => {
    console.log(res)
    res.json().then(data => {
      console.log(data)
    })
  })

  return (
    <Layout>
      <button onClick={ipcHandle}>Click me</button>
    </Layout>
  )
}

export default App
