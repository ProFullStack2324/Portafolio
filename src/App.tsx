import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Github, Linkedin, Mail, Globe, Server, Code, Network, Briefcase, GraduationCap, Award } from 'lucide-react';

import ExperienceCarousel from "./components/ExperienceCarousel.tsx";

const kunaImages = [
  { url: "/images/experience/fotografiaproducto.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/pantallazofacebookkuna.jpg", description: "Manejo Redes Facebook de Kuna" },
  { url: "/images/experience/ilustraciondemarca.jpg", description: "Ilustración de la marca Kuna" },
  { url: "/images/experience/redessociales.jpeg", description: "Manejo Redes Instagram de Kuna" },
  { url: "/images/experience/fotografiaproducto1.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto2.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto3.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto4.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto5.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto6.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto7.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto8.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto9.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto10.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto11.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto12.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/ilustracionesdeproductos.jpg", description: "Ilustraciones de los productos" },
  { url: "/images/experience/kuna productos artesanalesfaceook.jpg", description: "Manejo redes sociales Facebook de Kuna" },
  { url: "/images/experience/fotografiaproducto6.jpg", description: "Fotografia de producto" },
  { url: "/images/experience/fotografiaproducto6.jpg", description: "Fotografia de producto" },


];

const payxlegendsImages = [
  { url: "/images/experience/pantallazopayxlegends.jpg", description: "Pagina de Aterrizaje" },
  { url: "/images/experience/metodosdepagocryptopayxlegends.jpg", description: "Metodos de pago Crypto" },
  { url: "/images/experience/metodosdepagoonline.png", description: "Metodos de pago Online" },
  { url: "/images/experience/pantallazopayxlegends1.jpg", description: "Pagina de Aterrizaje" },

  { url: "/images/experience/staticsblockchain.jpg", description: "Diseño de logica Estadística" },
  { url: "/images/experience/staticsblockchain2.jpg", description: "Diseño de logica Estadística" },
  { url: "/images/experience/pantallazopayxlegends1.jpg", description: "Pagina de Aterrizaje" },
  { url: "/images/experience/tutorialblockchain.jpg", description: "Guias de usuario blockcahin" },


  
];

const mielpuratiendavirtualImages = [
  { url: "/images/experience/MIelpuracontacto.jpg", description: "Miel Pura - Seccion de contacto" },
  { url: "/images/experience/Mielpuratiendavirtual.jpg", description: "Miel Pura - Tienda virtual" },
  { url: "/images/experience/mielpurazonasdevida.jpg", description: "Miel Pura - Contexto - historia" },
  { url: "/images/experience/tiendavirtualmielpuracarritodecompras.jpg", description: "Carrito de compras - Tienda virtual" },
  { url: "/images/experience/MIelpuracontacto.jpg", description: "Miel Pura - Seccion de contacto" },
  { url: "/images/experience/Mielpuratiendavirtual.jpg", description: "Miel Pura - Tienda virtual" },
  { url: "/images/experience/mielpurazonasdevida.jpg", description: "Miel Pura - Contexto - historia" },
  { url: "/images/experience/tiendavirtualmielpuracarritodecompras.jpg", description: "Carrito de compras - Tienda virtual" },

];

const SistemaGestionDocenteImages = [
  { url: "/images/experience/Orientadorecolar.jpg", description: "Pagina de aterrizaje Orientacion escolar" },
  { url: "/images/experience/registroorientadorescolar.jpg", description: "Registro orientación escolar" },
  { url: "/images/experience/Orientadorecolar.jpg", description: "Pagina de aterrizaje Orientacion escolar" },
  { url: "/images/experience/registroorientadorescolar.jpg", description: "Registro orientación escolar" },
  { url: "/images/experience/Orientadorecolar.jpg", description: "Pagina de aterrizaje Orientacion escolar" },
  { url: "/images/experience/registroorientadorescolar.jpg", description: "Registro orientación escolar" },

];

const AcademloImages = [
  { url: "/images/experience/Academlo.png", description: "Academia de Desarrollo Full Stack" },

];

function App() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* Hero Section */}
      <header className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">

          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Víctor Alfonso Gutiérrez Gutiérrez</h1>
          <p className="text-xl md:text-2xl text-white font-semibold">Administrador de Redes y Desarrollador Full-Stack</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-16">        <div className="flex items-center space-x-4">
            <img 
              src="/images/experience/perfil.jpg" 
              
              className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-lg object-cover" 
            />
            
          </div>
        </section>


        
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>

          <div className="p-2">
            {/* Sección Kuna */}
            <h2 className="text-xl font-bold mb-4 text-center">Kuna - Productos Artesanales</h2>
            <ExperienceCarousel images={kunaImages} />

            {/* Sección MIel Pura */}
            <h2 className="text-xl font-bold mt-8 mb-4">Miel Pura - Tienda Virtual</h2>
            <ExperienceCarousel images={mielpuratiendavirtualImages} />

            {/* Sección PayXLegends */}
            <h2 className="text-xl font-bold mt-8 mb-4">PayXLegends - Plataforma blockchain</h2>
            <ExperienceCarousel images={payxlegendsImages} />

            {/* Sección Gestión Docente */}
            <h2 className="text-xl font-bold mt-8 mb-4">Sistema Gestión Docente</h2>
            <ExperienceCarousel images={SistemaGestionDocenteImages} />

          </div>         
        
 
          
          {/* Experiencia profesional existente */}
          <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold text-blue-400">Técnico de Instalación de Redes</h3>
            <p className="text-slate-300">Ingetel Ingenieria en Telecomunicaciones S.A.S.</p>
            <ul className="mt-3 text-slate-400 list-disc list-inside">
              <li>Instalación y mantenimiento de sistemas de telecomunicaciones para aulas digitales en escuelas rurales</li>
              <li>Mantenimiento de centros digitales</li>
              <li>Optimización de la infraestructura de red</li>
            </ul>
          </div>
        </section>

        
        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400">Full-Stack Development & Computer Science</h3>
              <p className="text-slate-300 mt-2">Academlo</p>
              <ul className="mt-3 text-slate-400 list-disc list-inside">
                <li>Programa intensivo de 6 meses</li>
                <li>Clases online en directo desde Mexico D.C</li>
                <li>Tecnologías avanzadas de desarrollo web</li>
              </ul>
            {/* Sección Estudios en Academlo Full Stack */}
            <h2 className="text-xl font-bold mt-8 mb-4">Academlo Instituto Desarrollo Full Stack</h2>
            <ExperienceCarousel images={AcademloImages} />
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400">Técnico Superior en Redes y Mantenimiento de camaras de seguridad IP</h3>
              <p className="text-slate-300 mt-2">Instituto Técnico de Enseñanza Empresarial REDECOMPUTO</p>
            </div>
          </div>
        </section>


        {/* Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold">Habilidades técnicas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Administración de redes</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-400" />
                  Infraestructura de red
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-400" />
                  Sistemas de Telecomunicaciones
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Gestión Web
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Desarrollo</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Desarrollo full-stack
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Gestión de Redes Sociales
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold">Contacto</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://github.com" className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-700/50 transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-700/50 transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="vagutierrezgut@ut.edu.co" className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-700/50 transition-colors">
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="+57 3026415239" className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-700/50 transition-colors">
              <Mail className="w-5 h-5" />
              Whatsapp +57 3026415239
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-slate-400">
        <p>"Innovando en tecnología, conectando oportunidades."</p>
      </footer>
    </div>
  );
}

export default App;