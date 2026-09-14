const STORAGE_KEY = "minha-lista-de-compras-v1";

const categories = [
    "Todos",
    "Alimentos básicos",
    "Carnes e proteínas",
    "Leites e derivados",
    "Padaria",
    "Frutas",
    "Verduras e legumes",
    "Bebidas",
    "Produtos de limpeza",
    "Higiene pessoal",
    "Cuidados domésticos",
    "Congelados",
    "Doces e sobremesas",
    "Pet",
    "Bebê",
    "Outros"
];

const categoryLabels = {
    "Alimentos básicos": "Alimentos",
    "Carnes e proteínas": "Carnes",
    "Leites e derivados": "Laticínios",
    "Produtos de limpeza": "Limpeza",
    "Higiene pessoal": "Higiene",
    "Verduras e legumes": "Verduras",
    "Cuidados domésticos": "Casa",
    "Doces e sobremesas": "Doces"
};

const productsByCategory = {
    "Alimentos básicos": [
        "Arroz",
        "Arroz tipo 1",
        "Feijão carioca",
        "Feijão preto",
        "Açúcar",
        "Açúcar cristal",
        "Açúcar mascavo",
        "Sal",
        "Café",
        "Café solúvel",
        "Café Pilão 500 g",
        "Café Pilão extraforte 500 g",
        "Café 3 Corações 500 g",
        "Café Melitta 500 g",
        "Farinha de trigo",
        "Farinha integral",
        "Farinha de mandioca",
        "Farinha de milho",
        "Farinha de aveia",
        "Farinha de rosca",
        "Fubá",
        "Polvilho doce",
        "Polvilho azedo",
        "Tapioca",
        "Aveia em flocos",
        "Granola",
        "Macarrão",
        "Macarrão para lasanha",
        "Óleo",
        "Azeite",
        "Vinagre",
        "Molho de tomate",
        "Extrato de tomate",
        "Molho shoyu",
        "Molho de pimenta",
        "Milho",
        "Ervilha",
        "Azeitona",
        "Lentilha",
        "Grão de bico",
        "Fermento químico",
        "Fermento biológico seco",
        "Fermento biológico fresco",
        "Bicarbonato",
        "Canela",
        "Cravo",
        "Pimenta-do-reino",
        "Tempero completo",
        "Caldo de carne",
        "Caldo de galinha",
        "Maionese",
        "Ketchup",
        "Mostarda",
        "Geleia",
        "Melaço",
        "Nata",
        "Amido de milho",
        "Xarope",
        "Leite de soja",
        "Leite de amêndoas",
        "Leite de coco",
        "Adoçante",
        "Mel",
        "Geleia de mocotó",
        "Papel manteiga"
    ],

    "Carnes e proteínas": [
        "Carne bovina",
        "Carne moída",
        "Frango inteiro",
        "Peito de frango",
        "Peixe",
        "Tilápia",
        "Linguiça",
        "Salsicha",
        "Presunto",
        "Mortadela",
        "Ovos",
        "Bacon",
        "Pernil",
        "Toucinho",
        "Patinho",
        "Costela",
        "Coração",
        "Tofu",
        "Sardinha",
        "Atum"
    ],

    "Leites e derivados": [
        "Leite",
        "Leite integral",
        "Leite desnatado",
        "Leite sem lactose",
        "Leite em pó",
        "Queijo",
        "Queijo minas",
        "Queijo muçarela",
        "Requeijão",
        "Manteiga",
        "Margarina",
        "Iogurte",
        "Iogurte natural",
        "Iogurte de frutas",
        "Creme de leite",
        "Leite condensado",
        "Ricota",
        "Coalhada",
        "Yogurt",
        "Cream cheese"
    ],

    "Padaria": [
        "Pão francês",
        "Pão de forma",
        "Pão integral",
        "Biscoito",
        "Bolacha",
        "Torrada",
        "Bolo",
        "Croissant",
        "Cuca",
        "Sonho",
        "Rosca",
        "Pão para hambúrguer",
        "Pão de hot dog"
    ],

    "Frutas": [
        "Banana",
        "Maçã",
        "Laranja",
        "Mamão",
        "Melancia",
        "Melão",
        "Abacaxi",
        "Manga",
        "Uva",
        "Limão",
        "Morango",
        "Pera",
        "Kiwi",
        "Coco",
        "Acerola",
        "Goiaba",
        "Abacate",
        "Pêssego",
        "Maracujá",
        "Jabuticaba",
        "Caju"
    ],

    "Verduras e legumes": [
        "Alface",
        "Tomate",
        "Cebola",
        "Alho",
        "Batata",
        "Batata inglesa",
        "Cenoura",
        "Beterraba",
        "Abobrinha",
        "Pimentão",
        "Repolho",
        "Couve",
        "Cheiro-verde",
        "Pepino",
        "Brócolis",
        "Espinafre",
        "Chuchu",
        "Quiabo",
        "Mandioca",
        "Rúcula",
        "Agrião",
        "Pimentão vermelho",
        "Berinjela",
        "Salsinha",
        "Coentro"
    ],

    "Bebidas": [
        "Água",
        "Água mineral",
        "Refrigerante",
        "Refrigerante lata",
        "Suco",
        "Suco de laranja",
        "Água de coco",
        "Energético",
        "Achocolatado",
        "Chá",
        "Isotônico",
        "Cerveja",
        "Vinho",
        "Soda",
        "Tônica"
    ],

    "Produtos de limpeza": [
        "Detergente",
        "Detergente de louça",
        "Sabão em pó",
        "Sabão líquido",
        "Amaciante",
        "Água sanitária",
        "Desinfetante",
        "Álcool",
        "Limpador multiuso",
        "Esponja",
        "Palha de aço",
        "Saco de lixo",
        "Papel toalha",
        "Removedor",
        "Cloro",
        "Limpador de vidro",
        "Limpador de banheiro",
        "Alvejante",
        "Limpa pisos"
    ],

    "Higiene pessoal": [
        "Papel higiênico",
        "Sabonete",
        "Sabonete líquido",
        "Shampoo",
        "Condicionador",
        "Creme dental",
        "Escova de dentes",
        "Fio dental",
        "Desodorante",
        "Absorvente",
        "Aparelho de barbear",
        "Algodão",
        "Cotonete",
        "Pomada",
        "Sabonete íntimo",
        "Hidratante",
        "Pente",
        "Talco",
        "Óleo corporal",
        "Perfume"
    ],

    "Cuidados domésticos": [
        "Guardanapo",
        "Papel alumínio",
        "Filme plástico",
        "Fósforo",
        "Vela",
        "Pilhas",
        "Inseticida",
        "Esparadrapo",
        "Fita isolante",
        "Palitos",
        "Balde",
        "Escova de vaso",
        "Lâmpada",
        "Pano de chão",
        "Vassoura",
        "Saco para lixo",
        "Pano microfibra"
    ],

    "Congelados": [
        "Pizza",
        "Hambúrguer",
        "Nuggets",
        "Batata congelada",
        "Lasanha",
        "Pão de queijo",
        "Carne moída congelada",
        "Frango empanado",
        "Legumes congelados",
        "Sopa congelada",
        "Sorvete",
        "Polpa de fruta",
        "Açaí",
        "Pizza de calabresa"
    ],

    "Doces e sobremesas": [
        "Chocolate ao leite",
        "Chocolate branco",
        "Chocolate meio amargo",
        "Chocolate 50% cacau",
        "Chocolate 70% cacau",
        "Chocolate 75% cacau",
        "Chocolate 85% cacau",
        "Chocolate 100% cacau",
        "Chocolate em pó 50% cacau",
        "Chocolate em pó 100% cacau",
        "Cacau em pó",
        "Bombom",
        "Gelatina",
        "Doce de leite",
        "Goiabada",
        "Biscoito recheado",
        "Wafer",
        "Paçoca",
        "Granulado",
        "Leite em pó para confeitaria",
        "Cookie",
        "Pudim",
        "Bala",
        "Pirulito",
        "Marshmallow"
    ],

    "Pet": [
        "Ração seca para cães",
        "Ração seca para gatos",
        "Ração úmida para cães",
        "Ração úmida para gatos",
        "Sachê para cães",
        "Sachê para gatos",
        "Patê para cães",
        "Patê para gatos",
        "Petisco para cães",
        "Petisco para gatos",
        "Areia sanitária para gatos",
        "Tapete higiênico",
        "Coleira",
        "Brinquedo para cães",
        "Brinquedo para gatos",
        "Shampoo para cães",
        "Shampoo para gatos"
    ],

    "Bebê": [
        "Fralda",
        "Lenço umedecido",
        "Shampoo infantil",
        "Sabonete infantil",
        "Papinha",
        "Fórmula infantil",
        "Creme para assaduras",
        "Pomada para bebê",
        "Mamadeira",
        "Chupeta",
        "Fraldas descartáveis",
        "Lenços de bebê"
    ]
};

