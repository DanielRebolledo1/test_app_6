// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", () => {
    const notice = "<%= notice %>";
    const alert = "<%= alert %>";
  
    if (notice) {
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: notice,
        timer: 3000,
        showConfirmButton: false,
      });
    }
  
    if (alert) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: alert,
        timer: 3000,
        showConfirmButton: false,
      });
    }
  });