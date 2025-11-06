import { useEffect, useState, RefObject } from 'react';

interface AnalysisArea {
  x: number; // % da largura
  y: number; // % da altura
  width: number; // % da largura
  height: number; // % da altura
}

export const useVideoLuminosity = (
  videoRef: RefObject<HTMLVideoElement>,
  areas: AnalysisArea[] = [
    { x: 0.3, y: 0.4, width: 0.4, height: 0.2 } // Centro do vídeo
  ],
  threshold: number = 128 // 0-255, quanto maior mais sensível a luz
) => {
  const [isLightBackground, setIsLightBackground] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    
    let animationFrameId: number;
    let lastCheck = 0;
    const checkInterval = 100; // ms entre análises
    
    const analyzeFrame = (timestamp: number) => {
      if (timestamp - lastCheck < checkInterval) {
        animationFrameId = requestAnimationFrame(analyzeFrame);
        return;
      }
      
      lastCheck = timestamp;
      
      // Ajustar tamanho do canvas (pequeno para performance)
      canvas.width = 160;
      canvas.height = 90;
      
      // Desenhar frame atual do vídeo
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      let totalLuminosity = 0;
      let pixelCount = 0;
      
      // Analisar cada área definida
      areas.forEach(area => {
        const x = Math.floor(canvas.width * area.x);
        const y = Math.floor(canvas.height * area.y);
        const width = Math.floor(canvas.width * area.width);
        const height = Math.floor(canvas.height * area.height);
        
        const imageData = ctx.getImageData(x, y, width, height);
        const data = imageData.data;
        
        // Calcular luminosidade de cada pixel
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Fórmula de luminosidade perceptual
          const luminosity = 0.299 * r + 0.587 * g + 0.114 * b;
          totalLuminosity += luminosity;
          pixelCount++;
        }
      });
      
      const averageLuminosity = totalLuminosity / pixelCount;
      
      // Hysteresis para evitar flickering
      const currentState = isLightBackground;
      const hysteresisMargin = 20;
      
      if (currentState && averageLuminosity < threshold - hysteresisMargin) {
        setIsLightBackground(false);
      } else if (!currentState && averageLuminosity > threshold + hysteresisMargin) {
        setIsLightBackground(true);
      }
      
      animationFrameId = requestAnimationFrame(analyzeFrame);
    };
    
    // Esperar vídeo carregar
    const startAnalysis = () => {
      if (video.readyState >= 2) {
        animationFrameId = requestAnimationFrame(analyzeFrame);
      }
    };
    
    video.addEventListener('loadeddata', startAnalysis);
    if (video.readyState >= 2) {
      startAnalysis();
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadeddata', startAnalysis);
    };
  }, [videoRef, areas, threshold, isLightBackground]);
  
  return isLightBackground;
};
