import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './BootScreen.css';

export default function BootScreen({ onComplete }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [bootLog, setBootLog] = useState([]);
  const [isExiting, setIsExiting] = useState(false);
  const completionStartedRef = useRef(false);
  const finish = useCallback(() => {
    if (completionStartedRef.current) return;
    completionStartedRef.current = true;
    setIsExiting(true);
    window.setTimeout(onComplete, 280);
  }, [onComplete]);

  useEffect(() => {
    let currentStep = 0;
    let completionTimer;
    const interval = window.setInterval(() => {
      if (currentStep < t.boot.logs.length) {
        setBootLog((previous) => [...previous, t.boot.logs[currentStep]]);
        currentStep += 1;
        setProgress(Math.floor((currentStep / t.boot.logs.length) * 100));
      } else {
        window.clearInterval(interval);
        completionTimer = window.setTimeout(finish, 180);
      }
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 70 : 240);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(completionTimer);
    };
  }, [finish, t.boot.logs]);

  return (
    <div className={`boot-screen${isExiting ? ' boot-screen-exiting' : ''}`} role="status" aria-live="polite">
      <div className="boot-content">
        <div className="boot-header">
          <span className="boot-title">NOE-OS v2026.1</span>
          <span className="boot-status">{progress === 100 ? '[READY]' : '[BOOTING]'}</span>
        </div>

        <div className="boot-console">
          {bootLog.map((log, index) => (
            <p key={index} className="boot-log-line">
              <span aria-hidden="true">&gt; </span>{log}
            </p>
          ))}
          {progress < 100 && <span className="boot-cursor" aria-hidden="true" />}
        </div>

        <div className="boot-progress-container" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="boot-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="boot-progress-label">{progress}%</div>

        <button className="boot-skip-btn" onClick={finish}>
          {t.boot.skip}
        </button>
      </div>
    </div>
  );
}