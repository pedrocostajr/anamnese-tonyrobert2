
import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  FileText, 
  Video, 
  Bot, 
  Users, 
  ShieldCheck, 
  BookOpen,
  Sparkles,
  Quote,
  ShieldEllipsis,
  Clock,
  Star,
  Award,
  Zap
} from 'lucide-react';

// Reusable Components
const Button: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}> = ({ children, className = '', onClick, href, variant = 'primary' }) => {
  const baseStyles = "px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-[1.03] active:scale-95 shadow-xl flex items-center justify-center gap-3 text-lg inline-flex cursor-pointer overflow-hidden relative group";
  
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-200",
    secondary: "bg-sky-700 hover:bg-sky-600 text-white shadow-sky-200",
    accent: "bg-white text-sky-900 border border-sky-100 hover:bg-sky-50 shadow-none"
  };
  
  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

const SectionHeading: React.FC<{ 
  title: string; 
  subtitle?: string; 
  light?: boolean;
  centered?: boolean;
}> = ({ title, subtitle, light = false, centered = true }) => (
  <div className={`${centered ? 'text-center' : 'text-left'} mb-12 space-y-4`}>
    <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} font-medium opacity-80 ${light ? 'text-sky-100' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1.5 w-24 bg-sky-500 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const App: React.FC = () => {
  const CHECKOUT_URL = "https://payfast.greenn.com.br/153513";

  const handleScrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="glass rounded-3xl px-6 py-4 flex justify-between items-center shadow-2xl shadow-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="bg-sky-600 p-2 rounded-xl shadow-lg shadow-sky-100">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="font-extrabold text-slate-800 tracking-tighter text-xl">Anamnese Cristã</span>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={handleScrollToOffer}
                className="text-slate-600 font-bold hover:text-sky-600 transition-colors hidden md:block text-sm uppercase tracking-widest"
              >
                Garantir Vaga
              </button>
              <Button href={CHECKOUT_URL} variant="secondary" className="px-6 py-2.5 text-sm rounded-xl">
                Acessar Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-6 px-4 bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-100/30 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/40 blur-[100px] rounded-full -z-10 animate-pulse"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-sky-100 shadow-sm animate-fade-in">
              <Zap className="w-4 h-4" />
              Upgrade Profissional Imediato
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-950 leading-[1.1] tracking-tighter">
              Receba o Modelo Pronto de <span className="text-sky-700 italic">Anamnese Cristã</span> em PDF + Word com Perguntas Estratégicas e Prompt de IA
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              A estrutura completa para terapeutas e conselheiros que desejam realizar atendimentos profundos, organizados e biblicamente alinhados, economizando horas de preparação.
            </p>

            {/* Product Image - Above Button */}
            <div className="mt-8 relative group max-w-4xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-amber-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-[12px] border-white shadow-2xl">
                 <img 
                  src="https://tonyrobert.com.br/wp-content/uploads/2026/02/unnamed-1.jpg" 
                  alt="Kit Anamnese Cristã Profissional" 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
                />
              </div>
            </div>

            {/* CTA Button Section */}
            <div className="pt-8 flex flex-col items-center gap-6">
              <Button href={CHECKOUT_URL} className="px-12 py-6 text-xl shadow-2xl shadow-amber-200">
                Quero Garantir Minha Anamnese Cristã por R$17
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Compra Segura</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-sky-500" /> Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Pain Points Section - pt-6 to reduce gap from hero */}
      <section className="pt-6 pb-20 px-4 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading 
            title="Você já sentiu que falta algo em seus atendimentos?"
            subtitle="A falta de uma estrutura clara é o que separa um atendimento amador de uma terapia transformadora."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Já travou durante um atendimento por não saber qual pergunta fazer em seguida?",
              "Já perdeu tempo precioso tentando extrair informações que o paciente não solta?",
              "Sente que as sessões ficam superficiais e não tocam na raiz do problema?",
              "Tem dificuldade em integrar técnica profissional com valores cristãos de forma ética?",
              "Perde horas tentando organizar as anotações do paciente sem um padrão?",
              "Sente que o paciente sai da sessão sem um diagnóstico tangível e um plano de ação?"
            ].map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-8 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group border border-transparent hover:border-slate-100">
                <div className="bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-500 shrink-0">
                  <XCircle className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <p className="text-slate-700 font-bold leading-snug text-lg">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 blur-[150px] rounded-full -z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionHeading 
            title="Resultados Práticos no Seu Consultório"
            subtitle="Transforme sua investigação inicial em um mapa de cura preciso e organizado."
            light
          />
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock />,
                title: "Roteiro Estruturado",
                desc: "Um passo a passo lógico para conduzir a sessão do acolhimento ao fechamento sem esquecer nada importante."
              },
              {
                icon: <Bot />,
                title: "Análise Profunda com IA",
                desc: "Prompt pronto para usar no ChatGPT e extrair pontos cegos das respostas do paciente em segundos."
              },
              {
                icon: <Award />,
                title: "Base Bíblica e Técnica",
                desc: "Perguntas desenhadas para identificar feridas da alma enquanto mantém o alinhamento total com a fé cristã."
              }
            ].map((benefit, i) => (
              <div key={i} className="group relative">
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:border-sky-400/50 transition-all duration-500 h-full">
                  <div className="bg-sky-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {React.cloneElement(benefit.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{benefit.title}</h3>
                  <p className="text-sky-100/70 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Tony Robert Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-16 border border-slate-100">
            <div className="md:w-[45%] relative">
              <div className="absolute -inset-10 bg-sky-200/30 rounded-full blur-[80px] -z-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-1 group">
                <img 
                  src="https://www.terapiacristatms.com.br/assets/tony-robert-CrFkOKSK.png" 
                  alt="Tony Robert" 
                  className="w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="md:w-[55%] space-y-8">
              <div className="space-y-2">
                <span className="text-sky-600 font-black uppercase tracking-[0.3em] text-xs">Quem criou a ferramenta?</span>
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">Eu sou <span className="text-sky-700 italic">Tony Robert</span></h2>
              </div>
              <p className="text-xl font-bold text-sky-800 leading-tight">
                Terapeuta, escritor e criador da Terapia Messiânica Sistêmica.
              </p>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
                <div className="relative pl-10">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-sky-200 fill-sky-50" />
                  <p className="italic text-slate-700">
                    "Antes de formar pessoas, eu precisei me formar por dentro. Antes de ajudar outros, precisei encarar minhas próprias feridas."
                  </p>
                </div>
                <p>
                  Após atender centenas de pessoas, condensei as melhores perguntas e técnicas de investigação em um modelo único que agora entrego em suas mãos.
                </p>
              </div>
              {/* Updated Button to match main CTA */}
              <Button href={CHECKOUT_URL} className="rounded-xl px-10">
                Quero Garantir Minha Anamnese Cristã por R$17
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content (Deliverables) */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading 
            title="Tudo o que você recebe hoje"
            subtitle="Por apenas R$17, você terá acesso imediato a um kit completo de ferramentas."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FileText />, t: "Ficha de Anamnese em PDF", d: "Modelo pronto para imprimir ou enviar para o seu paciente preencher online." },
              { icon: <BookOpen />, t: "Arquivo Word Editável", d: "Personalize com sua logo, cores e dados profissionais." },
              { icon: <Bot />, t: "Prompt Estratégico de IA", d: "Comando exclusivo para analisar respostas e identificar dores ocultas." },
              { icon: <Video />, t: "Aula de Aplicação Prática", d: "Vídeo-aula ensinando como usar cada pergunta para extrair o melhor da terapia." },
              { icon: <ShieldCheck />, t: "Masterclass: Integração com TCC", d: "Como conectar a anamnese cristã com a Terapia Cognitivo Comportamental." },
              { icon: <Users />, t: "Guia de Consulta Rápida", d: "PDF complementar com dicas de ouro para facilitar seus estudos e sessões." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="bg-sky-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-500" })}
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{item.t}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section id="offer" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-40 -z-10"></div>
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-10 md:p-14 bg-slate-50/50">
                <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Seu Pacote Completo</div>
                <div className="space-y-3 mb-8 text-left border-b pb-8 border-slate-200">
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Ficha de Anamnese Profissional</span>
                    <span className="line-through">R$ 67,00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Prompt de IA Estratégico</span>
                    <span className="line-through">R$ 47,00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Masterclass + Vídeo-aulas</span>
                    <span className="line-through">R$ 97,00</span>
                  </div>
                  <div className="flex justify-between text-sky-700 font-black pt-2">
                    <span>VALOR TOTAL:</span>
                    <span>R$ 211,00</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Acesso Vitalício ao Material",
                    "Arquivo Word 100% Editável",
                    "Garantia Incondicional de 7 Dias"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="bg-green-100 p-1.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-bold text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 p-10 md:p-14 text-center flex flex-col justify-center items-center bg-white border-l border-slate-50">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Hoje por apenas:</p>
                <div className="flex justify-center items-baseline gap-1 mb-8">
                  <span className="text-3xl font-black text-slate-900">R$</span>
                  <span className="text-9xl font-black text-sky-700 tracking-tighter leading-none">17</span>
                  <span className="text-2xl font-black text-slate-400">,00</span>
                </div>
                <Button href={CHECKOUT_URL} className="w-full py-6 text-xl rounded-2xl">
                  ADQUIRIR AGORA
                  <ArrowRight className="w-6 h-6" />
                </Button>
                <div className="mt-8 flex flex-col items-center gap-4">
                  <img src="https://tonyrobert.com.br/wp-content/uploads/2026/02/pagamento-seguro.png" alt="Segurança" className="h-10 opacity-60" />
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                    <ShieldEllipsis className="w-4 h-4" />
                    Ambiente Seguro
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-10 glass rounded-[2.5rem] border-sky-100">
             <div className="bg-amber-500 p-5 rounded-3xl shadow-xl shadow-amber-200">
                <ShieldCheck className="w-10 h-10 text-white" />
             </div>
             <div className="text-center md:text-left">
                <p className="text-2xl font-black text-slate-900 tracking-tight">Garantia Risco Zero (7 dias)</p>
                <p className="text-slate-500 font-medium max-w-md">Use o material agora. Se não gostar, peça o reembolso total em um clique. Sem perguntas.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading title="Qual caminho você escolhe?" subtitle="O improviso ou a estrutura?" />
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="p-8 border border-slate-100 rounded-[2rem] bg-slate-50/50">
              <h4 className="font-bold mb-4 text-red-600 uppercase tracking-widest text-xs">Continuar Improvisando</h4>
              <p className="text-slate-600 font-medium">Perdendo tempo, sentindo insegurança nos atendimentos e mantendo sessões superficiais.</p>
            </div>
            <div className="p-8 border-2 border-sky-100 rounded-[2rem] bg-sky-50 shadow-inner">
              <h4 className="font-bold mb-4 text-sky-700 uppercase tracking-widest text-xs">Conduzir com Estrutura</h4>
              <p className="text-slate-900 font-bold">Usar um método validado para aprofundar suas sessões e demonstrar excelência profissional.</p>
            </div>
          </div>
          <Button href={CHECKOUT_URL} className="px-16">
             QUERO MINHA ANAMNESE CRISTÃ POR R$17
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-sky-500/10 p-2 rounded-xl">
              <Sparkles className="text-sky-500 w-8 h-8" />
            </div>
            <span className="text-white font-black text-3xl tracking-tighter">Anamnese Cristã</span>
          </div>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-60">
            Acreditamos que a excelência técnica é uma forma de honrar o Criador através do cuidado com o próximo.
          </p>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm font-medium">© {new Date().getFullYear()} Tony Robert. Desenvolvimento de Elite.</p>
            <div className="flex gap-8 text-sm font-black uppercase tracking-widest">
              <a href="#" className="hover:text-sky-400 transition-colors">Termos</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Suporte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
