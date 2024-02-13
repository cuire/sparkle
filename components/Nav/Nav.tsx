export function Nav() {
  return (
    <nav className="flex items-center justify-between w-full p-8">
      <a href="/" className="text-2xl">
        Sparkle 🐿️✨
      </a>
      <div className="flex items-center space-x-8">
        <a href="https://github.com/cuire/sparkle" className="text-lg">
          Github
        </a>
      </div>
    </nav>
  );
}
