import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Home</h1>
      </main>
    </div>
  );
}
