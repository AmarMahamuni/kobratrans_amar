import { IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonNote } from '@ionic/react';
import { ReactComponent as BackArrowLogo } from "../../../assets/icons/backarrow.svg";
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
const Navbar: React.FC = () => {
    const history = useHistory();
    const createOrder = () => {
        //history.push('/addgoods');
        history.goBack();
    }
    return (
                <IonRow className="dark-theme p-fixed w-100 z-100">
                    <IonCol><IonRow className="p-10" onClick={() => createOrder()} ><IonCol size="1.5" className="p-0 mt-5"><ArrowBackIosIcon/></IonCol><IonCol className="m-auto font-18 pl-0"><IonNote color="blue">Back</IonNote></IonCol></IonRow></IonCol>
                    <IonCol size="4"></IonCol>
                </IonRow>
                
    );
};

export default Navbar;