// populate main nav
const mainNav = document.getElementById('mainNav');
mainNav.innerHTML = `
<div class="container px-4 px-lg-5">
  <a class="navbar-brand" href="#page-top">Phạm Hồng Thái</a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ms-auto my-2 my-lg-0">
      <li class="nav-item"><a class="nav-link" href="index.html">Trang Chủ</a></li>
      <li class="nav-item"><a class="nav-link" href="about.html">Giới Thiệu</a></li>
      <li class="nav-item"><a class="nav-link" href="pht-stories-club.html">CLB truyền thông</a></li>
      <li class="nav-item"><a class="nav-link" href="index.html#contact">Liên Hệ</a></li>
    </ul>
  </div>
</div>
`;

// get latest year
document.getElementById('currentYeadSpan').textContent = new Date().getFullYear();