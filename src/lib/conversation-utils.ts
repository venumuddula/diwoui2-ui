
import { ConversationMessage, CardData, ActionContext } from "@/types/conversation";
import { createActionCardData, investigateData, exploreData } from "./mock-data";
import { toast } from "sonner";

// Helper function to generate response based on user input
export function generateAIResponse(content: string): ConversationMessage {
  const lcContent = content.toLowerCase();
  let responseContent = "Thank you for your query. I'm analyzing the data to provide insights...";
  let responseCards: CardData[] = [];
  
  // Generate different responses based on user input keywords
  if (lcContent.includes("metric") || lcContent.includes("key figures") || lcContent.includes("statistics")) {
    responseContent = "Here are the key metrics you requested:";
    
    responseCards = [
      {
        type: "metric",
        data: {
          title: "Key Performance Indicators",
          description: "Current period vs previous period",
          metrics: [
            { label: "Revenue", value: "$1.8M", change: 7.2, trend: "up" },
            { label: "Customer Satisfaction", value: "92%", change: 3.5, trend: "up" },
            { label: "Active Users", value: "8,734", change: -2.1, trend: "down" }
          ]
        }
      }
    ];
  } else if (lcContent.includes("chart") || lcContent.includes("graph") || lcContent.includes("trend")) {
    responseContent = "I've visualized the trend data you requested:";
    
    responseCards = [
      {
        type: "chart",
        data: {
          title: "Monthly Performance Trends",
          chartType: "line",
          interpretation: "Revenue shows a positive upward trend while costs remain relatively stable, resulting in improving profit margins over the last quarter.",
          xKey: "month",
          yKeys: [
            { key: "revenue", name: "Revenue", color: "#4f46e5" },
            { key: "costs", name: "Costs", color: "#ef4444" },
            { key: "profit", name: "Profit", color: "#10b981" }
          ],
          data: [
            { month: "Jan", revenue: 450000, costs: 320000, profit: 130000 },
            { month: "Feb", revenue: 480000, costs: 325000, profit: 155000 },
            { month: "Mar", revenue: 520000, costs: 330000, profit: 190000 },
            { month: "Apr", revenue: 540000, costs: 340000, profit: 200000 }
          ]
        }
      }
    ];
  } else if (lcContent.includes("table") || lcContent.includes("data") || lcContent.includes("records")) {
    responseContent = "Here's the detailed data you requested:";
    
    responseCards = [
      {
        type: "table",
        data: {
          title: "Detailed Performance by Region",
          summary: "North America shows strongest performance while APAC has the highest growth rate.",
          columns: [
            { key: "region", header: "Region" },
            { key: "revenue", header: "Revenue" },
            { key: "growth", header: "YoY Growth" },
            { key: "customers", header: "Customers" }
          ],
          data: [
            { region: "North America", revenue: "$845K", growth: "5.2%", customers: 1245 },
            { region: "Europe", revenue: "$632K", growth: "3.8%", customers: 982 },
            { region: "APAC", revenue: "$437K", growth: "12.4%", customers: 657 },
            { region: "LATAM", revenue: "$253K", growth: "8.7%", customers: 421 },
            { region: "Middle East", revenue: "$195K", growth: "6.3%", customers: 327 },
            { region: "Africa", revenue: "$124K", growth: "9.5%", customers: 215 },
            { region: "ANZ", revenue: "$215K", growth: "4.1%", customers: 189 },
            { region: "Caribbean", revenue: "$97K", growth: "7.9%", customers: 143 },
            { region: "Nordics", revenue: "$176K", growth: "2.8%", customers: 205 },
            { region: "Baltics", revenue: "$68K", growth: "11.2%", customers: 97 },
            { region: "Central Asia", revenue: "$42K", growth: "14.3%", customers: 76 },
            { region: "South Asia", revenue: "$119K", growth: "10.7%", customers: 182 }
          ]
        }
      }
    ];
  } else if (lcContent.includes("recommend") || lcContent.includes("action") || lcContent.includes("suggest")) {
    responseContent = "Based on my analysis, here are the recommended actions:";
    
    responseCards = [
      {
        type: "action",
        data: {
          title: "Strategic Recommendation",
          description: "Based on current business performance and market trends",
          context: { 
            "Priority": "High",
            "Impact": "Revenue increase of 10-15%",
            "Effort": "Medium (2-3 months)",
            "Risk": "Low"
          },
          actions: [
            {
              label: "Expand APAC Sales Team",
              description: "Increase sales resources in Asia Pacific region",
              onClick: () => {
                toast.success("Started sales team expansion process");
              }
            },
            {
              label: "Adjust Pricing Model",
              description: "Review pricing strategy for enterprise customers",
              onClick: () => {
                toast.success("Initiated pricing model review");
              }
            },
            {
              label: "Schedule Strategy Meeting",
              description: "Discuss findings with leadership team",
              onClick: () => {
                toast.success("Strategy meeting scheduled");
              }
            }
          ]
        }
      }
    ];
  } else if (lcContent.includes("pdf") || lcContent.includes("document") || lcContent.includes("report")) {
    responseContent = "Here's the Amtrends Business Specification Document you requested:";
    
    responseCards = [
      {
        type: "pdf",
        data: {
          title: "Amtrends Business Specification Document",
          description: "Business requirements and specifications for the Amtrends system",
          pdfUrl: "/MockDocs/Amtrends Business Specification Document.pdf"
        }
      }
    ];
  }
  
  const aiMessage: ConversationMessage = {
    id: `assistant-${Date.now()}`,
    type: "assistant",
    content: responseContent,
    timestamp: new Date().toISOString(),
    cards: responseCards
  };
  
  return aiMessage;
}

