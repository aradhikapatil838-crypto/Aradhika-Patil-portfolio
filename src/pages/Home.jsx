import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-24">
      <Header />
      <main className="max-w-4xl mx-auto p-8 text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">Home</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to my portfolio. Scroll down to test the fixed header backdrop blur.
        </p>
        <div className="h-[120vh] bg-gradient-to-b from-white to-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200/60 flex flex-col items-center justify-center">
          <p className="text-gray-400 font-medium">Scrollable content space</p>
        </div>
      </main>
    </div>
  );
}
