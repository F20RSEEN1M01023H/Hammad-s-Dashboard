// src/components/ui/MobileSidebarPortal.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function MobileSidebarPortal({
  open,
  onClose,
  children,
  topOffset = 64, // header height in px
}) {
  // hooks always declared at top-level
  const [mounted, setMounted] = useState(false);

  // Deferred mount: set state asynchronously to avoid "setState synchronously within an effect" warning.
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  // Manage body scroll only after we're mounted (safe DOM access)
  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = original || "";
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [open, mounted]);

  // During SSR / before mounted on client, render nothing
  if (!mounted) return null;

  // Now safe to create portal (document exists)
  return createPortal(
    <>
      <div
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 900 }}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 w-64 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          top: topOffset,
          height: `calc(100vh - ${topOffset}px)`,
          zIndex: 1000,
          background: "#f8f9f8",
        }}
      >
        {children}
      </div>
    </>,
    document.body
  );
}
