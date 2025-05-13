
import { GreetingSection } from "@/components/dashboard/greeting-section";
import { MetricsSection } from "@/components/dashboard/metrics-section";
import { SuggestionsSection } from "@/components/dashboard/suggestions-section";

export default function Dashboard() {
  return (
    <div className="container max-w-7xl py-6">
      <GreetingSection />
      <MetricsSection />
      <SuggestionsSection />
    </div>
  );
}
