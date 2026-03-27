import { motion } from 'framer-motion'

const aiTools = [
  {
    name: 'GitHub Copilot',
    category: 'Coding Assistant',
    badge: 'COP',
    badgeClassName: 'tools-ai-logo tools-ai-logo--copilot',
    summary: 'Hỗ trợ autocomplete, gợi ý refactor và tăng tốc xử lý component React/TypeScript.',
    strengths: [
      'Sinh khung component, props và JSX theo ngữ cảnh file đang mở.',
      'Đề xuất chỉnh sửa nhanh cho CSS, route và xử lý lặp lại trong code.',
      'Phù hợp cho giai đoạn triển khai giao diện và dọn cấu trúc mã.'
    ],
    usage: 'Dùng ở các bước viết component, tinh chỉnh UI và hoàn thiện logic hiển thị.'
  },
  {
    name: 'Claude Code',
    category: 'Agentic Coding',
    badge: 'CC',
    badgeClassName: 'tools-ai-logo tools-ai-logo--claude-code',
    summary: 'Hỗ trợ đọc codebase, đề xuất thay đổi theo nhiều file và diễn giải rõ luồng xử lý.',
    strengths: [
      'Phân tích ảnh hưởng khi sửa một trang hoặc một feature trong project.',
      'Tạo patch có cấu trúc, dễ kiểm tra trước khi áp dụng vào source code.',
      'Phù hợp khi cần chỉnh sửa mang tính hệ thống hoặc giải thích kỹ thuật.'
    ],
    usage: 'Dùng khi cần sửa trang ở mức hoàn chỉnh, có kiểm tra file liên quan và mô tả thay đổi.'
  },
  {
    name: 'Claude Opus 4.6',
    category: 'Reasoning Model',
    badge: 'O46',
    badgeClassName: 'tools-ai-logo tools-ai-logo--opus',
    summary: 'Phù hợp cho các đầu bài cần suy luận dài, tổng hợp báo cáo học thuật và chuẩn hóa giọng văn.',
    strengths: [
      'Tổ chức dàn ý báo cáo, phân chia mục tiêu, phương pháp và phần cam kết sử dụng AI.',
      'Tóm tắt nội dung dài thành đoạn văn mạch lạc, phù hợp phong cách báo cáo nhóm.',
      'Hữu ích khi cần rà tính nhất quán giữa nội dung, luận điểm và cách trình bày.'
    ],
    usage: 'Dùng cho bước xây khung báo cáo, biên tập nội dung và kiểm tra độ hợp lý của lập luận.'
  }
]

const workflowSteps = [
  {
    step: '01',
    title: 'Xác định nhiệm vụ',
    description:
      'Tách bài toán thành ba phần rõ ràng: nghiên cứu nội dung, triển khai giao diện và viết báo cáo sử dụng AI.'
  },
  {
    step: '02',
    title: 'Chọn đúng công cụ',
    description:
      'Copilot ưu tiên cho code nhanh, Claude Code dùng khi chỉnh nhiều file, Opus 4.6 dùng khi cần dàn ý và diễn đạt học thuật.'
  },
  {
    step: '03',
    title: 'Kiểm chứng thủ công',
    description:
      'Mọi gợi ý từ AI đều được nhóm đọc lại, đối chiếu với yêu cầu môn học và chỉnh sửa trước khi đưa vào sản phẩm cuối.'
  }
]

