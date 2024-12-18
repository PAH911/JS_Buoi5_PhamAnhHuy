// Add event chuyển tab giữa các bài
function changeContent(bai) {
  const content1 = document.getElementById("content_1");
  const content2 = document.getElementById("content_2");
  const content3 = document.getElementById("content_3");
  const content4 = document.getElementById("content_4");
  const content5 = document.getElementById("content_5");

  if (bai === "Bai1") {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai2") {
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai3") {
    content3.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
  } else if (bai === "Bai4") {
    content4.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content5.style.display = "none";
  }
}

// Bài 1:  Quản lý tuyển sinh
// Hàm chọn khu vực
let chonKhuVuc = () => {
  let khuVucA = document.getElementById("khuVucA").checked;
  let khuVucB = document.getElementById("khuVucB").checked;
  let khuVucC = document.getElementById("khuVucC").checked;
  let khuVuc = "";
  if (khuVucA) {
    khuVuc = "A";
  } else if (khuVucB) {
    khuVuc = "B";
  } else if (khuVucC) {
    khuVuc = "C";
  }
  return khuVuc;
};

// Vì thuộc tính .checked chỉ dùng cho input type="radio" nên phải viết hàm chonDoiTuong như sau để lấy giá trị của select
let chonDoiTuong = () => {
  let doiTuong = document.getElementById("doiTuong").value;
  return doiTuong.replace("doiTuong", "");
};

// Xử lý sự kiện cho button tính điểm
function tinhDiem() {
  // input
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = chonKhuVuc();
  let diemkhuVuc = 0;
  let doiTuong = chonDoiTuong();
  let diemDoiTuong = 0;
  let TongDiem = 0;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;

  // progress
  // Xác định điểm khu vực
  switch (khuVuc) {
    case "A":
      diemkhuVuc = 2;
      break;
    case "B":
      diemkhuVuc = 1;
      break;
    case "C":
      diemkhuVuc = 0.5;
      break;
    default:
      diemkhuVuc = 0;
  }

  // Xác định điểm đối tượng
  switch (doiTuong) {
    case "0":
      diemDoiTuong = 0;
      break;
    case "1":
      diemDoiTuong = 2.5;
      break;
    case "2":
      diemDoiTuong = 1.5;
      break;
    case "3":
      diemDoiTuong = 1;
      break;
  }

  // Kiểm tra đầu vào

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    alert("Vui lòng nhập điểm môn học");
    return;
  } else if (diemChuan === 0) {
    alert("Vui lòng nhập điểm chuẩn");
    return;
  } else if (diemChuan < 0 || diemChuan > 30) {
    alert("Vui lòng nhập điểm chuẩn từ 1 đến 30");
    return;
  } else if (diemMon1 < 0 || diemMon2 < 0 || diemMon3 < 0) {
    alert("Vui lòng nhập điểm môn học từ 0 đến 10");
    return;
  }

  // Tính tổng điểm
  TongDiem = diemkhuVuc + diemDoiTuong + diemMon1 + diemMon2 + diemMon3;

  // Kiểm tra đậu rớt
  let ketQua = "";
  if (TongDiem >= diemChuan) {
    ketQua =
      "Chúc mừng bạn đã đậu! Tổng điểm của bạn là: " +
      TongDiem.toLocaleString();
  } else if (TongDiem < diemChuan && TongDiem > 0) {
    ketQua =
      "Rất tiếc! Bạn đã rớt! Tổng điểm của bạn là: " +
      TongDiem.toLocaleString();
  }

  // output
  document.getElementById("tongDiem").innerHTML = ketQua;
}

// Hàm reset giá trị cho button reset
function resetForm() {
  document.getElementById("diemChuan").value = "";
  document.getElementById("khuVucA").checked = false;
  document.getElementById("khuVucB").checked = false;
  document.getElementById("khuVucC").checked = false;
  document.getElementById("doiTuong").value = "doiTuong0";
  document.getElementById("diemMon1").value = "";
  document.getElementById("diemMon2").value = "";
  document.getElementById("diemMon3").value = "";
  document.getElementById("tongDiem").innerHTML = "";
}

// Bài 2: Tính tiền điện
function tinhTrungBinh() {
  // Input
  let soThu1 = document.getElementById("soThu1").value;
  let soThu2 = document.getElementById("soThu2").value;
  let soThu3 = document.getElementById("soThu3").value;
  let soThu4 = document.getElementById("soThu4").value;
  let soThu5 = document.getElementById("soThu5").value;

  // progress
  let sum =
    parseInt(soThu1) +
    parseInt(soThu2) +
    parseInt(soThu3) +
    parseInt(soThu4) +
    parseInt(soThu5);
  let trungBinh = sum / 5;
  document.getElementById("trungBinh").innerHTML = trungBinh;

  // output
  trungBinh = 0;
}

// Bài 3: Tính thuế thu nhập cá nhân
function doiTien() {
  // input
  let usd = document.getElementById("usd").value;

  // progress
  tongTien = 23500 * usd;
  document.getElementById("tongTien").innerHTML = tongTien.toLocaleString();

  // Output
  let tongTien = 0;
}

// Bài 4: Tính tiền cáp
function tinh() {
  // input
  let chieuDai = document.getElementById("chieuDai").value;
  let chieuRong = document.getElementById("chieuRong").value;
  // console.log(chieuDai, chieuRong); -> check

  // progress
  dienTich = chieuDai * chieuRong;
  chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
  document.getElementById("dienTich").innerHTML = dienTich;
  document.getElementById("chuVi").innerHTML = chuVi;

  // output
  let dienTich = 0;
  let chuVi = 0;
}
