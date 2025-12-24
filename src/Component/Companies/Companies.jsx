import style from '../../Css/Companies.module.css';

export default function Companies() {
    return (
        <div id='Services' className={style.companiesSec}>
            <div className={style.content}>
                <div>
                    <p>Trusted by Leading Companies</p>
                </div>
                <div className={style.companiesLogo}>
                    <img src="/companies/coinbase_logo.png" alt="" />
                    <img src="/companies/google_logo.svg" alt="" />
                    <img src="/companies/rakuten_logo.png" alt="" />
                    <img src="/companies/microsoft_logo.png" alt="" />
                    <img src="/companies/airbnb_logo.svg" alt="" />
                    <img src="/companies/zoom_logo.png" alt="" />
                </div>
                <div className={style.helpInfo}>
                    <h3>How can we help?</h3>
                    <p>From strategy to execution, we craft digital solutions that move <br /> your business forward.</p>
                    <div className={style.helpGrid}>
                        <div className={style.bgBox}>
                            <div>
                                <div className={style.circle}>
                                    <img src="/ads_icon.svg" alt="" />
                                </div>
                                <div className={style.Helpcontent}>
                                    <span>Advertising</span>
                                    <p>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.bgBox}>
                            <div>
                                <div className={style.circle}>
                                    <img src="/marketing_icon.svg" alt="" />
                                </div>
                                <div className={style.Helpcontent}>
                                    <span>Content marketing</span>
                                    <p>We turn bold ideas into powerful digital solutions that connect, engage and...</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.bgBox}>
                            <div>
                                <div className={style.circle}>
                                    <img src="/Dribbble-Light-Preview.png" alt="" />
                                </div>
                                <div className={style.Helpcontent}>
                                    <span>Content writing</span>
                                    <p>We turn bold ideas into powerful digital solutions that connect...</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.bgBox}>
                            <div>
                                <div className={style.circle}>
                                    <img src="/social_icon.svg" alt="" />
                                </div>
                                <div className={style.Helpcontent}>
                                    <span>Social media</span>
                                    <p>We turn bold ideas into powerful digital solutions that connect, engage...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
