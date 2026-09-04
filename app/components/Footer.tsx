import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1420] text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12">
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            Sabor & Arte
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            O melhor menu digital da região. Pratos artesanais feitos com
            paixão, ingredientes frescos e entrega rápida na sua mesa.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-white mb-1">Navegação</h2>
          <Link href="/" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">
            Início
          </Link>
          <Link href="/cardapio" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">
            Cardápio Completo
          </Link>
          <Link href="/categorias" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">
            Categorias
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-white mb-1">Funcionamento</h2>
          <div className="text-sm text-gray-300 space-y-1">
            <p>Terça a Domingo: 18h às 23h30</p>
            <p>Atendimento local e Delivery</p>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-700 text-sm">
            <p className="text-gray-400">Dúvidas ou Reservas?</p>
            <p className="text-orange-500 font-bold">(47) 99999-9999</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-gray-500 text-xs">
          © 2026 Sabor & Arte - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}