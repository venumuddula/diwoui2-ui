import { BaseCard } from "./base-card";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useArtifactViewerStore } from "@/store/artifactViewerStore";

interface PdfViewerCardProps {
  title?: string;
  description?: string;
  pdfUrl: string;
  className?: string;
}

export function PdfViewerCard({
  title,
  description,
  pdfUrl,
  className,
}: PdfViewerCardProps) {
  const { openArtifact } = useArtifactViewerStore();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = title || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    openArtifact({
      title: title || "Document Viewer",
      description: description,
      pdfUrl
    });
  };

  return (
    <BaseCard
      title={title || "Document Viewer"}
      description={description}
      className={cn("bg-card max-w-full", className)}
    >
      <div className="flex items-center p-4">
        <img src="/icons/Pdf.png" alt="PDF" className="h-10 w-10 mr-4" />
        <div className="flex-1">
          <h3 className="font-medium">{title || "PDF Document"}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleView}
            className="gap-1"
          >
            <Eye className="h-3 w-3" />
            View
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="gap-1"
          >
            <Download className="h-3 w-3" />
            Download
          </Button>
        </div>
      </div>
    </BaseCard>
  );
}
