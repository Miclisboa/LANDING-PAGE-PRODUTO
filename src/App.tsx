/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Smartphone, 
  Keyboard, 
  MousePointer2, 
  Bluetooth, 
  Battery, 
  Globe, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Coffee,
  Briefcase,
  GraduationCap,
  Zap,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5598988258895";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-100 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-blue-900 focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-blue-600" /> : <ChevronDown className="h-5 w-5 text-blue-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-blue-700/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-blue-900 selection:bg-blue-100">
      {/* 1. Headline (Dobra Superior) */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center lg:flex-row lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10 text-center lg:w-1/2 lg:text-left"
            >
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
                <Zap className="mr-2 h-4 w-4" />
                <span>Produtividade sem limites</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                Seu escritório completo <br />
                <span className="text-blue-600">agora cabe no bolso.</span>
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-blue-800/80 sm:text-xl">
                Liberte-se da limitação das telas pequenas. O teclado ultra-portátil com touchpad integrado que transforma qualquer smartphone ou tablet em uma estação de trabalho profissional em segundos.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Quero digitar com conforto agora
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-blue-400/10 blur-3xl"></div>
                <img 
                  src="https://m.media-amazon.com/images/I/61O1v10Ed3L._AC_SX679_.jpg" 
                  alt="Teclado dobrável em uma mesa de café" 
                  className="relative rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* 2. O Problema (Agitação) */}
      <section className="bg-blue-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">O mundo é móvel, mas sua produtividade não precisa sofrer.</h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-200/80">
              Cansado de errar palavras no teclado do celular? Ou de carregar um notebook pesado para uma reunião rápida?
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Smartphone, title: "Telas Pequenas", desc: "Digitar textos longos no vidro é lento e frustrante." },
              { icon: Briefcase, title: "Peso Excessivo", desc: "Notebooks são pesados e ocupam muito espaço na mochila." },
              { icon: Coffee, title: "Mobilidade Real", desc: "Trabalhe de qualquer lugar com o conforto de um desktop." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-blue-900/50 p-8 text-center border border-blue-800"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-blue-200/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 overflow-hidden rounded-3xl border border-blue-800 bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe 
                className="h-full w-full"
                src="https://www.youtube.com/embed/DS1y8zi8ihk?autoplay=1&mute=1&loop=1&playlist=DS1y8zi8ihk" 
                title="Demonstração do Teclado"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Solução (Apresentação do Produto) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-xl border border-blue-100 bg-black aspect-video">
                <iframe 
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/CgbA4unjOBA?autoplay=0&mute=0" 
                  title="Apresentação do Teclado"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-8 text-3xl font-bold text-blue-950 sm:text-4xl">A solução definitiva para quem não para.</h2>
              <div className="space-y-8">
                {[
                  { icon: Keyboard, title: "Design Tri-dobrável", desc: "Compacto para carregar, gigante para produzir. Cabe no bolso da calça ou em qualquer compartimento da bolsa." },
                  { icon: MousePointer2, title: "Touchpad de Precisão", desc: "Dispensa o uso de mouse. Navegue com gestos intuitivos como no seu notebook, diretamente no teclado." },
                  { icon: Bluetooth, title: "Conexão Bluetooth Estável", desc: "Sem fios, sem bagunça. Conecte em até 3 dispositivos simultaneamente e alterne entre eles com um clique." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-blue-900">{item.title}</h3>
                      <p className="text-blue-800/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção de Benefícios de Estilo de Vida */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-950 sm:text-4xl">Feito para o seu estilo de vida</h2>
            <p className="text-blue-800/70">Onde quer que você esteja, a produtividade te acompanha.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { 
                icon: Globe, 
                title: "O Nômade Digital", 
                desc: "Responda e-mails longos e escreva relatórios do aeroporto ou do café com a mesma velocidade do desktop.",
                img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600"
              },
              { 
                icon: GraduationCap, 
                title: "O Estudante", 
                desc: "Faça anotações em aulas ou palestras diretamente no tablet, sem ocupar espaço na mochila.",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              },
              { 
                icon: Briefcase, 
                title: "O Executivo", 
                desc: "Faça apresentações rápidas conectando o teclado ao tablet e navegando pelos slides com o touchpad.",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-3xl bg-white shadow-lg border border-blue-100"
              >
                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" referrerPolicy="no-referrer" />
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3 text-blue-600">
                    <item.icon className="h-6 w-6" />
                    <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                  </div>
                  <p className="text-blue-800/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Prova Social e Autoridade (Especificações) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-8 text-3xl font-bold text-blue-950 sm:text-4xl">Tecnologia de ponta, explicada de forma simples.</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Battery, title: "Bateria de Longa Duração", desc: "Até 48 horas de uso contínuo com uma única carga. Semanas em modo standby." },
                  { icon: CheckCircle2, title: "Compatibilidade Universal", desc: "Funciona perfeitamente com iOS, Android e Windows." },
                  { icon: ShieldCheck, title: "Ergonomia", desc: "Teclas macias com resposta tátil silenciosa para digitar por horas." },
                  { icon: Bluetooth, title: "Bluetooth 5.0", desc: "Conexão instantânea e sem atrasos em qualquer dispositivo." }
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-blue-50 p-6 border border-blue-100">
                    <item.icon className="mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 font-bold text-blue-900">{item.title}</h3>
                    <p className="text-sm text-blue-800/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://m.media-amazon.com/images/I/61B1u1tFc-L._AC_SX679_.jpg" 
                alt="Teclado aberto mostrando detalhes" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (Quebra de Objeções) */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-950 sm:text-4xl">Perguntas Frequentes</h2>
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-blue-100">
            <FAQItem 
              question="É difícil de configurar?" 
              answer="Não! O emparelhamento é feito em um clique. Uma vez conectado, ele reconhece seu dispositivo automaticamente nas próximas vezes." 
            />
            <FAQItem 
              question="O touchpad funciona no iPhone/iPad?" 
              answer="Sim! Ele é totalmente compatível com as funções de acessibilidade do iOS, permitindo navegar por menus e apps com facilidade." 
            />
            <FAQItem 
              question="Ele é frágil por ser dobrável?" 
              answer="De forma alguma. Ele é construído em liga de alta resistência e possui dobradiças reforçadas, projetadas para durar no transporte diário intenso." 
            />
          </div>
        </div>
      </section>

      {/* 7. Oferta e Fechamento */}
      <footer className="bg-blue-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="https://m.media-amazon.com/images/I/71LgtJqELZL._AC_SX679_.jpg" 
                alt="Teclado fechado compacto" 
                className="rounded-2xl shadow-2xl border border-blue-800"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center lg:w-1/2 lg:text-left">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">Pronto para transformar sua produtividade?</h2>
              <p className="mb-10 text-xl text-blue-200/80">
                Garanta seu Teclado Portátil hoje mesmo. <br />
                <span className="font-bold text-blue-400">Frete Grátis | Oferta por tempo limitado</span>
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-900/50 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
              >
                Garanta seu Teclado Portátil agora
              </a>
              <p className="mt-6 text-sm text-blue-400/60">
                * Atendimento imediato via WhatsApp
              </p>
            </div>
          </div>
          
          <div className="mt-24 border-t border-blue-900 pt-8 text-center text-sm text-blue-400/40">
            <p>&copy; {new Date().getFullYear()} Teclado Tech Portátil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
