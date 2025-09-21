import { Icon } from '@iconify/react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 32, className = "" }: TechIconProps) {
  const iconifyIcons: Record<string, { icon: string; color: string }> = {
    React: { icon: 'logos:react', color: 'text-blue-400' },
    JavaScript: { icon: 'logos:javascript', color: 'text-yellow-400' },
    TypeScript: { icon: 'logos:typescript-icon', color: 'text-blue-600' },
    HTML: { icon: 'logos:html-5', color: 'text-orange-500' },
    CSS: { icon: 'logos:css-3', color: 'text-blue-500' },
    Python: { icon: 'logos:python', color: 'text-green-400' },
    PHP: { icon: 'logos:php', color: 'text-purple-400' },
    "Node.js": { icon: 'logos:nodejs-icon', color: 'text-green-500' },
    "Next.js": { icon: 'logos:nextjs-icon', color: 'text-black' },
    Express: { icon: 'logos:express', color: 'text-gray-600' },
    Flask: { icon: 'logos:flask', color: 'text-white' },
    MongoDB: { icon: 'logos:mongodb-icon', color: 'text-green-500' },
    Git: { icon: 'logos:git-icon', color: 'text-orange-600' },
    Docker: { icon: 'logos:docker-icon', color: 'text-blue-500' },
    AWS: { icon: 'logos:aws', color: 'text-orange-400' },
    Figma: { icon: 'logos:figma', color: 'text-purple-500' },
    Linux: { icon: 'logos:linux-tux', color: 'text-black' },
    "VS Code": { icon: 'logos:visual-studio-code', color: 'text-blue-500' },
    Java: { icon: 'logos:java', color: 'text-red-500' },
    Kotlin: { icon: 'logos:kotlin-icon', color: 'text-purple-600' },
    JSON: { icon: 'vscode-icons:file-type-json', color: 'text-green-400' },
    MySQL: { icon: 'logos:mysql-icon', color: 'text-blue-400' },
    Firebase: { icon: 'logos:firebase', color: 'text-yellow-500' },
    Github: { icon: 'logos:github-icon', color: 'text-gray-800' },
    "API KEY": { icon: 'mdi:key', color: 'text-gray-500' },
    "Android Studio": { icon: 'logos:android-icon', color: 'text-green-600' },
    Tailwind: { icon: 'logos:tailwindcss-icon', color: 'text-teal-400' },
    Bootstrap: { icon: 'logos:bootstrap', color: 'text-purple-500' },
    Laravel: { icon: 'logos:laravel', color: 'text-red-500' }
  };

  const iconifyIcon = iconifyIcons[name];
  if (iconifyIcon) {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <Icon
          icon={iconifyIcon.icon}
          width={size}
          height={size}
          className={iconifyIcon.color}
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center bg-gray-600 rounded ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon
        icon="mdi:code-braces"
        width={size * 0.6}
        height={size * 0.6}
        className="text-white"
      />
    </div>
  );
}
