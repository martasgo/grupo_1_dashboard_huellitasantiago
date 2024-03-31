import bannerDash from '../../assets/img/banner-dash.png'
import style from './Home.module.css'

function Home(){
    return (
        <header className="home">
            <h2 className={style.title}>Dashboard</h2>
            <div>
                <img src={bannerDash} alt="Banner Dashboard"/>
            </div>
        </header>
    )
}

export default Home;