import BentoBox from "../components/BentoBox";
import activityPhoto from "../assets/project_photos/postactiv.png";
import realTimeData from "../assets/project_photos/fitnessSS.png";

function Home(){
    return(
        <main className="home">
            <h1>Welcome to my portfolio!</h1>
            <p>My name is Jordan Clough and I am a software developer.</p>
            <div className="bento-container">
                <BentoBox title="3" content="Years of Personal Experience" />
                <BentoBox link="/projects" title="Fitness Tracker" content="An iOS app that tracks users' fitness activities and provides detailed insights into their performance.">
                    <div className="photo-container">
                        <img src={activityPhoto} alt="Fitness Tracker App" className="project-img" />
                        <img src={realTimeData} alt="Fitness Tracker App" className="project-img" />
                    </div>
                </BentoBox>
                <BentoBox title="SFU" content="Pursuing a Bachelor of Science in Computer Science" />
                <BentoBox title="Explore" content="Please take a look through the content on my website to explore my capabilities and interests. I hope you find something that inspires you!"/>
                <BentoBox title="82" content="Credits Completed" />
            </div>
        </main>
    );
}
export default Home