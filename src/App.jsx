import React from 'react';
import { Download } from 'lucide-react';

export default function App() {
  const handleDownload = () => {
    const url = 'https://www.mediafire.com/file/unj1u9qbsdpwhwy/PLAY-TOHETHER-GLOBAL_2.22.0.apk/file';
    const filename = 'PlayTogether-Global.apk';
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-6 justify-center">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group max-w-md w-full">
            <div className="p-6">
              {/* Small Image */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/picture/playtogether-global.jpeg" 
                  alt="PlayTogether Global"
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                PLAYTOGETHER GLOBAL
              </h2>
              
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Tải xuống
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