// Helper function to get initial message for specific action types
export function getActionTypeInitialMessage(action: string, alertId: string): ConversationMessage | null {
  if (action === "investigate") {
    const context = investigateData.context as { timeframe: string; segment: string; change: string };
    
    return {
      id: "system-1",
      type: "assistant",
      content: `I've prepared an analysis based on your request to investigate this issue.`,
      timestamp: new Date().toISOString(),
      cards: [
        {
          type: "metric",
          data: {
            title: "Analysis Overview",
            metrics: [
              { 
                label: "Revenue Impact", 
                value: context.change,
                change: -18,
                trend: "down"
              },
              { 
                label: "Affected Customers", 
                value: "14",
                change: -5,
                trend: "down"
              },
              { 
                label: "Time Period", 
                value: context.timeframe,
                change: -100,
                trend: "down"
              }
            ]
          }
        },
        {
          type: "action",
          data: {
            title: "Recommended Actions",
            description: "Based on analysis of the current situation",
            context: {
              "Segment": context.segment,
              "Impact": context.change,
              "Time Period": context.timeframe,
              "Confidence": "High (92%)"
            },
            actions: [
              {
                label: "Customer Outreach", 
                description: "Contact affected customers to understand issues",
                onClick: () => {
                  toast.success("Initiated Customer Outreach workflow");
                }
              },
              {
                label: "Price Adjustment", 
                description: "Temporary pricing strategy for affected segment",
                onClick: () => {
                  toast.success("Started price adjustment process");
                }
              },
              {
                label: "Executive Report", 
                description: "Generate detailed report for leadership team",
                onClick: () => {
                  toast.success("Generating executive report");
                }
              }
            ]
          }
        }
      ]
    };
  } else if (action === "explore") {
    const context = exploreData.context as { industry: string; marketSize: string; currentPenetration: string };
    
    return {
      id: "system-1",
      type: "assistant",
      content: `I've analyzed the market opportunity in the ${context.industry} vertical. With a market size of ${context.marketSize} and our current penetration at just ${context.currentPenetration}, there's significant growth potential.`,
      timestamp: new Date().toISOString(),
      cards: [
        {
          type: "metric",
          data: {
            title: "Market Opportunity",
            metrics: [
              { 
                label: "Market Size", 
                value: context.marketSize,
                change: 12,
                trend: "up"
              },
              { 
                label: "Current Share", 
                value: context.currentPenetration,
                change: 0.6,
                trend: "up"
              },
              { 
                label: "Growth Rate", 
                value: "8.4%",
                change: 1.2,
                trend: "up"
              }
            ]
          }
        },
        {
          type: "action",
          data: {
            title: "Recommended Actions",
            description: "Strategic next steps for market expansion",
            context: {
              "Industry": context.industry,
              "Market Size": context.marketSize,
              "Current Share": context.currentPenetration,
              "Potential ROI": "215% over 3 years"
            },
            actions: [
              {
                label: "Market Research", 
                description: "Conduct detailed segmentation analysis",
                onClick: () => {
                  toast.success("Initiated Market Research workflow");
                }
              },
              {
                label: "Partnership Strategy", 
                description: "Identify potential strategic partners",
                onClick: () => {
                  toast.success("Creating partnership strategy");
                }
              },
              {
                label: "Investment Plan", 
                description: "Prepare investment proposal for board",
                onClick: () => {
                  toast.success("Generating investment plan");
                }
              }
            ]
          }
        }
      ]
    };
  }
  
  return null;
}
