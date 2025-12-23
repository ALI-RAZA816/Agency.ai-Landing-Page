import style from '../../Css/Contact.module.css';
import { LuUserRound } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Contact() {
    return (
        <div className={style.contactSection}>
            <div className={style.contactContent}>
                <h2>Reach out to us</h2>
                <p>Ready to grow your brand? Let’s connect and build something  <br />exceptional together.</p>
                <div className={style.form}>
                    <form action="">
                        <div className={style.firstField}>
                            <div className={style.name}>
                                <label htmlFor="name">Your Name</label>
                                <div className={style.nameinput}>
                                    <LuUserRound style={{color:"#475569", fontSize:'1.5rem'}} /> <input type="text" id='name' placeholder='Enter your name' />
                                </div>
                            </div>
                            <div className={style.email}>
                                <label htmlFor="email">Email id</label>
                                <div className={style.emailinput}>
                                    <MdOutlineEmail style={{color:"#475569", fontSize:'1.5rem'}} /> <input type="text" id='enmail' placeholder='Enter your email' />
                                </div>
                            </div>
                        </div>
                        <div className={style.message}>
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="message" placeholder='Enter your message'></textarea>
                        </div>
                        <button className={style.submitBtn} type='submit'><span>Submit</span><IoIosArrowRoundForward style={{color:'#fff',fontSize:'1rem'}}/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
