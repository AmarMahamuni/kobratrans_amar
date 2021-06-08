import { IonCol, IonRow, IonGrid, IonCard, IonPage, IonTitle, IonToolbar, IonToggle, IonButton, IonHeader, IonItem, IonInput, IonLabel, IonContent, useIonAlert, IonDatetime } from '@ionic/react';
import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AdjustIcon from '@material-ui/icons/Adjust';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { InputAdornment } from "@material-ui/core";
import { AddPickup, PickupDetails } from './Components/PickupLocation/types';
import { AddDrop, Addgoods, DropDetails, GoodsDetails } from './Components/DropLocations/types';
import SimpleTabs from '../addingGoods/components/tabs/TabPanel';
import Navbar from '../../shared/navbar/Narbar';

import '../../../../styles/theme/custom.css';
import './Home.css';

/////pickup
const initialPickup: PickupDetails = {
  p_location: '',
  p_comments: '',
  p_phone: ''
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

////pickup end

///drop start
const initialDrops: DropDetails[] = [
];

interface Props {
  addDrop: AddDrop;
}
interface Props {
  drops: DropDetails[];
}
const initialGoods: GoodsDetails[] = [
];
const initialDropToDelete: DropDetails={
  d_user: '',
  d_location: '',
  d_phone: '',
  d_comments: '',
  d_goods: initialGoods
}
//drop end
const Home: React.FC = () => {

  /////////pickup Start
  const [p_location, setp_location] = useState('');
  const [p_phone, setp_phone] = useState('');
  const [p_comments, setp_comments] = useState('');
  const accordionclasses = accordionStyle();
  const [d_address_type, setD_address_type] = useState('new');
  const [isChecked, setIsChecked] = useState(false);
  const [min_date, setMindate] = useState(new Date().toISOString());
  const [selected_date, setSelected_date] = useState(new Date().toISOString());
  const [pickup, setPickup] = useState(initialPickup);

  const toggleChange = () => {
    localStorage.setItem("isChecked", new Boolean(isChecked).toString());
    console.log(localStorage.getItem("isChecked"));
    console.log(isChecked)
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  ////////////////pickup end

  /////drop start

  const [d_location, setd_location] = useState('');
  const [d_phone, setd_phone] = useState('');
  const [d_user, setd_user] = useState('');
  const [d_comments, setd_comments] = useState('');
  let [goods, setGoods] = useState(initialGoods);
  const [show, setShow] = useState(true);
  const addGoods: Addgoods = (main_goods: string, sub_goods: string, goods_weight: string, goods_quantity: string) => {
    const newgoods = { main_goods, sub_goods, goods_weight, goods_quantity };
    console.log("cc");
    console.log(newgoods)
    setGoods([...goods, newgoods]);

  };
  function deleteGoodsDetails(sub_goods: any) {
    console.log(sub_goods);
    goods = goods.filter(good => good.sub_goods !== sub_goods);
    setGoods(goods);
  }
 

  ///drop end
 
  const [isDropType, setisDropType] = useState(0);
  const [present] = useIonAlert();
  let [drops, setDrop] = useState(initialDrops); 
  let [drop_to_delete, setDropToDelete] = useState<DropDetails>(initialDropToDelete);
  const [dropsCount, setdropsCount] = useState(Boolean);
  const addDrop: AddDrop = (d_user: string, d_location: string, d_phone: string, d_comments: string, d_goods: GoodsDetails[]) => {
    const newDrop = { d_user, d_location, d_phone, d_comments, d_goods };
    setDrop([...drops, newDrop]);
    setisDropType(0);

  };
  const [expanded, setExpanded] = React.useState<string | true>(true);
  const handleChange = (panel: string) => ( isExpanded: boolean) => {
   console.log("cc");
    setExpanded(isExpanded ? panel : true);
  };


  function deleteDropDetails(droptoselete: DropDetails) {
    drops = drops.filter(drop => drop !== droptoselete);
    setDrop(drops);
  }
  const addPickup: AddPickup = (p_location: string, p_phone: string, p_comments: string) => {
    const newPickup = { p_location, p_phone, p_comments };
    setPickup(newPickup);
    console.log(localStorage.getItem("dropcounts"))
  };

  function clearAll() {
    setDrop(initialDrops);
    setPickup(initialPickup);
  }

  function updateDrop(drop: DropDetails) {
    setd_user(drop.d_user)
    setd_phone(drop.d_phone);
    setd_location(drop.d_location);
    setd_comments(drop.d_comments);
    setGoods(drop.d_goods);
    setisDropType(1);
    setDropToDelete(drop);
    console.log("1")
    handleChange("panel1");
    console.log("2")

  }

function updateBtn()
{
  addDrop(d_user, d_location, d_phone, d_comments, goods);
  setd_location('');
  setd_user('');
  setd_comments('');
  setd_phone('');
  setd_user('');
  setGoods(initialGoods);
}

  return (
    <IonContent className="mb-15p">
      <Navbar> </Navbar>
      <IonGrid >

        {/* PickUP */}
        <IonLabel>
          <IonRow>
            <IonCol size="" className="ion-text-center m-auto"> Normal  </IonCol>
            <IonCol size="" className="ion-text-center m-auto">  <IonToggle id="IonToggle" checked={isChecked} onClick={() => toggleChange()} ></IonToggle>
            </IonCol>
            <IonCol size="" className="ion-text-center m-auto"> Express  </IonCol>
          </IonRow>

          <Accordion defaultExpanded >
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
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
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
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
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
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
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
                    {isChecked != true ?
                      <IonDatetime displayFormat="DD/MM/YYYY HH:mm" min={min_date} placeholder="Select PickUp Date"></IonDatetime>
                      : null}
                  </IonCol>
                </IonRow>
                <IonRow>
                  {pickup.p_location == '' ?
                    <IonCol size="12" >
                      <IonButton expand="block" color="dark" shape="round"
                        type="submit" className="stopBtn" fill="outline"
                        onClick={e => {
                          e.preventDefault();
                          addPickup(p_location, p_phone, p_comments);
                        }}
                      >
                       ADD PICK-UP
  </IonButton>        </IonCol> : <IonCol size="12" >
                      <IonButton expand="block" color="dark" className="stopBtn" shape="round" fill="outline"
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

        {/* Pickup End */}
        {/* <PickupAccordion addPickup={addPickup} pickup={pickup}></PickupAccordion> */}
        <IonRow>
        </IonRow>
        <IonRow>
          <IonCol size="12">
          </IonCol>
        </IonRow>

        {/* Drop Start */}

        <IonLabel>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >

              <Typography className={accordionclasses.heading}>Drop Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonItem>
                      <TextField
                        id="standard-basic"
                        label="Company  OR Receiver Name "
                        name="drop_user"
                        value={d_user}
                        onChange={e => {
                          setd_user(e.target.value);
                        }}
                        className={accordionclasses.textfields}
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <PermIdentityIcon />
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
                        label="Drop Location"
                        name="drop_location"
                        value={d_location}
                        onChange={e => {
                          setd_location(e.target.value);
                        }}
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
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
                        value={d_phone}
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        onChange={e => {
                          setd_phone(e.target.value);
                        }}
                        name="drop_pnumber"
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
                        value={d_comments}
                        inputProps={{ style: { fontSize: 15 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        onChange={e => {
                          setd_comments(e.target.value);
                        }}
                        name="drop_comments"
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
                  <IonCol>
                    <SimpleTabs addgoods={addGoods}></SimpleTabs>
                  </IonCol>
                </IonRow>
                <IonGrid>

                  {goods.length != 0 ?
                    <IonLabel>
                      <IonRow>
                        <IonCol className="font-70" >

                          Added Goods
                    </IonCol>
                      </IonRow>
                      {/* <AddedGoodsList goods={goods} /> */}
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
                            <IonCol size="1" className="font-70p"><HighlightOffIcon onClick={() => deleteGoodsDetails(goods.sub_goods)} /> </IonCol>
                          </IonRow>
                        ))}
                      </IonLabel>
                    </IonLabel>
                    : null}
                  <br></br>
                  <IonRow>
                    {drops.length == 0 ?
                      <IonCol size="12" >
                        <IonButton fill="outline" expand="block" color="dark" shape="round" className="stopBtn"
                          type="submit"
                          onClick={e => {
                            e.preventDefault();
                            addDrop(d_user, d_location, d_phone, d_comments, goods);
                            setd_location('');
                            setd_user('');
                            setd_comments('');
                            setd_phone('');
                            setd_user('');
                            setGoods(initialGoods);
                          }}
                        >
                          ADD STOP
  </IonButton>        </IonCol>
  : null}
  </IonRow>
  <IonRow>
 
                    {drops.length !=0 && isDropType==0  ?
                      <IonCol size="12" >
                        <IonButton fill="outline" expand="block" color="dark" shape="round" className="stopBtn"
                          type="submit"
                          onClick={e => {
                            e.preventDefault();
                            addDrop(d_user, d_location, d_phone, d_comments, goods);
                            setd_location('');
                            setd_user('');
                            setd_comments('');
                            setd_phone('');
                            setd_user('');
                            setGoods(initialGoods);
                          }}
                        >
                          ADD ANOTHER STOP
  </IonButton>        </IonCol>
  : null}
  </IonRow>
  <IonRow>
                    {drops.length != 0 && isDropType==1 ?
                      <IonCol size="12" >
                        <IonButton fill="outline" expand="block" color="dark" shape="round" className="stopBtn"
                          type="submit"
                          onClick={e => {
                            e.preventDefault();
                           updateBtn();
                          }}
                        >
                          UPDATE STOP
  </IonButton>        </IonCol>
  :  null}
  </IonRow>
                  <br></br>
                  <br></br>
                </IonGrid>

              </IonGrid>
            </AccordionDetails>
          </Accordion>
        </IonLabel>

        {/* Drop End */}
        {/* <DropAccordion addDrop={addDrop} drops={drops} />  */}
        <IonRow class="mt-ml-5" className="font-75p"> {pickup.p_location != '' ? <IonCol size="9">Pick-Up Location</IonCol>
          : <IonCol size="9"></IonCol>}
          {/* <IonCol size="3" onClick={clearAll} >Clear All</IonCol>  */}
          {pickup.p_location != '' || drops.length != 0 ?

            <IonCol size="3" onClick={() =>
              present({
                header: 'Clear All',
                message: 'You wil loss all the entered details is it okay?',
                buttons: [
                  'Cancel',
                  { text: 'Ok', handler: (d) => clearAll() },
                ],
                onDidDismiss: (e) => console.log('did dismiss'),
              })
            } >Clear All</IonCol>

            : null}
        </IonRow>
        {pickup.p_location != '' ?
          <IonRow>
            <IonCol size="1">
              <AdjustIcon></AdjustIcon>
            </IonCol>
            <IonCol size="9.5">
              <IonCard class="pickupCard">

                <IonRow>
                  {pickup.p_location}
                </IonRow>
              </IonCard>
            </IonCol>
            <IonCol size="1.5">
            </IonCol>
          </IonRow> : null}

        {drops.length != 0 ?
          <IonRow  className="font-75p">Drop Location</IonRow>
          : null}
        {/* <DropList drops={drops} /> */}

        <IonLabel >
          {drops.map(drop => (
            //  <IonLabel onClick={()=>deleteDropDetails(drop.d_location)}>
            // {/* <DropListItems key={drop.d_location} drop={drop}  /> */} 
            <IonRow>
              <IonCol size="1">
                <IonButton className="stopNoBtn" color="dark">{drops.indexOf(drop)+1}</IonButton>     
              </IonCol>
              <IonCol size="9.5">
                <IonCard class="pickupCard" onClick={() => updateDrop(drop)}>
                  <IonRow>
                    {drop.d_user}
                  </IonRow>
                  <IonRow>
                    {drop.d_location}
                  </IonRow>
                </IonCard>
              </IonCol>
              <IonCol size="1.5">
                <HighlightOffIcon onClick={() =>
                  present({
                    header: 'Clear Stop',
                    message: 'You wil loss all the goods added and this stop details is it okay?',
                    buttons: [
                      'Cancel',
                      { text: 'Ok', handler: (d) => deleteDropDetails(drop) },
                    ],
                    onDidDismiss: (e) => console.log('did dismiss'),
                  })
                } />
              </IonCol>
            </IonRow>

          ))}
        </IonLabel>
        <IonRow ><IonCol></IonCol></IonRow>
        <IonRow ><IonCol></IonCol></IonRow>
        <IonRow ><IonCol></IonCol></IonRow>
        <IonRow ><IonCol></IonCol></IonRow>

        <IonRow >
          <IonCol size="12" >
            <IonButton className="footerAdd"  expand="block" shape="round" color="dark"> CREATE ORDER</IonButton>
          </IonCol>
        </IonRow >
      </IonGrid>

    </IonContent>
  );
};

export default Home;
