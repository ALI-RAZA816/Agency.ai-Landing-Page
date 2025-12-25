
import { HiArrowLongRight } from "react-icons/hi2";
import style from '../../Css/Header.module.css';
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { ContextValues } from "../Context/Context";



export default function Header() {

  const {barHandler, crossHandler, linksHandler, linkShow} = useContext(ContextValues);

  return (
    <div className={style.header}>
      <div className={style.companyLogo}>
        <img src="/Group 1.png" alt="" /><img src="/InsiderStats.png" alt="" />
      </div>
      <div className={`${style.link} ${linkShow === true ? style.linksShow: undefined}`}>
        <RxCross2 onClick={crossHandler} className={style.crossIcon} />
        <ul>
            <li><a onClick={linksHandler} href="#Home">Home</a></li>
            <li><a onClick={linksHandler} href="#Services">Services</a></li>
            <li><a onClick={linksHandler} href="#Work">Our Work</a></li>
            <li><a onClick={linksHandler} href="#Testimonials">Testimonials</a></li>
            <li><a onClick={linksHandler} href="#Contact">Contact</a></li>
        </ul>
      </div>
      <div className={style.contact}>
        <a href="#Contact"><button><span>Connect</span><HiArrowLongRight className={style.arrow} /></button></a>
        <FaBars onClick={barHandler} className={style.menuIcon} />
      </div>
    </div>
  )
}
