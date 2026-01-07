async function search() {
  const id = document.getElementById("nid").value.trim();
  const resultDiv = document.getElementById("result");

  if (id === "") {
    resultDiv.innerHTML = "⚠️ أدخل رقم الهوية";
    return;
  }

  const response = await fetch("data.json");
  const data = await response.json();

  const student = data.find(s => s.national_id.trim() === id);

  if (student) {
    resultDiv.innerHTML = `
      <p><strong>الاسم:</strong> ${student.student_name}</p>
      <div class="degree-boxes">
        <div class="degree-box">
          <h3>مقدمة تطبيقات الحاسب</h3>
          <p>${student.computer}</p>
        </div>
        <div class="degree-box">
          <h3>مبادئ إدارة الاعمال</h3>
          <p>${student.biss}</p>
        </div>
        <div class="degree-box">
          <h3>اللغة الإنجليزية</h3>
          <p>${student.english}</p>
        </div>
      </div>
    `;
  } else {
    resultDiv.innerHTML = "❌ لا توجد نتيجة لرقم الهوية";
  }
}


