 

document.addEventListener('DOMContentLoaded', function() {
    
    if (typeof Swal !== 'undefined') {
      
      window.originalAlert = window.alert;
      window.alert = function(message) {
        return Swal.fire({
          title: 'Informasi',
          text: message,
          icon: 'info',
          confirmButtonText: 'OK',
          confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#6366f1',
          background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#f9fafb' : '#111827'
        });
      };
  
      
      window.originalConfirm = window.confirm;
      window.confirm = function(message) {
        return new Promise((resolve) => {
          Swal.fire({
            title: 'Konfirmasi',
            text: message,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
            confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#6366f1',
            cancelButtonColor: '#ef4444',
            background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
            color: document.documentElement.classList.contains('dark') ? '#f9fafb' : '#111827'
          }).then((result) => {
            resolve(result.isConfirmed);
          });
        });
      };
  
      
      window.showAlert = function(title, message, icon = 'info') {
        return Swal.fire({
          title: title,
          text: message,
          icon: icon,
          confirmButtonText: 'OK',
          confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || '#6366f1',
          background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#f9fafb' : '#111827'
        });
      };
  
      window.showSuccess = function(message) {
        return Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#f9fafb' : '#111827'
        });
      };
  
      window.showError = function(message) {
        return Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: message,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#f9fafb' : '#111827'
        });
      };
  
      window.showLoading = function(title = 'Loading...') {
        return Swal.fire({
          title: title,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#f9fafb' : '#111827'
        });
      };
  
      window.closeLoading = function() {
        Swal.close();
      };
    }
    
    
    if (document.documentElement.classList.contains('dark')) {
      
      document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, th, td, label').forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        const textColor = computedStyle.color;
        
        
        if (textColor === 'rgb(0, 0, 0)' || 
            textColor === '#000' || 
            textColor === 'rgb(17, 24, 39)' || 
            textColor === '#111827') {
          el.style.color = '#f9fafb';
        }
        
        
        if (textColor === 'rgb(107, 114, 128)' || textColor === '#6b7280') {
          el.style.color = '#9ca3af';
        }
      });
      
      
      document.querySelectorAll('input, select, textarea').forEach(el => {
        if (!el.style.backgroundColor || 
            el.style.backgroundColor === 'rgb(255, 255, 255)' || 
            el.style.backgroundColor === '#fff' || 
            el.style.backgroundColor === '#ffffff') {
          el.style.backgroundColor = '#374151';
          el.style.borderColor = '#4b5563';
          el.style.color = '#f9fafb';
        }
      });
    }
  });