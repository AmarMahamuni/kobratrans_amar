import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import './Tabs.css';
import { IonButton, IonCol, IonGrid, IonInput, IonLabel, IonRow } from '@ionic/react';
import { AddDrop, Addgoods, GoodsDetails } from '../../../home/Components/DropLocations/types';
import { MainGoods } from './types.goods';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
interface Props{
    goods:GoodsDetails[];
}
interface Props {
  addgoods: GoodsDetails;
}
interface Props {
  addDrop: AddDrop;
}

let maingoods:MainGoods[]=[
  {
    main_good_name:"Pallets"
  },
  {
    main_good_name:"Long Goods"
  },
  {
    main_good_name:"House Shifting"

  }
]
// let sub_goods:MainGoods[]=[
//   {
//     main_good:plalets,
//     sub_good_name:"pallets1"

//   },
//   {
//     main_good:"Pallets"
//     sub_good_name:"1 Bed Room"

//   },
//   {
//     main_good:"House Shifting",
//     sub_good_name:"1 Bed Room",
    
//   }
// ]

 function TabPanel(props: TabPanelProps ) {
  

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  text:{
    
  }
}));

export default function SimpleTabs(props:{addgoods: Addgoods}) {
  function selectedMainGood(goodsname:string){
    console.log(goodsname);
    setd_main_goods(goodsname);
    setValue(1);
    }

    function selectedSubGood(subgoodsname:string){
      console.log(subgoodsname);
      setd_sub_goods(subgoodsname)
      setValue(2);
      }
  const classes = useStyles();
  let [value, setValue] = React.useState(0);
  const [d_main_goods, setd_main_goods] = useState('');
  const [d_sub_goods, setd_sub_goods] = useState('');
  const [d_goods_weight, setd_goods_weight] = useState('');
  const [d_goods_qnty, setd_goods_qnty] = useState('');
  const [d_phone, setd_phone] = useState('');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function Show1(){
    console.log(d_goods_weight);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className="font-70p" label="Goods"  {...a11yProps(0)} />
          <Tab className="font-70p" label="Sub Goods"  {...a11yProps(1)} />
          <Tab className="font-70p" label="Weight"  {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

      {maingoods.map(maingood => (
          <IonGrid>

<IonRow  className="font-80p" onClick={() => selectedMainGood(maingood.main_good_name)}>
{maingood.main_good_name}
</IonRow>
 </IonGrid>
))}
     
 
      
 
      </TabPanel>
      <TabPanel value={value} index={1}>
      <IonGrid  className="font-80p">
      <IonRow>
          <IonCol  onClick={() => selectedSubGood(" 1/1 EUR PLL, 120X80 cm")}>
          1/1 EUR PLL, 120X80 cm
          </IonCol>
      </IonRow>
      <IonRow>
          <IonCol onClick={() => selectedSubGood("1/2 EUR PLL, 60X80 cm")}>  
          1/2 EUR PLL, 60X80 cm 
          </IonCol>
      </IonRow>
      <IonRow>
          <IonCol  onClick={() => selectedSubGood("1/4 EUR PLL, 30X40 cm")}>
          1/4 EUR PLL, 30X40 cm
          </IonCol>
      </IonRow>
      <IonRow>
          <IonCol  onClick={() => selectedSubGood("PL2 180X80 cm")}>
          PL2 180X80 cm
          </IonCol>
      </IonRow>
      <IonRow>
          <IonCol  onClick={() => selectedSubGood("2PLL 240X80 cm")}>
          2PLL 240X80 cm
          </IonCol>
      </IonRow>
      <IonRow>
          <IonCol  onClick={() => selectedSubGood("IPL 120X120 cm (Industrial Pallet)")}>
          IPL 120X120 cm (Industrial Pallet)
          </IonCol>
      </IonRow>
  </IonGrid>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
      <IonRow>
                        <IonCol size="12">
                            
                                <TextField 
                                   type="number"
                                    id="standard-basic"
                                    label="Weight in Kg."
                                    value={d_goods_weight}
                                    className="goodsText"
                                    onChange={e => {
                                        setd_goods_weight(e.target.value);
                                    }}
                                    inputProps={{style: {fontSize: 15}}} 
                                    InputLabelProps={{style: {fontSize: 12}}}                                    
                                     name="d_goods_weight"                                  
                                />                        
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            
                                <TextField
                                    id="standard-basic"
                                    label="Quntities"
                                    type="number"
                                    value={d_goods_qnty}
                                    className="goodsText"
                                    onChange={e => {
                                        setd_goods_qnty(e.target.value);
                                    }}
                                    name="d_goods_qnty" 
                                    inputProps={{style: {fontSize: 15}}} 
                                    InputLabelProps={{style: {fontSize: 12}}}                                 
                                />                        
                        </IonCol>
                    </IonRow>
      <IonRow>
          <IonCol>
      
 
     <IonButton expand="block" className="ion-text-center m-auto goodsBtn" color="dark" shape="round" fill="outline" 
                                type="submit"
                                onClick={e => {
                                    e.preventDefault();
                                    props.addgoods(d_main_goods,d_sub_goods,d_goods_weight,d_goods_qnty);
                                    setValue(0);
                                  setd_goods_qnty('');
                                  setd_goods_weight('');
                                  setd_main_goods('');
                                  setd_sub_goods('')
                                }}>Add Goods</IonButton>
                            

          </IonCol>
      </IonRow>
      </TabPanel>

    </div>
  );
}


