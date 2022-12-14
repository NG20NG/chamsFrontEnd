//
//
import "./Comp.css/Ateliers.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
//==============================================================================
//================================music
import music1 from "./Comp.css/PhotoAteliers/music/music1.jpg"
import music2 from "./Comp.css/PhotoAteliers/music/music2.jpg"
import music3 from "./Comp.css/PhotoAteliers/music/music3.jpg"
import music4 from "./Comp.css/PhotoAteliers/music/music4.jpg"
import music5 from "./Comp.css/PhotoAteliers/music/music5.jpg"
import music6 from "./Comp.css/PhotoAteliers/music/music6.jpg"
//================================theatre
import theatre1 from "./Comp.css/PhotoAteliers/theatre/theatre1.webp"
import theatre2 from "./Comp.css/PhotoAteliers/theatre/theatre2.webp"
import theatre3 from "./Comp.css/PhotoAteliers/theatre/theatre3.webp"
//================================mot
import Capture1 from "./Comp.css/PhotoAteliers/motr/Capture1.jpg"
import Capture2 from "./Comp.css/PhotoAteliers/motr/Capture2.jpg"
import Capture3 from "./Comp.css/PhotoAteliers/motr/Capture3.png"
import Capture4 from "./Comp.css/PhotoAteliers/motr/Capture4.png"
import Capture5 from "./Comp.css/PhotoAteliers/motr/Capture5.png"
//================================Art
import art1 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art2 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art3 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art4 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art5 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
import art6 from "./Comp.css/PhotoAteliers/artP/art1.jpg"
//================================dance
import dance1 from "./Comp.css/PhotoAteliers/dance/dance1.jpg"
import dance2 from "./Comp.css/PhotoAteliers/dance/dance2.jpg"
import dance3 from "./Comp.css/PhotoAteliers/dance/dance3.jpg"
//==============================================================================
const Ateliers = () => {
    let height = 432
    let width = "auto"
    return <div className="Ateliers">
        <div className="titreAteliersH2">
            <h2>N'au atelier</h2>
        </div>
        <div className="atelierCardsCounatner">
            {/*=======================================================================*/}
            <div className="atelierCardCountaner">
                <div className="atelierCard">
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={Capture1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture3} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture4} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={Capture5} alt="pic" /></div>
                        </Carousel>
                    </div>
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>la psychomotricit??</p>
                            <br />
                            <div>
                                El??ment de base, sur lequel repose tout le travail qui se fait ?? Cham???s, la psychomotricit??, est
                                omnipr??sente et ?? juste titre, dans toutes nos activit??s. Pourquoi ?<br /><br />
                                Chacune des personnes en difficult?? qui adh??re ?? Cham???s, nous vient avec un retard
                                psychomoteur plus ou moins lourd, auquel l?????quipe p??dagogique doit faire face.<br /><br />
                                La psychomotricit?? ?? Cham???s est propos??e ?? nos adh??rents sous forme ludique car l???on sait,
                                que l???enfant de par sa nature, adh??re beaucoup mieux au jeu.<br /><br />
                                Les exercices de psychomotricit??, contribuent fortement (et nous en avons fait l???exp??rience) ??
                                la stabilit??, au d??passement des angoisses et autres inhibitions.
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======================================================================*/}
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Atelier d???art lyrique</p>
                            <br />
                            <div>
                                Ecole de musique : ??veil musical, initiation aux instruments de musique, enseignement
                                du solf??ge, chant polyphonique, musique universelle, musique andalouse ???<br /><br />
                                Cet atelier s???adresse ?? une population diff??rente en ??ge, en sexe, en pathologie,
                                r??partie en plusieurs groupes, avec un programme sp??cifique adapt?? ?? chaque groupe et
                                chaque niveau :<br /><br />
                                - Eveil musical pour autistes.<br />
                                - Eveil musical pour Trisomiques.<br />
                                - Classe ?? int??gration ??.<br />
                                - Classe sup??rieure.<br />
                                - Apprentissage des instruments : (violon, guitare, mandoline, fl??te, luth, piano ???).<br />
                                - Ecole de musique andalouse.

                            </div>
                        </div>
                    </div>
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={music1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music3} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music4} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music5} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={music6} alt="pic" /></div>
                        </Carousel>
                    </div>
                </div>
                <div className="underdescriptionAtelier">
                    <div>
                        En atelier de musique, le programme que nous avons arr??t?? met l???accent sur l?????veil musical, les
                        jeux musicaux, les bruitages, le chant chorale, la musique arabo-andalouse, l???initiation aux instruments
                        et l???enseignement du solf??ge. Tous les efforts qui y sont d??ploy??s pour l???apprentissage et
                        l???enseignement de la musique, ont abouti ?? la mise en place d???une chorale polyphonique, d???un
                        orchestre de musique andalouse et ?? la formation d???un ensemble de musiciens et choristes solf??gistes.
                    </div>
                </div>
                {/*=======================================================================*/}
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={art1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art3} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art4} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art5} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={art6} alt="pic" /></div>
                        </Carousel>
                    </div>
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Atelier d???art plastique</p>
                            <br />
                            <div>
                                Dessin, peinture et travaux manuels???<br />
                                Entre autres objectifs, cet atelier vise le d??veloppement de la motricit?? fine, l?????veil des sens, la
                                concentration, la stabilit??, l???acquisition et la maitrise des formes et des couleurs
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Atelier d???art dramatique</p>
                            <br />
                            <div>
                                Cet atelier, met l???accent sur le jeu de r??le, l???expression corporelle, le sens de la repr??sentation
                                (o?? il est question pour la personne en difficult?? de s???approprier les caract??res d???un personnage et de
                                les restituer face ?? un public) ;<br /><br />
                                les exercices et jeux favorisant la relaxation et le bien ??tre, l?????veil des
                                sens, les expressions verbales et gestuelles, le travail de la posture et de l?????quilibre, la coordination des
                                mouvements et gestes, la confiance en soi, les ??changes interactifs, le sch??ma corporel, l???acquisition
                                des notions d???espace et de temps, d???orientation, de lat??ralisation et de stabilit??.

                            </div>
                        </div>
                    </div>
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={theatre1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={theatre2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={theatre3} alt="pic" /></div>
                        </Carousel>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="first-x-line xAtelier" />
                <br />
                <br />
                <br />
                <br />
                <div className="atelierCard">
                    <div className="leftAtelierCard">
                        <Carousel
                            className="CarouselAtelier1"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                            centerSlidePercentage={50}
                            transitionTime={1200}>
                            <div><img style={{ height: height, width: width }} src={dance1} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={dance2} alt="pic" /></div>
                            <div><img style={{ height: height, width: width }} src={dance3} alt="pic" /></div>
                        </Carousel>
                    </div>
                    <div className="rightAtelierCard">
                        <div className="descriptionAtelier">
                            <p>Danse et expression corporelle</p>
                            <br />
                            <div>
                                Pour la stimulation d???un corps trop souvent en ??tat d???hypotonie, l???activit?? physique,
                                suscit??e par la danse et l???expression corporelle, participe ?? l???assouplissement des muscles et
                                des articulations, particuli??rement restreint au sein de cette population expos??e au surpoids.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Ateliers