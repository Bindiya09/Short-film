import React,{useState, useEffect} from 'react';
import './Category.css';
import {
    IonCard, IonContent, IonCardHeader, IonCardTitle, IonIcon,
    IonTabButton, IonLabel, IonFab, IonFabButton, IonTabs, IonTabBar,IonRouterOutlet,IonSlides,IonSlide, IonButton
} from '@ionic/react';
import './Category.css';
import More from '../More/More';
import ShortFilm from '../ShortFilm/ShortFilm';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Category=()=>{
const [items,setItems]=useState([])
const [loaded,setLoaded]=useState(Boolean)

// const data =[
//   {id:12},                         
//   {id:13},                         
//   {id:14},                         
//   {id:15},                         
// ]


useEffect(()=>{
  fetch('https://shortfilmdiary.com/wp-json/wp/v2/categories')
    .then(res=>res.json())
    .then(json=>{
      setItems(json);
      setLoaded(true)
      console.log(items)
    });
},[])


  if(!loaded){
    return <div>Loading...</div>
  }
  else{
  return (
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
        <IonCard className="body" color="light">
                                   
                                    
                               
    {/* <IonCard className="category"> */}
     {/* <div className="list"> */}
       
       {/* <ul> */}
         {/* {items.map(item =>(
           <li key={item.id}>
             {item.name}
           </li>
         ))}; */}
         <div className="row">
           <div className="col-6">
         {
           items.map(item=>(
            //  <IonCard className="catg_list">
             <li  key={item.id}>{item.name}</li>
            //  </IonCard>
           )
           )
         }
         </div>
         </div>
       {/* </ul> */}
       
     {/* </div> */}
     </IonCard>
     {/* </IonCard> */}
     <IonTabs>
                                <IonRouterOutlet>
                                    <Route path="/" component={ShortFilm} exact />
                                    <Route path="/more" component={More} exact />
                                </IonRouterOutlet>

                                <IonTabBar slot="bottom" color="dark-tint">
                                    <IonTabButton tab="home">
                                        <IonIcon name="home"/>
                                        <IonLabel>Home</IonLabel>
                                    </IonTabButton>

                                    <IonTabButton tab="messages">
                                        <IonIcon name="chatboxes" className="category_icon"/>
                                        <IonLabel className="category_label">Categories</IonLabel>
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
  );
}
}


// class Category extends Component{
//   constructor(props:any){
//     super(props);
//     this.state={
//       items:[],
//       isLoaded:false,
//     }
//   }

// componentDidMount(){
//   fetch('https://www.google.com/url?q=https://shortfilmdiary.com/wp-json/wp/v2/categories&sa=D&source=hangouts&ust=1580533419264000&usg=AFQjCNHYpHi5djQFE2ctumzM46wm3SyXPg')
//   .then(res=>res.json())
//   .then(json=>{
//     this.setState({
//       isLoaded:true,
//       items:json,
//     })
//   });
// }

// render() {
//   const { isLoaded,items } = this.state;

//   if(!isLoaded){
//     return <div>Loading...</div>
//   }
//   else{
//   return (
//      <div className="list">
//        <ul>
//          {items.map(item =>(
//            <li key={item.id}>
//              {item.name}
//            </li>
//          ))};
//        </ul>
//      </div>
//   );
// }
// }
// }

export default Category;