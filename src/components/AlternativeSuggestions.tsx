import React from 'react';
import { TimeZoneCity } from '../types/timezone';

interface AlternativeSuggestionsProps {
  suggestions: TimeZoneCity[];
  onSelect: (city: string) => void;
}

const AlternativeSuggestions: React.FC<AlternativeSuggestionsProps> = ({
  suggestions,
  onSelect,
}) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="mt-2">
      <p className="text-sm font-medium text-card-foreground">You might be interested in:</p>
      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        {suggestions.map((item) => (
          <button
            key={item.city}
            onClick={() => onSelect(item.city)}
            className="px-3 py-1 text-sm bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground rounded-full transition-colors"
          >
            {item.city}, {item.country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlternativeSuggestions;