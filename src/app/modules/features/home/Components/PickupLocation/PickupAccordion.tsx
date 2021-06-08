import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { IonCol, IonRow, IonGrid, IonCard, IonPage, IonTitle, IonToolbar, IonToggle, IonButton, IonHeader, IonItem, IonInput, IonLabel, IonContent, IonDatetime } from '@ionic/react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { AddPickup, PickupDetails } from './types';
interface Props {
    addPickup: AddPickup;
}
interface Props {
    pickup:PickupDetails;
  }
  
const accordionStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '80%',
        },
        textfields: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(12),
            fontWeight: theme.typography.fontWeightBold,
        },
    }),
);

export const PickupAccordion: React.FC<Props> = ({ addPickup,pickup }) => {
    const [p_location, setp_location] = useState('');
    const [p_phone, setp_phone] = useState('');
    const [p_comments, setp_comments] = useState('');
    const accordionclasses = accordionStyle();
    const [isChecked, setIsChecked] = useState(false);
    const [min_date, setMindate] = useState( new Date().toISOString());
    const [selected_date, setSelected_date] = useState( new Date().toISOString());

    const toggleChange = () => {
        localStorage.setItem("isChecked", new Boolean(isChecked).toString());
        console.log(localStorage.getItem("isChecked"));
        console.log(isChecked)
        setIsChecked(!isChecked)
        console.log(isChecked)
      }

     
    return (
<IonLabel>
      
           <IonRow>
            <IonCol size="" className="ion-text-center m-auto"> Normal  </IonCol>
            <IonCol size="" className="ion-text-center m-auto">         <IonToggle id="IonToggle" checked={isChecked} onClick={() => toggleChange()} ></IonToggle>
</IonCol>
            <IonCol size="" className="ion-text-center m-auto"> Express  </IonCol>            
                </IonRow>
             
         <Accordion expanded={isChecked} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={accordionclasses.heading}>Pick-up Details</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <IonItem>
                                <TextField
                                    id="standard-basic"
                                    label="Pickup Location"
                                    inputProps={{style: {fontSize: 15}}} 
                                    InputLabelProps={{style: {fontSize: 12}}} 
                                    value={p_location}
                                    onChange={e => {
                                        setp_location(e.target.value);
                                    }}
                                    className={accordionclasses.textfields}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <LocationSearchingIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />                        </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonItem>
                                <TextField
                                    id="standard-basic"
                                    label="Receiver Phone Number"
                                    value={p_phone}
                                    onChange={e => {
                                        setp_phone(e.target.value);
                                    }}
                                    inputProps={{style: {fontSize: 15}}} 
                                    InputLabelProps={{style: {fontSize: 12}}} 
                                    className={accordionclasses.textfields}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <PhoneIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />                          </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonItem>
                                <TextField
                                    id="standard-basic"
                                    label="Comments"
                                    value={p_comments}
                                    inputProps={{style: {fontSize: 15}}} 
                                    InputLabelProps={{style: {fontSize: 12}}} 
                                    onChange={e => {
                                        setp_comments(e.target.value);
                                    }}
                                    
                                    className={accordionclasses.textfields}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CommentIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />                         </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center m-auto">
             {isChecked!=true ?
//                <MuiPickersUtilsProvider utils={DateFnsUtils}>
             
//              <KeyboardDateTimePicker 
//      variant="inline"
//      ampm={true}
//      label="Select PickUp Date"
//      value={selectedDate}
//      onChange={handleDateChange} 
//      disablePast
//      hideTabs={true}
//      okLabel
//      showTodayButton={true}
     
//    /></MuiPickersUtilsProvider> 
<IonDatetime displayFormat="DD/MM/YYYY HH:mm"  min= {min_date} placeholder="Select PickUp Date"></IonDatetime>
:null}
   </IonCol>
                    </IonRow>
                    <IonRow>
                       
                    {pickup.p_location=='' ?
                        <IonCol size="12" >
                            <IonButton expand="block" color="dark" shape="round"
                                type="submit"
                                onClick={e => {
                                    e.preventDefault();
                                    addPickup(p_location, p_phone, p_comments);
                                    
                                }}
                            >
                          ADD PICK-UP  
  </IonButton>        </IonCol>:  <IonCol size="12" >
                            <IonButton expand="block" color="dark" shape="round"
                                type="submit"
                                onClick={e => {
                                    e.preventDefault();
                                    addPickup(p_location, p_phone, p_comments);
                                    
                                }}
                            >
                        UPDATE PICK-UP  
  </IonButton>        </IonCol>}
                    </IonRow>
                   
                </IonGrid>

            </AccordionDetails>
        </Accordion>
        </IonLabel>
     );
};



