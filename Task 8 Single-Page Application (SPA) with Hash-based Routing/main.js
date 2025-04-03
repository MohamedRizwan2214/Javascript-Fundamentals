const content = document.getElementById("content");
const home =
  "<h2>🏠 Welcome to the Home Page</h2><p>This is the main page.</p>";
const about = "<h2>ℹ️ About Us</h2><p>Learn more about our application.</p>";
const profile = "<h2>👤 Profile</h2><p>This is the profile page.</p>";
const status = "<h2>📊 Status</h2><p>This is the status page.</p>";
const routes = {
  home: home,
  about: about,
  profile: profile,
  status: status,
};
function call() {
  console.log("Changed");
  const hash = location.hash.substring(1) || "home";
  content.innerHTML = routes[hash] || "<h2>404 - Page Not Found</h2>";
}
window.addEventListener("hashchange", call);
window.addEventListener("load", call);
