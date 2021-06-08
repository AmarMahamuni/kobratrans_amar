import { IonCard, IonCol, IonLabel, IonRow } from '@ionic/react';
import React from 'react';
import { DropAccordion } from './DropAccordion';
import DropListItems from './DropListItems';
import { DropDetails } from './types';
import AdjustIcon from '@material-ui/icons/Adjust';

interface Props {
  drops: DropDetails[];
}


export const DropList: React.FC<Props> = ({ drops }) => {
  function deleteDropDetails(d_location:any){

    console.log("d" +d_location)
    console.log("l" +drops.length)
    console.log(drops)
    drops = drops.filter(drop => drop.d_location !== d_location);
    console.log(drops)
    console.log("l" +drops.length)
  }
  
  return (
    <IonLabel id="root">
      {drops.map(drop => (
          //  <IonLabel onClick={()=>deleteDropDetails(drop.d_location)}>
        // {/* <DropListItems key={drop.d_location} drop={drop}  /> */} 
<IonCard onClick={()=>deleteDropDetails(drop.d_location)} class="pickupCard">
<IonRow>
<IonCol>{drop.d_user}</IonCol>
</IonRow>
<IonRow>
<IonCol>{drop.d_location} </IonCol>
</IonRow>
<IonRow>
</IonRow>
</IonCard>

  
      ))}
   </IonLabel>
  );
};