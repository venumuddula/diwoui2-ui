
export interface MetricData {
  label: string;
  value: string;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}

export interface ActionContext {
  [key: string]: string;
}

export interface Action {
  label: string;
  description?: string;
  onClick: () => void;
}

export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface ChartSeries {
  key: string;
  name: string;
  color: string;
}

export interface TableColumn {
  key: string;
  header: string;
}

export type CardType = "metric" | "action" | "chart" | "table" | "pdf";

export interface CardData {
  type: CardType;
  data: MetricCardData | ActionCardData | ChartCardData | TableCardData | PdfCardData;
}

export interface BaseCardData {
  title?: string;
  description?: string;
}

export interface MetricCardData extends BaseCardData {
  metrics: MetricData[];
}

export interface ActionCardData extends BaseCardData {
  context?: ActionContext;
  action?: Action;
  actions?: Action[];
}

export interface ChartCardData extends BaseCardData {
  chartType: "line" | "bar" | "area" | "pie";
  interpretation?: string;
  xKey: string;
  yKeys: ChartSeries[];
  data: ChartDataPoint[];
}

export interface TableCardData extends BaseCardData {
  summary?: string;
  columns: TableColumn[];
  data: Record<string, string | number>[];
}

export interface PdfCardData extends BaseCardData {
  pdfUrl: string;
}

export interface ConversationMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: string;
  cards?: CardData[];
}

export interface InvestigateActionContext {
  timeframe: string;
  segment: string;
  change: string;
}

export interface ExploreActionContext {
  industry: string;
  marketSize: string;
  currentPenetration: string;
}

export type ActionContextType = InvestigateActionContext | ExploreActionContext;

export interface ActionData {
  title: string;
  initialPrompt: string;
  context: ActionContextType;
}
