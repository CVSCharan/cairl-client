import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  MessageCircle,
  ChevronDown,
  User,
  RotateCcw,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
  tags?: string[];
}

const questions = [
  "What is CAiRL's mission?",
  "How does CAiRL collaborate with startups?",
  "What sectors does CAiRL focus on?",
  "How can I collaborate with CAiRL?",
  "Does CAiRL provide AI education or training programs?",
  "How does CAiRL ensure ethical AI development?",
  "How can I apply for grants or funding at CAiRL?",
  "What are CAiRL's future goals for AI in India?",
  "How can I stay updated with CAiRL's initiatives?",
];

const answers = [
  "CAiRL's mission is to advance AI research and innovation in India through collaborative partnerships, cutting-edge research, and practical applications that address real-world challenges.",
  "CAiRL partners with startups through incubators like T-Hub, where we offer mentorship, resources, and connections to industry leaders.",
  "CAiRL focuses on multiple sectors including healthcare, agriculture, education, manufacturing, and public services.",
  "You can collaborate with CAiRL as a research partner, startup, academic institution, or individual researcher.",
  "Yes, CAiRL offers various educational programs including workshops, bootcamps, and certificate courses.",
  "CAiRL ensures ethical AI development through an Ethics Committee, promoting transparency, fairness, and impact assessments.",
  "Visit our website's Funding section for information on current grants, eligibility, and application procedures.",
  "CAiRL aims to make India a global AI hub with responsible governance, local solutions, and talent development.",
  "Subscribe to our newsletter, follow us on social media, and check our website for the latest updates.",
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showFAQs, setShowFAQs] = useState(true);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get welcome message
  const getWelcomeMessage = () => {
    return "Hello! I'm CAiRL's AI assistant. I'm here to help you learn about our research, programs, and collaboration opportunities. Please select a question from below:";
  };

  // Initialize messages when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          text: getWelcomeMessage(),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setShowFAQs(true);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typewriter effect for bot messages
  const typewriterEffect = (
    text: string,
    messageId: string,
    callback?: () => void
  ) => {
    let index = 0;
    const speed = 30; // Typing speed in milliseconds

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? { ...msg, text: text.substring(0, index + 1), isTyping: true }
              : msg
          )
        );
        index++;
      } else {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, text: text, isTyping: false } : msg
          )
        );
        setTypingMessageId(null);
        clearInterval(typeInterval);
        if (callback) callback();
      }
    }, speed);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowFAQs(false);

    // Process user input and generate response
    const userInput = inputValue.toLowerCase();
    let botResponseText =
      "Thank you for your question! I understand you're asking about CAiRL. For the best answers, please select from the questions below, as I have detailed information prepared for those topics.";

    // Check if user input matches any of our questions
    const questionIndex = questions.findIndex(
      (q) =>
        userInput.includes(q.toLowerCase().substring(0, 10)) ||
        q.toLowerCase().includes(userInput.substring(0, 10))
    );

    if (questionIndex !== -1) {
      botResponseText = answers[questionIndex];
    }

    // Simulate bot response with typewriter effect
    setTimeout(() => {
      const botResponseId = (Date.now() + 1).toString();
      const botResponse: Message = {
        id: botResponseId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, botResponse]);
      setTypingMessageId(botResponseId);

      // Start typewriter effect
      typewriterEffect(botResponseText, botResponseId, () => {
        setShowFAQs(true); // Show FAQs after typing is complete
      });
    }, 1000);
  };

  const handleFAQClick = (questionIndex: number) => {
    const question = questions[questionIndex];
    const answer = answers[questionIndex];

    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowFAQs(false);

    // Simulate bot response with typewriter effect
    setTimeout(() => {
      const botResponseId = (Date.now() + 1).toString();
      const botMessage: Message = {
        id: botResponseId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, botMessage]);
      setTypingMessageId(botResponseId);

      // Start typewriter effect
      typewriterEffect(answer, botResponseId, () => {
        setShowFAQs(true); // Show FAQs after typing is complete
      });
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state when closing
    setMessages([]);
    setShowFAQs(true);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        text: getWelcomeMessage(),
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    setShowFAQs(true);
    setInputValue("");
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all transform hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat interface */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                alt="CAiRL Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="font-semibold text-gray-800">CAiRL Assistant</h3>
                <p className="text-xs text-gray-500">
                  AI Research & Innovation
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={handleReset}
                className="h-8 w-8 p-0 hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={handleClose}
                className="h-8 w-8 p-0 hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <img
                        src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                        alt="CAiRL"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {message.text}
                    {message.sender === "bot" && message.isTyping && (
                      <span className="inline-block w-2 h-4 bg-gray-400 ml-1 animate-pulse"></span>
                    )}
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}

              {/* FAQ Section - Shows all questions after every bot response */}
              {showFAQs &&
                messages.length > 0 &&
                messages[messages.length - 1].sender === "bot" && (
                  <div className="space-y-3 mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ChevronDown className="w-4 h-4" />
                      <span className="font-medium">Select a question:</span>
                    </div>
                    <div className="space-y-2">
                      {questions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleFAQClick(index)}
                          className="w-full text-left p-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg text-sm transition-all duration-200 hover:shadow-sm"
                        >
                          <span className="text-gray-700">{question}</span>
                        </button>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Or type your own question below ↓
                      </p>
                    </div>
                  </div>
                )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
