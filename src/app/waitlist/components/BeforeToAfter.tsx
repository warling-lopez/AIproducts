import React, { useState } from "react";
import Image from "next/image";
import { Crown, Users, Zap, Globe, ArrowRight } from "lucide-react";

type Lang = "en" | "es";

interface Feature {
  icon: "Crown" | "Users" | "Zap" | "Globe";
  title: string;
  description: string;
}

interface TranslationContent {
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
    image_interaction: string;
  };
  features: {
    title: string;
    list: Feature[];
  };
}

const translations: Record<Lang, TranslationContent> = {
  en: {
    hero: {
      title: "Sell More with Stunning AI Product Photos",
      highlight: "Stunning AI Product Photos",
      subtitle: "Turn simple product shots into professional, high-converting photos in seconds.",
      cta: "Join the Waitlist - It's Free",
      image_interaction: "✨ Hover to see the magic! ✨",
    },
    features: {
      title: "Why Sellers Love This Tool",
      list: [
        { icon: "Crown", title: "Studio-Quality Photos", description: "Get results worth $500+ without a photo shoot." },
        { icon: "Users", title: "Lifestyle & Branding Integration", description: "Add models, brand text, or clean product-only shots." },
        { icon: "Zap", title: "Lightning-Fast Results", description: "From 5–10 minutes down to just 8 seconds." },
        { icon: "Globe", title: "Ready for Global Sellers", description: "Full English & Spanish support." },
      ],
    },
  },
  es: {
    hero: {
      title: "Vende Más con Fotos de Producto Profesionales",
      highlight: "Profesionales",
      subtitle: "Convierte fotos caseras en imágenes irresistibles que atraen y venden más, en segundos.",
      cta: "Unirse a la Lista de Espera - Es Gratis",
      image_interaction: "✨ ¡Pasa el cursor para ver la magia! ✨",
    },
    features: {
      title: "Que Ganan los Vendedores con Esta Herramienta",
      list: [
        { icon: "Crown", title: "Fotos con Calidad de Estudio", description: "Resultados valorados en más de 500 € sin sesión de fotos." },
        { icon: "Users", title: "Modelos y Branding Integrados", description: "Agrega modelos lifestyle, texto de marca o fotos de producto." },
        { icon: "Zap", title: "Resultados Ultra-Rápidos", description: "De 5-10 minutos a solo 8 segundos en promedio." },
        { icon: "Globe", title: "Pensado para Vendedores Globales", description: "Soporte en español e inglés." },
      ],
    },
  },
};

interface Props {
  lang?: Lang;
}

export default function BeforeToAfter({ lang = "es" }: Props) {
  const [isAfterVisible, setIsAfterVisible] = useState(false);
  const content = translations[lang];
  const titleParts = content.hero.title.split(content.hero.highlight);

  return (
    <div className="bg-black/10 backdrop-blur-sm text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {titleParts[0]}<span className="text-pink-400">{content.hero.highlight}</span>{titleParts[1]}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">{content.hero.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative rounded-xl w-full h-full overflow-hidden shadow-2xl mx-auto border border-white/10 cursor-pointer"
            onClick={() => setIsAfterVisible(v => !v)}
          >
            <Image src="/Gemini_Generated_Image_6frmf46frmf46frm.png" alt="Professional Product" fill style={{ objectFit: 'cover' }} className={`absolute inset-0 transition-opacity duration-700 ${isAfterVisible ? 'opacity-100' : 'opacity-0'}`} />
            <Image src="https://scontent.fjbq1-1.fna.fbcdn.net/v/t45.5328-4/542396160_788147523756858_5762516516922421366_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=MJ6JL-iDSgYQ7kNvwHjzQeF&_nc_oc=AdlDvPH-LBwlFU8wG46eGGcSm2XxdDlQPYd_reDaW6yufLImrdxhNhunDyl6yZXRHxg&_nc_zt=23&_nc_ht=scontent.fjbq1-1.fna&_nc_gid=5Q_3OO25qsmO7q3gaU-bew&oh=00_AfbKF-Y6SzTyX1C_DnQnqJtADQag2kQQzzYbSNCB-U9Xdw&oe=68C41E2F" alt="Amateur Product" fill unoptimized style={{ objectFit: 'cover' }} className={`transition-opacity duration-700 ${isAfterVisible ? 'opacity-0' : 'opacity-100'}`} />

            <div className={`absolute top-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded-full text-sm font-semibold pointer-events-none transition-opacity duration-500 ${isAfterVisible ? 'opacity-0' : 'opacity-100'}`}><span>Antes</span></div>
            <div className={`absolute top-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded-full text-sm font-semibold pointer-events-none transition-opacity duration-500 ${isAfterVisible ? 'opacity-100' : 'opacity-0'}`}><span>Después</span></div>

            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-full text-center pointer-events-none transition-opacity duration-500 animate-pulse ${isAfterVisible ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-sm font-medium">{content.hero.image_interaction}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-lg text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
                <span>{content.hero.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="border-t border-white/10 my-8" />

              <h2 className="text-2xl font-bold mb-6 text-center">{content.features.title}</h2>
              <ul className="space-y-5">
                {content.features.list.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.icon === 'Crown' && <Crown className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />}
                    {feature.icon === 'Users' && <Users className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />}
                    {feature.icon === 'Zap' && <Zap className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />}
                    {feature.icon === 'Globe' && <Globe className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />}
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


