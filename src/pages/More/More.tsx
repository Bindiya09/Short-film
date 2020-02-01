import React, { Component } from 'react';
import {
    IonCard, IonContent,IonIcon
} from '@ionic/react';
import './More.css';

class More extends Component {
    render() {
        return (
           
            <IonContent no-padding>   
            <IonCard className="card" color="dark" no-padding>
                <div className="img-container">
                <div className="text">
                     <h3><b id="name">Herman West  .20</b><IonIcon name="ios-more" className="more" color="light"></IonIcon></h3>
                     <p id="location"><div className="description">Versatile</div>   Seattle,USA</p>
                     </div>
                </div>
                <div className="bottom">
                <h2>About</h2>
                <p id="info">My name is Mary Burgess and I enjoy meeting new people and finding ways to help them have an uplifting
                    experience.I enjoy reading and the knowledge ...
                </p>
                <p>Show more</p>
                </div>
            </IonCard>
            </IonContent>

        );
    }
}

export default More;