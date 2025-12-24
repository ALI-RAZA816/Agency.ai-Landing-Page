import style from '../../Css/Team.module.css';

export default function Team() {
    return (
        <div id='Testimonials' className={style.teamSection}>
            <div className={style.teamcontent}>
                <h2>Meet the team</h2>
                <p>A passionate team of digital experts dedicated to your <br />brand’s success.</p>
                <div className={style.teamGrid}>
                    <div>
                        <img src="/team/image 582.png" alt="" />
                        <div>
                            <p>Haley Carter</p>
                            <p>CEO & founder</p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 584.png" alt="" />
                        <div>
                            <p>James Walker</p>
                            <p>Ads manager</p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 585.png" alt="" />
                        <div>
                            <p>Jessica Morgan</p>
                            <p>Vice president</p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 586.png" alt="" />
                        <div>
                            <p>Ashley Bennett</p>
                            <p>Marketing & sales</p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 587.png" alt="" />
                        <div>
                            <p>Emily Parker</p>
                            <p>Content marketer</p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 588.png" alt="" />
                        <div>
                            <p>Ryan Mitchell</p>
                            <p>Contnt writer </p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 589.png" alt="" />
                        <div>
                            <p>Magan Brooks</p>
                            <p>Performance manager</p>
                        </div>
                    </div>
                    <div>
                        <img src="/team/image 590.png" alt="" />
                        <div>
                            <p>Amber Foster</p>
                            <p>Senior writer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
