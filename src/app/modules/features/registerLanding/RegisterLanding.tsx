import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import kobralogo from '../../../assets/icons/kobralogo.png';
import './RegisterLanding.css';
const RegisterLanding: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="hide-scrollbar">
            <div className="bgImg"></div>
            <img className="center-img-align" src={kobralogo} />
                <IonGrid className="fotter">
                    <IonRow>
                        <IonCol size="1"></IonCol>
                        <IonCol>
                            <IonButton shape="round" color="dark" expand="block">LOGIN</IonButton>
                        </IonCol>
                        <IonCol size="1"></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="1"></IonCol>
                        <IonCol>
                            <IonButton shape="round" color="dark" expand="block">SIGNUP</IonButton>
                        </IonCol>
                        <IonCol size="1"></IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default RegisterLanding;
