import React from 'react'

function Features() {
  return (
    <div className="bg-white py-16 px-6 md:px-24 ml-10">
      <h2 className="text-4xl font-fjalla text-center mb-12">🔐 Why Choose TrustVault?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        <div className="p-6 bg-[#f3f0ff] rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-fjalla mb-2">End-to-End Encryption</h3>
          <p className="text-gray-700">Your files are encrypted before storage. Only you have access to your documents.</p>
        </div>
        
        <div className="p-6 bg-[#f3f0ff] rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-fjalla mb-2">Cloud Storage with AWS S3</h3>
          <p className="text-gray-700">Secure, scalable, and reliable file storage powered by Amazon Web Services.</p>
        </div>
        
        <div className="p-6 bg-[#f3f0ff] rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-fjalla mb-2">Access Anywhere</h3>
          <p className="text-gray-700">Log in from any device and manage your documents with ease.</p>
        </div>

        <div className="p-6 bg-[#f3f0ff] rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-fjalla mb-2">One-Click Sharing</h3>
          <p className="text-gray-700">Generate secure links to share files instantly with anyone.</p>
        </div>

        <div className="p-6 bg-[#f3f0ff] rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-fjalla mb-2">User Dashboard</h3>
          <p className="text-gray-700">Keep track of uploaded files, download history, and manage your vault.</p>
        </div>

        <div className="p-6 bg-[#f3f0ff] rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-fjalla mb-2">Safe Logout & Session Control</h3>
          <p className="text-gray-700">Logout securely with session handling and token-based access.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
