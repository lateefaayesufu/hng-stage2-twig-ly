// Toast notification system

class ToastManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    // Create toast container if it doesn't exist
    if (!document.querySelector(".toast-container")) {
      this.container = document.createElement("div");
      this.container.className = "toast-container";
      this.container.setAttribute("role", "region");
      this.container.setAttribute("aria-live", "polite");
      this.container.setAttribute("aria-label", "Notifications");
      document.body.appendChild(this.container);
    } else {
      this.container = document.querySelector(".toast-container");
    }
  }

  show(message, type = "info") {
    const id = Date.now() + Math.random();
    const toast = this.createToast(id, message, type);

    this.container.appendChild(toast);

    // Auto remove after 4 seconds
    setTimeout(() => {
      this.remove(id);
    }, 4000);

    return id;
  }

  createToast(id, message, type) {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", "alert");
    toast.dataset.toastId = id;

    const icon = this.getIcon(type);
    const title = this.getTitle(type);

    toast.innerHTML = `
      <div class="toast-icon" style="font-size: 20px">${icon}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close notification">×</button>
    `;

    // Close button handler
    toast.querySelector(".toast-close").addEventListener("click", () => {
      this.remove(id);
    });

    return toast;
  }

  remove(id) {
    const toast = this.container.querySelector(`[data-toast-id="${id}"]`);
    if (toast) {
      toast.remove();
    }
  }

  getIcon(type) {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      default:
        return "ℹ";
    }
  }

  getTitle(type) {
    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Error";
      default:
        return "Info";
    }
  }

  success(message) {
    return this.show(message, "success");
  }

  error(message) {
    return this.show(message, "error");
  }

  info(message) {
    return this.show(message, "info");
  }
}

// Global toast instance
const toast = new ToastManager();
