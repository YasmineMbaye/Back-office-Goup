import type { ReactNode } from "react";

interface ChartWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function ChartWrapper({ title, description, children, className = "" }: ChartWrapperProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
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