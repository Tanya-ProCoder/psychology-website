import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { cookieConsent } from '../utils/cookies';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = cookieConsent.getConsent();
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    cookieConsent.setConsent('accepted');
    setShow(false);
  };

  const handleDecline = () => {
    cookieConsent.setConsent('declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <Modal show={show} backdrop="static" keyboard={false} centered>
      <Modal.Header className="border-0">
        <Modal.Title>🍪 Использование cookies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Мы используем файлы cookie для улучшения работы сайта, анализа трафика 
          и персонализации контента. Продолжая использовать наш сайт, вы соглашаетесь 
          с использованием cookies в соответствии с нашей{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Политикой конфиденциальности
          </a>.
        </p>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="outline-secondary" onClick={handleDecline}>
          Отклонить
        </Button>
        <Button className="btn-primary" onClick={handleAccept}>
          Принять
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookieConsent;