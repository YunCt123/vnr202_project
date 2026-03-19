import { useState } from 'react'
import { HorizontalScrollContainer } from '../components/HorizontalScrollContainer'
import { StorySection } from '../components/StorySection'
import { TimelineLine } from '../components/TimelineLine'
import { AudioController } from '../components/AudioController'
import { MapRegion } from '../components/MapRegion'
import { StoryModal } from '../components/StoryModal'
import { useCursor } from '../systems/cursor/CursorProvider'
import mapImage from '../assets/vietnam.png'

type StorySectionData = {
  id: string
  title: string
  subtitle: string
  year: string
  description: string
  theme: string
  videoUrl?: string
}

type MapRegionData = {
  id: string
  label: string
  description: string
  body: string
  shapeClass: string
}

const sections: StorySectionData[] = [
  {
    id: '1858',
    year: '1858',
    title: 'Những phát đại bác ở Đà Nẵng',
    subtitle: 'Khởi đầu một thế kỷ biến động.',
    description:
      'Cuộc tấn công mở màn đã đặt nền cho một hành trình dài chống xâm lược, thắp lên ý chí bảo vệ độc lập dân tộc.',
    theme: 'ember',
  },
  {
    id: '1930',
    year: '1930',
    title: 'Sự ra đời của một lực lượng thống nhất',
    subtitle: 'Ngọn cờ tập hợp ý chí toàn dân.',
    description:
      'Một tổ chức tiên phong được thành lập, tạo nên trục dẫn cho phong trào đấu tranh và khát vọng tự do.',
    theme: 'crimson',
  },
  {
    id: '1945',
    year: '1945',
    title: 'Mùa thu độc lập',
    subtitle: 'Tiếng nói tự do vang lên giữa quảng trường.',
    description:
      'Ngày tuyên ngôn độc lập đánh dấu bước ngoặt lịch sử, mở ra kỷ nguyên tự quyết của một dân tộc kiên cường.',
    theme: 'obsidian',
  },
  {
    id: '1954',
    year: '1954',
    title: 'Điện Biên Phủ',
    subtitle: 'Một chiến thắng làm chấn động địa cầu.',
    description:
      'Trận quyết chiến chiến lược đã buộc đối phương ký kết hiệp định, mở ra hy vọng về hòa bình và thống nhất.',
    theme: 'aurora',
  },
  {
    id: '1968',
    year: '1968',
    title: 'Tổng tiến công và nổi dậy',
    subtitle: 'Sự bùng nổ của ý chí toàn dân.',
    description:
      'Các đô thị và chiến trường đồng loạt rực lửa, tạo bước chuyển quan trọng trong nhận thức và cục diện.',
    theme: 'aurora',
  },
  {
    id: '1975',
    year: '1975',
    title: 'Ngày thống nhất',
    subtitle: 'Chấm dứt chia cắt, mở ra kỷ nguyên mới.',
    description:
      'Chiến dịch Hồ Chí Minh toàn thắng, đất nước thu về một mối, khởi đầu cho công cuộc tái thiết.',
    theme: 'ember',
  },
  {
    id: '1986',
    year: '1986',
    title: 'Đổi mới',
    subtitle: 'Một cuộc chuyển mình về kinh tế và tư duy.',
    description:
      'Chính sách đổi mới mở ra cánh cửa hội nhập, tạo nền tảng cho tăng trưởng và phát triển bền vững.',
    theme: 'crimson',
  },
  {
    id: '1995',
    year: '1995',
    title: 'Kết nối khu vực',
    subtitle: 'Từ hội nhập đến hợp tác rộng mở.',
    description:
      'Việt Nam gia nhập ASEAN, mở rộng quan hệ đối ngoại và khẳng định vị thế trong khu vực.',
    theme: 'obsidian',
  },
  {
    id: '2007',
    year: '2007',
    title: 'Bước vào sân chơi toàn cầu',
    subtitle: 'Thương mại và chuyển đổi sâu rộng.',
    description:
      'Gia nhập WTO đưa kinh tế Việt Nam hòa vào dòng chảy quốc tế, thúc đẩy cải cách và đổi mới.',
    theme: 'aurora',
  },
  {
    id: '2020',
    year: '2020',
    title: 'Bản lĩnh thời đại mới',
    subtitle: 'Đoàn kết vượt qua thử thách toàn cầu.',
    description:
      'Từ chuyển đổi số đến thích ứng khủng hoảng, Việt Nam thể hiện sự kiên cường và năng lực sáng tạo.',
    theme: 'crimson',
  },
  {
    id: 'map',
    year: 'Bản đồ',
    title: 'Bản đồ ký ức',
    subtitle: 'Chạm vào từng vùng đất, mở ra câu chuyện.',
    description:
      'Nhấp vào từng điểm để khám phá dấu ấn lịch sử, văn hóa và tinh thần của các vùng miền.',
    theme: 'map',
  },
]

