// src/components/ui/MobileSidebarPortal.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function MobileSidebarPortal({
  open,
  onClose,
  children,
  topOffset = 64,
}) {
  // Remove useState + setMounted entirely

  useEffect(() => {
    if (!open) return;

    // Prevent body scroll when sidebar is open
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // If not open → render nothing
  if (!open) return null;

  // Safe: createPortal only runs on client (after first render)
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className="fixed inset-x-0 top-16 w-64 h-screen bg-[#f8f8f8] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0"
        style={{
          top: `${topOffset}px`,
          height: `calc(100vh - ${topOffset}px)`,
        }}
      >
        <div className="pt-5 px-2 text-gray-600 overflow-y-auto h-full">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}
