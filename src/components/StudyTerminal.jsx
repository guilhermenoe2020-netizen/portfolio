import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './StudyTerminal.css';

export default function StudyTerminal() {
  const { t } = useLanguage();
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: t.terminal.welcome },
  ]);
  const outputRef = useRef(null);

  useEffect(() => {
    outputRef.current?.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredCommand = command.trim();
    if (!enteredCommand) return;

    setCommand('');
    if (enteredCommand.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    const responses = {
      help: t.terminal.help,
      about: t.terminal.about,
      stack: t.terminal.stack,
      systems: t.terminal.systems,
      projects: t.terminal.projects,
    };
    const response = responses[enteredCommand.toLowerCase()] ?? t.terminal.unknown;

    setHistory((current) => [
      ...current,
      { type: 'command', text: enteredCommand },
      { type: 'output', text: response },
    ].slice(-24));
  };

  return (
    <div className="study-terminal-embed" role="region" aria-label={t.terminal.title}>
      <div className="study-terminal-window">
        <div className="study-terminal-bar">
          <span>~/portfolio</span>
          <div aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="study-terminal-output" ref={outputRef} aria-live="polite">
          {history.map((line, index) => (
            <p className={`terminal-line terminal-line-${line.type}`} key={`${line.type}-${index}`}>
              {line.type === 'command' && <span className="terminal-prompt">guilherme@portfolio:~$ </span>}
              {line.text}
            </p>
          ))}
        </div>

        <form className="study-terminal-form" onSubmit={handleSubmit}>
          <label htmlFor="portfolio-terminal-command">
            <span className="terminal-prompt">guilherme@portfolio:~$</span>
            <input
              id="portfolio-terminal-command"
              autoComplete="off"
              spellCheck="false"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              placeholder={t.terminal.prompt}
            />
          </label>
          <button type="submit" aria-label={t.terminal.execute}>&gt;</button>
        </form>
      </div>
    </div>
  );
}