const mapRegions: MapRegionData[] = [
  {
    id: 'ha-noi',
    label: 'Hà Nội',
    description: 'Trái tim lịch sử và chính trị của cả nước.',
    body:
      'Hà Nội lưu giữ tầng tầng lớp lớp di sản, từ khu phố cổ đến quảng trường Ba Đình, nơi khai sinh nước Việt Nam mới.',
    shapeClass: 'map-region--hanoi',
  },
  {
    id: 'hue',
    label: 'Huế',
    description: 'Kinh đô cổ, nơi hội tụ chiều sâu văn hóa.',
    body:
      'Huế mang dáng dấp trầm mặc của hoàng thành, tiếng chuông chùa và dòng Hương giang gợi lại ký ức về triều đại vàng son.',
    shapeClass: 'map-region--hue',
  },
  {
    id: 'da-nang',
    label: 'Đà Nẵng',
    description: 'Cửa ngõ chiến lược của miền Trung.',
    body:
      'Đà Nẵng là nơi mở đầu cuộc kháng chiến chống xâm lược thế kỷ XIX, đồng thời là trung tâm giao thương sôi động.',
    shapeClass: 'map-region--danang',
  },
  {
    id: 'tay-nguyen',
    label: 'Tây Nguyên',
    description: 'Âm vang đại ngàn và chiến dịch then chốt.',
    body:
      'Tây Nguyên là nơi bắt đầu cuộc Tổng tiến công mùa xuân 1975, khởi đầu chuỗi thắng lợi dẫn đến thống nhất.',
    shapeClass: 'map-region--taynguyen',
  },
  {
    id: 'tp-hcm',
    label: 'TP. Hồ Chí Minh',
    description: 'Thành phố của năng lượng đổi mới.',
    body:
      'Thành phố Hồ Chí Minh là điểm hội tụ của tinh thần năng động, nơi ghi dấu thắng lợi cuối cùng mùa xuân 1975.',
    shapeClass: 'map-region--saigon',
  },
]

const StoryPage = () => {
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeRegion, setActiveRegion] = useState<MapRegionData | null>(null)
  const { setMode } = useCursor()

  const timelineLabels = sections.map((section) => section.year)

  return (
    <main className="story-shell">
      <TimelineLine
        labels={timelineLabels}
        progress={progress}
        activeIndex={activeIndex}
      />
      <div className="progress-rail">
        <span className="progress-rail__fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <HorizontalScrollContainer
        sections={sections.length}
        onProgress={setProgress}
        onActiveIndex={setActiveIndex}
      >
        {sections.map((section, index) => (
          <StorySection
            key={section.id}
            {...section}
            progress={progress}
            sectionIndex={index}
            totalSections={sections.length}
          >
            {section.id === 'map' ? (
              <div className="map-stage">
                <div
                  className="map-shell"
                  onMouseEnter={() => setMode('map')}
                  onMouseLeave={() => setMode('default')}
                  style={{ ['--map-image' as string]: `url(${mapImage})` }}
                >
                  {mapRegions.map((region) => (
                    <MapRegion
                      key={region.id}
                      label={region.label}
                      description={region.description}
                      onSelect={() => setActiveRegion(region)}
                      shapeClass={region.shapeClass}
                    />
                  ))}
                  <span className="map-glow" />
                </div>
              </div>
            ) : null}
          </StorySection>
        ))}
      </HorizontalScrollContainer>
      <AudioController />
      <StoryModal
        isOpen={!!activeRegion}
        title={activeRegion?.label ?? ''}
        body={activeRegion?.body ?? ''}
        onClose={() => setActiveRegion(null)}
      />
    </main>
  )
}

export default StoryPage
