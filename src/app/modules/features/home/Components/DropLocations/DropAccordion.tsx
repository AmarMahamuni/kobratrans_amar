import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { IonCol, IonRow, IonGrid, IonCard, IonPage, IonTitle, IonToolbar, IonToggle, IonButton, IonHeader, IonItem, IonInput, IonLabel } from '@ionic/react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'; import PhoneIcon from '@material-ui/icons/Phone';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { AddDrop, Addgoods, DropDetails, GoodsDetails } from './types';
import TabPanel from '../../../addingGoods/components/tabs/TabPanel';
import SimpleTabs from '../../../addingGoods/components/tabs/TabPanel';
import './drop.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';


interface Props {
    addDrop: AddDrop;
}
interface Props {
    drops: DropDetails[];
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
const initialGoods: GoodsDetails[] = [

];
export default function update(drop:DropDetails){
console.log(drop);
}

export const DropAccordion: React.FC<Props> = ({ addDrop, drops }) => {

    
    const [d_location, setd_location] = useState('');

    const [d_phone, setd_phone] = useState('');
    const [d_user, setd_user] = useState('');
    const [d_comments, setd_comments] = useState('');
    let [goods, setGoods] = useState(initialGoods);
    const accordionclasses = accordionStyle();
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
    function upDate() {
          console.log("jkd");
    }
    
    function showAdded() {
        setShow(true);
    }
    return (
        <IonLabel>
            <Accordion>
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
  </IonButton>        </IonCol> :
                                    <IonCol size="12" >
                                        <IonButton expand="block" fill="outline" color="dark" shape="round"
                                            type="submit"
                                            onClick={e => {
                                                e.preventDefault();
                                                addDrop(d_user, d_location, d_phone, d_comments, goods);
                                                setd_location('');
                                                setd_comments('');
                                                setd_phone('');
                                                setd_user('');
                                                setGoods(initialGoods);

                                            }}
                                        >
                                            ADD ANOTHER STOP
</IonButton>        </IonCol>}

                            </IonRow>


                            <br></br>
                            <br></br>
                        </IonGrid>

                    </IonGrid>
                </AccordionDetails>
            </Accordion>
        </IonLabel>
    );
};



