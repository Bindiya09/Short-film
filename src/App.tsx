import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ShortFilm from './pages/ShortFilm/ShortFilm';
import More from './pages/More/More';
import Category from './pages/Component/Category.js';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

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
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/more" component={More} exact={true}/>
        <Route path="/shortfilm" component={ShortFilm}/>
        <Route path="/category" component={Category}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
