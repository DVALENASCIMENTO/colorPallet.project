// Dados de paletas em JSON
const palettes = {
    "Moderno e Limpo": [
        {
            nome: "Neutro Puro",
            Primária: "#ffffff",
            Secundária: "#000000",
            Complementar: "#f0f0f0",
            Acento: "#007bff"
        },
        {
            nome: "Contraste Alto",
            Primária: "#ffffff",
            Secundária: "#000000",
            Complementar: "#d9d9d9",
            Acento: "#0033cc"
        },
        {
            nome: "Elegante Minimalista",
            Primária: "#f8f9fa",
            Secundária: "#212121",
            Complementar: "#e9ecef",
            Acento: "#0044cc"
        },
        {
            nome: "Sofisticado e Suave",
            Primária: "#f4f4f4",
            Secundária: "#333333",
            Complementar: "#e0e0e0",
            Acento: "#0099ff"
        },
        {
            nome: "Moderno com Toque de Cor",
            Primária: "#ffffff",
            Secundária: "#1c1c1c",
            Complementar: "#f5f5f5",
            Acento: "#66b3ff"
        }
    ],
    "Calmo e Relaxante": [
        {
            nome: "Sereno Azul",
            Primária: "#a3d9ff",
            Secundária: "#e0f7fa",
            Complementar: "#f1f8e9",
            Acento: "#4caf50"
        },
        {
            nome: "Verde Menta",
            Primária: "#b2dfdb",
            Secundária: "#b3e5fc",
            Complementar: "#fffde7",
            Acento: "#81c784"
        },
        {
            nome: "Nuvem Neutra",
            Primária: "#cce7ff",
            Secundária: "#d0f0c0",
            Complementar: "#f5f5f5",
            Acento: "#87ceeb"
        },
        {
            nome: "Paz e Tranquilidade",
            Primária: "#b3e5fc",
            Secundária: "#c8e6c9",
            Complementar: "#f9fbe7",
            Acento: "#a5d6a7"
        },
        {
            nome: "Tranquilidade Oceânica",
            Primária: "#a1c4fd",
            Secundária: "#b2ebf2",
            Complementar: "#f5f5dc",
            Acento: "#009688"
        }
    ],
    "Quente e Energético": [
        {
            nome: "Explosão de Cores",
            Primária: "#ff5722",
            Secundária: "#ffc107",
            Complementar: "#ffebee",
            Acento: "#d32f2f"
        },
        {
            nome: "Fogo e Calor",
            Primária: "#ff7043",
            Secundária: "#ffeb3b",
            Complementar: "#f8bbd0",
            Acento: "#c62828"
        },
        {
            nome: "Vibrante e Radiante",
            Primária: "#ff9800",
            Secundária: "#ffeb3b",
            Complementar: "#ffccbc",
            Acento: "#c62828"
        },
        {
            nome: "Energia Solar",
            Primária: "#ff5722",
            Secundária: "#fdd835",
            Complementar: "#fff8e1",
            Acento: "#e64a19"
        },
        {
            nome: "Vibrante e Quente",
            Primária: "#ff5722",
            Secundária: "#fbc02d",
            Complementar: "#f8bbd0",
            Acento: "#e64a19"
        }
    ],
    "Elegante e Sofisticado": [
        {
            nome: "Clássico e Refinado",
            Primária: "#2c3e50",
            Secundária: "#ecf0f1",
            Complementar: "#bdc3c7",
            Acento: "#e74c3c"
        },
        {
            nome: "Elegância Neutra",
            Primária: "#212121",
            Secundária: "#f5f5f5",
            Complementar: "#9e9e9e",
            Acento: "#d4af37"
        },
        {
            nome: "Luxo e Glamour",
            Primária: "#003366",
            Secundária: "#c0c0c0",
            Complementar: "#f5f5dc",
            Acento: "#cda74b"
        },
        {
            nome: "Sofisticação Contemporânea",
            Primária: "#343a40",
            Secundária: "#f8f9fa",
            Complementar: "#6c757d",
            Acento: "#003f5c"
        },
        {
            nome: "Estilo Moderno e Elegante",
            Primária: "#004080",
            Secundária: "#dcdcdc",
            Complementar: "#e0e0e0",
            Acento: "#b0b0b0"
        }
    ],
    "Criativo e Vibrante": [
        {
            nome: "Arco-Íris Energético",
            Primária: "#9b59b6",
            Secundária: "#f39c12",
            Complementar: "#1abc9c",
            Acento: "#e67e22"
        },
        {
            nome: "Vibrante e Dinâmico",
            Primária: "#8e24aa",
            Secundária: "#fdd835",
            Complementar: "#00bcd4",
            Acento: "#ff5722"
        },
        {
            nome: "Criatividade Radiante",
            Primária: "#9c27b0",
            Secundária: "#ffeb3b",
            Complementar: "#03a9f4",
            Acento: "#ff9800"
        },
        {
            nome: "Inspiração Vibrante",
            Primária: "#e91e63",
            Secundária: "#ffeb3b",
            Complementar: "#2196f3",
            Acento: "#ff5722"
        },
        {
            nome: "Energia Criativa",
            Primária: "#ab47bc",
            Secundária: "#fdd835",
            Complementar: "#4caf50",
            Acento: "#ff9800"
        }
    ]
};

// Função para mostrar as paletas de uma categoria
function showPalettes(category) {
    const paletteContainer = document.getElementById('palette-options');
    paletteContainer.innerHTML = ''; // Limpa as paletas anteriores

    palettes[category].forEach(palette => {
        const paletteDiv = document.createElement('div');
        paletteDiv.classList.add('palette');

        const paletteName = document.createElement('h3');
        paletteName.textContent = palette.nome;
        paletteDiv.appendChild(paletteName);

        Object.keys(palette).forEach(key => {
            if (key !== 'nome') {
                const colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = palette[key];
                colorDiv.classList.add('color-block');
                const colorLabel = document.createElement('p');
                colorLabel.textContent = `${key}: ${palette[key]}`;
                colorDiv.appendChild(colorLabel);
                paletteDiv.appendChild(colorDiv);
            }
        });

        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'Copiar Paleta';
        copyButton.onclick = () => copyPalette(palette);
        paletteDiv.appendChild(copyButton);

        paletteContainer.appendChild(paletteDiv);
    });
}

// Função para copiar as cores da paleta para a área de transferência
function copyPalette(palette) {
    const colorText = Object.keys(palette)
        .filter(key => key !== 'nome')
        .map(key => `${key}: ${palette[key]}`)
        .join(', ');

    navigator.clipboard.writeText(colorText).then(() => {
        alert('Paleta copiada: ' + colorText);
    });
}

// Exemplo de chamada para mostrar uma categoria específica de paletas
document.getElementById('category-select').addEventListener('change', (event) => {
    showPalettes(event.target.value);
});
