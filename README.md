# ENGSE203 LAB 03 — JavaScript DOM & Event Listener

## ผู้จัดทำ

- ชื่อ-นามสกุล : นาย ณัฐวุฒิ จันทายา
- รหัสนักศึกษา : 68543210009-5
- ระบบปฏิบัติการที่ใช้ : Windows 11 / WSL Ubuntu 24.04 LTS
- Repository : https://github.com/Njuntaya/engse203-lab03-68543210009-5/tree/main

---

## วัตถุประสงค์

เพื่อเรียนรู้โครงสร้างของ JavaScript และกระบวนการทำงานของ DOM Event Listener รวมถึงการเชื่อมต่อกันระหว่าง JavaScript, CSS และ HTML โดยเน้นการจัดการ Event ผ่าน DOM API และการออกแบบ Layout แบบ Mobile First เพื่อให้เว็บไซต์รองรับการแสดงผลบนอุปกรณ์มือถือเป็นหลัก

---

## เครื่องมือที่ใช้

- HTML5
- Vanilla JavaScript (DOM)
- CSS — Mobile First Approach
- Vite (Build Tool)

---

## โครงสร้างไฟล์

```
engse203-lab03-68543210009-5/
├── docs/
│   ├── assets/
│   │   ├── index-CdAnej0A.css
│   │   └── index-Srmx4u7r.js
│   ├── favicon.svg
│   ├── icons.svg
│   └── index.html
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── counter.js
│   ├── main.js
│   └── style.css
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## วิธีติดตั้งและรันโปรเจกต์

```bash
npm install
```

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `npm run dev` | รัน development server พร้อม hot reload |
| `npm run build` | build output ไปยังโฟลเดอร์ `docs/` |

---

## Git เบื้องต้น

```bash
git init
git remote add origin https://github.com/<username>/<repo>.git

git add .
git commit -m "Initial commit"
git push -u origin main

git checkout -b feature/branch-name
git push origin feature/branch-name
```

---

## ปัญหาที่พบและวิธีแก้ไข

| ปัญหาที่พบ | สาเหตุ | วิธีแก้ไข |
|-----------|--------|-----------|
| `index.html` และ `main.js` ไม่เชื่อมกัน ทำให้ event ไม่ทำงาน | ไม่ได้ใส่ `<script type="module">` หรือ path ไม่ตรงกับโครงสร้างจริง | ตรวจสอบให้แน่ใจว่ามี `<script type="module" src="/src/main.js"></script>` อยู่ใน `<body>` และ path ตรงกับไฟล์จริง |
| `fatal: not a git repository` หรือ `nothing added to commit` | ยังไม่ได้ `git init` หรือยังไม่ได้ `git add` ไฟล์เข้า staging | รัน `git init` → `git remote add origin <url>` → `git add .` → `git commit` → `git push -u origin main` |

---

## AI Assistance Disclosure

| เครื่องมือ | วัตถุประสงค์ที่ใช้ |
|-----------|-----------------|
| Claude (Anthropic) | ช่วยจัดเรียงโครงสร้าง CSS ให้อ่านและแก้ไขได้ง่ายขึ้น และช่วยร่าง README |
| Google Gemini | ช่วย research และแนะนำวิธีแก้ไข Bug จากคำสั่งใน WSL |
