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
  threshold: number = 128
) => {
  const [isLightBackground, setIsLightBackground] = useState(false);
  
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
    const checkInterval = 100;
    const hysteresisMargin = 20;
    
    const analyzeFrame = (timestamp: number) => {
      if (timestamp - lastCheck < checkInterval) {
        animationFrameId = requestAnimationFrame(analyzeFrame);
        return;
      }
      
      lastCheck = timestamp;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      let totalLuminosity = 0;
      let pixelCount = 0;
      
      areas.forEach(area => {
        const x = Math.floor(canvas.width * area.x);
        const y = Math.floor(canvas.height * area.y);
        const width = Math.floor(canvas.width * area.width);
        const height = Math.floor(canvas.height * area.height);
        
        const imageData = ctx.getImageData(x, y, width, height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const luminosity = 0.299 * r + 0.587 * g + 0.114 * b;
          totalLuminosity += luminosity;
          pixelCount++;
        }
      });
      
      const averageLuminosity = totalLuminosity / pixelCount;
      
      // Hysteresis para evitar flickering
      if (isLightBackground && averageLuminosity < threshold - hysteresisMargin) {
        setIsLightBackground(false);
      } else if (!isLightBackground && averageLuminosity > threshold + hysteresisMargin) {
        setIsLightBackground(true);
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
  }, [videoRef, areas, threshold, isLightBackground]);
  
  return isLightBackground;
};
