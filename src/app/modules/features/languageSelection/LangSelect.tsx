import { IonCol, IonContent, IonPage, IonRow, IonText } from '@ionic/react';
import Navbar from '../../shared/navbar/Narbar';
import './LangSelect.css';

const LangSelect: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="hide-scrollbar">
        {/* <Navbar/> */}

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol>
            <p></p>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol>
            <IonText className="bold font-25">
              Choose language
            </IonText>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol>
            <p></p>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol className="vh-7 p-20 pl-5">
            <IonText className="font-16">
              Danish
            </IonText>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol className="vh-7 p-20 pl-5">
            <IonText className="font-16">
              Chinese
            </IonText>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol className="vh-7 p-20 pl-5">
            <IonText className="font-16">
              English
            </IonText>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="0.5"></IonCol>
          <IonCol className="vh-7 p-20 pl-5">
            <IonText className="font-16">
              Korean
            </IonText>
          </IonCol>
          <IonCol size="0.5"></IonCol>
        </IonRow>

      </IonContent>
    </IonPage>
  );
};

export default LangSelect;
