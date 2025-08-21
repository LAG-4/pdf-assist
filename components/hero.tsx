"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Sparkles, Search } from "lucide-react";
import { FloatingPaper } from "@/components/floating-paper";
import { RoboAnimation } from "@/components/robo-animation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Use only ONE theme for highlight.js

export default function Hero() {
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Handler for searching
  const handleSearch = async () => {
    if (!searchText.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      // Use the correct n8n webhook endpoint
      const res = await fetch("http://localhost:5678/webhook-test/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: searchText, // Use what is typed in the input
          sessionId: "frontend-hero",
        }),
      });
      const data = await res.json();
      // Handle n8n array response
      const first = Array.isArray(data) ? data[0] : data;
      setResponse(first.response || "No answer received.");
    } catch (err: any) {
      setResponse("Error contacting AI backend: " + err.message);
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Transform Your Research with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}CasperAI
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Upload your research papers and let CasperAI transform them into engaging presentations, podcasts, and visual content.
          </motion.p>
          {/* Interactive search input with AI call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                placeholder="Search research papers, ask questions, or describe what you need..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
                onClick={handleSearch}
                disabled={loading}
              >
                Search
              </Button>
            </div>
            {/* AI response (below the search bar) */}
            {loading && (
              <div className="mt-6 text-purple-400 text-lg">Thinking...</div>
            )}
            {response && (
              <div className="mt-6 bg-white/10 text-white p-4 rounded shadow-lg max-w-2xl mx-auto text-left">
                <strong>AI Response:</strong>
                <div style={{ fontSize: "1rem", lineHeight: 1.4 }}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      h1: ({node, ...props}: any) => <h1 className="text-2xl font-bold mb-2 mt-3" {...props} />,
                      h2: ({node, ...props}: any) => <h2 className="text-xl font-bold mb-2 mt-2 text-purple-300" {...props} />,
                      p: ({node, ...props}: any) => <p className="my-1" {...props} />,
                      ul: ({node, ...props}: any) => <ul className="list-disc pl-6 my-1" {...props} />,
                      li: ({node, ...props}: any) => <li className="my-0.5" {...props} />,
                      code: ({node, inline, className, children, ...props}: any) =>
                        inline
                          ? <code className="bg-gray-800 px-1 py-0.5 rounded">{children}</code>
                          : <pre className="bg-gray-900 p-3 rounded overflow-x-auto"><code className={className}>{children}</code></pre>,
                    }}
                  >
                    {response}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              <FileText className="mr-2 h-5 w-5" />
              Upload Paper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-purple-500 hover:bg-purple-500/20 bg-transparent"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              See Examples
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  );
}
