export interface TimelineEvent {
  year: string
  date?: string
  title: string
  description: string
}

export interface TimelinePeriod {
  id: string
  title: string
  yearRange: string
  summary: string
  events: TimelineEvent[]
}

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'truoc-1930',
    title: 'Bối cảnh lịch sử và chuẩn bị thành lập Đảng',
    yearRange: '1858 – 1930',
    summary: 'Việt Nam trở thành thuộc địa nửa phong kiến; các phong trào Cần Vương, Đông Du, Duy Tân lần lượt thất bại. Nguyễn Ái Quốc tìm ra con đường giải phóng dân tộc theo chủ nghĩa Mác-Lênin.',
    events: [
      { year: '1858', title: 'Pháp xâm lược Việt Nam', description: 'Thực dân Pháp nổ súng tấn công xâm lược, biến Việt Nam từ một quốc gia phong kiến thành thuộc địa nửa phong kiến.' },
      { year: '1862', title: 'Hòa ước Nhâm Tuất', description: 'Triều đình Huế ký Hòa ước Nhâm Tuất, nhượng 3 tỉnh miền Đông Nam Kỳ cho Pháp — mở đầu quá trình mất nước từng bước.' },
      { year: '1874', title: 'Hòa ước Giáp Tuất', description: 'Pháp ký Hòa ước Giáp Tuất, buộc triều đình thừa nhận chủ quyền của Pháp ở toàn bộ Nam Kỳ.' },
      { year: '1883–1884', title: 'Hòa ước Quý Mùi và Giáp Thân', description: 'Pháp áp đặt hai hòa ước, biến Việt Nam thành thuộc địa và xứ bảo hộ hoàn toàn.' },
      { year: '1885', title: 'Phong trào Cần Vương', description: 'Phong trào Cần Vương bùng nổ sau chiếu Cần Vương của vua Hàm Nghi, kêu gọi văn thân, sĩ phu đứng lên chống Pháp.' },
      { year: '1896', title: 'Kết thúc phong trào Cần Vương', description: 'Cuộc khởi nghĩa của Phan Đình Phùng thất bại, đánh dấu sự chấm dứt của phong trào Cần Vương do giai cấp phong kiến lãnh đạo.' },
      { year: 'Đầu TK XX', title: 'Phong trào Đông Du và Duy Tân', description: 'Phan Bội Châu phát động phong trào Đông Du, đưa thanh niên sang Nhật. Phan Châu Trinh khởi xướng phong trào Duy Tân theo đường lối cải cách ôn hòa.' },
      { year: '1908', title: 'Phong trào chống thuế Trung Kỳ', description: 'Phong trào chống thuế ở Trung Kỳ bùng nổ, Pháp đàn áp dữ dội; Phan Châu Trinh bị bắt đày ra Côn Đảo.' },
      { year: '1911', date: '5/6/1911', title: 'Nguyễn Tất Thành ra đi tìm đường cứu nước', description: 'Nguyễn Tất Thành rời bến cảng Nhà Rồng (Sài Gòn) trên con tàu Latouche-Tréville, bắt đầu hành trình qua nhiều nước châu Âu, Phi, Mỹ.' },
      { year: '1917', title: 'Cách mạng tháng Mười Nga', description: 'Cách mạng tháng 10 Nga giành thắng lợi dưới sự lãnh đạo của Lênin. Nguyễn Ái Quốc trở lại Pháp và định cư tại Paris.' },
      { year: '1919', date: '6/1919', title: 'Yêu sách của nhân dân An Nam', description: 'Nguyễn Ái Quốc gửi bản Yêu sách 8 điểm tới Hội nghị Versailles, đòi quyền tự do, dân chủ cho người Việt.' },
      { year: '1920', date: '7/1920', title: 'Đọc Luận cương của Lênin', description: 'Nguyễn Ái Quốc đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa — bước ngoặt quyết định trong tư tưởng chính trị.' },
      { year: '1920', date: '12/1920', title: 'Tham gia thành lập Đảng Cộng sản Pháp', description: 'Tại Đại hội Tours, Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế III, trở thành người cộng sản Việt Nam đầu tiên.' },
      { year: '1921', title: 'Hội Liên hiệp thuộc địa', description: 'Thành lập Hội Liên hiệp thuộc địa tại Paris, ra báo Le Paria (Người cùng khổ).' },
      { year: '1923', title: 'Sang Liên Xô học tập', description: 'Nguyễn Ái Quốc sang Liên Xô, dự Hội nghị Quốc tế Nông dân, bắt đầu nghiên cứu tại Moscow.' },
      { year: '1925', title: 'Thành lập Hội Việt Nam Cách mạng Thanh niên', description: 'Nguyễn Ái Quốc thành lập Hội VNCMTN tại Quảng Châu, tổ chức đào tạo cán bộ. Xuất bản Bản án chế độ thực dân Pháp.' },
      { year: '1927', title: 'Đường Kách Mệnh', description: 'Xuất bản tác phẩm Đường Kách Mệnh — tác phẩm lý luận cách mạng đầu tiên theo chủ nghĩa Mác-Lênin. Việt Nam Quốc dân Đảng được thành lập.' },
      { year: '1929', date: '3/1929', title: 'Chi bộ Cộng sản đầu tiên', description: 'Chi bộ Cộng sản đầu tiên ra đời tại 5D Hàm Long (Hà Nội). Sau đó, Đông Dương Cộng sản Đảng (17/6) và An Nam Cộng sản Đảng (10/1929) lần lượt thành lập.' },
    ]
  },
  {
    id: 'nam-1930',
    title: 'Thành lập Đảng và Xô Viết Nghệ Tĩnh',
    yearRange: '1930',
    summary: 'Đảng Cộng sản Việt Nam ra đời, thông qua Cương lĩnh đầu tiên. Phong trào Xô Viết Nghệ Tĩnh bùng nổ mạnh mẽ.',
    events: [
      { year: '1930', date: '6/1 – 7/2/1930', title: 'Hội nghị thành lập Đảng', description: 'Hội nghị tại Hương Cảng do Nguyễn Ái Quốc chủ trì, hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam. Thông qua Chánh cương vắn tắt, Sách lược vắn tắt.' },
      { year: '1930', date: '24/2/1930', title: 'Đông Dương Cộng sản Liên Đoàn gia nhập', description: 'Đông Dương Cộng sản Liên Đoàn chính thức được kết nạp vào Đảng Cộng sản Việt Nam.' },
      { year: '1930', date: '1/5/1930', title: 'Bắt đầu phong trào Xô Viết Nghệ Tĩnh', description: 'Cuộc biểu tình của công nhân Khu công nghiệp Bến Thủy mở đầu phong trào. 97 cuộc bãi công diễn ra từ tháng 5–8.' },
      { year: '1930', date: '17/6/1930', title: 'Pháp xử tử Nguyễn Thái Học', description: 'Pháp thi hành án tử hình Nguyễn Thái Học và các lãnh tụ Việt Nam Quốc dân Đảng.' },
      { year: '1930', date: '8–9/1930', title: 'Đỉnh cao Xô Viết Nghệ Tĩnh', description: '8.000 nông dân huyện Hưng Nguyên biểu tình; nhân dân lập chính quyền Xô Viết, tổ chức Tự vệ Đỏ, đốt văn tự nợ nần.' },
      { year: '1930', date: '10/1930', title: 'Đổi tên thành Đảng Cộng sản Đông Dương', description: 'Hội nghị TW 1 tại Hương Cảng đổi tên Đảng, thông qua Luận cương chính trị do Trần Phú dự thảo. Trần Phú được bầu làm Tổng Bí thư đầu tiên.' },
    ]
  },
  {
    id: '1931-1935',
    title: 'Khủng bố trắng và Đại hội Đảng lần I',
    yearRange: '1931 – 1935',
    summary: 'Pháp đàn áp tàn bạo, hầu hết cơ sở Đảng bị phá vỡ. Các chiến sĩ kiên cường giữ vững tinh thần. Đại hội I tổ chức năm 1935.',
    events: [
      { year: '1931', date: '9/2/1931', title: 'Lý Tự Trọng bắn mật thám Legrand', description: 'Thanh niên 17 tuổi Lý Tự Trọng bắn chết thanh tra mật thám Legrand tại Sài Gòn, để lại câu nói: "Con đường của thanh niên chỉ có thể là con đường cách mạng."' },
      { year: '1931', date: '18/4/1931', title: 'Trần Phú bị bắt', description: 'Tổng Bí thư Trần Phú bị bắt tại Sài Gòn, bị tra tấn dã man nhưng vẫn huấn luyện chính trị cho bạn tù.' },
      { year: '1931', date: '6/6/1931', title: 'Nguyễn Ái Quốc bị bắt tại Hồng Kông', description: 'Nguyễn Ái Quốc bị cảnh sát Anh bắt tại Hồng Kông. Luật sư Loseby giúp đỡ, sau 9 phiên tòa, Người được trục xuất và trở về Liên Xô.' },
      { year: '1931', date: '6/9/1931', title: 'Trần Phú hy sinh', description: 'Tổng Bí thư Trần Phú qua đời với lời căn dặn: "Hãy giữ vững chí khí chiến đấu."' },
      { year: '1932–1934', title: 'Tái thiết Đảng', description: 'Lê Hồng Phong, Hà Huy Tập nỗ lực tái thiết Đảng từ bên ngoài qua Quốc tế Cộng sản. Cơ sở Đảng trong nước dần được khôi phục.' },
      { year: '1935', date: '27–31/3/1935', title: 'Đại hội đại biểu lần thứ I', description: 'Đại hội I họp tại Ma Cao với 13 đại biểu. Lê Hồng Phong được bầu làm Tổng Bí thư. Đề ra 3 nhiệm vụ: củng cố Đảng, tranh thủ quần chúng, chống chiến tranh đế quốc.' },
    ]
  },
  {
    id: '1936-1939',
    title: 'Phong trào dân chủ Đông Dương',
    yearRange: '1936 – 1939',
    summary: 'Đảng điều chỉnh chiến lược, đẩy mạnh đấu tranh công khai đòi dân sinh, dân chủ, chống chiến tranh.',
    events: [
      { year: '1936', date: '7/1936', title: 'Hội nghị TW tại Thượng Hải', description: 'Hội nghị do Lê Hồng Phong chủ trì, xác định kẻ thù trước mắt: bọn phản động thuộc địa. Chuyển sang đấu tranh công khai và bán công khai.' },
      { year: '1936', title: 'Đấu tranh nghị trường', description: 'Đảng lợi dụng hoạt động hợp pháp để tập hợp quần chúng; ra nhiều tờ báo công khai: Dân chúng, Tin tức, L\'Avant-garde.' },
      { year: '1937–1938', title: 'Mặt trận Dân chủ Đông Dương', description: 'Đảng đẩy mạnh vận động thành lập Mặt trận Thống nhất Nhân dân Phản đế Đông Dương (Mặt trận Dân chủ Đông Dương).' },
      { year: '1938', date: '1/5/1938', title: 'Mít tinh lớn tại Hà Nội', description: 'Cuộc mít tinh tại khu Đấu Xảo (Hà Nội) với hơn 25.000 người tham gia, biểu dương lực lượng mạnh mẽ.' },
      { year: '1939', title: 'Tự chỉ trích', description: 'Tác phẩm Tự chỉ trích của Tổng Bí thư Nguyễn Văn Cừ khẳng định bản lĩnh nhìn nhận khuyết điểm của Đảng.' },
      { year: '1939', date: '9/1939', title: 'CTTG II bùng nổ', description: 'Chiến tranh thế giới II bùng nổ; Pháp đặt Đảng Cộng sản ra ngoài vòng pháp luật, phong trào dân chủ chấm dứt.' },
    ]
  },
  {
    id: '1939-1945',
    title: 'Chuyển hướng chiến lược và Cách mạng Tháng Tám',
    yearRange: '1939 – 1945',
    summary: 'Đảng đặt giải phóng dân tộc lên hàng đầu, xây dựng Việt Minh và lực lượng vũ trang, chớp thời cơ Tổng khởi nghĩa tháng 8/1945.',
    events: [
      { year: '1939', date: '11/1939', title: 'Hội nghị TW 6', description: 'Quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác khẩu hiệu cách mạng ruộng đất.' },
      { year: '1940', title: 'Nhật vào Đông Dương', description: 'Tháng 6: Pháp đầu hàng Đức. Tháng 9: Nhật đưa quân vào Đông Dương. Khởi nghĩa Bắc Sơn (9/1940) và Nam Kỳ (11/1940) nổ ra.' },
      { year: '1941', date: '28/1/1941', title: 'Nguyễn Ái Quốc về nước', description: 'Nguyễn Ái Quốc về nước sau 30 năm bôn ba, trực tiếp lãnh đạo cách mạng tại Pác Bó (Cao Bằng).' },
      { year: '1941', date: '5/1941', title: 'Thành lập Mặt trận Việt Minh', description: 'Hội nghị TW 8 tại Pác Bó do Hồ Chí Minh chủ trì, thành lập Việt Nam Độc lập Đồng minh (Việt Minh), xác định giải phóng dân tộc là nhiệm vụ "chí cao vô thượng".' },
      { year: '1942–1943', title: 'Hồ Chí Minh bị giam ở Trung Quốc', description: 'Hồ Chí Minh sang Trung Quốc liên lạc Đồng minh, bị Tưởng Giới Thạch bắt giam. Sáng tác Nhật ký trong tù. Được trả tự do tháng 9/1943.' },
      { year: '1943', title: 'Đề cương Văn hóa Việt Nam', description: 'Đảng ra Đề cương Văn hóa Việt Nam do Trường Chinh soạn thảo: dân tộc hóa, đại chúng hóa, khoa học hóa.' },
      { year: '1944', date: '22/12/1944', title: 'Thành lập Đội VNTTGPQ', description: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân tại Cao Bằng do Võ Nguyên Giáp chỉ huy với 34 chiến sĩ — tiền thân QĐND Việt Nam.' },
      { year: '1945', date: '9/3/1945', title: 'Nhật đảo chính Pháp', description: 'Nhật đảo chính Pháp. Đảng ra chỉ thị "Nhật–Pháp bắn nhau và hành động của chúng ta", phát động phá kho thóc Nhật.' },
      { year: '1945', date: '8/1945', title: 'Tổng khởi nghĩa', description: '13–15/8: Hội nghị toàn quốc quyết định tổng khởi nghĩa. 16/8: Đại hội Quốc dân Tân Trào. 19/8: Hà Nội. 23/8: Huế. 25/8: Sài Gòn. 28/8: Toàn bộ 63 tỉnh thành giành chính quyền.' },
      { year: '1945', date: '2/9/1945', title: 'Tuyên ngôn Độc lập', description: 'Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.' },
    ]
  },
  {
    id: '1945-1954',
    title: 'Kháng chiến chống thực dân Pháp',
    yearRange: '1945 – 1954',
    summary: 'Nhà nước non trẻ vượt qua muôn vàn khó khăn, tiến hành kháng chiến toàn dân. Đỉnh cao là chiến thắng Điện Biên Phủ.',
    events: [
      { year: '1946', date: '6/1/1946', title: 'Tổng tuyển cử đầu tiên', description: 'Cuộc Tổng tuyển cử đầu tiên trong cả nước, bầu ra Quốc hội khóa I. Hồ Chí Minh được bầu làm Chủ tịch nước.' },
      { year: '1946', date: '6/3/1946', title: 'Hiệp định Sơ bộ', description: 'Ký Hiệp định Sơ bộ với Pháp, cho phép 15.000 quân Pháp ra Bắc thay quân Tưởng, đổi lại Pháp công nhận Việt Nam là quốc gia tự do.' },
      { year: '1946', date: '19/12/1946', title: 'Toàn quốc kháng chiến', description: 'Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, bắt đầu cuộc kháng chiến chống Pháp toàn quốc.' },
      { year: '1947', title: 'Chiến thắng Việt Bắc Thu–Đông', description: 'Pháp tấn công Việt Bắc nhằm tiêu diệt cơ quan đầu não. Quân dân ta đánh bại, bảo vệ căn cứ địa.' },
      { year: '1950', title: 'Chiến dịch Biên giới', description: 'Chiến dịch Biên giới Thu–Đông do Võ Nguyên Giáp chỉ huy, giải phóng hành lang biên giới Việt–Trung.' },
      { year: '1951', date: '2/1951', title: 'Đại hội II', description: 'Đại hội II tại Chiêm Hóa, Tuyên Quang. Đảng ra công khai với tên Đảng Lao động Việt Nam. Trường Chinh làm Tổng Bí thư.' },
      { year: '1954', date: '7/5/1954', title: 'Chiến thắng Điện Biên Phủ', description: 'Chiến dịch lịch sử do Đại tướng Võ Nguyên Giáp chỉ huy, tiêu diệt toàn bộ tập đoàn cứ điểm mạnh nhất của Pháp.' },
      { year: '1954', date: '20–21/7/1954', title: 'Hiệp định Genève', description: 'Ký Hiệp định Genève, chấm dứt chiến tranh. Việt Nam tạm chia cắt tại vĩ tuyến 17.' },
      { year: '1954', date: '10/10/1954', title: 'Tiếp quản Hà Nội', description: 'Quân đội nhân dân Việt Nam tiếp quản Thủ đô Hà Nội.' },
    ]
  },
  {
    id: '1954-1975',
    title: 'Kháng chiến chống Mỹ, thống nhất đất nước',
    yearRange: '1954 – 1975',
    summary: 'Miền Bắc xây dựng CNXH, miền Nam đấu tranh giải phóng. Chiến dịch Hồ Chí Minh toàn thắng 30/4/1975.',
    events: [
      { year: '1960', date: '9/1960', title: 'Đại hội III', description: 'Đại hội III tại Hà Nội. Lê Duẩn được bầu làm Bí thư thứ nhất. Xác định xây dựng CNXH ở Bắc và giải phóng miền Nam.' },
      { year: '1960', date: '20/12/1960', title: 'Thành lập MTDTGPMN', description: 'Thành lập Mặt trận Dân tộc Giải phóng miền Nam Việt Nam, tập hợp lực lượng yêu nước chống Mỹ–Diệm.' },
      { year: '1964', date: '5/8/1964', title: 'Mỹ ném bom miền Bắc', description: 'Sau sự kiện Vịnh Bắc Bộ, Mỹ ném bom miền Bắc, mở đầu chiến tranh phá hoại.' },
      { year: '1968', date: '31/1/1968', title: 'Tết Mậu Thân', description: 'Quân giải phóng tổng tấn công đồng loạt vào các thành phố miền Nam, bước ngoặt buộc Mỹ xuống thang chiến tranh.' },
      { year: '1969', date: '2/9/1969', title: 'Chủ tịch Hồ Chí Minh từ trần', description: 'Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, hưởng thọ 79 tuổi.' },
      { year: '1972', date: '12/1972', title: 'Điện Biên Phủ trên không', description: 'Mỹ ném bom rải thảm Hà Nội–Hải Phòng. Quân dân bắn hạ 81 máy bay, buộc Mỹ ngừng ném bom.' },
      { year: '1973', date: '27/1/1973', title: 'Hiệp định Paris', description: 'Hiệp định Paris ký kết, Mỹ cam kết rút hết quân khỏi Việt Nam.' },
      { year: '1975', date: '3/1975', title: 'Chiến dịch Tây Nguyên', description: 'Buôn Ma Thuột thất thủ (10/3). Giải phóng Huế (26/3), Đà Nẵng (29/3).' },
      { year: '1975', date: '30/4/1975', title: 'Giải phóng miền Nam', description: 'Chiến dịch Hồ Chí Minh toàn thắng. Xe tăng húc đổ cổng Dinh Độc Lập, Dương Văn Minh đầu hàng. Đất nước thống nhất.' },
    ]
  },
  {
    id: '1975-1986',
    title: 'Thống nhất và xây dựng CNXH',
    yearRange: '1975 – 1986',
    summary: 'Cả nước đi lên CNXH trong bối cảnh hậu chiến, bao vây cấm vận, chiến tranh biên giới, khủng hoảng kinh tế.',
    events: [
      { year: '1976', date: '25/4/1976', title: 'Tổng tuyển cử thống nhất', description: 'Tổng tuyển cử thống nhất, bầu Quốc hội khóa VI.' },
      { year: '1976', date: '2/7/1976', title: 'Nước CHXHCN Việt Nam', description: 'Quốc hội tuyên bố thống nhất, đổi tên nước thành Cộng hòa Xã hội Chủ nghĩa Việt Nam. Sài Gòn đổi tên thành TP. Hồ Chí Minh.' },
      { year: '1976', date: '12/1976', title: 'Đại hội IV', description: 'Đại hội IV tại Hà Nội. Đảng chính thức lấy lại tên Đảng Cộng sản Việt Nam. Lê Duẩn tiếp tục làm Tổng Bí thư.' },
      { year: '1979', date: '7/1/1979', title: 'Lật đổ Khmer Đỏ', description: 'Quân tình nguyện Việt Nam phối hợp lật đổ chế độ diệt chủng Pol Pot, giải phóng Phnom Penh.' },
      { year: '1979', date: '2–3/1979', title: 'Chiến tranh biên giới phía Bắc', description: 'Trung Quốc xua 60 vạn quân tấn công 6 tỉnh biên giới. Quân dân đánh trả quyết liệt, Trung Quốc rút quân sau hơn 1 tháng.' },
      { year: '1982', date: '3/1982', title: 'Đại hội V', description: 'Đại hội V thừa nhận sai lầm trong quản lý kinh tế, đề ra chủ trương điều chỉnh theo hướng thực tế hơn.' },
    ]
  },
  {
    id: '1986-nay',
    title: 'Đổi mới và Hội nhập quốc tế',
    yearRange: '1986 – Nay',
    summary: 'Chuyển đổi sang kinh tế thị trường định hướng XHCN, mở cửa đối ngoại, hội nhập toàn cầu, phát triển bền vững.',
    events: [
      { year: '1986', date: '12/1986', title: 'Đại hội VI – Đổi mới', description: 'Đại hội Đổi mới: chuyển sang kinh tế thị trường định hướng XHCN, mở cửa, đa dạng hóa thành phần kinh tế. Nguyễn Văn Linh làm Tổng Bí thư.' },
      { year: '1989', title: 'Rút quân khỏi Campuchia', description: 'Việt Nam rút quân khỏi Campuchia, bắt đầu bình thường hóa quan hệ với các nước.' },
      { year: '1991', date: '6/1991', title: 'Đại hội VII – Cương lĩnh 1991', description: 'Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH. Đỗ Mười làm Tổng Bí thư.' },
      { year: '1995', date: '11/7/1995', title: 'Bình thường hóa với Hoa Kỳ', description: 'Việt Nam và Hoa Kỳ chính thức bình thường hóa quan hệ ngoại giao.' },
      { year: '1995', date: '28/7/1995', title: 'Gia nhập ASEAN', description: 'Việt Nam chính thức gia nhập ASEAN.' },
      { year: '1996', title: 'Đại hội VIII', description: 'Xác định Việt Nam đã ra khỏi khủng hoảng, bước vào thời kỳ công nghiệp hóa, hiện đại hóa.' },
      { year: '2001', title: 'Đại hội IX', description: 'Thông qua Chiến lược phát triển 2001–2010. Nông Đức Mạnh làm Tổng Bí thư.' },
      { year: '2006', date: '7/11/2006', title: 'Gia nhập WTO', description: 'Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO).' },
      { year: '2011', title: 'Đại hội XI', description: 'Thông qua Cương lĩnh bổ sung 2011 và Chiến lược 2011–2020. Nguyễn Phú Trọng lần đầu làm Tổng Bí thư.' },
      { year: '2016', title: 'Đại hội XII', description: 'Tăng cường xây dựng, chỉnh đốn Đảng; đẩy mạnh phòng chống tham nhũng.' },
      { year: '2021', title: 'Đại hội XIII', description: 'Tầm nhìn đến 2045 đưa Việt Nam thành nước phát triển, thu nhập cao. Nguyễn Phú Trọng tiếp tục nhiệm kỳ thứ ba.' },
      { year: '2024', date: '19/7/2024', title: 'Tổng Bí thư Nguyễn Phú Trọng từ trần', description: 'Tổng Bí thư Nguyễn Phú Trọng từ trần, hưởng thọ 80 tuổi. Nhà lãnh đạo gắn liền với công cuộc chống tham nhũng mạnh mẽ nhất.' },
      { year: '2024', date: '8/2024', title: 'Tô Lâm làm Tổng Bí thư', description: 'Tô Lâm được bầu làm Tổng Bí thư của Đảng Cộng sản Việt Nam.' },
    ]
  }
]

export const FULL_KNOWLEDGE_TEXT = timelinePeriods
  .map(p => {
    const eventsText = p.events.map(e => `- ${e.year}${e.date ? ` (${e.date})` : ''}: ${e.title} — ${e.description}`).join('\n')
    return `## ${p.title} (${p.yearRange})\n${p.summary}\n${eventsText}`
  })
  .join('\n\n')
