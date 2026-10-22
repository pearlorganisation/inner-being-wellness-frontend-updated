// A template re-mounts on every navigation, giving each page the fade-in
// that the old Vite app got from `key={currentPath}`.
export default function Template({ children }) {
  return <div className="animate-fade-in">{children}</div>;
}
