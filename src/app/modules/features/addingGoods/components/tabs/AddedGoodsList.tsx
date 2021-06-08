import { IonCol, IonLabel, IonRow } from '@ionic/react';
import React from 'react';
import { GoodsDetails } from '../../../home/Components/DropLocations/types';
import { AddedGoodsListItem } from './AddedGoodsListItems';


import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface Props {
    goods: GoodsDetails[];

  }

export const AddedGoodsList: React.FC<Props> = ({ goods }) => {
    function deleteGoodsDetails(sub_goods:any){
console.log(sub_goods);


    }
  return (
    <IonLabel>
    <IonRow>
    <IonCol className="font-70p" size="6.2">Goods Name</IonCol>
    <IonCol className="font-70p" size="2.3">Weight</IonCol>
    <IonCol className="font-70p" size="2.5">Quantity</IonCol>
    <IonCol className="font-70p" size="1"></IonCol>
    </IonRow>
      {goods.map(goods => (
        // <AddedGoodsListItem key={goods.sub_goods} goods={goods} />
        <IonRow>
<IonCol size="7" className="font-70p">{goods.sub_goods}</IonCol>
<IonCol size="2" className="font-70p">{goods.goods_weight} </IonCol>
<IonCol size="2" className="font-70p">{goods.goods_quantity} </IonCol>
<IonCol size="1" className="font-70p"><HighlightOffIcon  onClick={()=>deleteGoodsDetails(goods.sub_goods)}/> </IonCol>

</IonRow>
      ))}
   </IonLabel>
  );
};