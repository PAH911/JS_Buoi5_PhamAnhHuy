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

let chonDoiTuong = () => {
  let doiTuong0 = document.getElementById("doiTuong0").checked;
  let doiTuong1 = document.getElementById("doiTuong1").checked;
  let doiTuong2 = document.getElementById("doiTuong2").checked;
  let doiTuong3 = document.getElementById("doiTuong3").checked;
  let doiTuong = "";
  if (doiTuong0) {
    doiTuong0 = "0";
  } else if (doiTuong1) {
    doiTuong1 = "1";
  } else if (doiTuong2) {
    doiTuong2 = "2";
  } else if (doiTuong3) {
    doiTuong3 = "3";
  }
  return doiTuong;
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

//   // So sánh tổng điểm với điểm chuẩn
//   TongDiem = diemkhuVuc + diemDoiTuong + diemMon1 + diemMon2 + diemMon3;
//   if (TongDiem >= diemChuan) {
//     console.log("Chúc mừng bạn đã đậu! Tổng điểm của bạn là: " + TongDiem);
//     document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
//   } else {
//     console.log("Rất tiếc! Bạn đã rớt! Tổng điểm của bạn là: " + TongDiem);
//   }

//   // Kiểm tra đầu vào

//   if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
//     alert("Vui lòng nhập điểm môn học");
//   } else if (diemChuan === 0) {
//     alert("Vui lòng nhập điểm chuẩn");
//   } else if (
//     diemMon1 === 0 ||
//     diemMon2 === 0 ||
//     (diemMon3 === 0 && diemChuan === 0)
//   ) {
//     alert("Vui lòng nhập điểm môn học và điểm chuẩn");
//   }

//   // output
//   document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
// }

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
