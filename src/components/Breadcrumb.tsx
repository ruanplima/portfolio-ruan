import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#F9F9F9]/50">
      <Link to="/" className="hover:text-[#00DF5E] transition-colors">
        Início
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-[#F9F9F9]/30 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-[#F9F9F9]/80 truncate max-w-[200px] sm:max-w-none font-medium">
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-[#00DF5E] transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
