import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function MessageInput({ onSend, disabled = false, placeholder = "Type your message..." }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative w-full">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="min-h-[100px] py-5 pr-14 pl-5 text-base bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm"
          disabled={disabled}
        />
        <Button 
          type="submit"
          size="icon"
          variant="default"
          disabled={!message.trim() || disabled}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-md bg-red-600 hover:bg-red-700 text-white"
        >
          <Send className="h-5 w-5 -translate-x-[1px]" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
