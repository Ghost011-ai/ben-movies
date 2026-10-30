// ══════════════════════════════════════════
//  Ben Movies — Shared Data & Utilities
// ══════════════════════════════════════════

const MOVIES = [
  { id:1, title:"Man of Steel",            genre:"Action / Sci-Fi",        rating:"12A",   duration:143, price:12.50, showtimes:["10:30","13:15","16:45","19:30","22:00"], desc:"Kal-El, the last son of Krypton, must become the hero known as Superman.",             emoji:"🦸", img:"superman.webp"  },
  { id:2, title:"Justice League",           genre:"Superhero / Action",     rating:"PG-13", duration:120, price:11.00, showtimes:["11:00","14:00","17:30","20:30"],          desc:"Bruce Wayne enlists a team of metahumans to protect the world from catastrophe.",    emoji:"⚡", img:"justice.webp"   },
  { id:3, title:"Black Adam",               genre:"Action / Adventure",     rating:"12A",   duration:125, price:11.50, showtimes:["12:00","15:00","18:00","21:15"],          desc:"Freed after 5000 years, Black Adam unleashes his unique form of justice.",           emoji:"⚡", img:"blackadam.webp" },
  { id:4, title:"The Dark Knight Rises",    genre:"Action / Crime / Drama", rating:"12A",   duration:165, price:12.00, showtimes:["10:00","13:30","17:00","20:30"],          desc:"Eight years on, Batman resurfaces to protect Gotham from a deadly masked terrorist.",emoji:"🦇", img:"batman.webp"    },
  { id:5, title:"Sonic: Shadow Unleashed",  genre:"Animation / Action",     rating:"PG",    duration:110, price:10.00, showtimes:["11:30","14:30","17:15","20:00"],          desc:"Shadow the Hedgehog emerges from the darkness, pushing Sonic to his absolute limit.",emoji:"🔴", img:"shadow.webp"    },
  { id:6, title:"Overlord: Sacred Kingdom", genre:"Anime / Fantasy",        rating:"15",    duration:100, price:11.00, showtimes:["13:00","16:15","19:45","22:00"],          desc:"Ainz Ooal Gown wages war against the Sacred Kingdom in a battle for supremacy.",    emoji:"⚔️", img:"overlord.webp"  },
  { id:7, title:"Dragon Ball Super: Broly", genre:"Anime / Action",         rating:"PG",    duration:100, price:10.50, showtimes:["10:30","13:00","15:30","18:00","20:30"],  desc:"Goku and Vegeta encounter Broly, a Saiyan warrior whose power grows with his rage.",emoji:"🐉", img:"broly.webp"     },
  { id:8, title:"The Matrix Resurrections", genre:"Sci-Fi / Action",        rating:"15",    duration:148, price:12.00, showtimes:["11:00","14:30","18:00","21:30"],          desc:"Return to the world of two realities. Neo must once again choose what is real.",    emoji:"💊", img:"matrix.webp"    },
];

const MEMBERS = [
  { username:"john.smith", password:"pass123", name:"John Smith", type:"regular"  },
  { username:"mary.jones", password:"pass123", name:"Mary Jones", type:"senior"   },
  { username:"tom.kids",   password:"pass123", name:"Tom Kids",   type:"children" },
  { username:"alice.wang", password:"pass123", name:"Alice Wang", type:"regular"  },
];

const EMPLOYEES = [
  { username:"admin",  password:"admin123", name:"Admin User",  role:"Manager" },
  { username:"staff1", password:"staff123", name:"Cinema Staff", role:"Staff"  },
];

const DISC = { guest:0, regular:.10, senior:.20, children:.30 };
const fmt  = n => "£" + n.toFixed(2);

// ── Session helpers (sessionStorage) ──
function getSession()   { try { return JSON.parse(sessionStorage.getItem("memberSession")); } catch(e){ return null; } }
function setSession(v)  { sessionStorage.setItem("memberSession", JSON.stringify(v)); }
function clearSession() { sessionStorage.removeItem("memberSession"); }

function getBooking()   { try { return JSON.parse(sessionStorage.getItem("bookingData")); } catch(e){ return null; } }
function setBooking(v)  { sessionStorage.setItem("bookingData", JSON.stringify(v)); }

// ── Shared navbar state ──
function updateNavbar() {
  const ms  = getSession();
  const nav = document.getElementById('nav-login');
  const nu  = document.getElementById('nav-user');
  const lo  = document.getElementById('nav-logout');
  if (!nav) return;
  if (ms) {
    nav.classList.add('hidden');
    if (nu) { nu.textContent = ms.name; nu.classList.remove('hidden'); }
    if (lo) lo.classList.remove('hidden');
  } else {
    nav.classList.remove('hidden');
    if (nu) nu.classList.add('hidden');
    if (lo) lo.classList.add('hidden');
  }
}

function doLogout() {
  clearSession();
  window.location.href = "index.html";
}
