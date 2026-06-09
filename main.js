// Inicializa os ícones do Lucide
lucide.createIcons();

let cartCount = 0;

// Função para mostrar notificações (Toasts)
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");

  const bgColor = type === "success" ? "bg-brand-green" : "bg-brand-blue";
  const icon = type === "success" ? "check-circle" : "shopping-bag";

  toast.className = `toast-enter flex items-center gap-3 ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm`;
  toast.innerHTML = `
                <i data-lucide="${icon}" class="w-5 h-5"></i>
                <p class="font-medium text-sm">${message}</p>
            `;

  container.appendChild(toast);
  lucide.createIcons(); // renderiza o ícone recém inserido

  // Remove o toast após 3.5 segundos
  setTimeout(() => {
    toast.classList.replace("toast-enter", "toast-leave");
    setTimeout(() => {
      toast.remove();
    }, 300); // Tempo da animação de saída
  }, 3500);
}

// Função para simular adição ao carrinho
function addToCart(productName) {
  cartCount++;
  const badge = document.getElementById("cart-badge");
  badge.innerText = cartCount;
  badge.classList.remove("hidden");

  showToast(`${productName} adicionado ao carrinho!`, "success");
}

// Função para abrir/fechar o modal de checkout
function toggleCart() {
  const modal = document.getElementById("checkout-modal");
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}

// Função para simular a finalização da compra
function processCheckout() {
  toggleCart(); // Fecha o modal
  showToast("Compra processada com sucesso! Obrigado.", "success");

  // Reseta o carrinho
  cartCount = 0;
  const badge = document.getElementById("cart-badge");
  badge.classList.add("hidden");
  document.getElementById("checkout-form").reset();
}
