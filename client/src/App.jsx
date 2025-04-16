import Footer from "./components/Footer";
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar/>
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-green-50">
        <h2 className="text-4xl font-bold mb-4">Empowering Indian Artisans</h2>
        <p className="text-lg mb-6">Generate names, prices & SEO content for handmade products.</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">Get Started</button>
          <button className="px-6 py-3 border border-green-600 text-green-700 rounded hover:bg-green-100">Explore Features</button>
        </div>
      </section>

      {/* Features Preview */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold text-xl mb-2">🖼️ Upload Product Image</h3>
          <p className="text-sm">Upload your craft item to analyze and optimize content.</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold text-xl mb-2">🧵 Tell Your Story</h3>
          <p className="text-sm">Input region, material, and the story behind your craft.</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold text-xl mb-2">📈 AI-Powered Insights</h3>
          <p className="text-sm">Get smart names, price suggestions, and SEO tags instantly.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