const icons = {
    "Alimentos básicos": "◌",
    "Carnes e proteínas": "◆",
    "Leites e derivados": "○",
    "Padaria": "◇",
    "Frutas": "✦",
    "Verduras e legumes": "✿",
    "Bebidas": "◒",
    "Produtos de limpeza": "✧",
    "Higiene pessoal": "✺",
    "Cuidados domésticos": "□",
    "Congelados": "❄",
    "Doces e sobremesas": "●",
    "Pet": "♡",
    "Bebê": "✚",
    "Outros": "＋"
};

const productVisuals = {
    "Arroz": "🍚",
    "Feijão": "🫘",
    "Café": "☕",
    "Café Pilão 500 g": "☕",
    "Café Pilão extraforte 500 g": "☕",
    "Café 3 Corações 500 g": "☕",
    "Café Melitta 500 g": "☕",
    "Leite": "🥛",
    "Leite em pó": "🥛",
    "Queijo": "🧀",
    "Queijo muçarela": "🧀",
    "Ovos": "🥚",
    "Carne bovina": "🥩",
    "Carne moída": "🥩",
    "Frango inteiro": "🍗",
    "Peito de frango": "🍗",
    "Peixe": "🐟",
    "Banana": "🍌",
    "Maçã": "🍎",
    "Laranja": "🍊",
    "Mamão": "🥭",
    "Melancia": "🍉",
    "Melão": "🍈",
    "Abacaxi": "🍍",
    "Manga": "🥭",
    "Uva": "🍇",
    "Limão": "🍋",
    "Tomate": "🍅",
    "Cebola": "🧅",
    "Alho": "🧄",
    "Batata": "🥔",
    "Cenoura": "🥕",
    "Alface": "🥬",
    "Couve": "🥬",
    "Água": "💧",
    "Refrigerante": "🥤",
    "Suco": "🧃",
    "Pizza": "🍕",
    "Hambúrguer": "🍔",
    "Chocolate ao leite": "🍫",
    "Chocolate branco": "🍫",
    "Chocolate meio amargo": "🍫",
    "Chocolate 50% cacau": "🍫",
    "Chocolate 70% cacau": "🍫",
    "Chocolate 75% cacau": "🍫",
    "Chocolate 85% cacau": "🍫",
    "Chocolate 100% cacau": "🍫",
    "Sorvete": "🍨",
    "Bolo": "🍰",
    "Detergente": "🧴",
    "Shampoo": "🧴",
    "Sabonete": "🧼",
    "Papel higiênico": "🧻",
    "Fralda": "🧷",
    "Ração seca para cães": "🐶",
    "Ração úmida para cães": "🐶",
    "Sachê para cães": "🐶",
    "Patê para cães": "🐶",
    "Ração seca para gatos": "🐱",
    "Ração úmida para gatos": "🐱",
    "Sachê para gatos": "🐱",
    "Patê para gatos": "🐱"
};

