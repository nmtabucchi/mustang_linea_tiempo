export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-mustang-dark-secondary border-t border-mustang-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-bold text-mustang-white hover:text-mustang-blue transition-colors duration-300">
              Mustang GT
            </a>
            <p className="text-mustang-gray text-sm mt-2">
              Interactive Timeline Portfolio
            </p>
          </div>
          
          <nav aria-label="Enlaces de pie de página">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <a href="#hero" className="text-mustang-silver hover:text-mustang-white text-sm transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-mustang-silver hover:text-mustang-white text-sm transition-colors duration-300">
                  Línea de Tiempo
                </a>
              </li>
              <li>
                <a href="#about" className="text-mustang-silver hover:text-mustang-white text-sm transition-colors duration-300">
                  Historia
                </a>
              </li>
              <li>
                <a href="#contact" className="text-mustang-silver hover:text-mustang-white text-sm transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-mustang-border text-center">
          <p className="text-mustang-gray text-sm">
            © {currentYear} Mustang GT Timeline. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
