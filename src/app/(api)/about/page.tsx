'use client';

import NavBar from '@/app/components/organism/landingPage/navBar';
import React from 'react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-900 p-4">
            <NavBar />
            <div className="flex items-center justify-center min-h-[80vh]">
                <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-2xl w-full p-8 flex flex-col items-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 animate-slide-down">
                        About Sea Wave Prediction
                    </h1>
                    <p className="text-lg md:text-xl text-blue-700 text-center mb-6 animate-fade-in">
                        Our platform leverages advanced data analytics and machine learning to predict sea wave patterns with high accuracy. We aim to empower maritime professionals, researchers, and enthusiasts with reliable, real-time wave forecasts to enhance safety and decision-making at sea.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="bg-blue-100 rounded-lg p-4 w-40 text-center shadow-md animate-bounce-slow">
                            <span className="text-2xl font-semibold text-blue-700">10+</span>
                            <div className="text-blue-600">Years of Research</div>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-4 w-40 text-center shadow-md animate-bounce-slow delay-200">
                            <span className="text-2xl font-semibold text-blue-700">100K+</span>
                            <div className="text-blue-600">Predictions Made</div>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-4 w-40 text-center shadow-md animate-bounce-slow delay-400">
                            <span className="text-2xl font-semibold text-blue-700">24/7</span>
                            <div className="text-blue-600">Real-Time Updates</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-down {
                    from { transform: translateY(-30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease;
                }
                .animate-slide-down {
                    animation: slide-down 1s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s infinite;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-400 {
                    animation-delay: 0.4s;
                }
            `}</style>
        </div>
    );
}
