import { motion } from 'framer-motion'

const aiTools = [
  {
    name: 'NotebookLM',
    description: 'Tra cứu nội dung học phần Lịch Sử Đảng và tổng hợp ghi chú.',
    iconText: 'NotebookLM',
    iconClassName: 'tools-ai-icon-text--notebooklm'
  },
  {
    name: 'GPT-5.2-Codex',
    description: 'Hỗ trợ tạo nội dung và cấu trúc giao diện cho trang web.',
    iconImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    iconAlt: 'GPT-5.2-Codex'
  },
  {
    name: 'Stitch with Google',
    description: 'Phác thảo giao diện, bố cục và gợi ý phong cách thẩm mỹ.',
    iconText: '⚗',
    iconClassName: 'tools-ai-icon-text--stitch'
  }
]

const references = [
  'https://noichinh.vn/nghien-cuu-trao-doi/201309/xay-dung-va-bao-ve-c-hinh-quyen-sau-cach-mang-thang-tam-292407/',
  'https://www.hcmcpv.org.vn/tin-tuc/hai-cuoc-khang-phap-cua-dan-toc-viet-nam-1491883502',
  'https://nhandan.vn/giai-cap-nong-dan-gop-phan-lam-nen-chien-thang-lich-su-post533564.html',
  'https://sjc.ussh.vnu.edu.vn/vi/nghien-cuu-khoa-hoc/chuong-trinh-de-ta-i-du-an/mon-su-viet-nam-giai-doan-1954-1975-15.html',
  'https://tulieuvankien.dangcongsan.vn/tu-lieu-van-kien',
  'https://www.youtube.com/@TruyenHinhQuocHoiVietNam',
  'https://www.youtube.com/@VTV24',
  'https://www.youtube.com/@thoisuvtv'
]

const aiCommitments = [
  'AI được dùng như công cụ hỗ trợ nghiên cứu, gợi ý diễn đạt và tổ chức nội dung, không thay thế việc kiểm chứng tài liệu.',
  'Nhóm đối chiếu các thông tin lịch sử với nguồn chính thống trước khi đưa vào website.',
  'Các nội dung do AI gợi ý đều được biên tập thủ công để phù hợp bối cảnh môn học và yêu cầu học thuật.',
  'Nhóm chịu trách nhiệm cuối cùng về tính chính xác, tính trung thực và cách trình bày của sản phẩm.',
  'Website không sử dụng AI để tạo thông tin bịa đặt hoặc xuyên tạc sự kiện lịch sử.'
]

export function ToolsAIPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <section className="section section-white">
        <div className="container">
          <div className="tools-ai-hero">
            <p className="tools-ai-eyebrow">Nguồn tham khảo</p>
            <h2 className="tools-ai-title">Tham khảo & Công cụ hỗ trợ</h2>
            <p className="tools-ai-subtitle">
              Tổng hợp tài liệu, video và các công cụ AI đã hỗ trợ trong quá trình xây dựng nội dung và giao diện.
            </p>
          </div>

          <div className="tools-ai-layout">
            <article className="tools-ai-card tools-ai-card--references">
              <h3>Tài liệu tham khảo</h3>
              <ul className="tools-ai-reference-list">
                {references.map((reference) => (
                  <li key={reference}>
                    <a href={reference} target="_blank" rel="noreferrer">
                      {reference}
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="tools-ai-card tools-ai-card--support">
              <h3>Công cụ AI hỗ trợ</h3>
              <ul className="tools-ai-support-list">
                {aiTools.map((tool) => (
                  <li key={tool.name} className="tools-ai-support-item">
                    <div>
                      <h4>{tool.name}</h4>
                      <p>{tool.description}</p>
                    </div>

                    <div className="tools-ai-icon-box" aria-label={`Biểu tượng ${tool.name}`}>
                      {tool.iconImage ? (
                        <img src={tool.iconImage} alt={tool.iconAlt} loading="lazy" />
                      ) : (
                        <span className={tool.iconClassName}>{tool.iconText}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="tools-ai-card tools-ai-card--highlight tools-ai-commitment">
            <h3>Cam kết về AI</h3>
            <ul className="tools-ai-list">
              {aiCommitments.map((commitment) => (
                <li key={commitment}>{commitment}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </motion.div>
  )
}