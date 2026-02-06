function calculateHealth() {
  let score = 100;

  const selects = document.querySelectorAll('select');
  selects.forEach(sel => {
    score -= parseInt(sel.value);
  });

  const checks = document.querySelectorAll('.checkbox input:checked');
  checks.forEach(chk => {
    score -= parseInt(chk.value);
  });

  if (score < 0) score = 0;

  let status = '';
  let explanation = '';

  if (score >= 75) {
    status = 'Healthy';
    explanation = 'Your vehicle shows no major warning signs based on this checklist. Regular maintenance should keep it in good condition.';
  } else if (score >= 45) {
    status = 'Needs Attention';
    explanation = 'Some indicators suggest increased wear. It is recommended to monitor these issues and consider a professional inspection.';
  } else {
    status = 'High Risk';
    explanation = 'Multiple warning signs indicate potential safety or reliability issues. Professional inspection is strongly recommended before continued use.';
  }

  document.getElementById('scoreValue').innerText = score + '/100';
  document.getElementById('statusText').innerText = status;
  document.getElementById('explanation').innerText = explanation;

  document.getElementById('result').classList.remove('hidden');
}
