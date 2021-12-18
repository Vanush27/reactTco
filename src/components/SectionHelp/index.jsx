import "./styles.css";
import Card from "../Reusable/Card";
import starImg from '../../assets/image/star.png';

const SectionHelp = () => {

    return (

        <div className="container" id="sectionHelp">

            <div className="imageCenter">
                <img src={starImg} />
            </div>
            <div>
                <h1>ԻՆՉՊԵՍ ՕԳՏՎԵԼ</h1>
                <h4>Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով</h4>
            </div>

            <div className="card_container">
                <Card
                    text="Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ"
                    imageUrl="https://onex.am/img/svg/step1.svg"
                />

                <Card
                    text="Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս"
                    imageUrl="https://onex.am/img/svg/step2.svg"
                />
                <Card
                    text="Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում"
                    imageUrl="https://onex.am/img/svg/step3.svg"
                />

            </div>
        </div>
    );
}


export default SectionHelp;