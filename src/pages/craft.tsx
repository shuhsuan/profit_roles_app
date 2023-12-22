import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonPage,
  IonRow,
  IonTitle
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Preferences } from "@capacitor/preferences";
import Intro from "../components/intro";
import "./craft.css";
import Water from "../assets/water.png";
import Butter from "../assets/butter.png";
import Salt from "../assets/salt.png";
import Sugar from "../assets/Sugar.png";
import Flour from "../assets/flour.png";
import Egg from "../assets/egg.png";
import Cream from "../assets/Milk.png";
import Choco from "../assets/choco.png";
import Point from "../assets/point.png";
import Present from "../assets/present.gif"
import Click from '../assets/click.mp3'

const INTRO_KEY = "intro-seen";

const Craft: React.FC = () => {
  const [introSeen, setIntroSeen] = useState(true);
  const [point1, setPoint1] = useState(true)
  const [point2, setPoint2] = useState(true)
  const [point3, setPoint3] = useState(true)
  const [point4, setPoint4] = useState(true)
  const [water, setWater] = useState(true)
  const [butter, setButter] = useState(true)
  const [salt, setSalt] = useState(true)
  const [sugar, setSugar] = useState(true)
  const [flour, setFlour] = useState(true)
  const [egg, setEgg] = useState(true)
  const [cream, setCream] = useState(true)
  const [choco, setChoco] = useState(true)
  const [invite, setInvite] = useState(true)
  const [block, setBlock] = useState(true)


  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  const doThing = () => {
    const date = Date.now();
    const today = new Date(date);
    const test = today.getDate()

    if(test > 25)
    {
      invite? setInvite(false):setInvite(true);
    }
    else{
      block? setBlock(false):setBlock(true);
    }
  }

  const playAudio = () => {
    new Audio(Click).play()
  }

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader></IonHeader>
          <IonContent className="ion-padding">
            <IonGrid id="grid">
              <IonRow id="craft-row">
                <IonCol id="ingredients" className="ion-text-center">Ingredients</IonCol>
              </IonRow>
              <IonRow id="craft-row-top">
                <IonCol size="2">
                  <img id="craft" src={Water} onClick={()=>{water?setWater(false):setWater(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img id="craft" src={Butter} onClick={() => {butter? setButter(false):setButter(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img src={Salt} id="craft" onClick={()=>{salt? setSalt(false):setSalt(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img src={Sugar} id="craft" onClick={()=>{sugar? setSugar(false):setSugar(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img src={Flour} id="craft" onClick={()=>{flour? setFlour(false):setFlour(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img src={Egg} id="craft" onClick={()=>{egg? setEgg(false):setEgg(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img src={Cream} id="craft" onClick={()=>{cream? setCream(false):setCream(true)}}></img>
                </IonCol>
                <IonCol size="2">
                  <img src={Choco} id="craft" onClick={()=>{choco? setChoco(false):setChoco(true)}}></img>
                </IonCol>
              </IonRow>
              <IonRow id="craft-row-top"><IonCol>
                <div hidden={water}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Water}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">H20</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">250ml</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={butter}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Butter}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Unseasoned dairy churn</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">100g</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={salt}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Salt}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Salty crystals</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">Pinch o'</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={sugar}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Sugar}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Sweet crystals</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">5g</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={flour}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Flour}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Plain white powder</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">150g</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={egg}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Egg}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Eggs</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">4</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={cream}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Cream}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Double cream</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">Some amount <p id="point-el">(The big 600ml one from Tescos was not quite enough last time we made them)</p></IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                <div hidden={choco}>
                  <IonGrid>
                    <IonRow id="card-row">
                      <IonCol id="card-col" size="4"><img id="card-img" src={Choco}/></IonCol>
                      <IonCol id="el-col">
                        <IonRow className="ion-justify-content-center" id="el-name">Choco</IonRow>
                        <IonRow className="ion-justify-content-center" id="el-quant">Some</IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>

                </IonCol></IonRow>
              <IonRow id="craft-row-top"><IonCol id="larger-tit" className="ion-text-center">Craft</IonCol></IonRow>
              <IonRow id="craft-row-top">
                <IonCol id="craft-tent">
                  <ol>
                    <li>Throw H20, sweet & salty crystals, and dariy churn into cauldron.</li><br/>
                    <li>Bring to simmer, take off heat, add flour and mix till dough.</li><br/>
                    <li>Let cool then mix eggs in one at a time.</li><br/>
                    <li>Make blobs on baking paper - to desired size. May deflate if too close to each other.</li><br/>
                    <IonRow><IonCol size="2"><img src={Point}id="point-img" onClick={() => {point1? setPoint1(false) : setPoint1(true)}}></img></IonCol><IonCol><p hidden={point1} id="point">Use piping bag or scoop with a spoon or two like I did. Try to make as smooth and round as possible.</p></IonCol></IonRow>
                    <IonRow><IonCol size="2"><img src={Point}id="point-img" onClick={() => {point2? setPoint2(false) : setPoint2(true)}}></img></IonCol><IonCol><p hidden={point2} id="point">If there are any pointy tips, dab finger in water and poke, those tips will burn otherwise ;-;</p></IonCol></IonRow>
                    <li>Bake at 200°C for 20 minutes.</li><br/>
                    <li>Poke criss cross holes at the bottom of the choux pastries.</li><br/>
                    <IonRow><IonCol size="2"><img src={Point}id="point-img" onClick={() => {point3? setPoint3(false) : setPoint3(true)}}></img></IonCol><IonCol><p hidden={point3} id="point">This is to create an entry point for the cream and to let the steam out so they don't deflate, but dont worry if they do, as long as there's a pocket inside for cream it'll be ok!</p></IonCol></IonRow>
                    <li>Whip cream till floof - add sugar at some point to intended sweetness.</li><br/>
                    <IonRow><IonCol size="2"><img src={Point}id="point-img" onClick={() => {point4? setPoint4(false) : setPoint4(true)}}></img></IonCol><IonCol><p hidden={point4} id="point">Warning: Too much sugar may be quite sickly.</p></IonCol></IonRow>
                    <li>Pipe cream into <u>COOLED</u> pastries.</li><br/>
                    <li>Melt choco and dip profiterole to make a choco cap. frfr.</li>
                  </ol>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton id="exit" onClick={seeIntroAgain}>
              X
            </IonButton>
            <div id="cont"><img onClick={doThing} id="present" src={Present}></img></div>
            <div hidden={invite}>
            <IonGrid id="invite">
              <IonRow>
                <IonCol>
               I extend unto thee an invitation to attend the grand and most holy occasion of:
            <p id="mormon">The book of mormon</p>
            The event shall unfold as follows -<br/><br/>
            <b>Date:</b> 13th March 2023 <br/>
            <b>Hour:</b> 19:30 <br/>
            <b>Venue:</b> Prince of Wales Theatre <br/>
            <b>Address:</b> Coventry street, London, W1D 6AS<br/><br/>

<p id="rsvp">R.S.V.P.</p>
            Pray, confirm thy presence or absence by some-time-in-the-future via messenger raven to one Shu, from that room, in that house.<br/>

            <p id="rsvp">Attire</p>
            None, or mayhaps garments adorned like those from the isles of Hawaii?<br/>

            <p id="rsvp">Additional Tidings</p>
            In the nearby realm, there doth dwell several taverns that boast succulent fowl offerings (read: chicken wings). Might thou be inclined to partake in a repast ere the event? <br/>
            <br/><br/>
            In ship and mirth, I remain,<br/> 
            Shu.
                </IonCol>
                </IonRow>
            </IonGrid>
            </div>
            <div hidden={block} id="block">
              This can only be opened on and after the 25th of December :o
            </div>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Craft;
