import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './app/modules/features/login/Login';
import KobraLanch from './app/modules/features/kobraLanch/KobraLanch';
import LangSelect from './app/modules/features/languageSelection/LangSelect';
import RegisterLanding from './app/modules/features/registerLanding/RegisterLanding';
import CompanyRegister from './app/modules/features/register/Components/CompanyRegister/CompanyRegister';
import PrivateRegister from './app/modules/features/register/Components/PrivateRegister/PrivateRegister';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import Home from './app/modules/features/home/Home';


/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './styles/theme/variables.css';
import './styles/theme/custom.css';
import KobraRegister from './app/modules/features/register/Components/KobraRegister/KobraRegister';
import Register from './app/modules/features/register/Register';




const App: React.FC = () => (
  <IonApp>
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={KobraLanch} />
      <Route exact path="/langselect" component={LangSelect} />
      <Route exact path="/registerlanding" component={RegisterLanding} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/companyregister" component={CompanyRegister} />
      <Route exact path="/privateregister" component={PrivateRegister} />
      <Route exact path="/kobraregister" component={KobraRegister} />
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);

export default App;
