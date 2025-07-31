"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedDropdownNav() {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else {
      setDir(null);
    }
    setSelected(val);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-50"
      onMouseEnter={() => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      }}
      onMouseLeave={() => {
        hoverTimeout.current = setTimeout(() => setSelected(null), 200);
      }}
    >
      <div className="flex gap-6 font-medium text-white">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            id={`shift-tab-${tab.id}`}
            onMouseEnter={() => handleSetSelected(tab.id)}
            className={`flex items-center gap-1 transition-colors ${
              selected === tab.id ? "text-blue-400" : "text-white"
            }`}
            style={{ fontFamily: "'Urbanist', sans-serif" }}
          >
            <span>{tab.title}</span>
            <FiChevronDown
              className={`transition-transform ${
                selected === tab.id ? "rotate-180" : ""
              }`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <DropdownContent
            selected={selected}
            dir={dir}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const DropdownContent = ({
  selected,
  dir,
  onClose,
}: {
  selected: number;
  dir: "l" | "r" | null;
  onClose: () => void;
}) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const hoveredTab = document.getElementById(`shift-tab-${selected}`);
    const content = document.getElementById("overlay-content");
    if (hoveredTab && content) {
      const tabRect = hoveredTab.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentRect.left;
      setLeft(tabCenter);
    }
  }, [selected]);

  const TabComponent = TABS.find((t) => t.id === selected)?.Component;

  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-[100%] mt-3 w-[280px] md:w-[360px] rounded-lg bg-white text-black shadow-xl border border-gray-300 p-4"
    >
      <motion.span
        style={{ left }}
        animate={{ left }}
        transition={{ duration: 0.25 }}
        className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-300"
      />

      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {TabComponent && <TabComponent onClose={onClose} />}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProductMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col gap-2 text-sm">
    {[
      { name: "Hexa Agri Pro", path: "hexa-agri-pro" },
      { name: "Octa Plus Extreme", path: "octa-plus-extreme" },
      { name: "Munitrix 4", path: "munitrix-4" },
      { name: "Varuna 6x", path: "varuna-6x" },
      { name: "Octa - Agri", path: "octa-agri" },
      { name: "Octa - Med", path: "octa-med" },
      { name: "Pavan QC1", path: "pavan-qc1" },
      { name: "Workhorse Pro", path: "workhorse-pro" },
    ].map((item) => (
      <Link
        key={item.path}
        href={`/products/${item.path}`}
        onClick={onClose}
        className="hover:text-blue-600"
      >
        {item.name}
      </Link>
    ))}
  </div>
);

const SolutionsMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col gap-2 text-sm">
    <Link href="/solutions/strategic" onClick={onClose} className="hover:text-blue-600">
      Strategic
    </Link>
    <Link href="/solutions/logistics" onClick={onClose} className="hover:text-blue-600">
      Logistics
    </Link>
    <Link href="/solutions/agriculture" onClick={onClose} className="hover:text-blue-600">
      Agriculture
    </Link>
    <Link href="/solutions/healthcareandemergency" onClick={onClose} className="hover:text-blue-600">
      Healthcare and Emergency 
    </Link>
    <Link href="/solutions/railways" onClick={onClose} className="hover:text-blue-600">
      Railways
    </Link>
    <Link href="/solutions/powerlinestringing" onClick={onClose} className="hover:text-blue-600">
      Powerline Stringing
    </Link>
  </div>
);

const TABS = [
  { id: 1, title: "Products", Component: ProductMenu },
  { id: 2, title: "Solutions", Component: SolutionsMenu },
];
