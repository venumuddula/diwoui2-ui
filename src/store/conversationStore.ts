
import { create } from 'zustand';
import { ConversationMessage } from '@/types/conversation';
import { generateAIResponse, getActionTypeInitialMessage } from '@/lib/conversation-utils';
import { conversationHistory, sampleConversation } from '@/lib/mock-data';

interface ConversationState {
  messages: ConversationMessage[];
  isLoading: boolean;
  conversationTitle: string;
  loadConversation: (id?: string, action?: string, alertId?: string) => Promise<void>;
  sendMessage: (content: string) => void;
  setMessages: (messages: ConversationMessage[]) => void;
  setConversationTitle: (title: string) => void;
}

export const useConversationStore = create<ConversationState>((set, get) => ({
  messages: [],
  isLoading: false,
  conversationTitle: '',
  
  loadConversation: async (id, action, alertId) => {
    // Reset the state when loading a new conversation
    set({ 
      messages: [],
      isLoading: true,
      conversationTitle: ''
    });
    
    // Small delay to simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (action && alertId) {
      // Handle action-based conversation (investigate/explore)
      const actionType = action === "investigate" ? "investigate" : "explore";
      
      // Set conversation title based on action type
      set({ 
        conversationTitle: actionType === "investigate" ? "Investigation" : "Exploration"
      });
      
      const initialMessage = getActionTypeInitialMessage(actionType, alertId);
      if (initialMessage) {
        set({ 
          messages: [initialMessage],
          isLoading: false
        });
      }
    } else if (id === "new") {
      // Handle new conversation
      set({
        conversationTitle: "New Analysis",
        messages: [{
          id: "welcome-msg",
          type: "assistant",
          content: "Welcome to a new analysis session. How can I assist with your business intelligence needs today? Try asking about metrics, charts, tables, recommendations, or type 'document', 'pdf', or 'report' to view the Amtrends Business Specification Document.",
          timestamp: new Date().toISOString()
        }],
        isLoading: false
      });
    } else {
      // Find existing conversation from mock data
      const conversation = conversationHistory.find(c => c.id === id);
      if (conversation) {
        set({
          conversationTitle: conversation.title,
          messages: sampleConversation,
          isLoading: false
        });
      } else {
        set({
          conversationTitle: "New Analysis",
          messages: [{
            id: "welcome-msg",
            type: "assistant",
            content: "Welcome to a new analysis session. How can I assist with your business intelligence needs today? Try asking about metrics, charts, tables, recommendations, or type 'document', 'pdf', or 'report' to view the Amtrends Business Specification Document.",
            timestamp: new Date().toISOString()
          }],
          isLoading: false
        });
      }
    }
  },
  
  sendMessage: (content) => {
    // Add user message
    const userMessage: ConversationMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      content,
      timestamp: new Date().toISOString()
    };
    
    set(state => ({ 
      messages: [...state.messages, userMessage],
      isLoading: true
    }));
    
    // Simulate AI response with a delay
    setTimeout(() => {
      const aiMessage = generateAIResponse(content);
      set(state => ({ 
        messages: [...state.messages, aiMessage],
        isLoading: false
      }));
    }, 1500);
  },
  
  setMessages: (messages) => set({ messages }),
  setConversationTitle: (title) => set({ conversationTitle: title }),
}));
