import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const teamInfo = {
    carrera: 'Ingeniería de Software',
    universidad: 'Universidad Abierta Para Adultos (UAPA)'
  };

  const teamMembers = [
    {
      nombre: 'Eliana Lamarche',
      matricula: '100052272',
      rol: 'Coordinadora',
      icon: '👑',
      color: 'danger'
    },
    {
      nombre: 'Ricardo Guzmán',
      matricula: '100066678',
      rol: 'Investigador',
      icon: '🔬',
      color: 'primary'
    },
    {
      nombre: 'Miguel Ángel Paulino Peña',
      matricula: '100053981',
      rol: 'Diseñador',
      icon: '🎨',
      color: 'warning'
    },
    {
      nombre: 'Fabio Muñoz Beriguete',
      matricula: '100069637',
      rol: 'Editor',
      icon: '✍️',
      color: 'success'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="futuristic-title">
            <span className="terminal-symbol">&gt;</span> INFORMACIÓN DEL GRUPO
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        {/* Información General del Grupo */}
        <IonCard className="group-info-card">
          <IonCardHeader>
            <IonCardTitle className="card-title-futuristic">
              <span className="terminal-symbol">&gt;</span> GRUPO D
            </IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            <IonItem lines="none" className="info-item">
              <IonLabel>
                <p className="label-small">PROGRAMA</p>
                <h2 className="label-value">{teamInfo.carrera}</h2>
              </IonLabel>
              <div className="status-indicator"></div>
            </IonItem>

            <IonItem lines="none" className="info-item">
              <IonLabel>
                <p className="label-small">INSTITUCIÓN</p>
                <h2 className="label-value">{teamInfo.universidad}</h2>
              </IonLabel>
              <div className="status-indicator"></div>
            </IonItem>
          </IonCardContent>
        </IonCard>

        {/* Tarjetas de Integrantes */}
        <div className="members-container">
          {teamMembers.map((member, index) => (
            <IonCard key={index} className="member-card">
              <div className={`card-accent card-accent-${member.color}`}></div>
              <IonCardContent>
                <div className="member-header">
                  <span className="member-icon">{member.icon}</span>
                  <div className="member-info">
                    <h2 className="member-name">{member.nombre}</h2>
                    <div className="member-details">
                      <div className="detail-row">
                        <span className="detail-label">MATRÍCULA:</span>
                        <span className="detail-value">{member.matricula}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">ROL:</span>
                        <IonBadge color={member.color} className="role-badge">
                          {member.rol}
                        </IonBadge>
                      </div>
                    </div>
                  </div>
                  <div className="status-indicator-small"></div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;