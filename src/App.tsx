import Filters from "./components/Filters"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Search from "./components/Search"

const App = () => {
  return (
    <div className="flex flex-col max-w-[1440px] m-auto">
      <Navbar />
      <div className="flex flex-1 flex-row">
        <div className="md:flex flex-col hidden">
          <Search />
          <Filters />
        </div>
       <Main />
      </div>
        <Footer />
    </div>
  )
}

export default App