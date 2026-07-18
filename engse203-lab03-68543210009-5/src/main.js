const form = document.querySelector('#profile-form');
const status = document.querySelector('#form-status');
const previewStatus = document.querySelector('#preview-status'); // เพิ่มตัวเลือกกล่องสถานะใน Preview

const goalCount = document.querySelector('#goal-count');
const preview = {
  displayName: document.querySelector('#preview-name'),
  learningRole: document.querySelector('#preview-role'),
  learningGoal: document.querySelector('#preview-goal'),
};

function readForm() {
  return Object.fromEntries(new FormData(form).entries());
}

form.addEventListener("input", () => {
  const data = readForm();
  renderPreview(data);
});

function renderPreview(data) {
  preview.displayName.textContent = data.displayName.trim() || "ยังไม่ได้ระบุชื่อ";
  preview.learningRole.textContent = data.learningRole || "ยังไม่เลือกประเภท";
  preview.learningGoal.textContent = data.learningGoal.trim() || "ยังไม่มีรายละเอียดคำร้อง";
  goalCount.textContent = `${data.learningGoal.length} ตัวอักษร`;
}

function validate(data) {
  const errors = {};

  if (data.displayName.trim().length < 2) {
    errors.displayName = "กรุณากรอกชื่อผู้ยื่นคำร้องอย่างน้อย 2 ตัวอักษร";
  }

  if (!data.learningRole) {
    errors.learningRole = "กรุณาเลือกประเภทคำร้อง";
  }

  if (data.learningGoal.trim().length < 10) {
    errors.learningGoal = "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร";
  }
  return errors;
}

function renderErrors(errors) {
  for (const name of ["displayName", "learningRole", "learningGoal"]) {
    const field = form.elements[name];
    const output = document.querySelector(`#${name}-error`);
    const message = errors[name] ?? "";

    output.textContent = message;
    field.setAttribute("aria-invalid", String(Boolean(message)));
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = readForm();
  const errors = validate(data);
  renderErrors(errors);

  if (Object.keys(errors).length > 0) {
    renderStatus("invalid", "ยังบันทึกไม่ได้ กรุณาตรวจสอบข้อมูล");
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  renderStatus(
    "success",
    `ส่งคำร้องสำเร็จแล้ว คุณ ${data.displayName}! ข้อมูลผ่านการตรวจสอบ`,
  );
});

function renderStatus(state, message) {
  status.dataset.state = state;
  status.textContent = message;

  if (previewStatus) {
    previewStatus.className = `box ${state}`;
    previewStatus.textContent = message;
  }
}
renderPreview(readForm());
renderStatus("idle", "พร้อมสำหรับการกรอกข้อมูล");