import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NotFoundProps {
  placeholder?: string;
}

const NotFound = ({ placeholder }: NotFoundProps) => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  if (placeholder) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md">
          <div className="text-6xl font-bold text-muted mb-4">🔨</div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            {placeholder} Coming Soon
          </h1>
          <p className="text-muted-foreground mb-6">
            This page is being built. Feel free to explore other sections or ask us to prioritize this feature.
          </p>
          <Link to="/">
            <Button className="w-full">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-foreground font-heading">404</h1>
        <p className="text-muted-foreground mt-2 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
