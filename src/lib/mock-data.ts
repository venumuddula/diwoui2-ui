// Mock data for the Catalyst AI platform
import { ActionCardData, ActionData, ConversationMessage, Action } from "@/types/conversation";
import { toast } from "sonner";

// User profile data
export const userProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@company.com",
  role: "Business Analyst",
  avatar: "/placeholder.svg"
};

// Metrics data for dashboard cards
export const metricData = {
  aiScoreAverage: {
    value: 86,
    change: 3.5,
    trend: "up"
  },
  activeUseCases: {
    value: 14,
    change: 2,
    trend: "up"
  },
  recentInsights: {
    value: 27,
    change: -3,
    trend: "down"
  },
  lastActivity: {
    value: "2 hours ago",
    user: "Data Pipeline Update"
  }
};

// Conversation history
export const conversationHistory = [
  {
    id: "conv-001",
    title: "Q3 Sales Performance Analysis",
    lastUpdated: "2 hours ago",
    summary: "Analysis of declining sales in the Northeast region",
    messages: 14
  },
  {
    id: "conv-002",
    title: "Customer Churn Prediction",
    lastUpdated: "Yesterday",
    summary: "Identifying at-risk customers based on behavior patterns",
    messages: 8
  },
  {
    id: "conv-003",
    title: "Marketing Campaign Effectiveness",
    lastUpdated: "3 days ago",
    summary: "ROI analysis of multi-channel campaign",
    messages: 23
  },
  {
    id: "conv-004",
    title: "Inventory Optimization",
    lastUpdated: "1 week ago",
    summary: "Recommendations for reducing overstock",
    messages: 11
  }
];

// Alerts data for attention cards - Updated to include only one action per card
export const alertData = [
  {
    id: "alert-001",
    title: "Unusual Pattern in Payment Processing",
    description: "Multiple failed transactions detected in the last hour, 250% above normal threshold. Our AI analysis indicates a potential security breach.",
    severity: "critical",
    category: "Critical Alert",
    time: "1 hour ago",
    action: "investigate"
  },
  {
    id: "alert-002",
    title: "Supply Chain Optimization Opportunity",
    description: "Our AI analysis indicates potential for 23% cost reduction through optimized procurement strategies.",
    severity: "high",
    category: "High Impact",
    time: "3 hours ago",
    action: "explore"
  },
  {
    id: "alert-003",
    title: "Inventory Optimization Alert",
    description: "Seasonal demand shifts detected for 37 SKUs. AI forecasting suggests 18% reduction in holding costs through revised stocking levels.",
    severity: "medium",
    category: "Medium Impact",
    time: "5 hours ago",
    action: "review"
  },
  {
    id: "alert-004",
    title: "Marketing Campaign Opportunity",
    description: "Segment analysis shows untapped market potential in the healthcare vertical.",
    severity: "low",
    category: "Low Impact",
    time: "1 day ago",
    action: "explore"
  },
  {
    id: "alert-005",
    title: "Product Usage Pattern Change",
    description: "Feature utilization metrics show 23% decrease in premium features by enterprise customers.",
    severity: "medium",
    category: "Product",
    time: "2 days ago",
    action: "analyze"
  }
];

