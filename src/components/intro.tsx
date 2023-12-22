import {
    IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./intro.css";
import Profiterole from "../assets/profiterole3.jpg";

interface ContainerProps{
  onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = ({onFinish}) => {
  return (
    <IonPage>
      <IonContent>
        <div className="wrap">
          <div className="box">
            <IonGrid>
              <IonRow>
                <IonCol className="ion-text-center">
                  <h1 id="quest">QUEST</h1>
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center" >
                <IonCol id="profiterole-col"className="ion-align-self-center">
                  <img id="profiterole" src={Profiterole}></img>
                </IonCol>
                <IonCol id="stat">
                  <p>HP:+100</p>
                  <p>STR:+5</p>
                  <p>DOP:+10</p>
                  <p>UNO:+1</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol id="stat-luck">
                    <h2 id="thing">Profiteroles</h2>
                    <p>Good luck whisking the cream by hand :)</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol id="reward">
                    <h3 id="reward-tit">Reward</h3>
                    <p id="stat">EXP:+100</p>
                    <p id="stat-pat">Pâtissier bragging rights</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <div className="button_wrap">
          <IonButton onClick={() => onFinish()}>Start</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