function slug(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
}

function defaultPrice(category, index) {
    const ranges = {
        "Alimentos básicos": [4, 26],
        "Carnes e proteínas": [8, 42],
        "Leites e derivados": [4, 18],
        "Padaria": [3, 14],
        "Frutas": [2, 10],
        "Verduras e legumes": [2, 12],
        "Bebidas": [3, 15],
        "Produtos de limpeza": [4, 22],
        "Higiene pessoal": [3, 24],
        "Cuidados domésticos": [3, 18],
        "Congelados": [8, 25],
        "Doces e sobremesas": [4, 18],
        "Pet": [7, 60],
        "Bebê": [8, 35]
    };

    const [min, max] = ranges[category] || [5, 20];

    return Math.round(
        (min + (index * 3.17) % (max - min)) * 100
    ) / 100;
}

const catalog = Object.entries(productsByCategory).flatMap(
    ([category, names]) =>
        names.map((name, index) => ({
            id: slug(name),
            name,
            category,
            price: defaultPrice(category, index)
        }))
);

let state = loadState();
let activeCategory = "Todos";

let calculator = {
    value: "0",
    previous: null,
    operator: null,
    waiting: false
};

let deferredInstallPrompt;

function formatBRL(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function loadState() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );

        if (!saved || !saved.cart) {
            return {
                cart: {},
                customProducts: []
            };
        }

        if (!Array.isArray(saved.customProducts)) {
            saved.customProducts = [];
        }

        Object.values(saved.cart).forEach(item => {
            item.quantity = Math.max(
                1,
                Math.round(Number(item.quantity) || 1)
            );
        });

        return saved;
    } catch {
        return {
            cart: {},
            customProducts: []
        };
    }
}

