import BentoBox from "../components/BentoBox";

function Home(){

    return(
        <main className="home">
            <h1>Welcome to my portfolio!</h1>
            <p>My name is Jordan Clough and I am a software developer.</p>
            <div className="bento-container">
                <BentoBox title="3" content="Years of Personal Experience" />
                <BentoBox title="SFU" content="Pursuing a Bachelor of Science in Computer Science" />
                <BentoBox title="82" content="Credits Completed" />
                <BentoBox content="Resume">

                </BentoBox>
            </div>
        </main>
    );
}
export default Home