/**
 * Chatbot Flotante Colegio Anáhuac
 * Inyecta el componente en el DOM y maneja la lógica básica
 */
(function() {
    const chatbotHTML = `
        <div class="chatbot-container">
            <div class="chatbot-window" id="chatbotWindow">
                <div class="chatbot-header">
                    <div class="d-flex align-items-center">
                        <i class="ti ti-robot me-2"></i>
                        <h6 class="text-white mb-0">Anáhuac Bot (IA)</h6>
                    </div>
                    <i class="ti ti-x" style="cursor:pointer" onclick="document.getElementById('chatbotWindow').classList.remove('active')"></i>
                </div>
                <div class="chatbot-messages d-flex flex-column" id="chatbotMsgs">
                    <div class="chat-msg msg-bot">¡Hola! Soy tu asistente del Colegio Anáhuac. ¿En qué puedo ayudarte hoy?</div>
                </div>
                <div class="chatbot-input">
                    <input type="text" placeholder="Escribe tu mensaje..." id="chatInput">
                    <button class="btn btn-icon btn-link-primary p-0" id="sendChat"><i class="ti ti-send f-20"></i></button>
                </div>
            </div>
            <div class="chatbot-button" onclick="document.getElementById('chatbotWindow').classList.toggle('active')">
                <i class="ti ti-messages f-30"></i>
            </div>
        </div>
    `;

    // Insertar en el body al cargar
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Lógica de envío simulada
    setTimeout(() => {
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendChat');
        const msgs = document.getElementById('chatbotMsgs');

        if(sendBtn) {
            sendBtn.addEventListener('click', () => {
                const text = input.value.trim();
                if(text) {
                    // Mensaje usuario
                    const uMsg = document.createElement('div');
                    uMsg.className = 'chat-msg msg-user';
                    uMsg.innerText = text;
                    msgs.appendChild(uMsg);
                    input.value = '';
                    
                    // Respuesta bot simulada
                    setTimeout(() => {
                        const bMsg = document.createElement('div');
                        bMsg.className = 'chat-msg msg-bot';
                        bMsg.innerText = 'Entendido. Estoy consultando la base de conocimientos del Colegio...';
                        msgs.appendChild(bMsg);
                        msgs.scrollTop = msgs.scrollHeight;
                    }, 1000);
                }
            });
        }
    }, 500);
})();