function saveState() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

    const saveStatus =
        document.getElementById("saveStatus");

    if (!saveStatus) {
        return;
    }

    saveStatus.textContent =
        "Salvo agora neste dispositivo";

    setTimeout(() => {
        saveStatus.textContent =
            "Salvo neste dispositivo";
    }, 1500);
}

function allProducts() {
    return [
        ...catalog,
        ...state.customProducts
    ];
}

function productById(id) {
    return allProducts().find(
        product => product.id === id
    );
}

function getCartTotal() {
    return Object.entries(state.cart).reduce(
        (total, [, item]) =>
            total + item.quantity * item.price,
        0
    );
}

function greeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Bom dia! Vamos às compras?";
    }

    if (hour >= 12 && hour < 18) {
        return "Boa tarde! Vamos às compras?";
    }

    return "Boa noite! Vamos às compras?";
}

function setupGreeting() {
    document.getElementById("greeting").textContent =
        greeting();

    document.getElementById("currentDate").textContent =
        new Intl.DateTimeFormat("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long"
        }).format(new Date());
}

function renderFilters() {
    document.getElementById("categoryFilters").innerHTML =
        categories.map(category => `
            <button
                class="filter-chip ${activeCategory === category
                ? "active"
                : ""
            }"
                data-category="${category}"
                type="button"
            >
                ${categoryLabels[category] || category}
            </button>
        `).join("");
}

function renderCatalog() {
    const search =
        document.getElementById("productSearch");

    const term = search.value
        .trim()
        .toLocaleLowerCase("pt-BR");

    let products = allProducts().filter(product => {
        const correctCategory =
            activeCategory === "Todos" ||
            product.category === activeCategory;

        const matchesSearch =
            product.name
                .toLocaleLowerCase("pt-BR")
                .includes(term);

        return correctCategory && matchesSearch;
    });

    const sort =
        document.getElementById("sortProducts").value;

    if (sort === "name") {
        products.sort((a, b) =>
            a.name.localeCompare(b.name, "pt-BR")
        );
    }

    if (sort === "category") {
        products.sort(
            (a, b) =>
                a.category.localeCompare(
                    b.category,
                    "pt-BR"
                ) ||
                a.name.localeCompare(
                    b.name,
                    "pt-BR"
                )
        );
    }

    if (sort === "priceAsc") {
        products.sort(
            (a, b) => a.price - b.price
        );
    }

    if (sort === "priceDesc") {
        products.sort(
            (a, b) => b.price - a.price
        );
    }

    document.getElementById("catalogCount").textContent =
        `${products.length} produto${products.length === 1 ? "" : "s"
        }`;

    document
        .getElementById("emptyCatalog")
        .classList.toggle(
            "hidden",
            products.length > 0
        );

    document.getElementById("productGrid").innerHTML =
        products.map(productCard).join("");
}

function productCard(product) {
    const item = state.cart[product.id];

    const visual = product.image
        ? `
            <img
                src="${product.image}"
                alt="Imagem de ${product.name}"
            >
        `
        : `
            <span>
                ${productVisuals[product.name] ||
        icons[product.category] ||
        icons.Outros
        }
            </span>
        `;

    return `
        <article class="product-card ${item ? "in-cart" : ""
        }">
            <div class="product-image">
                ${visual}
            </div>

            <h3 title="${product.name}">
                ${product.name}
            </h3>

            <span class="product-category">
                ${categoryLabels[product.category] ||
        product.category
        }
            </span>

            <div class="product-fields">
                <label>
                    Qtd.

                    <input
                        data-product-input="quantity"
                        data-id="${product.id}"
                        type="number"
                        min="1"
                        step="1"
                        value="${item?.quantity || 1}"
                        inputmode="numeric"
                        aria-label="Quantidade de ${product.name}"
                    >
                </label>

                <label>
                    R$

                    <input
                        data-product-input="price"
                        data-id="${product.id}"
                        type="number"
                        min="0"
                        step="0.01"
                        value="${item?.price ?? product.price}"
                        inputmode="decimal"
                        aria-label="Valor unitário de ${product.name}"
                    >
                </label>
            </div>

            <button
                class="add-button ${item ? "added" : ""
        }"
                data-add-product="${product.id}"
                type="button"
            >
                ${item
            ? "✓ Na lista"
            : "+ Adicionar"
        }
            </button>
        </article>
    `;
}

