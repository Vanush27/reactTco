import "./styles.css";
import Card from "../Reusable/Card";
import starImg from "../../assets/image/star.png";


const SectionExport = () => {

    return (

        <div className="container_exp" id="sectionExport">

            <div className="imageCenter">
                <img src={starImg} />

            </div>
            <div>
                <h1>ԱՐՏԱՀԱՆՈՒՄ</h1>
                <h4>Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները
                    ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե</h4>
            </div>

            <div className="card_container_exp">
                <Card
                    class="expert"
                    text="Արտահանում ՀՀ-ից դեպի ԱՄՆ"
                    imageUrl="https://onex.am/img/pages/export/export_usa.jpg"
                />

                <Card
                    class="expert"
                    text="Արտահանում ՀՀ-ից դեպի Ռուսաստան"
                    imageUrl="https://onex.am/img/pages/export/export_rus.jpg"
                />
                <Card
                    class="expert"
                    text="Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ"
                    imageUrl="https://onex.am/images/documents-export-small.jpg"
                />

            </div>
        </div>
    );
}

export default SectionExport;