(function() {
  function updateBeijingTime() {
    const now = new Date();
    // 获取当前时间戳 + 时区偏移量（转为 UTC）
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    // 加上 8 小时 (3600000 * 8) 转为北京时间
    const beijingTime = new Date(utcTime + (3600000 * 8));
    
    const year = beijingTime.getFullYear();
    const month = String(beijingTime.getMonth() + 1).padStart(2, '0');
    const day = String(beijingTime.getDate()).padStart(2, '0');
    const hours = String(beijingTime.getHours()).padStart(2, '0');
    const minutes = String(beijingTime.getMinutes()).padStart(2, '0');
    const seconds = String(beijingTime.getSeconds()).padStart(2, '0');
    
    const timeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    
    const element = document.getElementById('Beijing_z43d');
    if (element) {
      element.textContent = timeString;
    }
  }

  // 页面加载完成后立即执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateBeijingTime();
      setInterval(updateBeijingTime, 1000);
    });
  } else {
    updateBeijingTime();
    setInterval(updateBeijingTime, 1000);
  }
})();