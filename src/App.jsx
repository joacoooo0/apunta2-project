import Nav from "./Components/Nav"
import Content from "./Components/Content"


const App = () => {
  return (
    <>
      <div className="bg-[#86AD53] h-screen min-h-screen px-24 py-10" >
        <div >
          <Nav />
        </div>
        <div className="my-20">
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
