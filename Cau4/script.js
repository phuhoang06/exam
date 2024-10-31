class NhanVien {
    constructor(id, ten, ngaysinh, diachi, luong, chucvu) {
        this.id = id;
        this.ten = ten;
        this.ngaysinh = ngaysinh;
        this.diachi = diachi;
        this.luong = luong;
        this.chucvu = chucvu;
    }
}

let danhSachNhanVien = [
    new NhanVien(1, "Nguyễn Văn A", "1990-01-01", "Hà Nội", 5000000, "Nhân viên"),
    new NhanVien(2, "Trần Thị B", "1992-02-02", "Hồ Chí Minh", 6000000, "Quản lý"),
    new NhanVien(3, "Lê Văn C", "1988-03-03", "Đà Nẵng", 7000000, "Giám đốc"),
];

// Hàm tạo nút hành động
function taoNutHanhDong(id) {
    return `
        <button onclick="themNhanVien()">Thêm</button>
        <button onclick="xoaNhanVien(${id})">Xóa</button>
    `;
}

// Hàm tạo hàng cho mỗi nhân viên
function taoHangNhanVien(nhanVien) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${nhanVien.id}</td>
        <td>${nhanVien.ten}</td>
        <td>${nhanVien.ngaysinh}</td>
        <td>${nhanVien.diachi}</td>
        <td>${nhanVien.luong.toLocaleString()}</td>
        <td>${nhanVien.chucvu}</td>
        <td>${taoNutHanhDong(nhanVien.id)}</td>
    `;
    return row;
}

// Hàm hiển thị danh sách nhân viên
function hienThiDanhSachNhanVien() {
    const tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = "";
    danhSachNhanVien.forEach(nhanVien => tableBody.appendChild(taoHangNhanVien(nhanVien)));
}

// Hàm thêm nhân viên
function themNhanVien() {
    const ten = prompt("Nhập tên:");
    const ngaysinh = prompt("Nhập ngày sinh (YYYY-MM-DD):");
    const diachi = prompt("Nhập địa chỉ:");
    const luong = parseFloat(prompt("Nhập lương:"));
    const chucvu = prompt("Nhập chức vụ:");

    if (ten && ngaysinh && diachi && luong && chucvu) {
        const idMoi = danhSachNhanVien.length ? danhSachNhanVien[danhSachNhanVien.length - 1].id + 1 : 1;
        const nhanVienMoi = new NhanVien(idMoi, ten, ngaysinh, diachi, luong, chucvu);
        danhSachNhanVien.push(nhanVienMoi);
        hienThiDanhSachNhanVien();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
    }
}

// Hàm xóa nhân viên
function xoaNhanVien(id) {
    danhSachNhanVien = danhSachNhanVien.filter(nv => nv.id !== id);
    hienThiDanhSachNhanVien();
}

// Khởi tạo hiển thị danh sách nhân viên
document.addEventListener("DOMContentLoaded", hienThiDanhSachNhanVien);
