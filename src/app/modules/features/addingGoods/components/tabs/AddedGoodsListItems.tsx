import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
// import AdjustIcon from '@material-ui/icons/Adjust';
import { GoodsDetails } from '../../../home/Components/DropLocations/types';


      interface Props {
        goods: GoodsDetails;

      }

      export const AddedGoodsListItem: React.FC<Props> = ({ goods }) => {
   
  return (

<IonLabel>
<IonRow>
<IonCol size="7" className="font-70p">{goods.sub_goods}</IonCol>
<IonCol size="3" className="font-70p">{goods.goods_weight} </IonCol>
<IonCol size="2" className="font-70p">{goods.goods_quantity} </IonCol>
</IonRow>

</IonLabel>
        
      
    


    
  );
};

export default AddedGoodsListItem;
