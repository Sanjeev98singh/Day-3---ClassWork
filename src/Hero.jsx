import './Hero.css'
import Button from './Button';
import Image from './assets/Hero.jpg'
function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="hero-text">
                <h1>Let Us find your</h1>
                <h1>Perfect Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint praesentium iure dicta eius, nemo vitae optio molestiae distinctio possimus accusamus enim quibusdam, adipisci quaerat est repellendus nesciunt, vel necessitatibus? Ratione porro cumque adipisci aut.</p>
                <Button title="Search Now" bgColor="red" color="white"/><Button title="Know More" bgColor="white" color="red"/>


            </div>

        </div>
        <div className='Hero-des'>
            <div className="left">
                <img src={Image} alt="" />
            </div>
            <div className="right">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde expedita quibusdam asperiores est quas, architecto repudiandae iure alias laborum?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum delectus facere deserunt nemo sed doloribus molestias cumque, eum blanditiis, maiores tempore soluta dolores!</p>
                <Button title="Get In Touch" bgColor="Blue" color="white"/>
            </div>

        </div>
        </>
    )
}
export default Hero;