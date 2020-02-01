import React, { Component } from 'react'
import {
    IonCard, IonContent, IonCardHeader, IonCardTitle, IonIcon,
    IonTabButton, IonLabel, IonFab, IonFabButton, IonTabs, IonTabBar,IonRouterOutlet,IonSlides,IonSlide, IonButton
} from '@ionic/react';
import './ShortFilm.css';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import More from '../More/More';

const slideOpts = {
    initialSlide: 1,
    speed: 800
  };

class ShortFilm extends Component {
    render() {
        return (
            <IonReactRouter>
                <IonContent color="dark" no-padding>
                        <IonCard className="card_short">
                            <IonCardHeader className="header">
                                <div className="left-icon">
                                    <IonIcon name="apps" color="light"></IonIcon></div>
                                <div className="title">
                                    <IonCardTitle className="card-title">
                                        Find Match</IonCardTitle></div>
                                <div className="right-icon">
                                    <IonIcon name="funnel" color="light"></IonIcon></div>
                            </IonCardHeader>
                            <div className="ion-body">

                            <IonSlides pager={true} options={slideOpts}>
                                <IonSlide>
                                <IonCard className="body" color="light">
                                    <IonCard className="body-img">
                                    </IonCard>
                                    <h4><b>Herman West .20</b></h4>
                                    <p id="text"><div className="description">Versatile</div>
                                    <div className="place">Seattle,USA</div></p>
                                    <IonFab vertical="center" horizontal="end" slot="fixed">
                                        <IonFabButton className="fab">
                                            <IonIcon name="play" />
                                        </IonFabButton>
                                    </IonFab>
                                </IonCard>
</IonSlide>
<IonSlide>
                                <IonCard className="body" color="light" href="/more">
                                    <IonCard className="body-img1">
                                    </IonCard>
                                    <h4><b>Herman West .20</b></h4>
                                    <p id="text"><div className="description">Versatile</div>
                                    <div className="place">Seattle,USA</div></p>

                                
                                    <IonFab className="ion-fab" vertical="center" horizontal="end" slot="fixed">
                                        <IonFabButton className="fab">
                                            <IonIcon name="play" />
                                        </IonFabButton>
                                    </IonFab>
                                </IonCard>
</IonSlide>
<IonSlide>
                                <IonCard className="body" color="light">
                                    <IonCard className="body-img2">
                                    </IonCard>
                                    <h4><b>Herman West .20</b></h4>
                                    <p id="text"><div className="description">Versatile</div>
                                    <div className="place">Seattle,USA</div></p>
                                    <IonFab vertical="center" horizontal="end" slot="fixed">
                                        <IonFabButton className="fab">
                                            <IonIcon name="play" />
                                        </IonFabButton>
                                    </IonFab>
                                </IonCard>
</IonSlide>
</IonSlides>
                               
                            </div>
                            {/* <IonFooter className="footer">
                            <div className="tabs">
                                <div className="home">
                                    <IonTabButton tab="home">
                                        <IonIcon name="home"className="home_icon"/>
                                        <IonLabel className="home_tab">Home</IonLabel>
                                    </IonTabButton>
                                </div>
                                <div className="message">
                                    <IonTabButton tab="messages">
                                        <IonIcon name="chatboxes" color="light" />
                                        <IonLabel className="message_tab">Categories</IonLabel>
                                    </IonTabButton>
                                </div>
                                <div className="notify">
                                    <IonTabButton tab="Notifications">
                                        <IonIcon name="notifications" color="light" />
                                        <IonLabel className="notify_tab">Notifications</IonLabel>
                                    </IonTabButton>
                                </div>
                                <div className="profile">
                                    <IonTabButton tab="profile">
                                        <IonIcon name="contact" color="light" />
                                        <IonLabel className="profile_tab">Profiles</IonLabel>
                                    </IonTabButton>
                                </div>
                            </div>
                        </IonFooter> */}
                            <IonTabs>
                                <IonRouterOutlet>
                                    <Route path="/" component={ShortFilm} exact />
                                    <Route path="/more" component={More} exact />
                                </IonRouterOutlet>

                                <IonTabBar slot="bottom" color="dark-tint">
                                    <IonTabButton tab="home">
                                        <IonIcon name="home" className="home_icon"/>
                                        <IonLabel className="home_tab">Home</IonLabel>
                                    </IonTabButton>

                                    <IonTabButton tab="messages" color="light">
                                        <IonIcon name="chatboxes" />
                                        <IonLabel>Categories</IonLabel>
                                    </IonTabButton>


                                    <IonTabButton tab="profile">
                                        <IonIcon name="contact"/>
                                        <IonLabel>Profiles</IonLabel>
                                    </IonTabButton>
                                    
                                    <IonTabButton tab="Notifications">
                                        <IonIcon name="notifications" />
                                        <IonLabel>Notifications</IonLabel>
                                    </IonTabButton>

                                </IonTabBar>
                            </IonTabs>
                        </IonCard>   
                                      
                </IonContent>
            </IonReactRouter>
        );
    }
}

export default ShortFilm;