function addToCart(id, quantity, price) {
    const product = productById(id);

    if (!product) {
        return;
    }

    state.cart[id] = {
        quantity: Math.max(
            1,
            Math.round(Number(quantity) || 1)
        ),
        price: Math.max(
            0,
            Number(price) || 0
        ),
        done: state.cart[id]?.done || false
    };

    saveState();
    render();
}

function renderCart() {
    const entries = Object.entries(state.cart)
        .map(([id, item]) => ({
            product: productById(id),
            ...item,
            id
        }))
        .filter(entry => entry.product);

    document.getElementById("cartCount").textContent =
        entries.length;

    document
        .getElementById("emptyCart")
        .classList.toggle(
            "hidden",
            entries.length > 0
        );

    document.getElementById("cartList").innerHTML =
        entries.map(cartCard).join("");
}

function cartCard(entry) {
    const subtotal =
        entry.quantity * entry.price;

    return `
        <article class="cart-item ${entry.done ? "done" : ""
        }">
            <div class="cart-item-top">
                <div class="cart-item-title">
                    <input
                        type="checkbox"
                        data-cart-action="done"
                        data-id="${entry.id}"
                        ${entry.done ? "checked" : ""}
                        aria-label="Marcar ${entry.product.name} como pego"
                    >

                    <div>
                        <h3>
                            ${entry.product.name}
                        </h3>

                        <small>
                            ${categoryLabels[
        entry.product.category
        ] ||
        entry.product.category
        }
                        </small>
                    </div>
                </div>

                <button
                    class="delete-item"
                    data-cart-action="delete"
                    data-id="${entry.id}"
                    type="button"
                    aria-label="Excluir ${entry.product.name}"
                >
                    ×
                </button>
            </div>

            <div class="cart-item-controls">
                <label>
                    Qtd.

                    <input
                        class="cart-input"
                        data-cart-action="quantity"
                        data-id="${entry.id}"
                        type="number"
                        min="1"
                        step="1"
                        value="${entry.quantity}"
                        inputmode="numeric"
                    >
                </label>

                <label>
                    R$

                    <input
                        class="cart-input"
                        data-cart-action="price"
                        data-id="${entry.id}"
                        type="number"
                        min="0"
                        step="0.01"
                        value="${entry.price}"
                        inputmode="decimal"
                    >
                </label>

                <div class="cart-subtotal">
                    ${formatBRL(subtotal)}
                </div>
            </div>
        </article>
    `;
}

function updateSummary() {
    const entries =
        Object.values(state.cart);

    const totalItems =
        entries.reduce(
            (sum, item) =>
                sum + Number(item.quantity),
            0
        );

    const done =
        entries.filter(item => item.done).length;

    const total = getCartTotal();

    document.getElementById(
        "differentProducts"
    ).textContent = entries.length;

    document.getElementById(
        "totalItems"
    ).textContent = Number.isInteger(totalItems)
            ? totalItems
            : totalItems.toFixed(2).replace(".", ",");

    document.getElementById(
        "summaryTotal"
    ).textContent = formatBRL(total);

    document.getElementById(
        "cartTotal"
    ).textContent = formatBRL(total);

    const progress = entries.length
        ? Math.round(
            done / entries.length * 100
        )
        : 0;

    document.getElementById(
        "progressValue"
    ).textContent = `${progress}%`;

    document.getElementById(
        "progressRing"
    ).style.background =
        `conic-gradient(
            #b9e6ca ${entries.length
            ? done / entries.length * 360
            : 0
        }deg,
            rgba(255,255,255,.2) 0deg
        )`;
}

function render() {
    renderFilters();
    renderCatalog();
    renderCart();
    updateSummary();
}

function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(modal) {
    modal.close();
}

