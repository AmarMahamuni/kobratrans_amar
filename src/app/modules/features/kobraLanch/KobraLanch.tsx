import { IonContent, IonPage} from '@ionic/react';
import kobralogo from '../../../assets/icons/kobralogo.png';

import './KobraLanch.css';

const KobraLanch: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark" className="hide-scrollbar">
        {/* </kobralogo> */}
        <img className="center-img" src={kobralogo} />
      </IonContent>
    </IonPage>
  );
};

export default KobraLanch;
