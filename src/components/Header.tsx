
import React from 'react';
import { Film } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-cinema-light-gray py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="h-6 w-6 text-cinema-accent" />
          <h1 className="text-2xl font-bold text-cinema-accent">CinemaScript</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          AI-Powered Screenplay Generator
        </div>
      </div>
    </header>
  );
};

export default Header;
