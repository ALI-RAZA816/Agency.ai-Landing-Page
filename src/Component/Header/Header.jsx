import { LuMoon } from "react-icons/lu";
import { HiArrowLongRight } from "react-icons/hi2";
import style from '../../Css/Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className="companyLogo">
        <img src="/InsiderStats.png" alt="" />
      </div>
      <div className={style.link}>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Our Work</a></li>
            <li><a href="">Testimonials</a></li>
        </ul>
      </div>
      <div className={style.contact}>
        <div className={style.mode}><LuMoon className={style.darkMode} /></div>
        <button><span>Connect</span><HiArrowLongRight className={style.arrow} /></button>
      </div>
    </header>
  )
}
