import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/react";
import { add } from "ionicons/icons";

const handleNewBehaviorClick = () => {
  alert("Hey");
}

export default function BehaviorTracking() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ban Book</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {/* BehaviorTracking logic Here */}
          <IonList lines="full">
          <IonToolbar>
            <IonTitle>Random filler  text</IonTitle>
          </IonToolbar>
          </IonList>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={handleNewBehaviorClick}>
            <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  }