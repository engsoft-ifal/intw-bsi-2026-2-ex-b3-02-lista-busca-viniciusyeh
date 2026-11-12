
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function nomeDe(curso) {
  return typeof curso === "string" ? curso : curso.nome;
}

function render(termo = "") {
  const texto = termo.trim().toLowerCase();

  const filtrados = cursos.filter((c) =>
    nomeDe(c).toLowerCase().includes(texto)
  );

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
    return;
  }

  lista.innerHTML = filtrados.map((c) => `<li>${nomeDe(c)}</li>`).join("");
}

render();

busca.addEventListener("input", () => render(busca.value));
