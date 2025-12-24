import style from '../../Css/HeroSection.module.css';

export default function HeroSection() {
    return (
        <div className={style.heroContainer}>
            <div className={style.heroContent}>
                <div>
                    <img src="/group_profile.png" alt="" />
                    <span>Trusted 10k+ people</span>
                </div>
                <div>
                    <h1>Turning imagination into <br className={style.h1BreakTag} /> <span>digital</span> impact.</h1>
                    <p>Creating meaningful connections and turning big ideas <br className={style.PbreakTag} /> into interactive digital experiences.</p>
                </div>
                <div className={style.heroImage}>
                    <img src="/hero_img.png" alt="" />
                </div>
            </div>
        </div>
    )
}
