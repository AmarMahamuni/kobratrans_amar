import { IonCard, IonCol, IonContent, IonHeader,IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { PickupDetails } from './types';
import '../PickupLocation/pickUp.css'
import React from 'react';
import AdjustIcon from '@material-ui/icons/Adjust';


      interface Props {
        pickup: PickupDetails;

      }

      export const PickupListItems: React.FC<Props> = ({ pickup }) => {
  
     
  return (
<IonRow>
<AdjustIcon></AdjustIcon>
        <IonCard class="pickupCard">
        {pickup.p_location}
        </IonCard>
        </IonRow>
    
  );
};

export default PickupListItems;
