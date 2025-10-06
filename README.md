# 🌙 Trung Thu Happy - Đèn Lồng Bay

Một trang web tương tác đặc biệt cho dịp Trung Thu với hiệu ứng đèn lồng bay, lời chúc và animation đẹp mắt.

## ✨ Tính năng

- 🌟 **Bầu trời sao động**: Hiệu ứng sao lấp lánh và sao băng
- 🌕 **Mặt trăng tương tác**: Hover để xem hiệu ứng đặc biệt
- 🏮 **Đèn lồng bay**: Đèn lồng bay lên với hiệu ứng sáng đẹp mắt
- 💬 **Lời chúc tương tác**: Click vào đèn lồng để xem lời chúc và hình ảnh
- 🎵 **Nhạc nền**: Âm thanh Trung Thu tạo không khí lễ hội
- 📱 **Responsive**: Tối ưu cho mọi thiết bị

## 🚀 Cách sử dụng

1. **Mở trang web**: Mở file `index.html` trong trình duyệt
2. **Tương tác**: 
   - Click vào đèn lồng bay để xem lời chúc
   - Hover vào mặt trăng để xem hiệu ứng
   - Click bất kỳ đâu để ẩn popup lời chúc
3. **Thưởng thức**: Nghe nhạc nền và ngắm cảnh đẹp

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animation
- **JavaScript**: Tương tác và hiệu ứng
- **Canvas API**: Vẽ sao và sao băng
- **Web Audio API**: Phát nhạc nền

## 📁 Cấu trúc thư mục

```
TrungThuHappy/
├── index.html          # Trang chính
├── style.css           # Stylesheet
├── script.js           # JavaScript
├── a.mp3              # Nhạc nền
├── moon.png           # Hình mặt trăng
├── den.png            # Đèn lồng 1
├── den1.png           # Đèn lồng 2
├── den2.png           # Đèn lồng 3
└── images/            # Thư mục hình ảnh
    ├── wish1.png      # Hình chúc 1
    ├── wish2.png      # Hình chúc 2
    ├── wish3.png      # Hình chúc 3
    ├── wish4.png      # Hình chúc 4
    └── wish5.png      # Hình chúc 5
```

## 🎨 Tùy chỉnh

### Thay đổi lời chúc
Chỉnh sửa mảng `wishes` trong `script.js`:
```javascript
const wishes = [
  "Lời chúc của bạn 1",
  "Lời chúc của bạn 2",
  // ...
];
```

### Thay đổi hình ảnh
Thêm hình ảnh vào thư mục `images/` và cập nhật mảng `wishImages`:
```javascript
const wishImages = [
  "images/hinh1.png",
  "images/hinh2.png",
  // ...
];
```

### Thay đổi nhạc nền
Thay thế file `a.mp3` bằng file nhạc của bạn.

## 🌐 Deploy lên GitHub Pages

1. Push code lên GitHub repository
2. Vào Settings → Pages
3. Chọn source: Deploy from a branch
4. Chọn branch: main, folder: / (root)
5. Save và đợi deploy

Link trang web sẽ có dạng: `https://username.github.io/repository-name`

## 📱 Responsive Design

- **Desktop**: Hiệu ứng đầy đủ, kích thước lớn
- **Tablet**: Tối ưu cho màn hình trung bình
- **Mobile**: Giao diện thu gọn, phù hợp màn hình nhỏ

## 🎯 Performance

- Sử dụng `requestAnimationFrame` cho animation mượt
- Tối ưu DOM manipulation
- Lazy loading cho hình ảnh
- CSS `will-change` cho hiệu ứng mượt mà

## 📄 License

Dự án này được tạo ra cho mục đích giáo dục và giải trí.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

---

**Chúc bạn có một mùa Trung Thu vui vẻ và hạnh phúc! 🌙✨**
