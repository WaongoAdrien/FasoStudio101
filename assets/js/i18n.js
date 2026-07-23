/**
 * Studio 101 - EN/FR language toggle
 * Applies translations to any element carrying a data-i18n / data-i18n-placeholder
 * attribute, persists the choice in localStorage, and keeps it in sync across pages.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "studio101_lang";

  var dict = {
    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.getStarted": "Get Started",
      "nav.emailUs": "Email Us",

      "breadcrumb.home": "Home",

      "footer.quickLinks": "Quick Links",
      "footer.ourServices": "Our Services",
      "footer.phoneLabel": "Phone:",
      "footer.emailLabel": "Email:",
      "footer.location": "Clarksville, TN, USA",
      "footer.rights": "All rights reserved.",

      "service.mobile.name": "Mobile App Development",
      "service.web.name": "Web Apps &amp; PWAs",
      "service.mvp.name": "MVP Development",
      "service.backend.name": "Backends &amp; Data",
      "service.deploy.name": "App Store Deployment",
      "service.maintenance.name": "Maintenance &amp; Updates",

      "hero.subtitle": "Studio 101 designs, builds, and launches mobile apps, web apps, and PWAs for small businesses, community organizations, entrepreneurs, and independent landlords. We ship our own products too, so we know the road from idea to App Store firsthand.",
      "hero.ctaPrimary": "Start Your Project",
      "hero.ctaSecondary": "Our Services",
      "hero.stat1Label": "Apps Shipped",
      "hero.stat2Label": "Core Services",

      "heroFloat.activeUsers": "Active Users",
      "heroFloat.revenueGrowth": "Revenue Growth",
      "heroFloat.timeSaved": "Time Saved",

      "home.about.subtitle": "Who We Are",
      "home.about.title": "An App  & Website studio Built, For Growth",
      "home.about.text": "Studio 101 is an independent app development studio based in Clarksville, Tennessee. We design, build, and launch mobile apps, web apps, and PWAs for founders, small businesses, and community organizations who want software that actually fits how they work.",
      "home.about.feat1": "Mobile apps, web apps, and PWAs.  One team, start to finish.",
      "home.about.feat2": "A deep focus on small businesses, community organizations, and entrepreneurs who deserve great software too.",
      "home.about.feat3": "We ship our own products, so we've walked the path from idea to App Store.",
      "home.about.cta": "Our Story",
      "home.about.stat1": "Products Shipped",
      "home.about.stat2": "Services Offered",

      "home.services.title": "Services",
      "home.services.subtitle": "Everything you need to take an app idea from sketch to the App Store, and keep it running afterward.",
      "home.services.mobile.desc": "iOS &amp; Android with React Native and Expo! one codebase, both stores.",
      "home.services.web.desc": "Fast, installable web applications: dashboards, portals, booking tools, directories.",
      "home.services.mvp.desc": "Scoping your idea down to a launchable first version, built in weeks.",
      "home.services.backend.desc": "Firebase authentication, Firestore databases, storage, and notifications.",
      "home.services.deploy.desc": "App Store Connect, Google Play, signing, review, and release management.",
      "home.services.maintenance.desc": "Bug fixes, OS updates, new features, and store compliance.",
      "home.services.learnMore": "Learn More",
      "home.services.ctaTitle": "Ready to Build Something?",
      "home.services.ctaText": "Let's talk about your idea and figure out the fastest path to launch.",
      "home.services.ctaButton": "Get Started Today",

      "home.whyus.title": "Why Us",
      "home.whyus.subtitle": "Founder-built, not corporate agency-speak.",
      "home.whyus.card1.title": "Founder-Built, Not Corporate",
      "home.whyus.card1.text": "You work directly with the person building your app, with no account managers, no handoffs, and no runaround.",
      "home.whyus.card2.title": "We've Shipped Our Own Apps",
      "home.whyus.card2.text": "BurkinaBizz and MyRentApp are our own products, live in the App Store, and we've walked the full journey ourselves.",
      "home.whyus.card3.title": "Built Around Real People",
      "home.whyus.card3.text": "We build for the people big agencies overlook: small businesses, community organizations, and independent landlords, with software shaped around how they actually work.",
      "home.whyus.heading": "Why Studio 101",
      "home.whyus.lead": "We keep things plain, honest, and moving, from your first message to your app going live.",
      "home.whyus.item1.title": "Plain-English Communication",
      "home.whyus.item1.text": "No jargon. You always know where your project stands.",
      "home.whyus.item2.title": "Firebase-Powered Backends",
      "home.whyus.item2.text": "Secure auth, real-time data, and storage baked in from day one.",
      "home.whyus.item3.title": "We Handle the App Store Maze",
      "home.whyus.item3.text": "Signing, review, and compliance, all managed for you.",
      "home.whyus.cta2": "See Our Services",

      "services.page.title": "Services",
      "services.page.subtitle": "Everything you need to take an app idea from sketch to the App Store, and keep it running afterward.",
      "services.whatsIncluded": "What's Included",

      "services.mobile.lead": "iOS &amp; Android with React Native and Expo: one codebase, both stores.",
      "services.mobile.desc": "We build native-feeling mobile apps for iPhone and Android from a single React Native + Expo codebase, so you get both platforms without paying to build twice. From your first tap-through prototype to a polished, store-ready app, we handle the interface, the logic, and everything in between.",
      "services.mobile.feat1.title": "iOS &amp; Android, One Codebase",
      "services.mobile.feat1.text": "Built once in React Native, shipped to both the App Store and Google Play.",
      "services.mobile.feat2.title": "Expo Tooling",
      "services.mobile.feat2.text": "Faster builds, over-the-air updates, and a smoother path through app review.",
      "services.mobile.feat3.title": "Custom UI",
      "services.mobile.feat3.text": "Interfaces designed around how your users actually work, not a generic template.",
      "services.mobile.feat4.title": "Testing &amp; QA",
      "services.mobile.feat4.text": "Real-device testing before anything reaches the app stores.",

      "services.web.lead": "Fast, installable web applications: dashboards, portals, booking tools, directories.",
      "services.web.desc": "Not every idea needs a native app on day one. We build web apps and Progressive Web Apps (PWAs) that run in the browser, install to a home screen, and work offline where it matters. A great fit for dashboards, booking tools, member portals, and directories.",
      "services.web.feat1.title": "Installable &amp; Offline-Ready",
      "services.web.feat1.text": "Add-to-home-screen support with offline caching via Capacitor and PWA tooling.",
      "services.web.feat2.title": "Built for Speed",
      "services.web.feat2.text": "Lightweight, fast-loading pages that work well on any connection.",
      "services.web.feat3.title": "Dashboards &amp; Portals",
      "services.web.feat3.text": "Admin dashboards, customer portals, and internal tools built to your workflow.",
      "services.web.feat4.title": "Directories &amp; Booking Tools",
      "services.web.feat4.text": "Searchable listings and booking flows, built for real-world use.",

      "services.mvp.lead": "Scoping your idea down to a launchable first version, built in weeks.",
      "services.mvp.desc": "Most ideas are bigger than they need to be for a first launch. We work with you to scope down to the smallest version that proves the idea works, then build it fast, so you're gathering real feedback instead of guessing.",
      "services.mvp.feat1.title": "Scope &amp; Feature Planning",
      "services.mvp.feat1.text": "We help cut the feature list down to what your first users actually need.",
      "services.mvp.feat2.title": "Built in Weeks",
      "services.mvp.feat2.text": "A working, testable version fast, not months of planning before anything ships.",

      "services.backend.lead": "Firebase authentication, Firestore databases, storage, and notifications.",
      "services.backend.desc": "Every app needs somewhere to keep its data safe and its users signed in. We build on Firebase: authentication, Firestore databases, file storage, and push notifications, so your app has a solid, scalable backend without you needing to manage servers.",
      "services.backend.feat1.title": "Authentication",
      "services.backend.feat1.text": "Secure sign-up and login, including social sign-in options.",
      "services.backend.feat2.title": "Firestore Databases",
      "services.backend.feat2.text": "Real-time data that updates instantly across every device.",
      "services.backend.feat3.title": "Storage",
      "services.backend.feat3.text": "Photos, documents, and files stored and served reliably.",
      "services.backend.feat4.title": "Push Notifications",
      "services.backend.feat4.text": "Keep users in the loop with timely, relevant alerts.",

      "services.deploy.lead": "App Store Connect, Google Play, signing, review, and release management.",
      "services.deploy.desc": "Getting an app approved and live is its own maze of certificates, provisioning profiles, and review guidelines. We handle App Store Connect and Google Play Console setup, code signing, submission, and the back-and-forth with app review, so your launch doesn't stall on paperwork.",
      "services.deploy.feat1.title": "App Store Connect Setup",
      "services.deploy.feat1.text": "Listings, screenshots, and metadata prepared and submitted correctly the first time.",
      "services.deploy.feat2.title": "Google Play Console Setup",
      "services.deploy.feat2.text": "Signing, release tracks, and store listings handled end to end.",
      "services.deploy.feat3.title": "Review Management",
      "services.deploy.feat3.text": "We track submissions and respond quickly if reviewers ask for changes.",

      "services.maintenance.lead": "Bug fixes, OS updates, new features, and store compliance.",
      "services.maintenance.desc": "Launch is the beginning, not the finish line. We keep your app running as iOS and Android evolve: fixing bugs, shipping new features, and keeping you compliant with ever-changing store policies.",
      "services.maintenance.feat1.title": "Bug Fixes",
      "services.maintenance.feat1.text": "Issues found and fixed quickly, before they affect more users.",
      "services.maintenance.feat2.title": "OS &amp; Store Compliance Updates",
      "services.maintenance.feat2.text": "Staying current as Apple and Google change their requirements.",
      "services.maintenance.feat3.title": "New Features",
      "services.maintenance.feat3.text": "Your app keeps growing after launch, not gathering dust.",

      "services.process.title": "Our Process",
      "services.process.step1.title": "Discovery",
      "services.process.step1.text": "We talk through your idea, your users, and what a first version really needs.",
      "services.process.step2.title": "Design",
      "services.process.step2.text": "Screens and flows mapped out so you can see and approve the app before we build it.",
      "services.process.step3.title": "Build",
      "services.process.step3.text": "We develop the app, the backend, and everything connecting them.",
      "services.process.step4.title": "Test &amp; Refine",
      "services.process.step4.text": "Real-device testing and feedback rounds before anything goes live.",
      "services.process.step5.title": "Launch",
      "services.process.step5.text": "Submission to the App Store and Google Play, handled end to end.",
      "services.process.step6.title": "Grow",
      "services.process.step6.text": "Ongoing maintenance, updates, and new features as your app grows.",

      "services.techstack.title": "Our Tech Stack",

      "about.page.title": "About Studio 101",
      "about.page.subtitle": "An independent app studio built to support small businesses, communities, and property owners.",

      "about.story.subtitle": "How We Started",
      "about.story.title": "Built for Small Businesses, Communities, and Property Owners",
      "about.story.p1": "Studio 101 is an independent app development studio based in Clarksville, Tennessee. We design, build, and launch mobile apps, web apps, and PWAs, with a special focus on serving small businesses, community organizations, and independent landlords and property owners.",
      "about.story.p2": "We ship our own products, so we know the full journey from idea to App Store firsthand, not just in theory, but from having done it ourselves.",
      "about.story.feat1": "Founder-built, with no agency layers and no account managers.",
      "about.story.feat2": "We build and maintain our own apps, live in the App Store.",
      "about.story.feat3": "Plain-English communication from discovery to launch.",

      "about.founder.subtitle": "Founder-Led",
      "about.founder.p1": "Studio 101 was founded to build the kind of apps everyday people need: tools that help small businesses and community organizations reach the people they serve, and software that helps landlords and property owners run things without needing an agency-sized budget.",
      "about.founder.p2": "Studio 101 is founder-led. When you work with us, you're working directly with the person designing and building your app, from the first conversation through launch and beyond.",

      "about.whoWeServe.title": "Who We Build For",
      "about.whoWeServe.subtitle": "Studio 101 works best with people who want software built for how they actually operate.",
      "about.whoWeServe.card1.title": "Small Businesses",
      "about.whoWeServe.card1.text": "Booking tools, directories, and portals built for how small teams actually work, without enterprise bloat.",
      "about.whoWeServe.card2.title": "Community Organizations",
      "about.whoWeServe.card2.text": "Platforms that help community groups organize, connect, and stay in touch with the people they serve.",
      "about.whoWeServe.card3.title": "Independent Landlords &amp; Property Owners",
      "about.whoWeServe.card3.text": "Rental management tools for people who manage their own properties without a big management company.",

      "about.products.title": "Products We've Shipped",
      "about.products.subtitle": "We build our own apps too, so we've walked the full path from idea to App Store ourselves.",
      "about.products.burkinabizz.text": "A business directory connecting communities worldwide with African-owned businesses.",
      "about.products.myrentapp.text": "A rental management app built for independent landlords and property owners.",
      "about.products.ctaTitle": "Want an App Like These?",
      "about.products.ctaText": "We can build the same care and craft into your idea.",
      "about.products.ctaButton": "Let's Talk",

      "contact.page.title": "Contact Us",
      "contact.page.subtitle": "Tell us about your idea, and we'll get back to you personally.",

      "contact.form.heading": "Let's Start a Conversation",
      "contact.form.subtext": "Tell us about your app idea, your business, or your property, and we'll get back to you personally.",
      "contact.form.namePlaceholder": "Your Name",
      "contact.form.emailPlaceholder": "Email Address",
      "contact.form.subjectPlaceholder": "What's this about?",
      "contact.form.messagePlaceholder": "Tell us more about your project...",
      "contact.form.submit": "Send Message",
      "contact.form.alertSuccessTitle": "Message Sent!",
      "contact.form.alertSuccessText": "Thanks for reaching out. We've received your message and will get back to you personally soon. Please don't submit the form again; it just creates a duplicate.",
      "contact.form.alertSuccessButton": "Got it",
      "contact.form.alertErrorTitle": "Something Went Wrong",
      "contact.form.alertErrorText": "We couldn't send your message. Please try again, or email us directly at thelesphore1@gmail.com.",
      "contact.form.alertErrorButton": "OK",
      "contact.form.alertCaptchaTitle": "Please Verify You're Human",
      "contact.form.alertCaptchaText": "Please complete the reCAPTCHA check before sending your message.",
      "contact.form.alertCaptchaButton": "OK",

      "contact.info.heading": "Let's Build Something Together",
      "contact.info.subtext": "Prefer email or a quick call? Whatever's easiest for you works for us.",
      "contact.method.emailTitle": "Email Us",
      "contact.method.emailNote": "Best for project details",
      "contact.method.facebookTitle": "Facebook",
      "contact.method.facebookNote": "Follow us for updates",
      "contact.method.phoneTitle": "Call Us",
      "contact.method.phoneNote": "Best for a quick chat",
      "contact.method.locationTitle": "Location",
      "contact.method.locationNote": "Remote-first, serving clients everywhere"
    },

    fr: {
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.getStarted": "Commencer",
      "nav.emailUs": "Envoyer un e-mail",

      "breadcrumb.home": "Accueil",

      "footer.quickLinks": "Liens rapides",
      "footer.ourServices": "Nos services",
      "footer.phoneLabel": "Téléphone :",
      "footer.emailLabel": "E-mail :",
      "footer.location": "Clarksville, TN, États-Unis",
      "footer.rights": "Tous droits réservés.",

      "service.mobile.name": "Développement d'applications mobiles",
      "service.web.name": "Applications web &amp; PWA",
      "service.mvp.name": "Développement de MVP",
      "service.backend.name": "Backends &amp; données",
      "service.deploy.name": "Publication sur les stores",
      "service.maintenance.name": "Maintenance &amp; mises à jour",

      "hero.subtitle": "Studio 101 conçoit, construit et lance des applications mobiles, des applications web et des PWA pour les petites entreprises, les organisations communautaires, les entrepreneurs et les propriétaires bailleurs indépendants. Nous lançons aussi nos propres produits, nous connaissons donc le chemin de l'idée à l'App Store de première main.",
      "hero.ctaPrimary": "Démarrer votre projet",
      "hero.ctaSecondary": "Nos services",
      "hero.stat1Label": "Applications lancées",
      "hero.stat2Label": "Services principaux",

      "heroFloat.activeUsers": "Utilisateurs actifs",
      "heroFloat.revenueGrowth": "Croissance du chiffre d'affaires",
      "heroFloat.timeSaved": "Temps économisé",

      "home.about.subtitle": "Qui nous sommes",
      "home.about.title": "Un studio d'applications créé pour vos besions",
      "home.about.text": "Studio 101 est un studio de développement d'applications indépendant basé à Clarksville, dans le Tennessee. Nous concevons, construisons et lançons des applications mobiles, des applications web et des PWA pour les fondateurs, les petites entreprises et les organisations communautaires qui veulent un logiciel réellement adapté à leur façon de travailler.",
      "home.about.feat1": "Applications mobiles, applications web et PWA, une seule équipe, du début à la fin.",
      "home.about.feat2": "Un accent particulier sur les petites entreprises, les organisations communautaires et les entrepreneurs qui méritent eux aussi de bons logiciels.",
      "home.about.feat3": "Nous lançons nos propres produits, nous avons donc parcouru le chemin de l'idée à l'App Store.",
      "home.about.cta": "Notre histoire",
      "home.about.stat1": "Produits lancés",
      "home.about.stat2": "Services proposés",

      "home.services.title": "Services",
      "home.services.subtitle": "Tout ce dont vous avez besoin pour faire passer une idée d'application du croquis à l'App Store, et la faire vivre ensuite.",
      "home.services.mobile.desc": "iOS et Android avec React Native et Expo! un seul code, les deux stores.",
      "home.services.web.desc": "Applications web rapides et installables : tableaux de bord, portails, outils de réservation, annuaires.",
      "home.services.mvp.desc": "Recentrer votre idée sur une première version lançable, construite en quelques semaines.",
      "home.services.backend.desc": "Authentification Firebase, bases de données Firestore, stockage et notifications.",
      "home.services.deploy.desc": "App Store Connect, Google Play, signature, validation et gestion des publications.",
      "home.services.maintenance.desc": "Corrections de bugs, mises à jour OS, nouvelles fonctionnalités et conformité aux stores.",
      "home.services.learnMore": "En savoir plus",
      "home.services.ctaTitle": "Prêt à construire quelque chose ?",
      "home.services.ctaText": "Parlons de votre idée et trouvons le chemin le plus rapide vers le lancement.",
      "home.services.ctaButton": "Commencer dès aujourd'hui",

      "home.whyus.title": "Pourquoi nous",
      "home.whyus.subtitle": "Créé par le fondateur, sans jargon d'agence.",
      "home.whyus.card1.title": "Créé par le fondateur, pas une agence",
      "home.whyus.card1.text": "Vous travaillez directement avec la personne qui construit votre application, sans chargés de compte, sans transferts, sans détours.",
      "home.whyus.card2.title": "Nous avons lancé nos propres applications",
      "home.whyus.card2.text": "BurkinaBizz et MyRentApp sont nos propres produits, disponibles sur l'App Store, et nous avons parcouru tout le chemin nous-mêmes.",
      "home.whyus.card3.title": "Conçu autour de vraies personnes",
      "home.whyus.card3.text": "Nous créons pour ceux que les grandes agences négligent : petites entreprises, organisations communautaires et propriétaires bailleurs indépendants, avec des logiciels adaptés à leur façon réelle de travailler.",
      "home.whyus.heading": "Pourquoi Studio 101",
      "home.whyus.lead": "Nous restons simples, honnêtes et efficaces, de votre premier message jusqu'au lancement de votre application.",
      "home.whyus.item1.title": "Une communication claire",
      "home.whyus.item1.text": "Pas de jargon. Vous savez toujours où en est votre projet.",
      "home.whyus.item2.title": "Des backends propulsés par Firebase",
      "home.whyus.item2.text": "Authentification sécurisée, données en temps réel et stockage intégrés dès le premier jour.",
      "home.whyus.item3.title": "Nous gérons le labyrinthe des stores",
      "home.whyus.item3.text": "Signature, validation et conformité, tout est pris en charge pour vous.",
      "home.whyus.cta2": "Voir nos services",

      "services.page.title": "Services",
      "services.page.subtitle": "Tout ce dont vous avez besoin pour faire passer une idée d'application du croquis à l'App Store, et la faire vivre ensuite.",
      "services.whatsIncluded": "Ce qui est inclus",

      "services.mobile.lead": "iOS et Android avec React Native et Expo : un seul code, les deux stores.",
      "services.mobile.desc": "Nous créons des applications mobiles à l'aspect natif pour iPhone et Android à partir d'une seule base de code React Native + Expo, afin que vous obteniez les deux plateformes sans payer pour construire deux fois. De votre premier prototype cliquable à une application soignée et prête pour les stores, nous gérons l'interface, la logique et tout ce qui se trouve entre les deux.",
      "services.mobile.feat1.title": "iOS et Android, un seul code",
      "services.mobile.feat1.text": "Construit une fois avec React Native, publié à la fois sur l'App Store et Google Play.",
      "services.mobile.feat2.title": "Outils Expo",
      "services.mobile.feat2.text": "Compilations plus rapides, mises à jour à distance (OTA) et un parcours de validation plus fluide.",
      "services.mobile.feat3.title": "Interface sur mesure",
      "services.mobile.feat3.text": "Des interfaces conçues autour de la façon dont vos utilisateurs travaillent réellement, pas un modèle générique.",
      "services.mobile.feat4.title": "Tests &amp; assurance qualité",
      "services.mobile.feat4.text": "Des tests sur appareils réels avant toute publication sur les stores.",

      "services.web.lead": "Applications web rapides et installables : tableaux de bord, portails, outils de réservation, annuaires.",
      "services.web.desc": "Toutes les idées n'ont pas besoin d'une application native dès le premier jour. Nous créons des applications web et des Progressive Web Apps (PWA) qui fonctionnent dans le navigateur, s'installent sur l'écran d'accueil et fonctionnent hors ligne quand c'est nécessaire. Parfait pour les tableaux de bord, les outils de réservation, les portails membres et les annuaires.",
      "services.web.feat1.title": "Installable et disponible hors ligne",
      "services.web.feat1.text": "Prise en charge de l'ajout à l'écran d'accueil avec mise en cache hors ligne via Capacitor et les outils PWA.",
      "services.web.feat2.title": "Conçu pour la rapidité",
      "services.web.feat2.text": "Des pages légères et rapides qui fonctionnent bien sur toute connexion.",
      "services.web.feat3.title": "Tableaux de bord &amp; portails",
      "services.web.feat3.text": "Tableaux de bord d'administration, portails clients et outils internes conçus selon votre fonctionnement.",
      "services.web.feat4.title": "Annuaires &amp; outils de réservation",
      "services.web.feat4.text": "Des annuaires consultables et des parcours de réservation conçus pour un usage réel.",

      "services.mvp.lead": "Recentrer votre idée sur une première version lançable, construite en quelques semaines.",
      "services.mvp.desc": "La plupart des idées sont plus grandes que nécessaire pour un premier lancement. Nous travaillons avec vous pour recentrer votre projet sur la plus petite version qui prouve que l'idée fonctionne, puis nous la construisons rapidement, pour que vous recueilliez de vrais retours au lieu de deviner.",
      "services.mvp.feat1.title": "Cadrage &amp; planification des fonctionnalités",
      "services.mvp.feat1.text": "Nous vous aidons à réduire la liste des fonctionnalités à ce dont vos premiers utilisateurs ont réellement besoin.",
      "services.mvp.feat2.title": "Construit en quelques semaines",
      "services.mvp.feat2.text": "Une version fonctionnelle et testable rapidement, pas des mois de planification avant le moindre lancement.",

      "services.backend.lead": "Authentification Firebase, bases de données Firestore, stockage et notifications.",
      "services.backend.desc": "Chaque application a besoin d'un endroit sûr pour ses données et pour connecter ses utilisateurs. Nous nous appuyons sur Firebase : authentification, bases de données Firestore, stockage de fichiers et notifications push, pour que votre application dispose d'un backend solide et évolutif, sans que vous ayez à gérer de serveurs.",
      "services.backend.feat1.title": "Authentification",
      "services.backend.feat1.text": "Inscription et connexion sécurisées, y compris les options de connexion via les réseaux sociaux.",
      "services.backend.feat2.title": "Bases de données Firestore",
      "services.backend.feat2.text": "Des données en temps réel qui se mettent à jour instantanément sur tous les appareils.",
      "services.backend.feat3.title": "Stockage",
      "services.backend.feat3.text": "Photos, documents et fichiers stockés et servis de manière fiable.",
      "services.backend.feat4.title": "Notifications push",
      "services.backend.feat4.text": "Tenez vos utilisateurs informés avec des alertes pertinentes et au bon moment.",

      "services.deploy.lead": "App Store Connect, Google Play, signature, validation et gestion des publications.",
      "services.deploy.desc": "Faire approuver et publier une application est un véritable labyrinthe de certificats, de profils d'approvisionnement et de règles de validation. Nous prenons en charge la configuration d'App Store Connect et de Google Play Console, la signature du code, la soumission et les échanges avec les évaluateurs, pour que votre lancement ne soit pas bloqué par la paperasse.",
      "services.deploy.feat1.title": "Configuration App Store Connect",
      "services.deploy.feat1.text": "Fiches, captures d'écran et métadonnées préparées et soumises correctement dès la première fois.",
      "services.deploy.feat2.title": "Configuration Google Play Console",
      "services.deploy.feat2.text": "Signature, canaux de publication et fiches de store gérés de bout en bout.",
      "services.deploy.feat3.title": "Gestion de la validation",
      "services.deploy.feat3.text": "Nous suivons les soumissions et répondons rapidement si les évaluateurs demandent des modifications.",

      "services.maintenance.lead": "Corrections de bugs, mises à jour OS, nouvelles fonctionnalités et conformité aux stores.",
      "services.maintenance.desc": "Le lancement est un début, pas une ligne d'arrivée. Nous maintenons votre application à jour à mesure qu'iOS et Android évoluent : en corrigeant les bugs, en livrant de nouvelles fonctionnalités et en vous gardant conforme aux politiques changeantes des stores.",
      "services.maintenance.feat1.title": "Corrections de bugs",
      "services.maintenance.feat1.text": "Les problèmes sont détectés et corrigés rapidement, avant d'affecter davantage d'utilisateurs.",
      "services.maintenance.feat2.title": "Mises à jour de conformité OS &amp; stores",
      "services.maintenance.feat2.text": "Rester à jour à mesure qu'Apple et Google font évoluer leurs exigences.",
      "services.maintenance.feat3.title": "Nouvelles fonctionnalités",
      "services.maintenance.feat3.text": "Votre application continue de grandir après son lancement, au lieu de prendre la poussière.",

      "services.process.title": "Notre processus",
      "services.process.step1.title": "Découverte",
      "services.process.step1.text": "Nous discutons de votre idée, de vos utilisateurs et de ce dont une première version a vraiment besoin.",
      "services.process.step2.title": "Conception",
      "services.process.step2.text": "Les écrans et parcours sont conçus pour que vous puissiez voir et valider l'application avant sa construction.",
      "services.process.step3.title": "Construction",
      "services.process.step3.text": "Nous développons l'application, le backend et tout ce qui les relie.",
      "services.process.step4.title": "Tests &amp; ajustements",
      "services.process.step4.text": "Des tests sur appareils réels et des cycles de retours avant toute mise en ligne.",
      "services.process.step5.title": "Lancement",
      "services.process.step5.text": "Soumission à l'App Store et à Google Play, gérée de bout en bout.",
      "services.process.step6.title": "Croissance",
      "services.process.step6.text": "Maintenance continue, mises à jour et nouvelles fonctionnalités à mesure que votre application se développe.",

      "services.techstack.title": "Notre stack technique",

      "about.page.title": "À propos de Studio 101",
      "about.page.subtitle": "Un studio d'applications indépendant créé pour soutenir les petites entreprises, les communautés et les propriétaires.",

      "about.story.subtitle": "Comment nous avons commencé",
      "about.story.title": "Créé pour les petites entreprises, les communautés et les propriétaires",
      "about.story.p1": "Studio 101 est un studio de développement d'applications indépendant basé à Clarksville, dans le Tennessee. Nous concevons, construisons et lançons des applications mobiles, des applications web et des PWA, avec un accent particulier sur les petites entreprises, les organisations communautaires et les propriétaires bailleurs indépendants.",
      "about.story.p2": "Nous lançons nos propres produits, nous connaissons donc le chemin complet de l'idée à l'App Store de première main, pas seulement en théorie, mais pour l'avoir vécu nous-mêmes.",
      "about.story.feat1": "Créé par le fondateur, sans échelons d'agence et sans chargés de compte.",
      "about.story.feat2": "Nous construisons et maintenons nos propres applications, disponibles sur l'App Store.",
      "about.story.feat3": "Une communication claire, de la découverte jusqu'au lancement.",

      "about.founder.subtitle": "Dirigé par son fondateur",
      "about.founder.p1": "Studio 101 a été fondé pour créer le genre d'applications dont les gens ont vraiment besoin au quotidien : des outils qui aident les petites entreprises et les organisations communautaires à atteindre les personnes qu'elles servent, et des logiciels qui aident les propriétaires bailleurs à gérer leurs affaires sans avoir besoin d'un budget d'agence.",
      "about.founder.p2": "Studio 101 est dirigé par son fondateur. Quand vous travaillez avec nous, vous travaillez directement avec la personne qui conçoit et construit votre application, de la première conversation jusqu'au lancement et au-delà.",

      "about.whoWeServe.title": "Pour qui nous créons",
      "about.whoWeServe.subtitle": "Studio 101 fonctionne mieux avec des personnes qui veulent des logiciels conçus pour la façon dont elles fonctionnent réellement.",
      "about.whoWeServe.card1.title": "Petites entreprises",
      "about.whoWeServe.card1.text": "Outils de réservation, annuaires et portails conçus pour la façon dont les petites équipes fonctionnent réellement, sans lourdeur inutile.",
      "about.whoWeServe.card2.title": "Organisations communautaires",
      "about.whoWeServe.card2.text": "Des plateformes qui aident les groupes communautaires à s'organiser, à se connecter et à rester en contact avec les personnes qu'ils servent.",
      "about.whoWeServe.card3.title": "Propriétaires bailleurs indépendants",
      "about.whoWeServe.card3.text": "Des outils de gestion locative pour les personnes qui gèrent elles-mêmes leurs biens sans grande société de gestion.",

      "about.products.title": "Produits que nous avons lancés",
      "about.products.subtitle": "Nous créons aussi nos propres applications, nous avons donc parcouru tout le chemin de l'idée à l'App Store nous-mêmes.",
      "about.products.burkinabizz.text": "Un annuaire d'entreprises qui connecte des communautés du monde entier aux entreprises africaines.",
      "about.products.myrentapp.text": "Une application de gestion locative conçue pour les propriétaires bailleurs indépendants.",
      "about.products.ctaTitle": "Vous voulez une application comme celles-ci ?",
      "about.products.ctaText": "Nous pouvons apporter le même soin et le même savoir-faire à votre idée.",
      "about.products.ctaButton": "Discutons-en",

      "contact.page.title": "Contactez-nous",
      "contact.page.subtitle": "Parlez-nous de votre idée, et nous vous répondrons personnellement.",

      "contact.form.heading": "Démarrons une conversation",
      "contact.form.subtext": "Parlez-nous de votre idée d'application, de votre entreprise ou de votre bien, et nous vous répondrons personnellement.",
      "contact.form.namePlaceholder": "Votre nom",
      "contact.form.emailPlaceholder": "Adresse e-mail",
      "contact.form.subjectPlaceholder": "De quoi s'agit-il ?",
      "contact.form.messagePlaceholder": "Parlez-nous en davantage sur votre projet...",
      "contact.form.submit": "Envoyer le message",
      "contact.form.alertSuccessTitle": "Message envoyé !",
      "contact.form.alertSuccessText": "Merci de nous avoir contactés. Nous avons bien reçu votre message et vous répondrons personnellement bientôt. Merci de ne pas soumettre le formulaire à nouveau, cela créerait simplement un doublon.",
      "contact.form.alertSuccessButton": "Compris",
      "contact.form.alertErrorTitle": "Une erreur s'est produite",
      "contact.form.alertErrorText": "Nous n'avons pas pu envoyer votre message. Veuillez réessayer, ou écrivez-nous directement à thelesphore1@gmail.com.",
      "contact.form.alertErrorButton": "OK",
      "contact.form.alertCaptchaTitle": "Veuillez confirmer que vous n'êtes pas un robot",
      "contact.form.alertCaptchaText": "Veuillez compléter la vérification reCAPTCHA avant d'envoyer votre message.",
      "contact.form.alertCaptchaButton": "OK",

      "contact.info.heading": "Construisons quelque chose ensemble",
      "contact.info.subtext": "Vous préférez un e-mail ou un appel rapide ? Ce qui vous convient le mieux nous convient aussi.",
      "contact.method.emailTitle": "Envoyez-nous un e-mail",
      "contact.method.emailNote": "Idéal pour les détails du projet",
      "contact.method.facebookTitle": "Facebook",
      "contact.method.facebookNote": "Suivez-nous pour les actualités",
      "contact.method.phoneTitle": "Appelez-nous",
      "contact.method.phoneNote": "Idéal pour une discussion rapide",
      "contact.method.locationTitle": "Localisation",
      "contact.method.locationNote": "À distance avant tout, nous servons des clients partout"
    }
  };

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable - language just won't persist across pages */
    }
  }

  function applyLanguage(lang) {
    var table = dict[lang] || dict.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table[key] != null) {
        el.innerHTML = table[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (table[key] != null) {
        el.setAttribute("placeholder", table[key]);
      }
    });

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-toggle__btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    window.STUDIO101_LANG = lang;
    document.dispatchEvent(new CustomEvent("studio101:langchange", { detail: { lang: lang } }));
  }

  function initToggle() {
    document.querySelectorAll(".lang-toggle__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        storeLang(lang);
        applyLanguage(lang);
      });
    });
  }

  window.STUDIO101_I18N = {
    dict: dict,
    apply: applyLanguage
  };

  var initialLang = getStoredLang() || "en";
  initToggle();
  applyLanguage(initialLang);
})();