const reportPrompts = [
  {
    title: 'Prompt mở khung báo cáo',
    tag: 'Outline',
    purpose: 'Tạo cấu trúc ban đầu cho báo cáo ứng dụng AI trong đồ án web.',
    prompt:
      'Hãy tạo dàn ý cho báo cáo từ 2 đến 3 trang về việc nhóm sinh viên sử dụng AI trong quá trình xây dựng website ReactJS cho môn Lịch sử Đảng. Báo cáo cần có các mục: mục tiêu sử dụng AI, công cụ đã dùng, công việc cụ thể từng công cụ hỗ trợ, cách nhóm kiểm chứng lại kết quả, rủi ro khi lạm dụng AI và phần cam kết trung thực học thuật. Văn phong ngắn gọn, phù hợp báo cáo học phần.',
    result: 'Cho ra khung mục lục hợp lý để sau đó nhóm điền nội dung thực tế.'
  },
  {
    title: 'Prompt mô tả vai trò từng công cụ',
    tag: 'Tool Usage',
    purpose: 'Sinh phần giải trình rõ ràng cho GitHub Copilot, Claude Code và Claude Opus 4.6.',
    prompt:
      'Viết một đoạn báo cáo giải thích sự khác nhau giữa GitHub Copilot, Claude Code và Claude Opus 4.6 trong một dự án ReactJS. Nêu đúng vai trò hỗ trợ của từng công cụ: Copilot thiên về gợi ý code theo ngữ cảnh, Claude Code thiên về phân tích và chỉnh sửa codebase, Opus 4.6 thiên về suy luận và biên tập nội dung. Tránh viết theo hướng AI tự làm toàn bộ sản phẩm.',
    result: 'Tạo phần nội dung vừa thực tế vừa dễ đưa vào báo cáo nhóm.'
  },
  {
    title: 'Prompt viết phần kiểm chứng',
    tag: 'Verification',
    purpose: 'Tạo đoạn giải thích vì sao nhóm vẫn phải tự chịu trách nhiệm với sản phẩm.',
    prompt:
      'Hãy viết đoạn văn 180 đến 220 chữ mô tả quy trình kiểm chứng đầu ra từ AI trong một dự án học tập. Đề cập việc nhóm so sánh gợi ý AI với source code thực tế, thử nghiệm lại giao diện sau khi chỉnh sửa, đọc lại câu chữ trước khi đưa vào báo cáo và chỉ giữ những nội dung phù hợp với yêu cầu môn học. Giọng văn khách quan, không phóng đại.',
    result: 'Cho ra phần cam kết và kiểm chứng có thể dùng trực tiếp hoặc chỉnh nhẹ.'
  },
  {
    title: 'Prompt hoàn thiện kết luận',
    tag: 'Conclusion',
    purpose: 'Đóng báo cáo bằng một kết luận cân bằng giữa lợi ích và trách nhiệm.',
    prompt:
      'Viết phần kết luận cho báo cáo sử dụng AI trong dự án website học phần. Kết luận cần nêu rằng AI giúp tiết kiệm thời gian ở khâu gợi ý ý tưởng, hỗ trợ viết code và biên tập báo cáo, nhưng quyết định cuối cùng, tính chính xác nội dung và chất lượng sản phẩm vẫn do nhóm sinh viên chịu trách nhiệm. Độ dài khoảng 1 đoạn, văn phong trang trọng vừa phải.',
    result: 'Kết thúc báo cáo gọn, đúng tinh thần hỗ trợ chứ không thay thế con người.'
  }
]

const aiCommitments = [
  'AI chỉ đóng vai trò hỗ trợ gợi ý, không thay thế việc đọc hiểu yêu cầu và kiểm tra thủ công của nhóm.',
  'Nhóm chịu trách nhiệm cuối cùng về nội dung hiển thị trên website, cách diễn đạt trong báo cáo và độ chính xác của thông tin.',
  'Các prompt được viết theo tình huống làm đồ án thực tế, tránh mô tả sai lệch hoặc thổi phồng năng lực của công cụ.',
  'Những đoạn văn do AI hỗ trợ đều cần biên tập lại để phù hợp ngữ cảnh học thuật và phong cách trình bày của nhóm.'
]

const usageStats = [
  { value: '03', label: 'Công cụ chính' },
  { value: '04', label: 'Prompt mô phỏng' },
  { value: '01', label: 'Mẫu báo cáo AI' }
]

