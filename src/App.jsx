

import Nav from "./Components/Nav"
import Content from "./Components/Content"
import Soporte from "./Components/Soporte"
import Nosotros from "./Components/Nosotros"
import Footer from "./Components/Footer"

import { IconArrowUp } from '@tabler/icons-react';
import { Link } from 'react-scroll';

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <button className="my-5 mx-5 bottom-0 right-0 fixed bg-[#759f43] rounded-[15px] w-14 h-14 grid items-center justify-center dark:bg-[#a6c977]">
          <Link activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} >
            <IconArrowUp stroke={2} color="#19240f" />
          </Link>
        </button>
        <div className="bg-[#cfe2b4] dark:bg-[#1a1a1a]">
          <div id="/" className="">
            <Nav />
            <Content />
          </div>
          <div className="bg-[#a6c977] dark:bg-[#5a7e32]">
            <Nosotros />
          </div>
          <div className="bg-[#a6c977] dark:bg-[#5a7e32]">
            <Soporte />
          </div>

        </div>
        <footer  >
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
