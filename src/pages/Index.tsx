
import React from 'react';
import Header from '@/components/Header';
import ScriptGenerator from '@/components/ScriptGenerator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cinema film-reel-bg">
      <Header />
      <main className="container flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-cinema-accent animate-fade-in">
              Create Your Next Blockbuster
            </h2>
            <p className="text-cinema-foreground/70 max-w-2xl mx-auto">
              Generate professional movie scripts with our AI-powered screenplay writer. 
              Define your parameters and watch as your cinematic vision comes to life.
            </p>
          </div>
          
          <ScriptGenerator />
        </div>
      </main>
      <footer className="border-t border-cinema-light-gray py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>CinemaScript AI — Transform your ideas into screenplay magic</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
