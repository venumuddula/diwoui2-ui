import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/conversation/message";
import { MessageInput } from "@/components/conversation/message-input";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useConversationStore } from "@/store/conversationStore";
import { useSidebarStore } from "@/store/sidebarStore";
import { useArtifactViewerStore } from "@/store/artifactViewerStore";
import { ArtifactViewer } from "@/components/artifact-viewer/ArtifactViewer";
import { Container } from "@/lib/design-system/layout";
import { Heading } from "@/lib/design-system/typography";
import { Loading } from "@/lib/design-system/feedback";
import { cn } from "@/lib/utils";

export default function Conversation() {
  const { id, action, alertId } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { 
    messages, 
    isLoading, 
    conversationTitle, 
    loadConversation, 
    sendMessage 
  } = useConversationStore();
  
  const { collapsed } = useSidebarStore();
  const { isOpen: isArtifactViewerOpen, resetArtifact } = useArtifactViewerStore();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Load conversation data based on parameters
    loadConversation(id, action, alertId);
    // Reset artifact viewer when conversation changes
    resetArtifact();
    
    // Cleanup function to ensure we don't have lingering states
    return () => {
      // Reset the artifact viewer state when unmounting
      resetArtifact();
    };
  }, [id, action, alertId, loadConversation, resetArtifact]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  // Calculate scrollbar width to apply consistent padding
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
 
  useEffect(() => {
    // Calculate scrollbar width
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
   
    const inner = document.createElement('div');
    outer.appendChild(inner);
   
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    setScrollbarWidth(scrollbarWidth);
   
    document.body.removeChild(outer);
  }, []);
 
  return (
    <div className="h-full flex flex-col">
      {/* Main content container */}
      <div 
        className={cn(
          "flex-1 overflow-hidden w-full h-full",
          "transition-all duration-300 ease-in-out",
          isArtifactViewerOpen && !isMobile && "pr-[500px]" // Make space for artifact viewer on desktop
        )}
      >
        {/* Conversation panel with its own scrollable area */}
        <div className="relative h-full overflow-y-auto">
          <Container size="xl" className="mx-auto">
            <div className="py-6 mb-2">
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => navigate(-1)}
                  className="mr-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Heading level={1} size="2xl" className="font-bold">
                  {conversationTitle}
                </Heading>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 mb-24">
              {messages.map((message) => (
                <Message
                  key={message.id}
                  type={message.type}
                  content={message.content}
                  timestamp={message.timestamp}
                  cards={message.cards}
                />
              ))}
              {isLoading && (
                <Loading size="sm" text="Catalyst AI is thinking..." center={false} animationType="thinking" />
              )}
              <div ref={messagesEndRef} />
            </div>
          </Container>
        </div>
      </div>
      
      {/* Floating message input at the bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 py-3 transition-all duration-300 ease-in-out z-10"
        style={{
          left: isMobile ? '0' : (collapsed ? '70px' : '250px'),
          right: isMobile ? '0' : (isArtifactViewerOpen && !isMobile ? '500px' : scrollbarWidth + 'px')
        }}
      >
        <Container size="xl" className="mx-auto">
          {/* Use the exact same Container component with size=xl as the message area */}
          <MessageInput 
            onSend={sendMessage} 
            disabled={isLoading}
            placeholder="Type a message"
          />
        </Container>
      </div>

      {/* Artifact Viewer panel */}
      <ArtifactViewer />
    </div>
  );
}
