//Header.jsx

const cambiarC = (e) => {
  e.preventDefault();
  const pagina = document.querySelector("#root");
  const h1=document.querySelector("h1");
  const footer=document.querySelector("footer");
  pagina.classList.contains("dark")
    ? (pagina.classList.add("light"), pagina.classList.remove("dark"))
    : (pagina.classList.add("dark"), pagina.classList.remove("light"));
    h1.classList.contains("dark")
    ? (h1.classList.add("light"), h1.classList.remove("dark"))
    : (h1.classList.add("dark"), h1.classList.remove("light"));
    footer.classList.contains("dark")
    ? (footer.classList.add("light"), footer.classList.remove("dark"))
    : (footer.classList.add("dark"), footer.classList.remove("light"));
};

export default function Header() {
 
  return (
    <header>
     <h1>Lista de tareas</h1>
      <button className="cambiaColor" onClick={cambiarC}>
        Click!
      </button>
    </header>
  );
}
