import { MetricCard } from "@/components/dashboard/metric-card";
import { Activity, FileText, Layers, Clock, Target } from "lucide-react";
import { useDashboardStore } from "@/store/dashboardStore";

export function MetricsSection() {
  const { metrics } = useDashboardStore();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <MetricCard
        title="AI Score Average"
        value={`${metrics.aiScoreAverage.value}%`}
        icon={<Target className="h-5 w-5 text-red-500 zoom-animation" />}
        iconBg="bg-red-50 dark:bg-red-900/20"
        showProgress
        progress={metrics.aiScoreAverage.value}
        progressColors={{
          from: "from-red-500",
          to: "to-blue-500",
        }}
      />
      <MetricCard
        title="Active Use Cases"
        value={metrics.activeUseCases.value}
        icon={<FileText className="h-5 w-5 text-red-500" />}
        iconBg="bg-red-50 dark:bg-red-900/20"
      />
      <MetricCard
        title="Recent Insights"
        value={metrics.recentInsights.value}
        icon={<Layers className="h-5 w-5 text-red-500" />}
        iconBg="bg-red-50 dark:bg-red-900/20"
      />
      <MetricCard
        title="Last Activity"
        value="2h ago"
        icon={<Clock className="h-5 w-5 text-red-500" />}
        iconBg="bg-red-50 dark:bg-red-900/20"
      />
    </div>
  );
}
