import { useEffect, useRef, useState } from 'react';
import '../styles/StatsBar.css';
import GolfCourseSharpIcon from '@mui/icons-material/GolfCourseSharp';

const statsData = [
  { id: 1, value: 20, label: 'Total Golf Holes' },
  { id: 2, value: 80, label: 'Total Pro Members' },
  { id: 3, value: 120, label: 'Total Golf Areas' },
  { id: 4, value: 85, label: '5 Star Rating' },
];

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 } // xuất hiện ít nhất 50% trên màn hình
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  };

  return <span ref={ref}>{count}+</span>;
};

const StatsBar = () => {
    return (
        <section className="stats-bar">
            <div className="stats-container">
                {statsData.map((item) => (
                    <div className="stats-item" key={item.id}>
                        <div className="stats-icon">
                            <GolfCourseSharpIcon className="golf-icon" sx={{fontSize: '40px'}} />
                        </div>
                        <div className="stats-content">
                            <h3 className="stats-value">
                                <CountUp end={item.value} />
                            </h3>
                            <p className="stats-label">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsBar;
