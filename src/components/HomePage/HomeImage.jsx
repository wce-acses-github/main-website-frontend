import './HomeImage.css';
import career from '../../assets/career.svg';
import people from '../../assets/people.svg';
import computer from '../../assets/computer-programming-01-stroke-rounded.svg';
import gift from '../../assets/gift-stroke-rounded.svg';
import community from '../../assets/community.svg';
import compete from '../../assets/champion-stroke-rounded.svg';


const HomeImage = () => {
    return (
        <div className='home-image-main'>
            <div className='benefits-div'>
                <div className='benefit'>
                    <div className="benefit-img"><img src={computer} alt='Computer img' /></div>
                    <h2>Enhance Your Technical and Non-Technical Skills</h2>
                </div>
                <div className='benefit'>
                    <div className="benefit-img"><img src={compete} alt='Compete img' /></div>
                    <h2>Showcase and Compete</h2>
                </div>
                <div className='benefit'>
                    <div className="benefit-img"><img src={people} alt='People img' /></div>
                    <h2>Expand Your Network</h2>
                </div>
                <div className='benefit'>
                    <div className="benefit-img"><img src={career} alt='Career img' /></div>
                    <h2>Advance Your Career</h2>
                </div>
                <div className='benefit'>
                    <div className="benefit-img"><img src={gift} alt='Gift img' /></div>
                    <h2>Contribute to Society</h2>
                </div>
                <div className='benefit'>
                    <div className="benefit-img"><img src={community} alt='Community img' /></div>
                    <h2>We Are a Community</h2>
                </div>
            </div>
        </div>
    );
}

export default HomeImage;
