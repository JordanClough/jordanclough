import BentoBox from "../components/BentoBox";

function Home(){
    return(
        <main className="home">
            <h1>Welcome to my portfolio!</h1>
            <p>My name is Jordan Clough and I am a software developer.</p>
            <div className="bento-container">
                <BentoBox className="bb1" title="3" content="Years of Personal Experience" />
                <BentoBox className="bb2" title="Featured Project" content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                <BentoBox className="bb3" title="SFU" content="Pursuing a Bachelor of Science in Computer Science" />
                <BentoBox className="bb4" title="Inspired" content="Please take a look through the content on my website to explore my capabilities and interests. I hope you find something that inspires you!"/>
                <BentoBox className="bb5" title="82" content="Credits Completed" />
            </div> 
            <div className="colourGradient"></div>
        </main>
    );
}
export default Home