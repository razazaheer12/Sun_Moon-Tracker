import React from 'react';
import { Button } from './ui/button';
import { Trash, ArrowUp, ArrowDown } from 'lucide-react';
import { getProgressBarColor } from '../utils/timeUtils';

interface TimeDisplayProps {
  timeString: string;
  dateString: string;
  location: string;
  dayProgress: number;
  onDelete: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeString,
  dateString,
  location,
  dayProgress,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}) => {
  return (
    <div className="p-4 space-y-3 bg-card">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-medium text-card-foreground">{timeString}</h2>
          <div className="text-lg text-muted-foreground uppercase">{location}</div>
        </div>
        <div className="flex gap-1">
          {!isFirst && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMoveUp}
              className="h-8 w-8"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          )}
          {!isLast && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMoveDown}
              className="h-8 w-8"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onDelete}
            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">{dateString}</div>
      
      <div className="w-full h-1 bg-muted">
        <div 
          className={`h-full transition-all duration-1000 ${getProgressBarColor(timeString)}`}
          style={{ width: `${dayProgress}%` }}
        />
      </div>
    </div>
  );
};

export default TimeDisplay;