import C_logo from "../../assets/images/C_logo.png"
import S_logo from "../../assets/images/S_logo.png"
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {

    return (

        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br /> I'm
                    <img className="C" src={C_logo} alt='developer' />
                    liff
                    <img src={S_logo} alt='developer' />
                    parks
                    <br />
                    aspiring web developer
                </h1>
                <h2> Recently graduated Computer Science student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>


    );
}

export default Home