export function ToolsAIPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <section className="section tools-ai-page">
        <div className="container">
          <div className="tools-ai-shell">
            <article className="tools-ai-hero-panel">
              <div className="tools-ai-hero-copy">
                <p className="tools-ai-eyebrow">AI Tools Report</p>
                <h1 className="tools-ai-title">Công cụ AI nhóm sử dụng để xây dựng website và viết báo cáo</h1>
                <p className="tools-ai-subtitle">
                  Trang này mô tả rõ vai trò của GitHub Copilot, Claude Code và Claude Opus 4.6 trong quá trình
                  phát triển giao diện, chỉnh sửa source code và biên tập báo cáo sử dụng AI một cách có kiểm chứng.
                </p>

                <div className="tools-ai-chip-row">
                  <span className="tools-ai-chip">ReactJS Project</span>
                  <span className="tools-ai-chip">UI Improvement</span>
                  <span className="tools-ai-chip">Academic Report</span>
                </div>
              </div>

              <div className="tools-ai-hero-side">
                <div className="tools-ai-insight-card">
                  <span className="tools-ai-insight-label">Mục tiêu sử dụng AI</span>
                  <strong>Tăng tốc triển khai nhưng vẫn giữ kiểm chứng thủ công ở bước cuối.</strong>
                </div>

                <div className="tools-ai-stats">
                  {usageStats.map((stat) => (
                    <div key={stat.label} className="tools-ai-stat">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <section className="tools-ai-section">
              <div className="tools-ai-section-heading">
                <p className="tools-ai-section-kicker">Bộ công cụ chính</p>
                <h2>Các nền tảng AI được sử dụng</h2>
              </div>

              <div className="tools-ai-tools-grid">
                {aiTools.map((tool, index) => (
                  <motion.article
                    key={tool.name}
                    className="tools-ai-tool-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="tools-ai-tool-head">
                      <div className={tool.badgeClassName} aria-hidden="true">
                        {tool.badge}
                      </div>

                      <div>
                        <span className="tools-ai-tool-category">{tool.category}</span>
                        <h3>{tool.name}</h3>
                      </div>
                    </div>

                    <p className="tools-ai-tool-summary">{tool.summary}</p>

                    <ul className="tools-ai-feature-list">
                      {tool.strengths.map((strength) => (
                        <li key={strength}>{strength}</li>
                      ))}
                    </ul>

                    <div className="tools-ai-usage-note">
                      <span>Ứng dụng thực tế</span>
                      <p>{tool.usage}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="tools-ai-section tools-ai-section--workflow">
              <div className="tools-ai-section-heading">
                <p className="tools-ai-section-kicker">Quy trình dùng AI</p>
                <h2>Cách nhóm phối hợp công cụ với kiểm chứng thủ công</h2>
              </div>

              <div className="tools-ai-workflow">
                {workflowSteps.map((item, index) => (
                  <motion.article
                    key={item.step}
                    className="tools-ai-workflow-card"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                  >
                    <span className="tools-ai-step-number">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="tools-ai-section">
              <div className="tools-ai-section-heading">
                <p className="tools-ai-section-kicker">Prompt mô phỏng</p>
                <h2>Các box prompt mẫu để tạo báo cáo sử dụng AI</h2>
              </div>

              <div className="tools-ai-prompt-grid">
                {reportPrompts.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="tools-ai-prompt-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.42, delay: index * 0.06 }}
                  >
                    <div className="tools-ai-prompt-head">
                      <div>
                        <span className="tools-ai-prompt-tag">{item.tag}</span>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.purpose}</p>
                    </div>

                    <div className="tools-ai-prompt-box">
                      <span className="tools-ai-prompt-label">Prompt</span>
                      <p>{item.prompt}</p>
                    </div>

                    <div className="tools-ai-result-box">
                      <span className="tools-ai-prompt-label">Kỳ vọng đầu ra</span>
                      <p>{item.result}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="tools-ai-section">
              <div className="tools-ai-section-heading">
                <p className="tools-ai-section-kicker">Cam kết học thuật</p>
                <h2>Nguyên tắc khi ghi nhận việc sử dụng AI trong báo cáo</h2>
              </div>

              <article className="tools-ai-commitment-card">
                <ul className="tools-ai-commitment-list">
                  {aiCommitments.map((commitment) => (
                    <li key={commitment}>{commitment}</li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
