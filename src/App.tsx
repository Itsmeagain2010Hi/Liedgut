/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Layout, Settings, Share2, Shield, Mail, Globe, Play, Tablet, Layers, Download, Search } from 'lucide-react';

// Components
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm border border-slate-100">
            <img src={`${import.meta.env.BASE_URL}songbook_logo.jpg`} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-slate-900">Liedgut</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#privacy" className="hover:text-blue-600 transition-colors">Impressum & Datenschutz</a>
          <a href="#support" className="hover:text-blue-600 transition-colors">Support</a>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200 flex items-center gap-2">
            <Download size={16} />
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight mb-6">
              Deine Notenbibliothek <br className="hidden sm:block" />
              <span className="text-blue-600">Liedgut.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Liedgut ist das digitale Archiv für anspruchsvolle Musiker. Verwalte deine .mxl Dateien und organisiere dein Repertoire in individuellen Liederbüchern.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 border border-slate-800">
                <Download size={20} />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-70 leading-none">Download im</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
        
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-16 lg:mt-0 px-4"
          >
          <div className="absolute -z-10 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          
          {/* Library View Card */}
          <div className="w-[180px] h-[360px] sm:w-[280px] sm:h-[560px] bg-slate-900 rounded-[1.2rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-2xl border-4 border-slate-800 relative z-10 overflow-hidden shrink-0">
            <div className="w-full h-full rounded-[0.8rem] sm:rounded-[1.4rem] overflow-hidden relative">
              <img src={`${import.meta.env.BASE_URL}screenshot_library.jpg`} alt="Liedgut Library View" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Floating UI badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 lg:-right-4 z-30 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[160px] sm:max-w-[200px]"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center overflow-hidden border border-slate-50">
              <img src={`${import.meta.env.BASE_URL}songbook_logo.jpg`} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-900 leading-none">Format engine</div>
              <div className="text-[8px] sm:text-[10px] text-slate-500 mt-1 line-clamp-1">Optimierte .mxl Darstellung</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Tablet className="text-blue-600" />,
      title: "Optimiert für Tablets",
      desc: "Egal ob großes oder kleines Tablet – Liedgut passt sich perfekt an jedes Bildschirmformat an."
    },
    {
      icon: <Layers className="text-blue-600" />,
      title: "Native .mxl Support",
      desc: "Importiere deine MusicXML-Dateien direkt. Alle dynamischen Formatierungen und Notenwerte bleiben erhalten."
    },
    {
      icon: <Layout className="text-blue-600" />,
      title: "Eigene Liederbücher",
      desc: "Erstelle unbegrenzt viele digitale Liederbücher. Sortiere deine Stücke nach Genre, Anlass oder Band."
    },
    {
      icon: <Music className="text-blue-600" />,
      title: "Transpositions-Funktion",
      desc: "Passe die Tonart deiner Songs unkompliziert an deine Bedürfnisse oder dein Instrument an."
    },
    {
      icon: <Globe className="text-blue-600" />,
      title: "Lokale Speicherung",
      desc: "Deine Daten gehören dir. Alle Songs werden sicher und offline auf deinem Gerät gespeichert."
    },
    {
      icon: <Search className="text-blue-600" />,
      title: "Intuitive Suche",
      desc: "Finde jeden Song mühelos und schnell dank der Indexierung deiner gesamten Bibliothek."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.2em] mb-4">Funktionen</h2>
          <h3 className="text-4xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight">Native Präzision & Performance.</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-[10px] font-extrabold text-blue-500 uppercase tracking-[0.2em] mb-4">In Aktion</h2>
          <h3 className="text-4xl font-sans font-extrabold text-white tracking-tight leading-tight mb-8">
            Perfekt abgestimmt auf deine Performance.
          </h3>
          <ul className="space-y-6">
            {[
              { title: "Kristallklare Noten", desc: "Dank Vektorgrafiken werden deine Partituren auf jedem Tablet gestochen scharf angezeigt." },
              { title: "Vollbild-Modus", desc: "Nutze jeden Millimeter deines Bildschirms für das, was zählt: deine Musik." },
              { title: "Dunkelmodus-Support", desc: "Schone deine Augen bei späten Proben oder auf der Bühne mit dem integrierten Dark Mode." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 p-2 sm:p-4 bg-slate-800 rounded-[2rem] sm:rounded-[2.5rem] border-[4px] sm:border-[8px] border-slate-700 shadow-2xl xl:-mr-20">
            <img 
              src={`${import.meta.env.BASE_URL}Screenshot_20260501_105708_Songbook Pro.jpg`} 
              alt="Liedgut App Tablet Interface"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-inner bg-slate-800 object-contain [image-rendering:-webkit-optimize-contrast] transform-gpu contrast-[1.02]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Tablet details */}
            <div className="absolute top-1/2 -left-1 w-1 h-8 bg-slate-600 rounded-r-full hidden sm:block"></div>
            <div className="absolute top-1/4 -right-2 w-1.5 h-12 bg-slate-900 rounded-l-full hidden sm:block shadow-[-1px_0_2px_rgba(0,0,0,0.5)] border border-white/5"></div>
          </div>
          
          {/* Luminous background gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight">Datenschutzerklärung</h2>
          </div>
          
          <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">1. Einleitung und Verantwortlicher</h3>
              <p>Diese Datenschutzerklärung informiert Sie darüber, wie diese App (nachfolgend „App“) mit personenbezogenen Daten umgeht. Verantwortlicher für diese App ist:</p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-mono text-sm leading-loose">
                [Dein Vor- und Nachname]<br />
                [Optional: Deine Straße und Hausnummer]<br />
                [Optional: Deine PLZ und Wohnort]<br />
                E-Mail: liedgut@outlook.de
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">2. Grundprinzip der lokalen Datenverarbeitung</h3>
              <p>Der Schutz Ihrer Privatsphäre ist uns ein zentrales Anliegen. Diese App wurde nach dem Prinzip „Privacy by Design“ entwickelt:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <span><strong>Keine Cloud-Anbindung:</strong> Die App verfügt über keine Funktionen zur Übertragung von Daten an Server.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <span><strong>Keine Analyse-Tools:</strong> Es werden keine Tracking-Dienste, Werbe-IDs oder Analyse-Tools (wie Google Analytics) verwendet.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <span><strong>Keine Registrierung:</strong> Zur Nutzung der App ist kein Benutzerkonto und keine Eingabe von persönlichen Daten erforderlich.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">3. Zugriff auf .mxl-Dateien</h3>
              <p>Damit die App ihren Zweck erfüllen kann, Musiknoten im MusicXML-Format (.mxl) anzuzeigen, benötigt sie Zugriff auf den Speicher Ihres Endgeräts.</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <span><strong>Zweck:</strong> Der Zugriff erfolgt ausschließlich, um die von Ihnen ausgewählten .mxl-Dateien einzulesen und grafisch auf dem Display darzustellen.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <span><strong>Umfang der Verarbeitung:</strong> Die App verarbeitet die Inhalte der Dateien ausschließlich lokal im Arbeitsspeicher Ihres Geräts. Es werden keine Kopien der Notendateien erstellt oder an Dritte weitergegeben.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <span><strong>Berechtigungen:</strong> Die App fordert den Zugriff auf den Speicher (Media/Files) nur an, um die Anzeige der Dateien technisch zu ermöglichen. Sie können diese Berechtigung jederzeit in den Systemeinstellungen Ihres Geräts widerrufen.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">4. Erhebung von technischen Daten</h3>
              <p>Wir als Entwickler erheben keine Daten. Beim Herunterladen und Nutzen der App über den Google Play Store werden jedoch automatisch Informationen durch den Store-Betreiber (Google) erfasst (z. B. Gerätemodell, Betriebssystemversion).</p>
              <p>Sofern Sie der Übermittlung von Nutzungs- und Diagnosedaten an Google in Ihren Geräteeinstellungen zugestimmt haben, erhalten wir ggf. anonymisierte Absturzberichte, um die App zu verbessern. Diese enthalten keine Informationen, mit denen wir Sie persönlich identifizieren könnten.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">5. Rechte der Nutzer</h3>
              <p>Da die App keine personenbezogenen Daten auf externen Servern speichert, bestehen in der Regel keine Datenbestände, über die wir Auskunft erteilen oder die wir löschen könnten. Alle Daten verbleiben unter Ihrer vollen Kontrolle auf Ihrem Gerät. Bei Fragen können Sie sich jedoch jederzeit an die oben genannte E-Mail-Adresse wenden.</p>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">6. Änderungen</h3>
              <p>Diese Datenschutzerklärung kann gelegentlich aktualisiert werden, um sie an neue Funktionen der App oder rechtliche Anforderungen anzupassen.</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-8">Stand: Mai 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="support" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl shadow-slate-200 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Support Community</h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              Werde Teil der Liedgut Community. Erhalte Hilfe, teile Feedback und hilf uns, die beste App für Musiker zu bauen.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="mailto:liedgut@outlook.de?subject=Anfrage: Liedgut App" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 border border-blue-500"
              >
                <Mail size={20} />
                Support kontaktieren
              </a>
              <p className="text-sm text-slate-400 font-medium">
                Oder direkt an: <span className="text-white selection:bg-blue-500">liedgut@outlook.de</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm">
                <img src={`${import.meta.env.BASE_URL}songbook_logo.jpg`} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-slate-900">Liedgut</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Dein digitaler Musik-Begleiter für .mxl Dateien und individuelle Liederbücher. Entwickelt für die perfekte Organisation deiner Noten.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6 text-blue-600">Rechtliches</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#impressum" className="hover:text-blue-600 transition-colors">Impressum</a></li>
              <li><a href="#privacy" className="hover:text-blue-600 transition-colors">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6 text-blue-600">Connect</h4>
            <div className="flex gap-4">
              <a href="mailto:liedgut@outlook.de?subject=Kontakt: Liedgut" className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 Liedgut. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <PrivacyPolicy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
