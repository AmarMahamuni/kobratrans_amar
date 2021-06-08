import { IonLabel } from '@ionic/react';
import React from 'react';
import{ PickupListItems } from './PickupListItems';
import { PickupDetails } from './types';

interface Props {
  pickup: PickupDetails[];
}

export const PickupList: React.FC<Props> = ({ pickup }) => {
  return (
    <IonLabel>
      {pickup.map(pickup => (
        <PickupListItems key={pickup.p_location} pickup={pickup} />
      ))}
 </IonLabel>
  );
};