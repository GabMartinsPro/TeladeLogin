  // Obtém o formulário pelo ID
        const loginForm = document.getElementById('loginForm');
        // Obtém os inputs de email e senha pelos IDs
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        // Opcional: Obtém o elemento para exibir a mensagem de erro
        const errorMessage = document.getElementById('errorMessage');

        // Adiciona um "ouvinte de evento" para quando o formulário for enviado
        loginForm.addEventListener('submit', function(event) {
            // Impede o envio padrão do formulário (que recarregaria a página)
            event.preventDefault(); 

            // Pega os valores digitados nos campos
            const email = emailInput.value;
            const password = passwordInput.value;

            // --- Lógica de Validação (Exemplo Simples para Demonstração) ---
            // IMPORTANTE: Em um sistema real, essa validação seria feita no servidor por segurança.
            if (email === 'seuemail@exemplo.com' && password === 'suasenha123') {
                // Se as credenciais estiverem "corretas", redireciona para a nova página
                window.location.href = 'c:\Users\Administrator\Documents\GitHub\Projeto estudos\index.html'; // Mude para o nome da sua página de destino
            } else {
                // Se as credenciais estiverem "incorretas", exibe uma mensagem de erro
                if (errorMessage) { // Verifica se o elemento errorMessage existe
                    errorMessage.style.display = 'block'; // Mostra a mensagem de erro
                }
            }
        });