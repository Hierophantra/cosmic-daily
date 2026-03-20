import { useState } from "react";

export default function Collapsible({ title, count, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="collapsible">
      <div className="collapsible__header" onClick={() => setOpen(!open)}>
        <div>
          <span className="collapsible__title">{title}</span>
          {count != null && <span className="collapsible__count"> ({count})</span>}
        </div>
        <span className={`collapsible__arrow${open ? " collapsible__arrow--open" : ""}`}>
          ▼
        </span>
      </div>
      {open && <div className="collapsible__body">{children}</div>}
    </div>
  );
}