function setupCalculator() {
    document
        .getElementById("calculatorKeys")
        .addEventListener("click", event => {
            const button =
                event.target.closest("button");

            if (!button) {
                return;
            }

            const type = button.dataset.calc;
            const value = button.dataset.value;

            if (type === "number") {
                if (
                    calculator.waiting ||
                    calculator.value === "0"
                ) {
                    calculator.value =
                        value === "."
                            ? "0."
                            : value;
                } else if (
                    value !== "." ||
                    !calculator.value.includes(".")
                ) {
                    calculator.value += value;
                }

                calculator.waiting = false;
            }

            if (type === "clear") {
                calculator = {
                    value: "0",
                    previous: null,
                    operator: null,
                    waiting: false
                };
            }

            if (type === "backspace") {
                calculator.value =
                    calculator.value.length > 1
                        ? calculator.value.slice(0, -1)
                        : "0";
            }

            if (type === "operator") {
                calculator.previous =
                    Number(calculator.value);

                calculator.operator = value;
                calculator.waiting = true;
            }

            if (
                type === "equals" &&
                calculator.operator &&
                calculator.previous !== null
            ) {
                const current =
                    Number(calculator.value);

                let result = 0;

                if (calculator.operator === "+") {
                    result =
                        calculator.previous + current;
                }

                if (calculator.operator === "-") {
                    result =
                        calculator.previous - current;
                }

                if (calculator.operator === "*") {
                    result =
                        calculator.previous * current;
                }

                if (calculator.operator === "/") {
                    result = current === 0
                        ? 0
                        : calculator.previous / current;
                }

                calculator.value =
                    String(Number(result.toFixed(8)));

                calculator.previous = null;
                calculator.operator = null;
                calculator.waiting = true;
            }

            document.getElementById(
                "calculatorDisplay"
            ).textContent =
                calculator.value.replace(".", ",");
        });
}

document.addEventListener("click", event => {
    const categoryButton =
        event.target.closest("[data-category]");

    if (categoryButton) {
        activeCategory =
            categoryButton.dataset.category;

        render();
    }

    const addButton =
        event.target.closest(
            "[data-add-product]"
        );

    if (addButton) {
        const id =
            addButton.dataset.addProduct;

        const quantity =
            document.querySelector(
                `[data-product-input="quantity"][data-id="${id}"]`
            ).value;

        const price =
            document.querySelector(
                `[data-product-input="price"][data-id="${id}"]`
            ).value;

        addToCart(id, quantity, price);
    }

    const deleteButton =
        event.target.closest(
            '[data-cart-action="delete"]'
        );

    if (deleteButton) {
        delete state.cart[
            deleteButton.dataset.id
        ];

        saveState();
        render();
    }

    const nav =
        event.target.closest(
            ".nav-item[data-target]"
        );

    if (nav) {
        document
            .getElementById(nav.dataset.target)
            .scrollIntoView({
                behavior: "smooth"
            });

        document
            .querySelectorAll(".nav-item")
            .forEach(item =>
                item.classList.remove("active")
            );

        nav.classList.add("active");
    }

    const close =
        event.target.closest(
            "[data-close-modal]"
        );

    if (close) {
        closeModal(
            close.closest("dialog")
        );
    }
});

document.addEventListener("input", event => {
    const field = event.target;

    if (!field.dataset.cartAction) {
        return;
    }

    const item =
        state.cart[field.dataset.id];

    if (!item) {
        return;
    }

    if (
        field.dataset.cartAction === "quantity"
    ) {
        item.quantity = Math.max(
            1,
            Math.round(Number(field.value) || 1)
        );

        field.value = item.quantity;
    }

    if (
        field.dataset.cartAction === "price"
    ) {
        item.price = Math.max(
            0,
            Number(field.value) || 0
        );
    }

    const cartItem =
        field.closest(".cart-item");

    const subtotal =
        cartItem?.querySelector(
            ".cart-subtotal"
        );

    if (subtotal) {
        subtotal.textContent = formatBRL(
            item.quantity * item.price
        );
    }

    saveState();
    updateSummary();
});

document.addEventListener("change", event => {
    const field = event.target;

    if (!field.dataset.cartAction) {
        return;
    }

    const item =
        state.cart[field.dataset.id];

    if (!item) {
        return;
    }

    if (
        field.dataset.cartAction === "done"
    ) {
        item.done = field.checked;
    }

    saveState();
    render();
});

document
    .getElementById("productSearch")
    .addEventListener(
        "input",
        renderCatalog
    );

document
    .getElementById("sortProducts")
    .addEventListener(
        "change",
        renderCatalog
    );

document
    .getElementById("customProductButton")
    .addEventListener(
        "click",
        () => openModal("customProductModal")
    );

