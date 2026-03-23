import { useState } from 'react'
import { MapRegion } from '../components/MapRegion'
import { StoryModal } from '../components/StoryModal'
import { useCursor } from '../systems/cursor/CursorProvider'
import mapImage from '../assets/vietnam-removebg-preview.png'
import './StoryPage.css'

type MapRegionData = {
  id: string
  label: string
  description: string
  body: string
  shapeClass: string
}

const mapRegions: MapRegionData[] = [
  {
    id: 'dien-bien',
    label: 'Điện Biên',
    description: 'Điểm son chói lọi của lịch sử dân tộc.',
    body:
      'Chiến thắng Điện Biên Phủ năm 1954 đã làm chấn động địa cầu, chấm dứt ách thống trị của thực dân Pháp và mở ra bước ngoặt cho phong trào giải phóng dân tộc.',
    shapeClass: 'map-region--dienbien',
  },
  {
    id: 'ha-noi',
    label: 'Hà Nội',
    description: 'Trái tim lịch sử và chính trị của cả nước.',
    body:
      'Hà Nội lưu giữ tầng tầng lớp lớp di sản, từ khu phố cổ đến quảng trường Ba Đình, nơi khai sinh nước Việt Nam mới.',
    shapeClass: 'map-region--hanoi',
  },
  {
    id: 'hai-phong',
    label: 'Hải Phòng',
    description: 'Thành phố cảng gắn với giao thương và công nghiệp.',
    body:
      'Hải Phòng vừa là cửa ngõ biển quan trọng, vừa là trung tâm công nghiệp lớn của miền Bắc, góp phần xây dựng tiềm lực kinh tế quốc gia.',
    shapeClass: 'map-region--haiphong',
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
    id: 'buon-ma-thuot',
    label: 'Buôn Ma Thuột',
    description: 'Dấu ấn cao nguyên với vị trí quân sự đặc biệt.',
    body:
      'Tây Nguyên là hướng chiến lược mở đầu cuộc Tổng tiến công mùa xuân 1975, trong đó các đô thị cao nguyên như Buôn Ma Thuột mang vai trò kết nối hậu cần và kiểm soát địa bàn.',
    shapeClass: 'map-region--buon-ma-thuot',
  },
  {
    id: 'can-tho',
    label: 'Cần Thơ',
    description: 'Trung tâm của miền Tây sông nước.',
    body:
      'Cần Thơ là đầu mối giao thông, kinh tế và văn hóa của miền Tây Nam Bộ, đại diện cho sức sống bền bỉ của vùng đất châu thổ.',
    shapeClass: 'map-region--cantho',
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
  const [activeRegion, setActiveRegion] = useState<MapRegionData | null>(null)
  const { setMode } = useCursor()

  return (
    <main className="story-shell">
      <section className="map-stage map-stage--solo" aria-label="Bản đồ Việt Nam">
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
              isActive={activeRegion?.id === region.id}
            />
          ))}
          <span className="map-glow" />
        </div>
      </section>
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
