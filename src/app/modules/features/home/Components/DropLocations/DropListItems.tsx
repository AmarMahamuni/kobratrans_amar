import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { DropDetails } from './types';
import AdjustIcon from '@material-ui/icons/Adjust';
import { useRef } from 'react';
import { DropAccordion } from './DropAccordion';



// import { default as upDtae } from './DropAccordion;


      interface Props {
        drop: DropDetails;

      }


      export const DropListItems: React.FC<Props> = ({ drop, }) => {
       function showDetails(){
        
        }
  return (

<IonRow>
    <AdjustIcon></AdjustIcon>
<IonCard onClick={()=>showDetails()} class="pickupCard">
<IonRow>
<IonCol>{drop.d_user}</IonCol>
</IonRow>
<IonRow>
<IonCol>{drop.d_location} </IonCol>
</IonRow>
<IonRow>
</IonRow>
</IonCard>
</IonRow>
  
  );
};

export default DropListItems;


