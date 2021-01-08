import React, { createContext, useEffect } from 'react';
import firebase from '../../FirebaseConfig/firebase';


export const FirebaseCloudMessaging = createContext();

// const messaging = firebase.messaging();


export const FirebaseCloudMessagingProv=(props)=>{

    useEffect(()=>{
        console.log("Messegaing....***")
        const messaging = firebase.messaging();
        messaging.requestPermission().then(()=>{
           
            return messaging.getToken();
           

        }).then((data)=>{
            //alert(0)
            console.warn("token", data)
            console.log("Messegaing....***")
            console.log("Messegaing",messaging.getToken())
        })
        
        .catch((e)=>{
console.log(e)
        })

    },[])

    return(
        <FirebaseCloudMessaging.Provider value={{}}>
            {props.children}
        </FirebaseCloudMessaging.Provider>
    )
};