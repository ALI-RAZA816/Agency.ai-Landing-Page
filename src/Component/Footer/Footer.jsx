import style from '../../Css/Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerContent}>
                <div className={style.footerBoxes}>
                    <div className={style.box}>
                        <div>
                            <img src="/Group 1.png" alt="" />
                            <img src="/InsiderStats.png" alt="" />
                        </div>
                        <p>From strategy to execution, we craft digital solutions that move your business forward.</p>
                        <div className={style.links}>
                            <ul><li><a href="">Home</a></li></ul>
                            <ul><li><a href="">Services</a></li></ul>
                            <ul><li><a href="">Our Work</a></li></ul>
                            <ul><li><a href="">Testimonial</a></li></ul>
                        </div>
                    </div>
                    <div className={style.box1}>
                        <div>
                            <p>Subscribe to our newsletter</p>
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        </div>
                        <div className={style.subscription}>
                            <input type="text" placeholder='Enter your email' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className={style.secondFooter}>
                    <span>Copyright 2025 © agency.ai  -  All Right Reserved.</span>
                    <div className={style.socialIcons}>
                        <FaFacebook style={{fontSize:'1.3rem',color:'#7A7A7A', marginRight:'1rem'}} />
                        <FaXTwitter style={{fontSize:'1.3rem',color:'#7A7A7A', marginRight:'1rem'}} />
                        <FaInstagram style={{fontSize:'1.3rem',color:'#7A7A7A', marginRight:'1rem'}} />
                        <FaLinkedin style={{fontSize:'1.3rem',color:'#7A7A7A'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
