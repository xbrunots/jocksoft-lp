import React from 'react';
import './Technologies.css';

// Importar os logos das tecnologias
import reactLogo from '../assets/react.svg';
import pythonLogo from '../assets/techs/Python-logo.png';
import nodeLogo from '../assets/techs/node.png';
import typescriptLogo from '../assets/techs/typescript.png';
import nextjsLogo from '../assets/techs/nextjs.png';
import dockerLogo from '../assets/techs/docker.png';
import kubernetesLogo from '../assets/techs/kubernetes.png';
import awsLogo from '../assets/techs/aws.png';
import azureLogo from '../assets/techs/azure.png';
import mongoLogo from '../assets/techs/mongo.png';
import sqlLogo from '../assets/techs/sql.png';
import firebaseLogo from '../assets/techs/firebase.png';
import supabaseLogo from '../assets/techs/supabase.png';
import gitLogo from '../assets/techs/git.png';
import githubLogo from '../assets/techs/github.png';
import jiraLogo from '../assets/techs/jira.png';
import confluenceLogo from '../assets/techs/confluence.png';
import figmaLogo from '../assets/techs/figma-logo.png';
import vercelLogo from '../assets/techs/vercel.png';
import flutterLogo from '../assets/techs/flutter.png';
import androidLogo from '../assets/techs/android-logo-3-2.png';
import iosLogo from '../assets/techs/ios.png';
import swiftLogo from '../assets/techs/Swift_logo.svg.png';
import kotlinLogo from '../assets/techs/koylin.png';
import unityLogo from '../assets/techs/unity.png';

const Technologies = () => {
  const technologies = [
    { src: flutterLogo, alt: 'Flutter' },
    { src: reactLogo, alt: 'React' },
    { src: nextjsLogo, alt: 'Next.js' },
    { src: typescriptLogo, alt: 'TypeScript' },
    { src: figmaLogo, alt: 'Figma' },
    { src: nodeLogo, alt: 'Node.js' },
    { src: pythonLogo, alt: 'Python' },
    { src: mongoLogo, alt: 'MongoDB' },
    { src: sqlLogo, alt: 'SQL' },
    { src: awsLogo, alt: 'AWS' },
    { src: azureLogo, alt: 'Azure' },
    { src: dockerLogo, alt: 'Docker' },
    { src: kubernetesLogo, alt: 'Kubernetes' },
    { src: vercelLogo, alt: 'Vercel' },
    { src: androidLogo, alt: 'Android' },
    { src: iosLogo, alt: 'iOS' },
    { src: swiftLogo, alt: 'Swift' },
    { src: kotlinLogo, alt: 'Kotlin' },
    { src: gitLogo, alt: 'Git' },
    { src: githubLogo, alt: 'GitHub' },
    { src: firebaseLogo, alt: 'Firebase' },
    { src: supabaseLogo, alt: 'Supabase' },
    { src: jiraLogo, alt: 'Jira' },
    { src: confluenceLogo, alt: 'Confluence' },
    { src: unityLogo, alt: 'Unity' }
  ];

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <div className="technologies-header">
          <h2>Tecnologias</h2>
          <p>Utilizamos as melhores tecnologias do mercado para entregar soluções modernas e escaláveis</p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-logo">
              <img src={tech.src} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;