import { renderTemplate } from '../../utils/renderTemplate';
import messagesTemplate from './messages.hbs?raw';
import './messages.css';

export const renderMessages = (): HTMLElement => {
  const element = renderTemplate(messagesTemplate, 'body');
  setupMessageHandlers();
  return element;
}

const setupMessageHandlers = (): HTMLElement => {
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const sendButton = document.getElementById('send-button') as HTMLButtonElement;

  messageInput.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  sendButton.addEventListener('click', () => {
    sendMessage();
  });
  
  return sendButton;
}

const sendMessage = (): string => {
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const message = messageInput.value.trim();
  
  if (message) {
    messageInput.value = '';
  }
  
  return message;
}
