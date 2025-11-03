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
      <Card className="bg-primary text-primary-foreground px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] shadow-lg">
        <span className="text-3xl md:text-5xl font-black tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </Card>
      <span className="text-xs md:text-sm font-bold uppercase tracking-wider mt-2 text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-12 bg-destructive/10 border-y-4 border-destructive">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
            ⚡ Black Friday Deal Ends In ⚡
          </h2>
          <div className="flex justify-center gap-3 md:gap-6">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            Don't miss out on this limited-time offer!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
