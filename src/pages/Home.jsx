import BentoBox from "../components/BentoBox";

function Home(){
    const handleDownloadAndOpen = () => {
        const resumeDestination = "/Resume_Jordan_Clough_UNFINISHED.pdf";
        window.open(resumeDestination, "_blank");
        
        const link = document.createElement("a");
        link.href = resumeDestination;
        link.download = "Resume_Jordan_Clough_UNFINISHED.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <main className="home">
            <h1>Welcome to my portfolio!</h1>
            <p>My name is Jordan Clough and I am a software developer.</p>
            <div className="bento-container">
                <BentoBox title="3" content="Years of Personal Experience" />
                <BentoBox title="SFU" content="Pursuing a Bachelor of Science in Computer Science" />
                <BentoBox title="82" content="Credits Completed" />
                <BentoBox content="Resume">
                    <button onClick={handleDownloadAndOpen} className="download-resume">
                        Download Resume
                    </button>
                </BentoBox>
            </div>
        </main>
    );
}
export default Home