import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonListHeader
} from '@ionic/react';
import { logoJavascript, logoPython, logoReact, codeSlash, codeWorking } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  const languages = [
    {
      name: 'JavaScript',
      description: 'Lenguaje de scripting para web',
      icon: logoJavascript,
      color: 'warning'
    },
    {
      name: 'Python',
      description: 'Lenguaje de propósito general',
      icon: logoPython,
      color: 'primary'
    },
    {
      name: 'Java',
      description: 'Lenguaje orientado a objetos',
      icon: logoReact,
      color: 'danger'
    },
    {
      name: 'C#',
      description: 'Lenguaje de Microsoft .NET',
      icon: codeSlash,
      color: 'tertiary'
    },
    {
      name: 'TypeScript',
      description: 'JavaScript con tipos estáticos',
      icon: codeWorking,
      color: 'secondary'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Lenguajes de Programación</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Top 5 Lenguajes</IonLabel>
          </IonListHeader>

          {languages.map((lang, index) => (
            <IonItem key={index}>
              <IonIcon icon={lang.icon} slot="start" color={lang.color} />
              <IonLabel>
                <h2>{lang.name}</h2>
                <p>{lang.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;