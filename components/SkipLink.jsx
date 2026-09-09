export default function SkipLink({ targetId = 'main-content', label = 'Skip to main content' }) {
  return (
    <a href={`#${targetId}`} className="skip-link">
      {label}
    </a>
  );
}
