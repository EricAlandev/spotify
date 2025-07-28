
import HeaderMobile from "./header/HeaderMobile"
import HeaderDesktop from './header/HeaderDesktop'
const Header = () => {

  return (
    <header className="fixed w-full z-50">
      
      <HeaderMobile/>
      <HeaderDesktop/>

      
    </header>
  );
};

export default Header;
