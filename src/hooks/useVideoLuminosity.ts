import { useEffect, useState, RefObject } from 'react';

interface AnalysisArea {
  x: number;      // % da largura (0-1)
  y: number;      // % da altura (0-1)
  width: number;  // % da largura (0-1)
  height: number; // % da altura (0-1)
}

export const useVideoLuminosity = (
  videoRef: RefObject<HTMLVideoElement>,
  areas: AnalysisArea[] = [{ x: 0.2, y: 0.3, width: 0.6, height: 0.4 }],
  threshold: number = 150
) => {
  const [luminosityStates, setLuminosityStates] = useState<boolean[]>(
    areas.map(() => false)
  );
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    
    canvas.width = 160;
    canvas.height = 90;
    
    let animationFrameId: number;
    let lastCheck = 0;
    const checkInterval = 50;
    const hysteresisMargin = 15;
    
    const analyzeFrame = (timestamp: number) => {
      if (timestamp - lastCheck < checkInterval) {
        animationFrameId = requestAnimationFrame(analyzeFrame);
        return;
      }
      
      lastCheck = timestamp;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const newStates = areas.map((area, index) => {
        const x = Math.floor(canvas.width * area.x);
        const y = Math.floor(canvas.height * area.y);
        const width = Math.floor(canvas.width * area.width);
        const height = Math.floor(canvas.height * area.height);
        
        const imageData = ctx.getImageData(x, y, width, height);
        const data = imageData.data;
        
        let totalLuminosity = 0;
        let pixelCount = 0;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const luminosity = 0.299 * r + 0.587 * g + 0.114 * b;
          totalLuminosity += luminosity;
          pixelCount++;
        }
        
        const averageLuminosity = totalLuminosity / pixelCount;
        const currentState = luminosityStates[index];
        
        // Hysteresis individual para cada área
        if (currentState && averageLuminosity < threshold - hysteresisMargin) {
          return false;
        } else if (!currentState && averageLuminosity > threshold + hysteresisMargin) {
          return true;
        }
        
        return currentState;
      });
      
      // Só atualiza se houver mudança
      if (newStates.some((state, index) => state !== luminosityStates[index])) {
        setLuminosityStates(newStates);
      }
      
      animationFrameId = requestAnimationFrame(analyzeFrame);
    };
    
    const startAnalysis = () => {
      if (video.readyState >= 2) {
        animationFrameId = requestAnimationFrame(analyzeFrame);
      }
    };
    
    video.addEventListener('loadeddata', startAnalysis);
    if (video.readyState >= 2) startAnalysis();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadeddata', startAnalysis);
    };
  }, [videoRef, areas, threshold]);
  
  return luminosityStates;
};
