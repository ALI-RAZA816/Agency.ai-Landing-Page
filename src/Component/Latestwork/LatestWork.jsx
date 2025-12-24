import style from '../../Css/LatestWork.module.css';

export default function LatestWork() {
    return (
        <div id='Work' className={style.latestWork}>
            <div className={style.content}>
                <h2>Out latest work</h2>
                <p>Browse our portfolio of innovative digital projects that showcase <br /> creativity, performance, and results.</p>
                <div className={style.work}>
                    <div className={style.workBox}>
                        <div>
                            <img src="/work_mobile_app.png" alt="" />
                        </div>
                        <span>Mobile app marketing</span>
                        <p>We turn bold ideas into powerful digital solutions that connect...</p>
                    </div>
                    <div className={style.workBox}>
                        <div>
                            <img src="/work_dashboard_management.png" alt="" />
                        </div>
                        <span>Dashboard management</span>
                        <p>We turn bold ideas into powerful digital solutions that connect...</p>
                    </div>
                    <div className={style.workBox}>
                        <div>
                            <img src="/work_fitness_app.png" alt="" />
                        </div>
                        <span>Fitness app promation</span>
                        <p>We turn bold ideas into powerful digital solutions that connect...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