// Sample conversation messages for a specific analysis
export const sampleConversation: ConversationMessage[] = [
  {
    id: "msg-pdf-001",
    type: "assistant",
    content: "Based on your requirements, I've prepared the following PDF documents for review:",
    timestamp: "2023-05-04T14:20:00",
    cards: [
      {
        type: "pdf",
        data: {
          title: "Amtrends Business Specification Document",
          description: "Technical specifications and business requirements for the Amtrends platform",
          pdfUrl: "/MockDocs/Amtrends Business Specification Document.pdf"
        }
      },
      {
        type: "pdf",
        data: {
          title: "Analytics Dashboard Proposal",
          description: "Draft proposal for the new analytics dashboard interface",
          pdfUrl: "/MockDocs/Amtrends Business Specification Document.pdf"
        }
      },
      {
        type: "pdf",
        data: {
          title: "Q1 Performance Report",
          description: "Quarterly business performance analysis and projections",
          pdfUrl: "/MockDocs/Amtrends Business Specification Document.pdf"
        }
      }
    ]
  },
  {
    id: "msg-001",
    type: "user",
    content: "Show me the revenue trends for the past quarter broken down by product category",
    timestamp: "2023-05-04T14:23:00"
  },
  {
    id: "msg-002",
    type: "assistant",
    content: "Here's the revenue breakdown by product category for Q1 2023:",
    timestamp: "2023-05-04T14:23:15",
    cards: [
      {
        type: "chart",
        data: {
          title: "Revenue Trends by Product Category (Q1 2023)",
          description: "Quarterly revenue breakdown for each product category",
          interpretation: "Software Services shows the strongest growth (12%) while Hardware Solutions is declining (-8%). This suggests we should focus more resources on expanding our software offerings.",
          chartType: "bar",
          xKey: "month",
          yKeys: [
            { key: "software", name: "Software Services", color: "#4f46e5" },
            { key: "hardware", name: "Hardware Solutions", color: "#ef4444" },
            { key: "consulting", name: "Consulting", color: "#10b981" },
            { key: "maintenance", name: "Maintenance", color: "#f97316" }
          ],
          data: [
            { month: "Jan", software: 750000, hardware: 620000, consulting: 300000, maintenance: 400000 },
            { month: "Feb", software: 820000, hardware: 590000, consulting: 280000, maintenance: 400000 },
            { month: "Mar", software: 880000, hardware: 570000, consulting: 320000, maintenance: 400000 }
          ]
        }
      },
      {
        type: "chart",
        data: {
          title: "Revenue Trends by Product Category (Q1 2023)",
          description: "Quarterly revenue breakdown for each product category",
          interpretation: "Software Services shows the strongest growth (12%) while Hardware Solutions is declining (-8%). This suggests we should focus more resources on expanding our software offerings.",
          chartType: "line",
          xKey: "month",
          yKeys: [
            { key: "software", name: "Software Services", color: "#4f46e5" },
            { key: "hardware", name: "Hardware Solutions", color: "#ef4444" },
            { key: "consulting", name: "Consulting", color: "#10b981" },
            { key: "maintenance", name: "Maintenance", color: "#f97316" }
          ],
          data: [
            { month: "Jan", software: 750000, hardware: 620000, consulting: 300000, maintenance: 400000 },
            { month: "Feb", software: 820000, hardware: 590000, consulting: 280000, maintenance: 400000 },
            { month: "Mar", software: 880000, hardware: 570000, consulting: 320000, maintenance: 400000 }
          ]
        }
      },
      {
        type: "chart",
        data: {
          title: "Revenue Trends by Product Category (Q1 2023)",
          description: "Quarterly revenue breakdown for each product category",
          interpretation: "Software Services shows the strongest growth (12%) while Hardware Solutions is declining (-8%). This suggests we should focus more resources on expanding our software offerings.",
          chartType: "area",
          xKey: "month",
          yKeys: [
            { key: "software", name: "Software Services", color: "#4f46e5" },
            { key: "hardware", name: "Hardware Solutions", color: "#ef4444" },
            { key: "consulting", name: "Consulting", color: "#10b981" },
            { key: "maintenance", name: "Maintenance", color: "#f97316" }
          ],
          data: [
            { month: "Jan", software: 750000, hardware: 620000, consulting: 300000, maintenance: 400000 },
            { month: "Feb", software: 820000, hardware: 590000, consulting: 280000, maintenance: 400000 },
            { month: "Mar", software: 880000, hardware: 570000, consulting: 320000, maintenance: 400000 }
          ]
        }
      },
      {
        type: "chart",
        data: {
          title: "Revenue Trends by Product Category (Q1 2023)",
          description: "Quarterly revenue breakdown for each product category",
          interpretation: "Software Services shows the strongest growth (12%) while Hardware Solutions is declining (-8%). This suggests we should focus more resources on expanding our software offerings.",
          chartType: "pie",
          xKey: "month",
          yKeys: [
            { key: "software", name: "Software Services", color: "#4f46e5" },
            { key: "hardware", name: "Hardware Solutions", color: "#ef4444" },
            { key: "consulting", name: "Consulting", color: "#10b981" },
            { key: "maintenance", name: "Maintenance", color: "#f97316" }
          ],
          data: [
            { month: "Jan", software: 750000, hardware: 620000, consulting: 300000, maintenance: 400000 },
            { month: "Feb", software: 820000, hardware: 590000, consulting: 280000, maintenance: 400000 },
            { month: "Mar", software: 880000, hardware: 570000, consulting: 320000, maintenance: 400000 }
          ]
        }
      },
      {
        type: "metric",
        data: {
          title: "Quarterly Performance",
          metrics: [
            { label: "Software Services", value: "$2.4M", change: 12, trend: "up" },
            { label: "Hardware Solutions", value: "$1.8M", change: -8, trend: "down" },
            { label: "Consulting", value: "$0.9M", change: 3, trend: "up" }
          ]
        }
      }
    ]
  },
  
  {
    id: "msg-003",
    type: "user",
    content: "What factors contributed to the drop in Hardware Solutions revenue?",
    timestamp: "2023-05-04T14:24:30"
  },
  {
    id: "msg-004",
    type: "assistant",
    content: "The 8% decline in Hardware Solutions revenue can be attributed to three main factors:\n\n1. **Supply Chain Disruption:** Delayed shipments from overseas manufacturers affected product availability (est. impact: -4%)\n\n2. **Increased Competition:** New market entrants offering lower-priced alternatives (est. impact: -3%)\n\n3. **Seasonal Variation:** Q1 typically shows reduced hardware purchases after Q4 budget spending (est. impact: -1%)",
    timestamp: "2023-05-04T14:24:45",
    cards: [
      {
        type: "table",
        data: {
          title: "Hardware Revenue Impact Analysis",
          summary: "Supply chain issues account for half of the revenue decline, followed by competitive pressures.",
          columns: [
            { key: "factor", header: "Factor" },
            { key: "impact", header: "Impact %" },
            { key: "severity", header: "Severity" },
            { key: "actionable", header: "Actionable" }
          ],
          data: [
            { factor: "Supply Chain Disruption", impact: "-4%", severity: "High", actionable: "Yes" },
            { factor: "Increased Competition", impact: "-3%", severity: "Medium", actionable: "Yes" },
            { factor: "Seasonal Variation", impact: "-1%", severity: "Low", actionable: "No" },
            { factor: "Product Lifecycle", impact: "-0.5%", severity: "Low", actionable: "Yes" },
            { factor: "Marketing Effectiveness", impact: "-0.3%", severity: "Medium", actionable: "Yes" },
            { factor: "Sales Team Performance", impact: "+0.8%", severity: "Positive", actionable: "Yes" }
          ]
        }
      },
      {
        type: "action",
        data: {
          title: "Recommended Actions",
          description: "Based on the analysis of revenue factors",
          context: {
            "Main Factor": "Supply Chain Disruption (-4%)",
            "Secondary Factor": "Increased Competition (-3%)",
            "Addressable Impact": "-7.8% of total decline"
          },
          actions: [
            { 
              label: "Diversify Supply Chain", 
              description: "Identify and onboard alternative suppliers to mitigate future disruptions",
              onClick: () => console.log("Diversify Supply Chain clicked") 
            },
            { 
              label: "Competitive Analysis", 
              description: "Conduct detailed analysis of new competitors' pricing and features",
              onClick: () => console.log("Competitive Analysis clicked") 
            },
            { 
              label: "Product Differentiation Strategy", 
              description: "Develop strategy to highlight unique value propositions",
              onClick: () => console.log("Product Differentiation clicked")
            }
          ]
        }
      }
    ]
  },
  {
    id: "msg-005",
    type: "user",
    content: "Can you provide our sustainability report?",
    timestamp: "2023-05-04T14:30:00"
  },
  {
    id: "msg-006",
    type: "assistant",
    content: "I've found the latest sustainability report for your company. Here's the document for your review:",
    timestamp: "2023-05-04T14:30:15",
    cards: [
      {
        type: "pdf",
        data: {
          title: "2023 Sustainability Report",
          description: "Annual environmental impact and sustainability initiatives report",
          pdfUrl: "/MockDocs/Amtrends Business Specification Document.pdf"
        }
      }
    ]
  }
];

// Sample data for action-triggered analyses
export const investigateData: ActionData = {
  title: "Revenue Anomaly Investigation",
  initialPrompt: "Analyze the significant decrease in revenue from enterprise customers over the last 7 days. Identify potential causes and recommend corrective actions.",
  context: {
    timeframe: "Last 7 days vs previous period",
    segment: "Enterprise customers",
    change: "-18% revenue"
  }
};

export const exploreData: ActionData = {
  title: "Healthcare Vertical Market Opportunity",
  initialPrompt: "Analyze market potential in the healthcare vertical based on recent segment analysis. What opportunities exist and what approach would maximize our potential in this segment?",
  context: {
    industry: "Healthcare",
    marketSize: "$4.2B annual spend",
    currentPenetration: "3.8%"
  }
};

// Helper function to create action card data
export const createActionCardData = (title: string, description: string, context: Record<string, string>, actionLabel: string): ActionCardData => {
  return {
    title,
    description,
    context,
    actions: [
      {
        label: actionLabel,
        description: `Initiate ${actionLabel.toLowerCase()} workflow`,
        onClick: () => {
          toast.success(`Started ${actionLabel} process`);
        }
      }
    ]
  };
};
