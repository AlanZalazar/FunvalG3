import { renderNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { renderAbout } from "./components/about.js";
import { renderSkills } from "./components/skills.js";
import { renderProyectos } from "./components/proyectos.js";
import { renderContact } from "./components/contact.js";
import { renderFooter } from "./components/footer.js";

const root = document.getElementById("root");

root.append(
  renderNavbar(),
  renderHero(),
  renderAbout(),
  renderSkills(),
  renderProyectos(),
  renderContact(),
  renderFooter()
);
