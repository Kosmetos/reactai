import ContainerImg from "../images/ContainerImg.png"
import Atom from './Atom';
import PriceList from "./PriceList"

export const Objects = [
    {
        id: 1,
        title: "Get More Done with whitespace",
        subtitle: "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.",
        buttonText: "Try whitespace for free",
        position: "boss"
    },
    {
        id: 2,
        title: "Work toghether",
        subtitle: "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
        buttonText: "Try it now",
        position: "tartaglia"
    },
    {
        id: 3,
        title: "Project Management",
        subtitle: "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
        buttonText: "Get Started",
        position: "child",
    }
]

const SectionObject = ({openModal}) => {
    return (
        <section className="site-main">
            {Objects.map(item => (
                <div key={item.id} className={`main-container ${item.position}`}>
                    <div className="main-left">
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <button onClick={openModal}>{item.buttonText}</button>
                    </div>
                    <div className="main-right ">
                        {((item.id) === 2) ? <Atom /> : <img src={ContainerImg} className="main-right_image" alt="logo"></img>}
                    </div>
                </div>))}
            <PriceList openModal={openModal}/>
        </section>
    )
} 

export default SectionObject;