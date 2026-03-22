import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import "../../styles/project.css";
import Navbar from "../utils/Navbar.tsx";
import Footer from "../utils/Footer.tsx";
import pikacordImage from '../../assets/pikacord.png';
import unosialImage from '../../assets/unosial.png';
import inoxtagImage from '../../assets/inoxtag.png';
import raidprotectImage from '../../assets/raidprotect.png';
import neopolisImage from '../../assets/neopolis.png';
import infraImage from '../../assets/diagramme_reseau_bravo.png';

interface ProjectDetail {
    title: string;
    description: string;
    technologies: string[];
    image?: string | null;
    emoji?: string;
    gradient?: string;
}

const projectDetails: Record<string, ProjectDetail> = {
    rgpdscan: {
        title: "RGPDScan",
        emoji: "🔍",
        gradient: "linear-gradient(135deg, #1e3a5f, #0e1a2e)",
        description: `
**RGPDScan** est un outil d'audit RGPD automatisé que j'ai conçu et développé de A à Z, permettant d'analyser n'importe quel site web et de générer un rapport de conformité détaillé en PDF.

## Fonctionnement

L'outil pilote un navigateur headless via **Playwright** pour visiter le site cible comme un vrai utilisateur : il intercepte les requêtes réseau, analyse les cookies déposés, détecte les trackers tiers, vérifie la présence d'une bannière de consentement et contrôle les en-têtes HTTP de sécurité (CSP, HSTS, X-Frame-Options…).

Les résultats sont ensuite traités par une API **FastAPI** qui les structure, les score et les transmet à un moteur de rendu **WeasyPrint** pour générer un rapport PDF professionnel téléchargeable.

## Points techniques

- **Playwright** : navigation headless, interception des requêtes et des cookies en temps réel
- **FastAPI** : API REST asynchrone pour orchestrer l'analyse et exposer les résultats
- **Redis** : mise en cache des rapports pour éviter les re-scans inutiles
- **WeasyPrint** : génération de rapports PDF à partir de templates HTML/CSS
- **Next.js** : interface utilisateur permettant de lancer un scan et de visualiser/télécharger le rapport
        `,
        image: null,
        technologies: [
            "FastAPI", "Python", "Playwright", "Next.js", "Redis", "WeasyPrint",
            "TypeScript", "Docker", "Linux",
            "Autonomie et initiative", "Résolution de problèmes",
        ],
    },
    infrastructure: {
        title: "Infrastructure Complexe",
        emoji: "🏗️",
        gradient: "linear-gradient(135deg, #1a2e1a, #0e1a0e)",
        description: `
Conception et déploiement d'une **infrastructure réseau complète**, pensée pour simuler un environnement professionnel sécurisé avec segmentation, supervision et accès privilégiés.

## Architecture réseau

L'infrastructure repose sur **PfSense** en tant que pare-feu principal avec filtrage stateful, NAT et règles par interface. Les routeurs **VyOS** assurent le routage inter-VLAN et les liaisons entre segments. Les VLANs segmentent le réseau en zones isolées (serveurs, administration, utilisateurs, DMZ) pour limiter la surface d'attaque latérale.

## Accès privilégiés (PAM)

**Teleport** est déployé comme solution PAM (*Privileged Access Management*) : tous les accès SSH et RDP aux machines sensibles transitent par un bastion Teleport, avec enregistrement des sessions, authentification MFA et révocation instantanée des accès.

## PKI interne

Une **PKI maison** (autorité de certification) a été mise en place pour émettre et gérer les certificats TLS utilisés en interne, permettant de chiffrer les communications inter-services sans dépendre d'une CA tierce.

## Supervision

**Grafana** + **Prometheus** centralisent la supervision : métriques réseau, charge des VMs, état des services, alertes. Le diagramme réseau ci-contre illustre l'architecture globale.
        `,
        image: infraImage,
        technologies: [
            "PfSense", "VyOS", "Teleport", "PKI / TLS", "Grafana", "Prometheus",
            "Linux", "VLAN", "Docker",
            "Autonomie et initiative", "Résolution de problèmes", "Gestion du temps",
        ],
    },
    "vps-securise": {
        title: "VPS Sécurisé",
        emoji: "🛡️",
        gradient: "linear-gradient(135deg, #2e1a1a, #1a0e0e)",
        description: `
Durcissement complet d'un **VPS en production** exposé sur Internet, avec mise en place d'une stack de sécurité multicouche pour détecter, bloquer et journaliser les tentatives d'intrusion.

## Détection et blocage d'intrusions

- **CrowdSec** : IPS collaboratif qui analyse les logs en temps réel et partage les IPs malveillantes avec la communauté. Les décisions de blocage sont appliquées via un bouncer Nginx.
- **Fail2ban** : bannissement automatique des IPs après N échecs d'authentification (SSH, Nginx, applications).
- **psad** (*Port Scan Attack Detector*) : détection des scans de ports via l'analyse des logs iptables, avec alertes et blocage automatique.

## Exposition web sécurisée

**Nginx** est configuré comme reverse proxy avec TLS 1.3, HSTS, headers de sécurité (CSP, X-Frame-Options, X-Content-Type-Options), et rate limiting par IP.

## Conteneurisation

Les services applicatifs tournent dans des **conteneurs Docker** isolés, avec des réseaux internes séparés et des volumes montés en lecture seule quand c'est possible.

## Observabilité

**Grafana** + **Loki** permettent de centraliser et visualiser tous les logs applicatifs et système : requêtes Nginx, événements CrowdSec, connexions SSH, erreurs applicatives — avec alertes configurées sur les patterns suspects.
        `,
        image: null,
        technologies: [
            "CrowdSec", "Fail2ban", "Nginx", "Docker", "Grafana", "Loki",
            "Linux", "TLS / PKI", "iptables",
            "Autonomie et initiative", "Résolution de problèmes",
        ],
    },
    che2026: {
        title: "Cyber Humanum Est 2026",
        emoji: "⚔️",
        gradient: "linear-gradient(135deg, #2e1a3a, #1a0e2e)",
        description: `
**Cyber Humanum Est (CHE)** est une compétition de cybersécurité militaire organisée annuellement, combinant des épreuves offensives (CTF), défensives (protection d'infrastructures) et d'influence (OSINT, désinformation, contre-mesures).

## Mon rôle : Lieutenant offensif — équipe Cryptanga

Au sein de l'équipe **Cryptanga**, j'occupais le rôle de **Lieutenant offensif**, responsable de la coordination des attaques sur les infrastructures adverses et de la résolution des challenges CTF les plus complexes.

## Résultats

L'équipe Cryptanga a remporté **trois distinctions** lors de cette édition :

- 🏆 **Meilleure équipe** — classement général toutes catégories
- 🛡️ **Meilleure équipe de Lutte Informatique Défensive (LID)** — protection de notre infrastructure contre les attaques adverses
- 📡 **Meilleure équipe de Lutte Informatique d'Influence (LII)** — opérations OSINT, contre-désinformation et opérations d'influence

## Compétences mobilisées

La compétition couvre un spectre très large : exploitation web, pwn, reverse engineering, cryptographie, forensique, OSINT, mais aussi coordination d'équipe sous pression et prise de décision rapide dans un environnement adversarial simulé.
        `,
        image: null,
        technologies: [
            "CTF", "Offensif", "Red Team", "OSINT", "Forensique",
            "Cryptographie", "Reverse Engineering", "Exploitation Web",
            "Travail en équipe", "Communication", "Gestion du temps", "Adaptabilité",
        ],
    },
    "compilateur-zoot": {
        title: "Compilateur Zoot",
        emoji: "⚙️",
        gradient: "linear-gradient(135deg, #1a1a2e, #0e0e1a)",
        description: `
**Zoot** est un langage de programmation inventé dans le cadre d'un projet universitaire de Master, pour lequel j'ai implémenté un compilateur complet en **Java**, de l'analyse du code source jusqu'à la génération de code exécutable.

## Phases du compilateur

### Analyse lexicale
Le **lexer** parcourt le code source caractère par caractère et produit un flux de tokens (mots-clés, identifiants, opérateurs, littéraux…). Les erreurs lexicales (caractères invalides, chaînes non fermées) sont détectées et remontées avec leur position dans le fichier source.

### Analyse syntaxique
Le **parser** (analyseur syntaxique) consomme le flux de tokens et construit un **AST** (Abstract Syntax Tree) représentant la structure grammaticale du programme. La grammaire de Zoot a été définie formellement et traduite en un parseur récursif descendant.

### Analyse sémantique
La phase sémantique parcourt l'AST pour vérifier la cohérence du programme : **typage statique**, résolution des identifiants, détection des variables non déclarées ou des affectations de types incompatibles. Une table des symboles est maintenue tout au long de cette phase.

### Génération de code
Le compilateur produit du **bytecode JVM** (ou code intermédiaire), permettant d'exécuter les programmes Zoot via la machine virtuelle Java.

## Ce que ce projet m'a appris

Implémenter un compilateur de zéro, sans bibliothèques tierces, m'a permis de comprendre en profondeur le fonctionnement des langages de programmation, la théorie des automates et des grammaires formelles, ainsi que les techniques d'optimisation de code.
        `,
        image: null,
        technologies: [
            "Java", "Théorie des automates", "Grammaires formelles",
            "AST", "Bytecode JVM", "Analyse sémantique",
            "Autonomie et initiative", "Résolution de problèmes",
        ],
    },
    "malware-forensics": {
        title: "Malware & Forensics",
        emoji: "🦠",
        gradient: "linear-gradient(135deg, #2e1010, #1a0e0e)",
        description: `
Projet universitaire en deux volets, réalisé en binôme dans le cadre du Master SIRAV : **développement d'un malware** pour Windows XP, puis **analyse forensique** du malware développé par un autre groupe d'étudiants.

## Volet 1 — Développement du malware

L'objectif était de concevoir un malware fonctionnel illustrant plusieurs techniques avancées d'évasion et de persistance, dans un environnement contrôlé (VM Windows XP isolée du réseau).

### Techniques implémentées

- **Code auto-modifiant** : le binaire modifie ses propres instructions en mémoire au moment de l'exécution pour altérer sa signature et compliquer la détection statique.
- **Anti-débogage** : détection de la présence d'un débogueur (IsDebuggerPresent, vérification des flags du PEB, timing attacks) avec comportement alternatif en cas de détection.
- **Vérification d'intégrité** : calcul d'un hash du binaire au démarrage et comparaison avec une valeur attendue pour détecter toute modification externe (ex. patch d'un analyste).
- **Persistance** : inscription dans les clés de registre Run pour survivre au redémarrage.

## Volet 2 — Analyse forensique (malware adverse)

L'analyse du malware du groupe adverse a mobilisé plusieurs outils de rétro-ingénierie :

- **IDA Pro** : désassemblage statique du binaire, reconstruction du flux de contrôle, identification des fonctions clés et des appels API Windows suspects (VirtualAlloc, WriteProcessMemory, CreateRemoteThread…).
- **Ghidra** (NSA) : décompilation pour obtenir une représentation C-like du code, facilitant la compréhension de la logique métier.
- **OllyDbg** : analyse dynamique — exécution pas à pas, inspection des registres et de la mémoire en temps réel, pose de breakpoints sur les appels API critiques.

### Résultats de l'analyse

Identification complète des mécanismes d'évasion, de persistance et de charge utile. Rédaction d'un rapport forensique détaillant le comportement du malware, ses IOC (*Indicators of Compromise*) et les mesures de remédiation.
        `,
        image: null,
        technologies: [
            "IDA Pro", "Ghidra", "OllyDbg",
            "Assembleur x86", "Windows API", "Rétro-ingénierie",
            "Forensique", "Anti-debug", "Code auto-modifiant",
            "Analyse statique", "Analyse dynamique",
        ],
    },
    "proverif-eap-psk": {
        title: "ProVerif — EAP-PSK",
        emoji: "🔐",
        gradient: "linear-gradient(135deg, #0e1a2e, #1a2e3a)",
        description: `
Modélisation et vérification formelle du protocole d'authentification **EAP-PSK** (*Extensible Authentication Protocol — Pre-Shared Key*) à l'aide de l'outil **ProVerif**, dans le cadre du Master SIRAV.

## Contexte — EAP-PSK

EAP-PSK est un protocole d'authentification mutuelle basé sur une clé pré-partagée (PSK), conçu pour les environnements contraints (IoT, réseaux sans fil). Il repose sur le chiffrement par bloc AES et fournit une dérivation de clés de session ainsi qu'un canal protégé pour l'échange de données.

## Modélisation avec ProVerif

**ProVerif** est un outil de vérification automatique de protocoles cryptographiques, basé sur la logique du pi-calcul appliquée. La modélisation consiste à décrire formellement les rôles des participants (Pair, Serveur), les primitives cryptographiques utilisées (AES-128, CMAC, dérivation de clés) et l'environnement d'attaque (attaquant Dolev-Yao avec capacité d'interception, rejeu et modification des messages).

## Propriétés vérifiées

- **Confidentialité** : vérification que les clés de session (TEK, MSK) ne peuvent pas être obtenues par l'attaquant, même en observant tous les échanges réseau.
- **Authentification mutuelle** : preuve que si le serveur termine le protocole en croyant parler au pair P, alors P a effectivement participé au protocole avec ce serveur.
- **Résistance au rejeu** : vérification que des messages capturés lors d'une session passée ne peuvent pas être utilisés pour s'authentifier lors d'une session ultérieure.

## Résultats

ProVerif a pu **prouver automatiquement** les propriétés de confidentialité et d'authentification sous le modèle Dolev-Yao, confirmant la robustesse théorique d'EAP-PSK dans les hypothèses du modèle symbolique.
        `,
        image: null,
        technologies: [
            "ProVerif", "Pi-calcul", "EAP-PSK",
            "AES-128", "CMAC", "Dolev-Yao",
            "Vérification formelle", "Protocoles cryptographiques",
            "Autonomie et initiative", "Résolution de problèmes",
        ],
    },

    unosial: {
        title: "Unosial",
        description: `
**Unosial** a débuté comme un bot Discord, puis est devenu un collectif spécialisé dans la création d’outils pour communautés en ligne.

Nous avons collaboré avec des personnalités comme **Inoxtag**, en développant des bots Discord et des fonctionnalités interactives pour ses lives.

- Conception d’un site web pour présenter les services et projets.
- Missions pour d’autres influenceurs et participation à des événements majeurs comme le **ZEvent**.
- Partenariats avec des entreprises telles que **Coca-Cola**.

**Mon rôle :** maintenance de tous les bots et outils créés et gestion de la communauté pour assurer leur bon fonctionnement.

Logo réalisé par **Hugo DROUET**.
        `,
        image: unosialImage,
        technologies: [
            "TypeScript", "JavaScript", "Node.js", "MariaDB", "PostgreSQL", "Java", "Linux", "Git",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    pikacord: {
        title: "Pikacord",
        description: `
**Pikacord** est un bot Discord que j'ai fondé en 2018, conçu pour permettre aux utilisateurs de collectionner des créatures virtuelles en faisant preuve d’attention et de réactivité.  

- **Développement de mécanismes interactifs** pour stimuler l’engagement des utilisateurs, avec des défis et récompenses basés sur la rapidité et la stratégie.  
- **Optimisation de l’expérience utilisateur**, en améliorant la fluidité des interactions et la lisibilité des informations présentées par le bot.  
- **Maintenance et mises à jour régulières**, pour garantir la compatibilité avec les évolutions de Discord et l’ajout de nouvelles fonctionnalités stimulantes.  
- **Gestion de la communauté** : suivi des retours, adaptation des fonctionnalités et amélioration constante du bot selon les besoins des utilisateurs.  
- **Apprentissage et innovation** : ce projet m’a permis de consolider mes compétences en JavaScript, Node.js, architecture serveur et gestion de bases de données tout en développant ma créativité et ma capacité à résoudre des problèmes.
- **Collaboration avec un graphiste** pour créer des visuels attrayants et engageants, renforçant l'identité du bot et améliorant l'expérience utilisateur.

Logo réalisé par **Hugo DROUET**.
        `,
        image: pikacordImage,
        technologies: [
            "Git", "Linux", "Node.js", "JavaScript", "PostgreSQL",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    inoxtag: {
        title: "Inoxtag",
        description: `
Avec Unosial, j'ai eu l'opportunité de travailler avec **Inoxtag**, un influenceur majeur sur YouTube et Twitch. Avec le temps, avec deux amis, nous étions chargés de la gestion de sa communauté et du développement de ses outils interactifs. Il était donc nécessaire de réaliser des recrutements ainsi que des outils performants et efficaces pour sécuriser la communauté.

- **Développement de bots Discord** pour automatiser la modération et améliorer l'interaction avec la communauté.
- **Gestion de la communauté** : modération, gestion des permissions et protection contre les comportements indésirables.
        `,
        image: inoxtagImage,
        technologies: [
            "Git", "Linux", "Node.js", "JavaScript", "PostgreSQL",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    neopolis: {
        title: "Neopolis",
        description: `
Neopolis est un jeu mobile de simulation de monopoly avec des mécaniques de jeu similaire à Pokémon Go. Mon rôle était d'aider bénévolement en créant des outils sur Discord pour aider l'équipe du jeu à porter assistance aux joueurs. Je participais aussi au développement de mécanismes pour les événements afin de fidéliser la communauté.

- **Développement d'outils Discord** pour la gestion de la communauté.
- **Création de mécanismes de jeu** pour les événements sur les réseaux, visant à renforcer l'engagement des joueurs.
        `,
        image: neopolisImage,
        technologies: [
            "Git", "Node.js", "JavaScript", "PostgreSQL", "Linux",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    raidprotect: {
        title: "RaidProtect",
        description: `
**RaidProtect** vise à sécuriser et gérer des communautés en ligne sur Discord.

Mon rôle était de modérer la communauté puis dans un second temps, de gérer l'équipe de modération. Je n'ai pas participé au développement du bot, mais j'ai contribué à la gestion de la communauté.
        `,
        image: raidprotectImage,
        technologies: [
            "Travail en équipe", "Communication"
        ],
    }
};

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projectDetails[projectId as keyof typeof projectDetails];
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById("projects");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    if (!project) return (
        <div id="root">
            <Navbar />
            <div style={{ padding: "8rem 2rem", textAlign: "center" }}>
                <p style={{ color: "var(--color-text-muted)" }}>Projet introuvable.</p>
                <button onClick={handleBack} className="btn-back" style={{ marginTop: "1rem" }}>
                    ← Retour aux projets
                </button>
            </div>
            <Footer />
        </div>
    );

    return (
        <div id="root">
            <Navbar />

            <motion.div
                className="project-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <button onClick={handleBack} className="btn-back">
                    ← Retour aux projets
                </button>

                <div className="project-content flex flex-col md:flex-row gap-8">
                    {/* Image ou placeholder emoji */}
                    {project.image ? (
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg shadow-lg w-full md:w-1/2"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    ) : (
                        <motion.div
                            className="project-emoji-placeholder"
                            style={{ background: project.gradient }}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span>{project.emoji}</span>
                        </motion.div>
                    )}

                    <motion.div
                        className="project-text w-full md:w-1/2"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>{project.title}</h1>
                        <ReactMarkdown
                            components={{
                                p: (prop) => <p {...prop} />,
                                li: (prop) => <li {...prop} />,
                                strong: (prop) => <strong {...prop} />,
                                h2: (prop) => <h2 {...prop} />,
                            }}
                        >
                            {project.description}
                        </ReactMarkdown>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies?.map((tech) => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
}