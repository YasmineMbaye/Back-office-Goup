import type { ReactNode } from "react";

interface ChartWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info';
}

export function ChartWrapper({
  title,
  description,
  children,
  className = "",
  variant = 'default'
}: ChartWrapperProps) {
  const variantStyles = {
    default: 'bg-white border-gray-200',
    primary: 'bg-gradient-to-br from-blue-50 to-white border-blue-200',
    success: 'bg-gradient-to-br from-green-50 to-white border-green-200',
    warning: 'bg-gradient-to-br from-orange-50 to-white border-orange-200',
    info: 'bg-gradient-to-br from-cyan-50 to-white border-cyan-200'
  };

  const titleColors = {
    default: 'text-gray-900',
    primary: 'text-blue-900',
    success: 'text-green-900',
    warning: 'text-orange-900',
    info: 'text-cyan-900'
  };

  return (
    <div className={`${variantStyles[variant]} rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${className}`}>
      <div className="mb-6">
        <h3 className={`text-xl font-semibold ${titleColors[variant]}`}>{title}</h3>
        {description && (
          <p className="text-base text-gray-600 mt-2">{description}</p>
        )}
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}