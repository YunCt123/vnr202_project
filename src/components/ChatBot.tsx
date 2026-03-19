import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FULL_KNOWLEDGE_TEXT } from '../data/timelineData'

interface Message {
  role: 'user' | 'model'
  text: string
}

const API_KEY = 'AIzaSyB7M1h6CjSGljQJo47TfX0Gy7tf4KSAwjQ'
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`

const SYSTEM_PROMPT = `Bạn là trợ lý AI chuyên về lịch sử Đảng Cộng sản Việt Nam. Hãy trả lời câu hỏi dựa trên dữ liệu sau đây. Trả lời bằng tiếng Việt, ngắn gọn và chính xác. Nếu câu hỏi nằm ngoài phạm vi dữ liệu, hãy cho biết bạn chỉ có thể trả lời về lịch sử Đảng Cộng sản Việt Nam.

DỮ LIỆU LỊCH SỬ:
${FULL_KNOWLEDGE_TEXT}`

async function callGemini(messages: Message[]): Promise<string> {
  const contents = messages.map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }))

  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024
    }
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`API error: ${res.status} - ${err}`)
  }

  const data = await res.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Không có phản hồi.'
}

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const reply = await callGemini(newMessages)
      setMessages(prev => [...prev, { role: 'model', text: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: 'Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="chatbot-fab"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mở chatbot"
      >
        {open ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <span className="chatbot-header-icon">⭐</span>
              <div>
                <h4>Trợ lý Lịch sử</h4>
                <span className="chatbot-status">Hỏi đáp về lịch sử Đảng CSVN</span>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.length === 0 && (
                <div className="chatbot-welcome">
                  <p>👋 Xin chào! Tôi là trợ lý AI chuyên về lịch sử Đảng Cộng sản Việt Nam.</p>
                  <p>Hãy hỏi tôi bất kỳ câu hỏi nào!</p>
                  <div className="chatbot-suggestions">
                    {['Đảng CSVN thành lập khi nào?', 'Chiến thắng Điện Biên Phủ', 'Đổi mới 1986 là gì?'].map(q => (
                      <button
                        key={q}
                        className="chatbot-suggestion"
                        onClick={() => { setInput(q); }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`chatbot-msg chatbot-msg--${m.role}`}>
                  <div className="chatbot-msg-bubble">
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="chatbot-msg chatbot-msg--model">
                  <div className="chatbot-msg-bubble chatbot-typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-area">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi..."
                disabled={loading}
                className="chatbot-input"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="chatbot-send"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
