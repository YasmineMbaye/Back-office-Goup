import { Skeleton } from "../ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="p-6 animate-in fade-in-0 duration-200">
      {/* Header */}
      <Skeleton className="h-8 w-64 mb-6" />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <Skeleton className="h-5 w-20 mb-2 bg-gray-700" />
          <Skeleton className="h-4 w-32 mb-1 bg-gray-800" />
          <Skeleton className="h-3 w-24 bg-gray-800" />
        </div>
        
        <div className="bg-white border border-gray-200 p-6 rounded-lg">
          <Skeleton className="h-5 w-28 mb-2" />
          <div className="flex items-center">
            <Skeleton className="w-3 h-3 rounded-full mr-2" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <Skeleton className="h-5 w-24 mb-2" />
          <Skeleton className="h-8 w-12 mb-1" />
          <Skeleton className="h-3 w-28" />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <Skeleton className="h-6 w-48 mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <Skeleton className="h-5 w-36 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className="flex items-center justify-center">
      <div className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-black",
        sizeClasses[size]
      )} />
    </div>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}