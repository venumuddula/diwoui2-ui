import { useEffect } from "react";
import { useArtifactViewerStore } from "@/store/artifactViewerStore";
import { useSidebarStore } from "@/store/sidebarStore";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ArtifactViewer() {
  const { isOpen, currentArtifact, closeArtifact } = useArtifactViewerStore();
  const { setCollapsed } = useSidebarStore();

  // Collapse sidebar when artifact viewer is opened
  useEffect(() => {
    if (isOpen) {
      setCollapsed(true);
    }
  }, [isOpen, setCollapsed]);

  if (!isOpen || !currentArtifact) return null;

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-40 h-full w-[500px] max-w-full bg-background",
        "border-l border-border shadow-lg transition-all duration-300 ease-in-out",
        "flex flex-col overflow-hidden pt-14", // Add top padding to account for navbar
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{currentArtifact.title || "Document Viewer"}</h2>
          {currentArtifact.description && (
            <p className="text-sm text-muted-foreground">{currentArtifact.description}</p>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={closeArtifact}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="h-full w-full rounded-md border border-border bg-background">
          <iframe
            src={currentArtifact.pdfUrl}
            className="h-full w-full"
            title={currentArtifact.title || "PDF Document"}
          />
        </div>
      </div>
    </div>
  );
}
