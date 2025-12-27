import React from 'react';
import { Download } from 'lucide-react';

const DOWNLOADS = [
  {
    id: 'global',
    title: 'PLAYTOGETHER GLOBAL',
    version: '2.22.2',
    image: '/picture/playtogether-global.jpeg',
    url: 'https://www.mediafire.com/file/dq0yra6dbia652n/PlayTogether_Global_2.22.2.apk/file',
    filename: 'PlayTogether-Global.apk'
  },
  {
    id: 'vng',
    title: 'PLAYTOGETHER VNG',
    version: '2.22.2',
    image: '/picture/playtogether-vng.jpeg',
    url: 'https://www.mediafire.com/file/otql8kec42mwwjt/PlayTogether_VNG_2.22.2.apk/file',
    filename: 'PlayTogether-VNG.apk'
  }
];

export default function App() {
  const handleDownload = (url, filename) => {
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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {DOWNLOADS.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group max-w-md w-full"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  {item.title}
                </h2>
                
                <p className="text-sm text-gray-500 text-center mb-6">
                  Version: {item.version}
                </p>
                
                <button
                  onClick={() => handleDownload(item.url, item.filename)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Tải xuống
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
