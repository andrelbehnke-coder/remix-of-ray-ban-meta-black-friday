import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set Black Friday end date (example: November 30, 2025)
    const endDate = new Date('2025-11-30T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-accent blur-xl opacity-50 animate-pulse-glow" />
        <Card className="relative bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 text-foreground px-6 py-4 md:px-10 md:py-6 min-w-[80px] md:min-w-[120px] shadow-[0_0_30px_rgba(255,0,0,0.3)]">
          <span className="font-heading text-5xl md:text-7xl font-black tabular-nums" style={{ textShadow: 'var(--shadow-text)' }}>
            {value.toString().padStart(2, '0')}
          </span>
        </Card>
      </div>
      <span className="text-xs md:text-base font-heading font-bold uppercase tracking-widest mt-3 text-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-16 bg-card border-y-2 border-accent/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'radial-gradient(circle, hsl(0 100% 50%) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-accent/10 border-2 border-accent/30 rounded-full animate-pulse-glow">
            <span className="text-3xl animate-pulse">⚡</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-wider">
              OFERTA EXPIRA EM
            </h2>
            <span className="text-3xl animate-pulse">⚡</span>
          </div>
          
          <div className="flex justify-center gap-4 md:gap-8">
            <TimeUnit value={timeLeft.days} label="DIAS" />
            <TimeUnit value={timeLeft.hours} label="HORAS" />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <TimeUnit value={timeLeft.seconds} label="SEG" />
          </div>
          
          <p className="text-lg md:text-xl text-accent font-heading font-black uppercase animate-pulse">
            🔥 NÃO PERCA ESTA OPORTUNIDADE ÚNICA! 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
