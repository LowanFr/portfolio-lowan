const fr = {
  translation: {
    // Navbar
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expériences",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },

    // Hero
    hero: {
      greeting: "Bonjour, je suis",
      name: "Esteban",
      tagline: "Développeur full-stack & passionné de cybersécurité",
      subtitle:
        "Étudiant en M2 SIRAV, spécialisé en sécurité, réseaux et infrastructures. En stage chez Thales Cyber Solutions.",
      cta: "En savoir plus",
      download_cv: "Télécharger mon CV",
    },

    // About
    about: {
      title: "À propos de moi",
      p1: "Je m'appelle <strong>Esteban Douillet</strong>, étudiant en dernière année de Master <strong>SIRAV</strong> (Sécurité Informatique, Réseaux et Architectures Virtuelles). Développeur full-stack depuis plusieurs années, je me spécialise aujourd'hui en cybersécurité.",
      p2: "J'ai conçu et déployé des applications web complètes, des API REST, et des infrastructures réseau complexes. Ces expériences m'ont permis de développer mon autonomie, ma rigueur et ma capacité à collaborer en équipe.",
      p3: "Actuellement en stage chez <strong>Thales Cyber Solutions</strong>, et Lieutenant offensif lors du <strong>Cyber Humanum Est 2026</strong> avec l'équipe Cryptanga — meilleure équipe de la compétition.",
    },

    // Experience
    experience: {
      title: "Expériences & Formation",
      present: "En cours",
      roles: {
        thales_title: "Stage Cybersécurité",
        thales_company: "Thales Cyber Solutions",
        thales_desc: "Stage confidentiel en cybersécurité.",
        cnfpt_title: "Stage Informatique",
        cnfpt_company: "CNFPT Nancy",
        cnfpt_desc:
          "Provisioning, gestion des GPO, administration Active Directory, support utilisateurs.",
        che_title: "Lieutenant offensif – Cryptanga",
        che_company: "Cyber Humanum Est 2026",
        che_desc:
          "CTF offensif par équipe. Meilleure équipe, meilleure équipe défensive, meilleure équipe d'influence.",
        m2_title: "Master SIRAV",
        m2_company: "M2 Sécurité Informatique, Réseaux et Architectures Virtuelles",
        m2_desc: "Spécialisation en cybersécurité, réseaux, et virtualisation.",
        licence_title: "Licence Informatique",
        licence_company: "Université",
        licence_desc: "Bases solides en algorithmique, systèmes et développement.",
        bac_title: "Baccalauréat",
        bac_company: "Spécialités NSI & Mathématiques",
        bac_desc: "Mention bien.",
      },
    },

    // Skills
    skills: {
      title: "Mes compétences",
      hard: "Développement & Infra",
      soft: "Soft skills",
    },

    // Projects
    projects: {
      title: "Mes Projets",
      see: "Voir le projet",
      tags: {
        security: "Sécurité",
        infra: "Infrastructure",
        dev: "Développement",
        ctf: "CTF",
      },
    },

    // Contact
    contact: {
      title: "Me contacter",
      subtitle: "Une question, une opportunité ? Écrivez-moi.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi…",
      success: "Message envoyé ! Je reviens vers vous rapidement.",
      error: "Une erreur est survenue, réessayez ou écrivez à contact@lowan.fr.",
    },

    // Footer
    footer: {
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      cgu: "CGU",
      legal: "Mentions légales",
    },

    // Pages de projets
    projectPages: {
      back: "← Retour aux projets",
      notFound: "Projet introuvable.",
      rgpdscan: {
        title: "RGPDScan",
        description: `**RGPDScan** est un outil d'audit RGPD automatisé que j'ai conçu et développé de A à Z, permettant d'analyser n'importe quel site web et de générer un rapport de conformité détaillé en PDF.

## Fonctionnement

L'outil pilote un navigateur headless via **Playwright** pour visiter le site cible comme un vrai utilisateur : il intercepte les requêtes réseau, analyse les cookies déposés, détecte les trackers tiers, vérifie la présence d'une bannière de consentement et contrôle les en-têtes HTTP de sécurité (CSP, HSTS, X-Frame-Options…).

Les résultats sont ensuite traités par une API **FastAPI** qui les structure, les score et les transmet à un moteur de rendu **WeasyPrint** pour générer un rapport PDF professionnel téléchargeable.

## Points techniques

- **Playwright** : navigation headless, interception des requêtes et des cookies en temps réel
- **FastAPI** : API REST asynchrone pour orchestrer l'analyse et exposer les résultats
- **Redis** : mise en cache des rapports pour éviter les re-scans inutiles
- **WeasyPrint** : génération de rapports PDF à partir de templates HTML/CSS
- **Next.js** : interface utilisateur permettant de lancer un scan et de visualiser/télécharger le rapport`,
        technologies: [
          "FastAPI", "Python", "Playwright", "Next.js", "Redis", "WeasyPrint",
          "TypeScript", "Docker", "Linux",
          "Autonomie et initiative", "Résolution de problèmes",
        ],
      },
      infrastructure: {
        title: "Infrastructure Complexe",
        description: `Conception et déploiement d'une **infrastructure réseau complète**, pensée pour simuler un environnement professionnel sécurisé avec segmentation, supervision et accès privilégiés.

## Architecture réseau

L'infrastructure repose sur **PfSense** en tant que pare-feu principal avec filtrage stateful, NAT et règles par interface. Les routeurs **VyOS** assurent le routage inter-VLAN et les liaisons entre segments. Les VLANs segmentent le réseau en zones isolées (serveurs, administration, utilisateurs, DMZ) pour limiter la surface d'attaque latérale.

## Accès privilégiés (PAM)

**Teleport** est déployé comme solution PAM (*Privileged Access Management*) : tous les accès SSH et RDP aux machines sensibles transitent par un bastion Teleport, avec enregistrement des sessions, authentification MFA et révocation instantanée des accès.

## PKI interne

Une **PKI maison** (autorité de certification) a été mise en place pour émettre et gérer les certificats TLS utilisés en interne, permettant de chiffrer les communications inter-services sans dépendre d'une CA tierce.

## Supervision

**Grafana** + **Prometheus** centralisent la supervision : métriques réseau, charge des VMs, état des services, alertes. Le diagramme réseau ci-contre illustre l'architecture globale.`,
        technologies: [
          "PfSense", "VyOS", "Teleport", "PKI / TLS", "Grafana", "Prometheus",
          "Linux", "VLAN", "Docker",
          "Autonomie et initiative", "Résolution de problèmes", "Gestion du temps",
        ],
      },
      vps_securise: {
        title: "VPS Sécurisé",
        description: `Durcissement complet d'un **VPS en production** exposé sur Internet, avec mise en place d'une stack de sécurité multicouche pour détecter, bloquer et journaliser les tentatives d'intrusion.

## Détection et blocage d'intrusions

- **CrowdSec** : IPS collaboratif qui analyse les logs en temps réel et partage les IPs malveillantes avec la communauté. Les décisions de blocage sont appliquées via un bouncer Nginx.
- **Fail2ban** : bannissement automatique des IPs après N échecs d'authentification (SSH, Nginx, applications).
- **psad** (*Port Scan Attack Detector*) : détection des scans de ports via l'analyse des logs iptables, avec alertes et blocage automatique.

## Exposition web sécurisée

**Nginx** est configuré comme reverse proxy avec TLS 1.3, HSTS, headers de sécurité (CSP, X-Frame-Options, X-Content-Type-Options), et rate limiting par IP.

## Conteneurisation

Les services applicatifs tournent dans des **conteneurs Docker** isolés, avec des réseaux internes séparés et des volumes montés en lecture seule quand c'est possible.

## Observabilité

**Grafana** + **Loki** permettent de centraliser et visualiser tous les logs applicatifs et système : requêtes Nginx, événements CrowdSec, connexions SSH, erreurs applicatives — avec alertes configurées sur les patterns suspects.`,
        technologies: [
          "CrowdSec", "Fail2ban", "Nginx", "Docker", "Grafana", "Loki",
          "Linux", "TLS / PKI", "iptables",
          "Autonomie et initiative", "Résolution de problèmes",
        ],
      },
      che2026: {
        title: "Cyber Humanum Est 2026",
        description: `**Cyber Humanum Est (CHE)** est une compétition de cybersécurité militaire organisée annuellement, combinant des épreuves offensives (CTF), défensives (protection d'infrastructures) et d'influence (OSINT, désinformation, contre-mesures).

## Mon rôle : Lieutenant offensif — équipe Cryptanga

Au sein de l'équipe **Cryptanga**, j'occupais le rôle de **Lieutenant offensif**, responsable de la coordination des attaques sur les infrastructures adverses et de la résolution des challenges CTF les plus complexes.

## Résultats

L'équipe Cryptanga a remporté **trois distinctions** lors de cette édition :

- 🏆 **Meilleure équipe** — classement général toutes catégories
- 🛡️ **Meilleure équipe de Lutte Informatique Défensive (LID)** — protection de notre infrastructure contre les attaques adverses
- 📡 **Meilleure équipe de Lutte Informatique d'Influence (LII)** — opérations OSINT, contre-désinformation et opérations d'influence

## Compétences mobilisées

La compétition couvre un spectre très large : exploitation web, pwn, reverse engineering, cryptographie, forensique, OSINT, mais aussi coordination d'équipe sous pression et prise de décision rapide dans un environnement adversarial simulé.`,
        technologies: [
          "CTF", "Offensif", "Red Team", "OSINT", "Forensique",
          "Cryptographie", "Reverse Engineering", "Exploitation Web",
          "Travail en équipe", "Communication", "Gestion du temps", "Adaptabilité",
        ],
      },
      compilateur_zoot: {
        title: "Compilateur Zoot",
        description: `**Zoot** est un langage de programmation inventé dans le cadre d'un projet universitaire de Master, pour lequel j'ai implémenté un compilateur complet en **Java**, de l'analyse du code source jusqu'à la génération de code exécutable.

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

Implémenter un compilateur de zéro, sans bibliothèques tierces, m'a permis de comprendre en profondeur le fonctionnement des langages de programmation, la théorie des automates et des grammaires formelles, ainsi que les techniques d'optimisation de code.`,
        technologies: [
          "Java", "Théorie des automates", "Grammaires formelles",
          "AST", "Bytecode JVM", "Analyse sémantique",
          "Autonomie et initiative", "Résolution de problèmes",
        ],
      },
      malware_forensics: {
        title: "Malware & Forensics",
        description: `Projet universitaire en deux volets, réalisé en binôme dans le cadre du Master SIRAV : **développement d'un malware** pour Windows XP, puis **analyse forensique** du malware développé par un autre groupe d'étudiants.

## Volet 1 — Développement du malware

L'objectif était de concevoir un malware fonctionnel illustrant plusieurs techniques avancées d'évasion et de persistance, dans un environnement contrôlé (VM Windows XP isolée du réseau).

### Techniques implémentées

- **Code auto-modifiant** : le binaire modifie ses propres instructions en mémoire au moment de l'exécution pour altérer sa signature et compliquer la détection statique.
- **Anti-débogage** : détection de la présence d'un débogueur (IsDebuggerPresent, vérification des flags du PEB, timing attacks) avec comportement alternatif en cas de détection.
- **Vérification d'intégrité** : calcul d'un hash du binaire au démarrage et comparaison avec une valeur attendue pour détecter toute modification externe (ex. patch d'un analyste).
- **Persistance** : inscription dans les clés de registre Run pour survivre au redémarrage.

## Volet 2 — Analyse forensique (malware adverse)

L'analyse du malware du groupe adverse a mobilisé plusieurs outils de rétro-ingénierie :

- **IDA Pro** : désassemblage statique du binaire, reconstruction du flux de contrôle, identification des fonctions clés et des appels API Windows suspects.
- **Ghidra** (NSA) : décompilation pour obtenir une représentation C-like du code, facilitant la compréhension de la logique métier.
- **OllyDbg** : analyse dynamique — exécution pas à pas, inspection des registres et de la mémoire en temps réel, pose de breakpoints sur les appels API critiques.

### Résultats de l'analyse

Identification complète des mécanismes d'évasion, de persistance et de charge utile. Rédaction d'un rapport forensique détaillant le comportement du malware, ses IOC (*Indicators of Compromise*) et les mesures de remédiation.`,
        technologies: [
          "IDA Pro", "Ghidra", "OllyDbg",
          "Assembleur x86", "Windows API", "Rétro-ingénierie",
          "Forensique", "Anti-debug", "Code auto-modifiant",
          "Analyse statique", "Analyse dynamique",
        ],
      },
      proverif_eap_psk: {
        title: "ProVerif — EAP-PSK",
        description: `Modélisation et vérification formelle du protocole d'authentification **EAP-PSK** (*Extensible Authentication Protocol — Pre-Shared Key*) à l'aide de l'outil **ProVerif**, dans le cadre du Master SIRAV.

## Contexte — EAP-PSK

EAP-PSK est un protocole d'authentification mutuelle basé sur une clé pré-partagée (PSK), conçu pour les environnements contraints (IoT, réseaux sans fil). Il repose sur le chiffrement par bloc AES et fournit une dérivation de clés de session ainsi qu'un canal protégé pour l'échange de données.

## Modélisation avec ProVerif

**ProVerif** est un outil de vérification automatique de protocoles cryptographiques, basé sur la logique du pi-calcul appliquée. La modélisation consiste à décrire formellement les rôles des participants (Pair, Serveur), les primitives cryptographiques utilisées (AES-128, CMAC, dérivation de clés) et l'environnement d'attaque (attaquant Dolev-Yao avec capacité d'interception, rejeu et modification des messages).

## Propriétés vérifiées

- **Confidentialité** : vérification que les clés de session (TEK, MSK) ne peuvent pas être obtenues par l'attaquant, même en observant tous les échanges réseau.
- **Authentification mutuelle** : preuve que si le serveur termine le protocole en croyant parler au pair P, alors P a effectivement participé au protocole avec ce serveur.
- **Résistance au rejeu** : vérification que des messages capturés lors d'une session passée ne peuvent pas être utilisés pour s'authentifier lors d'une session ultérieure.

## Résultats

ProVerif a pu **prouver automatiquement** les propriétés de confidentialité et d'authentification sous le modèle Dolev-Yao, confirmant la robustesse théorique d'EAP-PSK dans les hypothèses du modèle symbolique.`,
        technologies: [
          "ProVerif", "Pi-calcul", "EAP-PSK",
          "AES-128", "CMAC", "Dolev-Yao",
          "Vérification formelle", "Protocoles cryptographiques",
          "Autonomie et initiative", "Résolution de problèmes",
        ],
      },
      unosial: {
        title: "Unosial",
        description: `**Unosial** a débuté comme un bot Discord, puis est devenu un collectif spécialisé dans la création d'outils pour communautés en ligne.

Nous avons collaboré avec des personnalités comme **Inoxtag**, en développant des bots Discord et des fonctionnalités interactives pour ses lives.

- Conception d'un site web pour présenter les services et projets.
- Missions pour d'autres influenceurs et participation à des événements majeurs comme le **ZEvent**.
- Partenariats avec des entreprises telles que **Coca-Cola**.

**Mon rôle :** maintenance de tous les bots et outils créés et gestion de la communauté pour assurer leur bon fonctionnement.

Logo réalisé par **Hugo DROUET**.`,
        technologies: [
          "TypeScript", "JavaScript", "Node.js", "MariaDB", "PostgreSQL", "Java", "Linux", "Git",
          "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
          "Résolution de problèmes", "Adaptabilité",
        ],
      },
      pikacord: {
        title: "Pikacord",
        description: `**Pikacord** est un bot Discord que j'ai fondé en 2018, conçu pour permettre aux utilisateurs de collectionner des créatures virtuelles en faisant preuve d'attention et de réactivité.

- **Développement de mécanismes interactifs** pour stimuler l'engagement des utilisateurs, avec des défis et récompenses basés sur la rapidité et la stratégie.
- **Optimisation de l'expérience utilisateur**, en améliorant la fluidité des interactions et la lisibilité des informations présentées par le bot.
- **Maintenance et mises à jour régulières**, pour garantir la compatibilité avec les évolutions de Discord et l'ajout de nouvelles fonctionnalités stimulantes.
- **Gestion de la communauté** : suivi des retours, adaptation des fonctionnalités et amélioration constante du bot selon les besoins des utilisateurs.
- **Apprentissage et innovation** : ce projet m'a permis de consolider mes compétences en JavaScript, Node.js, architecture serveur et gestion de bases de données.
- **Collaboration avec un graphiste** pour créer des visuels attrayants et engageants.

Logo réalisé par **Hugo DROUET**.`,
        technologies: [
          "Git", "Linux", "Node.js", "JavaScript", "PostgreSQL",
          "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
          "Résolution de problèmes", "Adaptabilité",
        ],
      },
      inoxtag: {
        title: "Inoxtag",
        description: `Avec Unosial, j'ai eu l'opportunité de travailler avec **Inoxtag**, un influenceur majeur sur YouTube et Twitch. Avec le temps, avec deux amis, nous étions chargés de la gestion de sa communauté et du développement de ses outils interactifs.

- **Développement de bots Discord** pour automatiser la modération et améliorer l'interaction avec la communauté.
- **Gestion de la communauté** : modération, gestion des permissions et protection contre les comportements indésirables.`,
        technologies: [
          "Git", "Linux", "Node.js", "JavaScript", "PostgreSQL",
          "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
          "Résolution de problèmes", "Adaptabilité",
        ],
      },
      neopolis: {
        title: "Neopolis",
        description: `Neopolis est un jeu mobile de simulation de monopoly avec des mécaniques de jeu similaires à Pokémon Go. Mon rôle était d'aider bénévolement en créant des outils sur Discord pour aider l'équipe du jeu à porter assistance aux joueurs.

- **Développement d'outils Discord** pour la gestion de la communauté.
- **Création de mécanismes de jeu** pour les événements sur les réseaux, visant à renforcer l'engagement des joueurs.`,
        technologies: [
          "Git", "Node.js", "JavaScript", "PostgreSQL", "Linux",
          "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
          "Résolution de problèmes", "Adaptabilité",
        ],
      },
      raidprotect: {
        title: "RaidProtect",
        description: `**RaidProtect** vise à sécuriser et gérer des communautés en ligne sur Discord.

Mon rôle était de modérer la communauté puis dans un second temps, de gérer l'équipe de modération. Je n'ai pas participé au développement du bot, mais j'ai contribué à la gestion de la communauté.`,
        technologies: ["Travail en équipe", "Communication"],
      },
    },
  },
};

export default fr;
