export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo">
          <span>&#9733;</span>
        </div>
        <h1 className="hero-title">Lich Su Dang Cong San Viet Nam</h1>
        <div className="hero-divider"></div>
        <p className="hero-quote">"Dang ta la dao duc, la van minh"</p>
        <p className="hero-description">
          Tu nguon goc den hien dai — Hanh trinh 95 nam xay dung va phat trien dat nuoc
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">Kham pha ngay</a>
          <a href="#timeline" className="btn btn-outline">Xem dong thoi gian</a>
        </div>
      </div>
    </section>
  )
}
