

import Nav from "./Components/Nav"
import Content from "./Components/Content"
import Soporte from "./Components/Soporte"
import Nosotros from "./Components/Nosotros"


const App = () => {
  return (
    <>
      <div className="">

        <div className="bg-[#86AD53] dark:bg-[#1a1a1a]">
          <div id="/" className="">
            <Nav />
            <div className="">
              <Content />
            </div>
          </div>
          <div className="bg-[#caf98d]">
            <Nosotros />
          </div>
          <div className="bg-[#caf98d]">
            <Soporte />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
