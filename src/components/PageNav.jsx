import { memo } from "react";

const PAGES = [
  { id: "practice", label: "Practice" },
  { id: "nourish", label: "Nourish" },
  { id: "training", label: "Training" },
];

function PageNav({ activePage, onNavigate }) {
  return (
    <nav className="page-nav">
      {PAGES.map((p) => (
        <button
          key={p.id}
          className={`page-nav__btn${activePage === p.id ? " page-nav__btn--active" : ""}`}
          onClick={() => onNavigate(p.id)}
        >
          {p.label}
        </button>
      ))}
    </nav>
  );
}

export default memo(PageNav);
