// Theme toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Redirect from home page
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "/login";
  });
}

// Show/hide password
const showPasswordBtn = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");
if (showPasswordBtn && passwordInput) {
  showPasswordBtn.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    showPasswordBtn.textContent = type === "password" ? "👁 Show" : "🙈 Hide";
  });
}

// Handle login form submission
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        window.location.href = "/dashboard";
      } else {
        const data = await res.json();
        message.textContent = data.message || "Login failed!";
      }
    } catch (err) {
      message.textContent = "Network error. Please try again.";
    }
  });
}
