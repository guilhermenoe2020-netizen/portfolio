import { useEffect, useMemo, useRef, useState } from 'react';
import TechnologyIcon from '../TechnologyIcon';
import { getTechnologyColor } from '../technologyBrandData';
import { useLanguage } from '../../context/LanguageContext';
import './HudGlobe.css';

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

export default function HudGlobe() {
  const { t } = useLanguage();
  const globeRef = useRef(null);
  const dragRef = useRef(null);
  const [radius, setRadius] = useState(130);
  const [rotation, setRotation] = useState({ x: -0.22, y: 0.4 });
  const [activeSkill, setActiveSkill] = useState(null);
  const skills = t.skills.globeItems;

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return undefined;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setRadius(Math.max(100, entry.contentRect.width * 0.39));
    });
    resizeObserver.observe(globe);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      if (!dragRef.current && !activeSkill) {
        setRotation((current) => ({ ...current, y: current.y + 0.003 }));
      }
    }, 40);
    return () => window.clearInterval(timer);
  }, [activeSkill]);

  const points = useMemo(() => skills.map((skill, index) => {
    const y = 1 - (index / Math.max(skills.length - 1, 1)) * 2;
    const ringRadius = Math.sqrt(1 - y * y);
    const angle = GOLDEN_ANGLE * index;
    return {
      ...skill,
      x: Math.cos(angle) * ringRadius,
      y,
      z: Math.sin(angle) * ringRadius,
    };
  }), [skills]);

  const rotatePoint = (point) => {
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const y = point.y * cosX - point.z * sinX;
    const z = point.y * sinX + point.z * cosX;

    return {
      x: (point.x * cosY + z * sinY) * radius,
      y: y * radius,
      z: -point.x * sinY + z * cosY,
    };
  };

  const handlePointerDown = (event) => {
    if (event.target.closest('.globe-skill-node')) return;
    dragRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current) return;
    const deltaX = event.clientX - dragRef.current.x;
    const deltaY = event.clientY - dragRef.current.y;
    dragRef.current = { x: event.clientX, y: event.clientY };
    setRotation((current) => ({
      x: Math.max(-1.2, Math.min(1.2, current.x + deltaY * 0.006)),
      y: current.y + deltaX * 0.006,
    }));
  };

  const stopDragging = () => {
    dragRef.current = null;
  };

  return (
    <div className="globe-explorer">
      <div
        ref={globeRef}
        className="hud-globe-container"
        role="group"
        aria-label={t.skills.globeTitle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <div className="globe-orbit outer-orbit" aria-hidden="true" />
        <div className="globe-orbit inner-orbit" aria-hidden="true" />
        <div className="globe-backdrop" aria-hidden="true" />

        {points.map((point) => {
          const position = rotatePoint(point);
          const baseDepth = Math.max(0.26, (position.z + 1) / 2);
          const depth = point.name === 'GitHub' ? Math.max(0.82, baseDepth) : baseDepth;
          return (
            <button
              key={point.name}
              type="button"
              className={`globe-skill-node${point.name === 'GitHub' ? ' globe-skill-node-github' : ''}${activeSkill?.name === point.name ? ' is-active' : ''}`}
              style={{
                '--node-x': `${position.x}px`,
                '--node-y': `${position.y}px`,
                '--node-depth': depth,
                '--node-z': Math.round(depth * 20),
                '--node-color': getTechnologyColor(point.name),
              }}
              data-tooltip={point.name}
              aria-label={point.name}
              onClick={() => setActiveSkill(point)}
              onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') setActiveSkill(point);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType !== 'touch') setActiveSkill(null);
              }}
              onFocus={() => setActiveSkill(point)}
              onBlur={() => setActiveSkill(null)}
            >
              <TechnologyIcon name={point.name} />
            </button>
          );
        })}
      </div>

      <p className="globe-caption" aria-live="polite">
        {activeSkill
          ? activeSkill.name
          : t.skills.globeInstruction}
      </p>
    </div>
  );
}
