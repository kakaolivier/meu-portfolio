const projetos = [
    {
        id: 1,
        titulo: "Diapp - Cálculo de Ganhos",
        categoria: "Desenvolvimento Web",
        descricao: "Sistema para motoristas de app gerenciarem faturamento.",
        tecnologias: ["JS", "CSS", "Local Storage", "PWA"],
        link: "https://github.com/kakaolivier/diapp"
    },
    {
        id: 2,
        titulo: "Análise de Dados SIG",
        categoria: "GIS / Cartografia",
        descricao: "Processamento de dados geoespaciais e cartografia.",
        tecnologias: ["QGIS", "GeoNode", "Python", "SpatialSQL"],
        link: "https://github.com/kakaolivier"
    },
];

function renderizarProjetos() {
    const container = document.querySelector('#lista-projetos');
    
    if(!container) return;

    container.innerHTML = projetos.map(p => `
        <article class="card">
            <span style="color: var(--primary); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                ${p.categoria}
            </span>
            <h3>${p.titulo}</h3>
            <p>${p.descricao}</p>
            
            <div class="tags-container" style="display: flex; flex-wrap: wrap;">
                ${p.tecnologias.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            
            <a href="${p.link}" target="_blank" class="btn-projeto">Ver Repositório →</a>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);