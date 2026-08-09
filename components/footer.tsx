export function Footer() {
  return (
    <footer className="py-10 hairline">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate dark:text-paper/50">
        <p>© {new Date().getFullYear()} Mariem Sabri</p>
        <p className="font-mono"></p>
      </div>
    </footer>
  );
}
