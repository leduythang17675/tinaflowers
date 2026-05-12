const BASE = "https://tinaflowers.com.vn/";
const img = (path) => new URL(path, BASE).href;
const repoBase = (() => {
  const host = location.hostname;
  const parts = location.pathname.split("/").filter(Boolean);
  return host.endsWith("github.io") && parts.length ? `/${parts[0]}` : "";
})();

const navItems = [
  ["Trang chủ", "/"],
  ["Giới thiệu", "/gioi-thieu"],
  ["Kệ chúc mừng", "/ke-chuc-mung"],
  ["Hoa chia buồn", "/hoa-chia-buon"],
  ["Giỏ hoa", "/gio-hoa"],
  ["Hoa cưới", "/hoa-cuoi"],
  ["Bó hoa", "/bo-hoa"],
  ["Giỏ trái cây", "/gio-trai-cay"],
  ["Sen đá", "/sen-da"],
  ["Lan hồ điệp", "/lan-ho-diep"],
  ["Mục khác", "/muc-khac"],
  ["Liên hệ", "/lien-he"],
];

const homeImages = [
  "thumbs/468x565x1/upload/photo/z7661235588974f55439ffad82f73668e901c18f7e1c82-56600.jpg",
  "thumbs/468x565x1/upload/photo/z76564044011068bbf9d3fb3fba87d2584512e870abfd0-84430.jpg",
  "thumbs/468x565x1/upload/photo/z765635202745456f22b5da71197e015b7ea3402791164-17980.jpg",
  "thumbs/468x565x1/upload/photo/z750519433635762415ad055e08b78d7400d4ef94f7942-11570.jpg",
  "thumbs/468x565x1/upload/photo/z751192855600340f43bd18ab018333cad7ba72732a616-44451.jpg",
  "thumbs/468x565x1/upload/photo/img20250317121826-43960.png",
  "thumbs/468x565x1/upload/photo/messengercreation7142895083459727097-83310.jpeg",
  "thumbs/468x565x1/upload/photo/img20250311210101-19010.jpg",
  "thumbs/468x565x1/upload/photo/img20250223163038-63110.jpg",
];

const categories = [
  { title: "Kệ chúc mừng", slug: "/ke-chuc-mung", image: "watermark/product/275x375x1/upload/product/z741137738834611f64775edddaf875101e59554a73d54-9251.jpg" },
  { title: "Hoa chia buồn", slug: "/hoa-chia-buon", image: "watermark/product/275x375x1/upload/product/z76564155108147ace9b96722716ed64e23b195c89701b-3162.jpg" },
  { title: "Giỏ hoa", slug: "/gio-hoa", image: "watermark/product/275x375x1/upload/product/z76940313884166319d9888ff09b08ddae90b70e9b502a-3969.jpg" },
  { title: "Hoa cưới", slug: "/hoa-cuoi", image: "watermark/product/275x375x1/upload/product/z76564044011068bbf9d3fb3fba87d2584512e870abfd0-8629.jpg" },
  { title: "Bó hoa", slug: "/bo-hoa", image: "thumbs/468x565x1/upload/photo/z7661235588974f55439ffad82f73668e901c18f7e1c82-56600.jpg" },
  { title: "Giỏ trái cây", slug: "/gio-trai-cay", image: "thumbs/468x565x1/upload/photo/img20241229152541-36080.jpg" },
  { title: "Sen đá", slug: "/sen-da", image: "thumbs/468x565x1/upload/photo/img20250317121826-43960.png" },
  { title: "Lan hồ điệp", slug: "/lan-ho-diep", image: "thumbs/468x565x1/upload/photo/received1586462585111349-45380.jpeg" },
  { title: "Mục khác", slug: "/muc-khac", image: "thumbs/468x565x1/upload/photo/z432857928770357f1ebb96b2f01b9204d31816063257e-7904.jpg" },
];

