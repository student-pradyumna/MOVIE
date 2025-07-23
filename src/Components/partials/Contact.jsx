 import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import Tilt from 'react-parallax-tilt'; // 3D effect library

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 py-10">
      
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.05}
        gyroscope={true}
        className="w-full max-w-5xl"
      >
        <div className="min-h-[75vh] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-10 md:p-16 animate-fade-in flex flex-col justify-between">
          
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-4 text-center">📩 Contact Me</h1>
            <p className="text-zinc-300 text-lg mb-10 text-center">
              Have questions, ideas, or feedback? I’d love to hear from you!
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 items-center text-center">
              <div className="flex items-center gap-3 text-lg text-zinc-300">
                <Mail className="text-blue-400" size={24} />
                <a
                  href="mailto:pradyumna.dev@gmail.com"
                  className="text-blue-400 underline hover:text-blue-300 transition"
                >
                  pradyumna.dev@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-lg text-zinc-300">
                <Linkedin className="text-blue-400" size={24} />
                <a
                  href="https://www.linkedin.com/in/pradyumna-katual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 transition"
                >
                  linkedin.com/in/pradyumna-katual
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-sm text-zinc-500 mb-4">© 2025 Movie. All rights reserved.</p>
            <Link
              to="/"
              className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-md"
            >
              ⬅ Back to Home
            </Link>
          </div>

        </div>
      </Tilt>
    </div>
  );
};

export default Contact;
