import {
  siClaude,
  siCss,
  siGithubcopilot,
  siGithub,
  siGit,
  siGooglecloud,
  siHtml5,
  siJavascript,
  siLinux,
  siLinuxmint,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSpring,
  siSupabase,
  siVercel,
  siVite,
} from 'simple-icons';

export const brandIcons = {
  'Spring Boot': siSpring,
  JavaScript: siJavascript,
  React: siReact,
  HTML: siHtml5,
  CSS: siCss,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Git: siGit,
  'Claude AI': siClaude,
  Copilot: siGithubcopilot,
  Vercel: siVercel,
  Supabase: siSupabase,
  GitHub: siGithub,
  Vite: siVite,
  'Google Cloud': siGooglecloud,
  'Node.js': siNodedotjs,
  'Linux Mint': siLinuxmint,
  Linux: siLinux,
};

const customColors = {
  Java: '#ed8b00',
  Windows: '#00a4ef',
  'Claude AI': '#d97757',
  GitHub: '#f1eee9',
  Copilot: '#f1eee9',
};

export function getTechnologyColor(name) {
  const icon = brandIcons[name];
  return customColors[name] ?? (icon ? `#${icon.hex}` : '#b7b7b7');
}