const pageData = {
  "/ke-chuc-mung": {
    title: "Kệ chúc mừng",
    intro: "Những kệ hoa rực rỡ dành cho khai trương, chúc mừng và các dịp trọng đại.",
    pages: [
      [
        ["Kệ hoa chúc mừng TFL00338", "1.700.000đ", "watermark/product/275x375x1/upload/product/z741137738834611f64775edddaf875101e59554a73d54-9251.jpg"],
        ["Kệ hoa chúc mừng TFL00328", "1.890.000đ", "watermark/product/275x375x1/upload/product/z737782833586594a7489afed46fe64bab459ae29a5b2f-7426.jpg"],
        ["Kệ hoa sen đá TFL00261", "1.950.000đ", "watermark/product/275x375x1/upload/product/z7116996824116d21b0b1c7b8ebd6b8e008aa4929816f9-9496.jpg"],
        ["Kệ chúc mừng TFL00148", "1.200.000đ", "watermark/product/275x375x1/upload/product/tfl00148-1494.png"],
        ["Kệ chúc mừng TFL00040", "2.200.000đ", "watermark/product/275x375x1/upload/product/ke-mung-tfl00040-2121.jpg"],
        ["Kệ chúc mừng TFL00180", "1.700.000đ", "watermark/product/275x375x1/upload/product/ke-chuc-mung-tfl00180-8461.jpg"],
        ["Kệ chúc mừng TFL00059", "2.000.000đ", "watermark/product/275x375x1/upload/product/ke-chuc-mung-tfl00059-9592.jpg"],
        ["Kệ chúc mừng TFL00063", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00063-9211.png"],
        ["Kệ chúc mừng TFL00065", "1.200.000đ", "watermark/product/275x375x1/upload/product/tfl00065-9821.png"],
        ["Kệ chúc mừng TFL00066", "2.040.000đ", "watermark/product/275x375x1/upload/product/tfl00066-5065.png"],
        ["Kệ chúc mừng TFL00067", "1.700.000đ", "watermark/product/275x375x1/upload/product/tfl00067-4507.png"],
        ["Kệ chúc mừng TFL00068", "2.500.000đ", "watermark/product/275x375x1/upload/product/tfl00068-4285.png"],
        ["Kệ chúc mừng TFL00069", "1.800.000đ", "watermark/product/275x375x1/upload/product/tfl00069-6402.png"],
        ["Kệ chúc mừng TFL00070", "1.670.000đ", "watermark/product/275x375x1/upload/product/tfl00070-4983.png"],
        ["Kệ chúc mừng TFL00071", "1.940.000đ", "watermark/product/275x375x1/upload/product/tfl00071-8971.png"],
        ["Kệ chúc mừng TFL00072", "2.250.000đ", "watermark/product/275x375x1/upload/product/tfl00072-2-6799.png"],
        ["Kệ chúc mừng TFL00073", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00073-2285.png"],
        ["Kệ chúc mừng TFL00074", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00074-7980.png"],
        ["Kệ chúc mừng TFL00093", "1.600.000đ", "watermark/product/275x375x1/upload/product/tfl00093-1818.png"],
        ["Kệ chúc mừng TFL00337", "1.600.000đ", "watermark/product/275x375x1/upload/product/z735462773936955473a0b2e194789515ebcf1dbc3998d-2572.jpg"],
      ],
      [
        ["Kệ hoa TFL00125", "2.700.000đ", "watermark/product/275x375x1/upload/product/tfl00125-7666.png"],
        ["Kệ chúc mừng TFL00140", "2.500.000đ", "watermark/product/275x375x1/upload/product/tfl00140-9377.png"],
        ["Kệ chúc mừng TFL00217", "1.890.000đ", "watermark/product/275x375x1/upload/product/tfl00217-4292.png"],
      ],
    ],
  },
  "/hoa-chia-buon": {
    title: "Hoa chia buồn",
    intro: "Các mẫu hoa trang nhã, tinh tế để gửi lời tiễn biệt và chia sẻ chân thành.",
    pages: [
      [
        ["Hoa cưới TFL00380", "2.100.000đ", "watermark/product/275x375x1/upload/product/z76564155108147ace9b96722716ed64e23b195c89701b-3162.jpg"],
        ["Kệ hoa tang TFL00367", "1.500.000đ", "watermark/product/275x375x1/upload/product/z7548709809486589c4d05409d27b9c486757799de68c9-2064.jpg"],
        ["Kệ hoa tang TFL00365", "2.500.000đ", "watermark/product/275x375x1/upload/product/z7547309831111ab00870b1362997e7f5440ee57c9ad5f-8783.jpg"],
        ["Giỏ hoa TFL00351", "650.000đ", "watermark/product/275x375x1/upload/product/z7505367921653bb83329f7ca55664211985f86b68c441-3188.jpg"],
        ["Kệ hoa trắng TFL00343", "1.400.000đ", "watermark/product/275x375x1/upload/product/z7444187629514065b6d418c2ab1ce0bda90d5687c5d24-3511.jpg"],
        ["Hoa chia buồn TFL00287", "1.450.000đ", "watermark/product/275x375x1/upload/product/z716981521711687614b76a56b4043d2a507a0fbf4ecd9-9959.jpg"],
        ["Hoa chia buồn TFL00254", "1.350.000đ", "watermark/product/275x375x1/upload/product/z7084341011461150f94edea448f3cc8d488485a69599a-1044.jpg"],
        ["Hoa chia buồn TFL00250", "1.100.000đ", "watermark/product/275x375x1/upload/product/z70717380546294e5063db6f7173127d16c65568d6d6c7-2229.jpg"],
        ["Hoa chia buồn TFL00239", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00239-9533.jpg"],
        ["Kệ chia buồn TFL00225", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00225-7790.jpg"],
        ["Kệ chia buồn TFL00223", "1.700.000đ", "watermark/product/275x375x1/upload/product/tfl00223-4055.jpg"],
        ["Hoa chia buồn TFL00222", "1.800.000đ", "watermark/product/275x375x1/upload/product/tfl00222-8180.jpg"],
        ["Kệ chia buồn trắng tinh khôi TFL00150", "1.900.000đ", "watermark/product/275x375x1/upload/product/tfl00150-8400.png"],
        ["Hoa chia buồn TFL00103", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00103-8930.png"],
        ["Kệ chia buồn TFL00141", "2.800.000đ", "watermark/product/275x375x1/upload/product/tfl00141-1366.png"],
        ["Hoa chia buồn TFL00149", "1.500.000đ", "watermark/product/275x375x1/upload/product/tfl00149-2559.png"],
        ["Kệ hoa TFL00164", "1.700.000đ", "watermark/product/275x375x1/upload/product/ke-hoa-tfl00164-1908.jpg"],
        ["Kệ hoa TFL00151", "2.000.000đ", "watermark/product/275x375x1/upload/product/tfl00151-2344.png"],
        ["Kệ tang 3 tầng TFL00162", "1.700.000đ", "watermark/product/275x375x1/upload/product/ke-hoa-tfl00162-6206.jpg"],
        ["Kệ hoa TFL00152", "2.000.000đ", "watermark/product/275x375x1/upload/product/tfl00152-4466.png"],
      ],
      [
        ["Hoa chia buồn TFL00014", "900.000đ", "watermark/product/275x375x1/upload/product/hoa-chia-buon-tfl00014-1769.jpg"],
        ["Giỏ hoa TFL00284", "500.000đ", "watermark/product/275x375x1/upload/product/z716379540628191827f94f60c69964add94b7bcab7412-8789.jpg"],
        ["Hộp hoa tang TFL00298", "800.000đ", "watermark/product/275x375x1/upload/product/z72341332060422c595b2518f5b5f65f8ce81ed02ed523-5316.jpg"],
        ["Giỏ hoa viếng TFL00253", "700.000đ", "watermark/product/275x375x1/upload/product/z70843299480016c88f7f97724d517cc1f394f76cb6802-4268.jpg"],
        ["Giỏ hoa viếng TFL00163", "800.000đ", "watermark/product/275x375x1/upload/product/tfl00163-8011.png"],
      ],
    ],
  },
  "/gio-hoa": {
    title: "Giỏ hoa",
    intro: "Giỏ hoa tươi mềm mại, nhiều màu sắc cho sinh nhật, kỷ niệm và lời cảm ơn.",
    products: [
      ["Giỏ hoa TFL00387", "650.000đ", "watermark/product/275x375x1/upload/product/z76940313884166319d9888ff09b08ddae90b70e9b502a-3969.jpg"],
      ["Giỏ hoa TFL00384", "500.000đ", "watermark/product/275x375x1/upload/product/z7692664301588802cf88b49bc8951b645701354b87067-7851.jpg"],
      ["Giỏ hoa TFL00377", "750.000đ", "watermark/product/275x375x1/upload/product/z765635202745456f22b5da71197e015b7ea3402791164-1288.jpg"],
      ["Giỏ hoa TFL00370", "600.000đ", "watermark/product/275x375x1/upload/product/z7587226954438cd452f0ba6ea826f1aa76b945fa9e510-6489.jpg"],
      ["Giỏ hoa TFL00354", "550.000đ", "watermark/product/275x375x1/upload/product/z75190552838364a84f1b020e1999fdace6f9614784b0c-8896.jpg"],
      ["Giỏ hoa TFL00349", "500.000đ", "watermark/product/275x375x1/upload/product/z750519433635762415ad055e08b78d7400d4ef94f7942-3768.jpg"],
      ["Giỏ hoa TFL00339", "680.000đ", "watermark/product/275x375x1/upload/product/z741133661801485e5c37768004eb9154664af6518dad9-1896.jpg"],
      ["Cây thông Noel TFL00331", "Liên hệ", "watermark/product/275x375x1/upload/product/z7315380773249b6768795cad94a4a14ecc781dd801086-6415.jpg"],
    ],
  },
  "/hoa-cuoi": {
    title: "Hoa cưới",
    intro: "Hoa cưới nhẹ nhàng, thanh lịch, phối theo tông màu và câu chuyện riêng của cô dâu.",
    products: [
      ["Hoa cưới TFL00379", "900.000đ", "watermark/product/275x375x1/upload/product/z76564044011068bbf9d3fb3fba87d2584512e870abfd0-8629.jpg"],
      ["Sen hoa TFL00331", "750.000đ", "watermark/product/275x375x1/upload/product/z7399433379004098b0cc18dbb7f22c0a0b9ff88d4f576-7609.jpg"],
      ["Hoa cưới TFL00204", "650.000đ", "watermark/product/275x375x1/upload/product/tfl00204-4084.png"],
      ["Hoa cưới sen đá TFL00090", "800.000đ", "watermark/product/275x375x1/upload/product/tfl00090-4908.png"],
      ["Hoa cưới TFL00128", "700.000đ", "watermark/product/275x375x1/upload/product/tfl00128-5178.png"],
      ["Hoa cưới TFL00129", "850.000đ", "watermark/product/275x375x1/upload/product/tfl00129-8598.png"],
      ["Hoa cưới TFL00034", "600.000đ", "watermark/product/275x375x1/upload/product/hoa-cuoi-tfl00034-7815.jpg"],
    ],
  },
};

const fallbackProductImages = [
  "thumbs/468x565x1/upload/photo/z7661235588974f55439ffad82f73668e901c18f7e1c82-56600.jpg",
  "thumbs/468x565x1/upload/photo/z76564044011068bbf9d3fb3fba87d2584512e870abfd0-84430.jpg",
  "thumbs/468x565x1/upload/photo/z7519072226659efa0df509db697b1f2967c1dce825c3b-90300.jpg",
  "thumbs/468x565x1/upload/photo/img20250228170126-65180.jpg",
  "thumbs/468x565x1/upload/photo/messengercreation7142895083459727097-83310.jpeg",
  "thumbs/468x565x1/upload/photo/received1586462585111349-45380.jpeg",
  "thumbs/468x565x1/upload/photo/img20250311210101-19010.jpg",
  "thumbs/468x565x1/upload/photo/img20250223163038-63110.jpg",
];

const aliases = {
  "/bo-hoa": ["Bó hoa", "Những bó hoa tươi xinh cho sinh nhật, tốt nghiệp, tình yêu và các ngày đặc biệt."],
  "/gio-trai-cay": ["Giỏ trái cây", "Giỏ trái cây và quà tặng cao cấp, chỉn chu cho đối tác, gia đình và dịp lễ."],
  "/sen-da": ["Sen đá", "Sen đá quà tặng bền đẹp, tượng trưng cho bình an, may mắn và tài lộc."],
  "/lan-ho-diep": ["Lan hồ điệp", "Lan hồ điệp sang trọng, thanh tao cho không gian và quà biếu trang nhã."],
  "/muc-khac": ["Mục khác", "Các thiết kế hoa và quà tặng theo mùa, làm theo phong cách riêng của bạn."],
};

Object.entries(window.PRODUCT_PAGES || {}).forEach(([path, pages]) => {
  if (pageData[path]) {
    pageData[path].pages = pages;
    delete pageData[path].products;
  } else if (aliases[path]) {
    pageData[path] = {
      title: aliases[path][0],
      intro: aliases[path][1],
      pages,
    };
  }
});

function renderMenu() {
  const current = currentRoute();
  document.querySelector("#main-menu").innerHTML = navItems
    .map(([label, href]) => `<li><a href="${siteHref(href)}" data-route class="${current === href ? "active" : ""}">${label}</a></li>`)
    .join("");
}

function normalizePath(path) {
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}

function siteHref(route) {
  const normalized = normalizePath(route);
  return `${repoBase}${normalized === "/" ? "/" : normalized}`;
}

function currentRoute() {
  let path = normalizePath(location.pathname);
  if (repoBase && (path === repoBase || path.startsWith(`${repoBase}/`))) {
    path = path.slice(repoBase.length) || "/";
  }
  return normalizePath(path || "/");
}

function pageHeader(title) {
  return `
    <section class="page-title">
      <div class="wrap">
        <h1>${title}</h1>
        <p class="breadcrumbs"><a href="${siteHref("/")}" data-route>Trang chủ</a> / ${title}</p>
      </div>
    </section>
  `;
}

function sectionHead(title, sub = "Tina flowers cùng bạn trao yêu thương") {
  return `
    <div class="section-head">
      <img src="${img("thumbs/250x250x1/upload/photo/logo-web-7385.png")}" alt="" />
      <h2>${title}</h2>
      <p>${sub}</p>
    </div>
  `;
}

function productCard([title, price, imagePath]) {
  return `
    <article class="product-card">
      <img src="${img(imagePath)}" alt="${title}" loading="lazy" />
      <div class="product-info">
        <h3>${title}</h3>
        <p class="price">Giá: ${price}</p>
      </div>
    </article>
  `;
}

function pagination(path, pageCount, currentPage) {
  if (pageCount < 2) return "";

  const links = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const href = `${siteHref(path)}${page === 1 ? "" : `?p=${page}`}`;
    return `<a class="${page === currentPage ? "active" : ""}" href="${href}" data-route>${page}</a>`;
  }).join("");

  const nextPage = Math.min(currentPage + 1, pageCount);
  const lastHref = `${siteHref(path)}${pageCount === 1 ? "" : `?p=${pageCount}`}`;
  const nextHref = `${siteHref(path)}${nextPage === 1 ? "" : `?p=${nextPage}`}`;

  return `
    <nav class="pagination" aria-label="Phân trang">
      <span>Page ${currentPage} / ${pageCount}</span>
      ${links}
      ${currentPage < pageCount ? `<a href="${nextHref}" data-route>Next</a>` : ""}
      ${currentPage < pageCount ? `<a href="${lastHref}" data-route>Last</a>` : ""}
    </nav>
  `;
}

function categoryCard(category) {
  return `
    <article class="category-card">
      <img src="${img(category.image)}" alt="${category.title}" loading="lazy" />
      <div class="card-body">
        <h3>${category.title}</h3>
        <p>Tina flowers cùng bạn trao yêu thương</p>
      <a class="more" href="${siteHref(category.slug)}" data-route>Xem thêm</a>
      </div>
    </article>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="wrap hero-inner">
        <div>
        <p class="eyebrow reveal">Welcome to</p>
          <h1>Tina Flowers Shop</h1>
          <p class="reveal">Với sự say mê, tâm huyết, bằng tình yêu hoa cỏ mong muốn mang nét đẹp thiên nhiên đến với mọi người. Tina Flowers rất vui khi là nơi cùng bạn tạo ra nhiều món quà yêu thương.</p>
          <a class="btn reveal" href="${siteHref("/gioi-thieu")}" data-route>xem thêm</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="wrap intro-grid">
        <div>
          ${sectionHead("Xin chào", "Chào bạn! Chào mừng bạn đã đến với trang web Tina Flowers!")}
          <p>Với nhiều mẫu mã hoa đa dạng, bạn xem qua những mẫu hoa bên dưới để lựa chọn cho mình những thiết kế ưng ý và tạo nên tác phẩm yêu thương của riêng mình.</p>
        </div>
        <div class="mosaic">
          ${homeImages.slice(0, 4).map((imagePath) => `<img src="${img(imagePath)}" alt="Tina Flowers" loading="lazy" />`).join("")}
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="wrap">
        ${sectionHead("Sản phẩm nổi bật")}
        <div class="category-grid">${categories.map(categoryCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        ${sectionHead("Đối với Tina")}
        <div class="product-grid">
          ${fallbackProductImages.slice(0, 8).map((imagePath, index) => productCard([["Anh ấy Lết về cùng đóa hồng Sophia", "Một bó hoa của sự bình tĩnh và kiên trì", "Buổi sáng một chút ngọt ngào", "Hoa hồng Ohara kẽ chạm điều nhẹ nhàng", "Món quà giáng sinh Noel ấm áp", "Giỏ hoa ngọt ngào", "Hoa tươi mỗi ngày", "Câu chuyện yêu thương"][index], "Chi tiết", imagePath])).join("")}
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="wrap">
        ${sectionHead("Điều đặc biệt", "Tina Flowers Shop")}
        <div class="feature-grid">
          <article class="feature-card"><img src="${img(homeImages[6])}" alt="" /><h3>Hoa tươi mỗi ngày</h3><p>Những bó hoa được lựa chọn tỉ mỉ, nhập vườn trực tiếp, đảm bảo hoa tươi mỗi ngày.</p></article>
          <article class="feature-card"><img src="${img(homeImages[1])}" alt="" /><h3>Làm hoa theo cách riêng của bạn</h3><p>Phong cách của mỗi người là khác nhau, Tina phối hoa theo câu chuyện của riêng bạn.</p></article>
          <article class="feature-card"><img src="${img(homeImages[7])}" alt="" /><h3>Trao yêu thương đến tận nơi</h3><p>Giao hoa tận tay người nhận, mang những yêu thương đong đầy.</p></article>
        </div>
      </div>
    </section>
    <section class="section contact-band">
      <div class="wrap">
        ${sectionHead("Để lại thông tin", "Bạn sẽ nhận được điều đặc biệt!")}
        <form class="contact-box">
          <input placeholder="Vui lòng nhập họ và tên" />
          <input placeholder="Vui lòng nhập số điện thoại" />
          <input placeholder="Vui lòng nhập nội dung" />
          <button class="btn" type="button">Gửi ngay</button>
        </form>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${pageHeader("Giới thiệu")}
    <section class="section">
      <div class="wrap content-panel">
        <img src="${img("thumbs/854x1280x2/upload/photo/img20250311210101-2363.jpg")}" alt="Tina Flowers Shop" />
        <div class="content-text">
          ${sectionHead("Tina Flowers Shop", "Làm hoa theo cách riêng của bạn")}
          <p>Với sự say mê, tâm huyết, bằng tình yêu hoa cỏ mong muốn mang nét đẹp thiên nhiên đến với mọi người, Tina Flowers ra đời. Tina Flowers mang những nét riêng với nhiều phong cách, để bạn là người tạo nên tác phẩm dành tặng người mình yêu quý.</p>
          <p>Tina chuyên nhận làm hoa chia buồn, hoa sinh nhật, hoa chúc mừng, hoa cưới, hoa và quà tặng kèm. Mỗi sản phẩm có thể khác nhau theo mùa hoa, độ nở và chất liệu thủ công, nhưng luôn giữ đúng tinh thần tông màu, kiểu dáng và sự chỉn chu.</p>
          <p><strong>Hotline / Zalo:</strong> 0907 118 200 - 0917 877 269</p>
          <p><strong>Địa chỉ:</strong> 117/29/2B Hồ Văn Long, Khu phố 47, Phường Bình Tân, Tp.HCM</p>
          <a class="btn" href="${siteHref("/gio-hoa")}" data-route>Xem sản phẩm</a>
        </div>
      </div>
    </section>
  `;
}

function renderCategory(path) {
  let data = pageData[path];
  if (!data && aliases[path]) {
    data = {
      title: aliases[path][0],
      intro: aliases[path][1],
      products: fallbackProductImages.map((imagePath, index) => [`${aliases[path][0]} TFL00${310 - index}`, ["800.000đ", "1.200.000đ", "600.000đ", "550.000đ", "Liên hệ"][index % 5], imagePath]),
    };
  }

  if (!data) return renderContact();
  const pages = data.pages || [data.products];
  const requestedPage = Number(new URLSearchParams(location.search).get("p") || "1");
  const currentPage = Math.min(Math.max(requestedPage, 1), pages.length);
  const products = pages[currentPage - 1];

  return `
    ${pageHeader(data.title)}
    <section class="section">
      <div class="wrap">
        ${sectionHead(data.title, data.intro)}
        <div class="product-grid">${products.map(productCard).join("")}</div>
        ${pagination(path, pages.length, currentPage)}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${pageHeader("Liên hệ")}
    <section class="section">
      <div class="wrap content-panel">
        <img src="${img("thumbs/468x565x1/upload/photo/z751192855600340f43bd18ab018333cad7ba72732a616-44451.jpg")}" alt="Liên hệ Tina Flowers" />
        <div class="content-text">
          ${sectionHead("Tina Flowers", "Tina flowers cùng bạn trao yêu thương")}
          <p><strong>Địa chỉ:</strong> 117/29/2B Hồ Văn Long, Khu phố 47, Phường Bình Tân, Tp.HCM</p>
          <p><strong>Hotline / Zalo:</strong> 0907 118 200 - 0917 877 269</p>
          <p><strong>Mail:</strong> tinatina.ha@gmail.com</p>
          <p><strong>Fanpage:</strong> <a class="more" href="https://www.facebook.com/profile.php?id=100084512862761" target="_blank" rel="noreferrer">Tina Flowers</a></p>
          <form class="contact-box" style="grid-template-columns: 1fr; margin-top: 22px;">
            <input placeholder="Họ tên" />
            <input placeholder="Điện thoại" />
            <input placeholder="Nội dung" />
            <button class="btn" type="button">Gửi liên hệ</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderPolicy() {
  return `
    ${pageHeader("Chính sách đặt hoa")}
    <section class="section">
      <div class="wrap content-text">
        ${sectionHead("Chính sách đặt hoa")}
        <p>Khi đặt hàng tại Tina Flowers, bạn được tư vấn mẫu hoa theo ngân sách, tông màu và thông điệp. Shop hỗ trợ thiệp viết tay hoặc bảng chữ nghệ thuật theo yêu cầu.</p>
        <p>Sản phẩm thực tế có thể khác biệt tùy độ nở của hoa, mùa hoa và đặc tính thủ công. Tina Flowers luôn linh động phối hoa để sản phẩm đẹp và phù hợp nhất tại thời điểm giao.</p>
      </div>
    </section>
  `;
}

function render() {
  const path = currentRoute();
  renderMenu();
  const app = document.querySelector("#app");

  if (path === "/") app.innerHTML = renderHome();
  else if (path === "/gioi-thieu") app.innerHTML = renderAbout();
  else if (path === "/chinh-sach-dat-hoa") app.innerHTML = renderPolicy();
  else app.innerHTML = renderCategory(path);

  setupAnimations();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function setupAnimations() {
  const animated = document.querySelectorAll(
    ".section-head, .intro-grid > *, .content-panel > *, .category-card, .product-card, .feature-card, .blog-card, .contact-box, .hero h1, .reveal"
  );

  animated.forEach((element) => {
    element.classList.add("reveal");
  });

  if (!("IntersectionObserver" in window)) {
    animated.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  animated.forEach((element) => observer.observe(element));
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-route]");
  if (!link) return;

  const url = new URL(link.href);
  if (url.origin !== location.origin) return;

  event.preventDefault();
  let targetPath = normalizePath(url.pathname);
  if (repoBase && !targetPath.startsWith(repoBase)) {
    targetPath = siteHref(targetPath);
  }
  history.pushState({}, "", `${targetPath}${url.search}`);
  document.querySelector(".menu").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  render();
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  const open = menu.classList.toggle("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(open));
});

window.addEventListener("popstate", render);
render();