document
    .getElementById("headerCalculator")
    .addEventListener(
        "click",
        () => openModal("calculatorModal")
    );

document
    .getElementById("bottomCalculator")
    .addEventListener(
        "click",
        () => openModal("calculatorModal")
    );

document
    .getElementById("clearListButton")
    .addEventListener("click", () => {
        if (
            Object.keys(state.cart).length &&
            confirm(
                "Tem certeza que deseja apagar toda a lista?"
            )
        ) {
            state.cart = {};
            saveState();
            render();
        }
    });

function compressPhoto(file) {
    return new Promise(resolve => {
        if (!file) {
            resolve("");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const image = new Image();

            image.onload = () => {
                const canvas =
                    document.createElement("canvas");

                const scale = Math.min(
                    1,
                    720 / Math.max(
                        image.width,
                        image.height
                    )
                );

                canvas.width =
                    Math.round(
                        image.width * scale
                    );

                canvas.height =
                    Math.round(
                        image.height * scale
                    );

                canvas
                    .getContext("2d")
                    .drawImage(
                        image,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );

                resolve(
                    canvas.toDataURL(
                        "image/jpeg",
                        0.78
                    )
                );
            };

            image.src = reader.result;
        };

        reader.readAsDataURL(file);
    });
}

function updatePhotoPreview(
    input,
    previewId
) {
    const file = input.files[0];

    const preview =
        document.getElementById(previewId);

    if (!file) {
        preview.removeAttribute("src");
        return;
    }

    preview.src =
        URL.createObjectURL(file);

    document
        .getElementById("photoPreviews")
        .classList.remove("hidden");
}

document
    .getElementById("productPhoto")
    .addEventListener("change", event => {
        updatePhotoPreview(
            event.target,
            "productPhotoPreview"
        );
    });

document
    .getElementById("pricePhoto")
    .addEventListener("change", event => {
        updatePhotoPreview(
            event.target,
            "pricePhotoPreview"
        );
    });

document
    .getElementById("customProductForm")
    .addEventListener(
        "submit",
        async event => {
            event.preventDefault();

            const form =
                new FormData(event.target);

            const productImage =
                await compressPhoto(
                    form.get("productPhoto")
                );

            const priceImage =
                await compressPhoto(
                    form.get("pricePhoto")
                );

            const product = {
                id: `custom-${Date.now()}`,
                name: form.get("name").trim(),
                category: form.get("category"),
                price:
                    Number(form.get("price")) || 0,
                image: productImage,
                priceImage,
                custom: true
            };

            state.customProducts.push(product);

            state.cart[product.id] = {
                quantity: Math.max(
                    1,
                    Math.round(
                        Number(
                            form.get("quantity")
                        ) || 1
                    )
                ),
                price: product.price,
                done: false
            };

            saveState();
            event.target.reset();

            document
                .getElementById("photoPreviews")
                .classList.add("hidden");

            closeModal(
                document.getElementById(
                    "customProductModal"
                )
            );

            render();
        }
    );

window.addEventListener("keydown", event => {
    if (
        event.key === "/" &&
        document.activeElement.tagName !== "INPUT"
    ) {
        event.preventDefault();

        document
            .getElementById("productSearch")
            .focus();
    }
});

document.getElementById(
    "customCategory"
).innerHTML = categories
    .slice(1)
    .map(category => `
        <option value="${category}">
            ${categoryLabels[category] || category}
        </option>
    `)
    .join("");

window.addEventListener(
    "beforeinstallprompt",
    event => {
        event.preventDefault();
        deferredInstallPrompt = event;

        document
            .getElementById("installButton")
            .classList.remove("hidden");
    }
);

document
    .getElementById("installButton")
    .addEventListener(
        "click",
        async () => {
            if (!deferredInstallPrompt) {
                return;
            }

            deferredInstallPrompt.prompt();

            await deferredInstallPrompt.userChoice;

            deferredInstallPrompt = null;

            document
                .getElementById("installButton")
                .classList.add("hidden");
        }
    );

window.addEventListener(
    "appinstalled",
    () => {
        document
            .getElementById("installButton")
            .classList.add("hidden");
    }
);

setupGreeting();
setupCalculator();
render();

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js?v=13")
            .then(registration => {
                registration.update();
            })
            .catch(error => {
                console.error(
                    "Erro ao registrar o service worker:",
                    error
                );
            });
    });
}