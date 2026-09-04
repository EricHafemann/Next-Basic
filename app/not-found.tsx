import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '700' });

function NotFound() {
  return (
    <div className={`min-h-screen bg-white flex items-center justify-center ${poppins.className}`}>
      <h1 className="text-red-500 text-2xl">Não achou</h1>
    </div>
  );
}

export default NotFound;