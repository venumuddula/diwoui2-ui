import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MetricCard } from "./card-components/metric-card";
import { ActionCard } from "./card-components/action-card";
import { ChartCard } from "./card-components/chart-card";
import { TableCard } from "./card-components/table-card";
import { PdfViewerCard } from "./card-components/pdf-viewer-card";
import { cn } from "@/lib/utils";
import { 
  CardData, 
  MetricCardData, 
  ActionCardData, 
  ChartCardData, 
  TableCardData, 
  PdfCardData 
} from "@/types/conversation";
import { Clock } from "lucide-react";

type MessageType = "user" | "assistant";

interface MessageProps {
  content: string;
  type: MessageType;
  timestamp?: string;
  cards?: CardData[];
  isRead?: boolean;
}

export function Message({ content, type, timestamp, cards, isRead = true }: MessageProps) {
  return (
    <div className="w-full">
      <div className={cn(
        "flex w-full gap-3 py-3",
        type === "user" ? "flex-row justify-end" : "flex-row"
      )}>
        {type === "assistant" && (
          <div className="flex-shrink-0 mt-1">
            <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-700">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-xs bg-red-600 text-white">AI</AvatarFallback>
            </Avatar>
          </div>
        )}
        
        <div className={cn(
          "flex flex-col gap-1",
          type === "user" ? "items-end" : "items-start",
          "max-w-[80%]"
        )}>
          <div className={cn(
            "message-bubble",
            type === "assistant" ? "ai" : "user",
            "text-sm",
            "whitespace-normal break-words overflow-wrap-anywhere"
          )}>
            {content.split('\n').map((line, i) => (
              <div key={i} className="mb-1 break-words overflow-wrap-anywhere">{line}</div>
            ))}
          </div>
          
          {timestamp && (
            <span className="text-xs text-muted-foreground flex items-center mt-1">
              <Clock className="h-3 w-3 mr-1" />
              {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>
        
        {type === "user" && (
          <div className="flex-shrink-0 mt-1">
            <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-700">
              <AvatarFallback className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">U</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
      
      {/* Cards rendered outside the message bubble container for full width */}
      {cards && cards.length > 0 && (
        <div className={cn(
          "mt-2 space-y-4",
          type === "user" ? "ml-auto mr-0 max-w-[90%]" : "ml-11 max-w-[85%]", // Width adjusted to be wider than message but still connected to AI
          type === "user" ? "items-end" : "items-start"
        )}>
          {cards.map((card, index) => (
            <div key={index} className="rounded-xl w-full">
              {card.type === "metric" && (
                <MetricCard
                  title={(card.data as MetricCardData).title}
                  description={(card.data as MetricCardData).description}
                  metrics={(card.data as MetricCardData).metrics}
                  className={type === "assistant" ? "border-l-2 border-l-red-600" : ""} // Subtle visual cue for AI
                />
              )}
              {card.type === "action" && (
                <ActionCard
                  title={(card.data as ActionCardData).title}
                  description={(card.data as ActionCardData).description}
                  context={(card.data as ActionCardData).context}
                  action={(card.data as ActionCardData).action}
                  actions={(card.data as ActionCardData).actions}
                  className={type === "assistant" ? "border-l-2 border-l-red-600" : ""}
                />
              )}
              {card.type === "chart" && (
                <ChartCard
                  title={(card.data as ChartCardData).title}
                  description={(card.data as ChartCardData).description}
                  interpretation={(card.data as ChartCardData).interpretation}
                  data={(card.data as ChartCardData).data}
                  type={(card.data as ChartCardData).chartType}
                  xKey={(card.data as ChartCardData).xKey}
                  yKeys={(card.data as ChartCardData).yKeys}
                  className={type === "assistant" ? "border-l-2 border-l-red-600" : ""}
                />
              )}
              {card.type === "table" && (
                <TableCard
                  title={(card.data as TableCardData).title}
                  description={(card.data as TableCardData).description}
                  summary={(card.data as TableCardData).summary}
                  data={(card.data as TableCardData).data}
                  columns={(card.data as TableCardData).columns}
                  className={type === "assistant" ? "border-l-2 border-l-red-600" : ""}
                />
              )}
              {card.type === "pdf" && (
                <PdfViewerCard
                  title={(card.data as PdfCardData).title}
                  description={(card.data as PdfCardData).description}
                  pdfUrl={(card.data as PdfCardData).pdfUrl}
                  className={type === "assistant" ? "border-l-2 border-l-red-600" : ""}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}