export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
     
        <div>
          <h3 className="text-xl font-bold text-white font-serif mb-3">
            Sabor & Arte
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Pratos artesanais preparados com ingredientes frescos, direto da
            nossa cozinha para sua mesa.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-orange-500 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="/cardapio" className="hover:text-orange-500 transition-colors">
                Cardápio
              </a>
            </li>
            <li>
              <a href="/categorias" className="hover:text-orange-500 transition-colors">
                Categorias
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contato</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li> Rua Exemplo, 123 — Centro</li>
            <li> (47) 99999-9999</li>
            <li> Sec–Sex, 18h às 23h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sabor & Arte. Todos os direitos reservados.
      </div>
    </footer>
  );
}