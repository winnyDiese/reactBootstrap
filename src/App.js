// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="index.html">Hidayah</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link  scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            {/* <!-- Slide 1 --> */}
            <div
              className="carousel-item active"
              style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animated fadeInDown">
                    Welcome to <span>Hidayah</span>
                  </h2>
                  <p className="animated fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started animated fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div
              className="carousel-item"
              style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                  <p className="animated fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started animated fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Slide 3 --> */}
            <div
              className="carousel-item"
              style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animated fadeInDown">
                    Sequi ea ut et est quaerat
                  </h2>
                  <p className="animated fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started animated fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox play-btn mb-4"
                ></a>
              </div>

              <div className="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi. Libero
                  laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
                </p>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-fingerprint"></i>
                  </div>
                  <h4 className="title">
                    <a href="#">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-gift"></i>
                  </div>
                  <h4 className="title">
                    <a href="#">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-atom"></i>
                  </div>
                  <h4 className="title">
                    <a href="#">Dine Pad</a>
                  </h4>
                  <p className="description">
                    Explicabo est voluptatum asperiores consequatur magnam. Et
                    veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Skills Section ======= --> */}
        <section id="skills" className="skills">
          <div className="container-fluid">
            <div className="row justify-content-center skills-content">
              <div className="col-xl-5 col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Skills Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts section-bg">
          <div className="container-fluid">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="15"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Services</h2>
              <h3>
                Check our <span>Services</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon">
                      <i className="ri-pie-chart-line"></i>
                    </div>
                    <h4 className="title">
                      <a href="#">Lorem Ipsum</a>
                    </h4>
                    <p className="description">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon">
                      <i className="ri-stack-line"></i>
                    </div>
                    <h4 className="title">
                      <a href="#">Dolor Sitema</a>
                    </h4>
                    <p className="description">
                      Minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat tarad limino ata
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon">
                      <i className="ri-markup-line"></i>
                    </div>
                    <h4 className="title">
                      <a href="#">Sed ut perspiciatis</a>
                    </h4>
                    <p className="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon">
                      <i className="ri-shape-line"></i>
                    </div>
                    <h4 className="title">
                      <a href="#">Magni Dolores</a>
                    </h4>
                    <p className="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon">
                      <i className="ri-fingerprint-line"></i>
                    </div>
                    <h4 className="title">
                      <a href="#">Nemo Enim</a>
                    </h4>
                    <p className="description">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 icon-box">
                    <div className="icon">
                      <i className="ri-body-scan-line"></i>
                    </div>
                    <h4 className="title">
                      <a href="#">Eiusmod Tempor</a>
                    </h4>
                    <p className="description">
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="cta-btn" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End Cta Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Portfolio</h2>
              <h3>
                Check our <span>Portfolio</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-1.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 1"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-2.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 3"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-3.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 2"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* // <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-4.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Card 2"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-5.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 2"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-6.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-6.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 3"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-7.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-7.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Card 1"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-8.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-8.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Card 3"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}

                  <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src="assets/img/portfolio/portfolio-9.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-9.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="Web 3"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End portfolio item --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- End Portfolio Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Testimonials</h2>
              <h3>
                What They <span>Are Saying</span> About Us
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial-item --> */}

                  <div className="col-lg-6">
                    <div className="testimonial-item mt-4 mt-lg-0">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial-item --> */}

                  <div className="col-lg-6">
                    <div className="testimonial-item mt-4">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial-item --> */}

                  <div className="col-lg-6">
                    <div className="testimonial-item mt-4">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial-item --> */}

                  <div className="col-lg-6">
                    <div className="testimonial-item mt-4">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial-item --> */}

                  <div className="col-lg-6">
                    <div className="testimonial-item mt-4">
                      <img
                        src="assets/img/testimonials/testimonials-6.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Emily Harison</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Eius ipsam praesentium dolor quaerat inventore rerum
                        odio. Quos laudantium adipisci eius. Accusamus qui iste
                        cupiditate sed temporibus est aspernatur. Sequi officiis
                        ea et quia quidem.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial-item --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Team</h2>
              <h3>
                Our Hard Working <span>Team</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="member">
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Walter White</h4>
                          <span>Chief Executive Officer</span>
                        </div>
                        <div className="social">
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Member Item --> */}

                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-wow-delay="0.1s"
                  >
                    <div className="member">
                      <img
                        src="assets/img/team/team-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Sarah Jhonson</h4>
                          <span>Product Manager</span>
                        </div>
                        <div className="social">
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Member Item --> */}

                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-wow-delay="0.2s"
                  >
                    <div className="member">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>William Anderson</h4>
                          <span>CTO</span>
                        </div>
                        <div className="social">
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Member Item --> */}

                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-wow-delay="0.3s"
                  >
                    <div className="member">
                      <img
                        src="assets/img/team/team-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Amanda Jepson</h4>
                          <span>Accountant</span>
                        </div>
                        <div className="social">
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-instagram"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Member Item --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact section-bg">
          <div className="container-fluid">
            <div className="section-title">
              <h2>Contact</h2>
              <h3>
                Get In Touch With <span>Us</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row justify-content-center">
                      <div className="col-md-6 info d-flex flex-column align-items-stretch">
                        <i className="bx bx-map"></i>
                        <h4>Address</h4>
                        <p>
                          A108 Adam Street,
                          <br />
                          New York, NY 535022
                        </p>
                      </div>
                      <div className="col-md-6 info d-flex flex-column align-items-stretch">
                        <i className="bx bx-phone"></i>
                        <h4>Call Us</h4>
                        <p>
                          +1 5589 55488 55
                          <br />
                          +1 5589 22548 64
                        </p>
                      </div>
                      <div className="col-md-6 info d-flex flex-column align-items-stretch">
                        <i className="bx bx-envelope"></i>
                        <h4>Email Us</h4>
                        <p>
                          contact@example.com
                          <br />
                          info@example.com
                        </p>
                      </div>
                      <div className="col-md-6 info d-flex flex-column align-items-stretch">
                        <i className="bx bx-time-five"></i>
                        <h4>Working Hours</h4>
                        <p>
                          Mon - Fri: 9AM to 5PM
                          <br />
                          Sunday: 9AM to 1PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <form
                      action="forms/contact.php"
                      method="post"
                      role="form"
                      className="php-email-form"
                    >
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label htmlFor="email">Your Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          required
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="8"
                          required
                        ></textarea>
                      </div>
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Terms of service</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Privacy policy</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Web Development</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Product Management</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Marketing</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <a href="#">Graphic Design</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                      A108 Adam Street <br />
                      New York, NY 535022
                      <br />
                      United States <br />
                      <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                      <br />
                      <strong>Email:</strong> info@example.com
                      <br />
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-info">
                    <h3>About Hidayah</h3>
                    <p>
                      Cras fermentum odio eu feugiat lide par naso tierra. Justo
                      eget nada terra videa magna derita valies darta donna mare
                      fermentum iaculis eu non diam phasellus.
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                      </a>
                      <a href="#" className="facebook">
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a href="#" className="instagram">
                        <i className="bx bxl-instagram"></i>
                      </a>
                      <a href="#" className="google-plus">
                        <i className="bx bxl-skype"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Hidayah</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/hidayah-free-simple-html-template-for-corporate/ --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
      {/* <div id="preloader"></div> */}
    </div>
  );
}

export default App;
