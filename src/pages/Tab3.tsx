import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { logoJavascript, logoPython, logoReact, codeSlash, codeWorking } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  const languageDefinitions = [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: logoJavascript,
      color: 'warning',
      definition: 'Lenguaje de programación interpretado, orientado a objetos y multiplataforma. Es el lenguaje estándar para desarrollo web frontend, permitiendo crear interfaces interactivas y dinámicas. También se utiliza en el backend mediante Node.js, convirtiéndolo en una solución full-stack.'
    },
    {
      id: 'python',
      name: 'Python',
      icon: logoPython,
      color: 'primary',
      definition: 'Lenguaje de alto nivel, interpretado y de propósito general. Destaca por su sintaxis clara y legible que favorece la productividad del desarrollador. Es muy popular en ciencia de datos, machine learning, inteligencia artificial, automatización y desarrollo web con frameworks como Django y Flask.'
    },
    {
      id: 'java',
      name: 'Java',
      icon: logoReact,
      color: 'danger',
      definition: 'Lenguaje orientado a objetos y compilado a bytecode que se ejecuta en la Java Virtual Machine (JVM). Sigue el principio "Write Once, Run Anywhere", permitiendo que el mismo código funcione en múltiples plataformas. Ampliamente usado en aplicaciones empresariales, sistemas Android y aplicaciones web de gran escala.'
    },
    {
      id: 'csharp',
      name: 'C#',
      icon: codeSlash,
      color: 'tertiary',
      definition: 'Lenguaje moderno y orientado a objetos desarrollado por Microsoft como parte del ecosistema .NET. Se utiliza principalmente para desarrollo de aplicaciones Windows, servicios web, aplicaciones empresariales y desarrollo de videojuegos mediante el motor Unity. Combina la potencia de C++ con la simplicidad de Visual Basic.'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: codeWorking,
      color: 'secondary',
      definition: 'Superset de JavaScript desarrollado por Microsoft que añade tipado estático opcional y características avanzadas de programación orientada a objetos. Mejora significativamente la mantenibilidad y escalabilidad del código en proyectos grandes. Es el lenguaje recomendado para frameworks como React e IONIC, compilándose a JavaScript estándar.'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Definiciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <IonAccordionGroup>
          {languageDefinitions.map((lang) => (
            <IonAccordion key={lang.id} value={lang.id}>
              <IonItem slot="header" color="light">
                <IonIcon icon={lang.icon} slot="start" color={lang.color} />
                <IonLabel>{lang.name}</IonLabel>
              </IonItem>
              
              <div className="ion-padding" slot="content">
                <p>{lang.definition}</p>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;