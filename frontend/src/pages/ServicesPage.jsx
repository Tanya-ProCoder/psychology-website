import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: 'Индивидуальная терапия',
      description: 'Работа один на один, направленная на решение ваших уникальных запросов и проблем.',
      duration: '50 минут',
      price: 'от 3 000 руб.',
      details: 'Индивидуальные сессии позволяют глубоко погрузиться в вашу личную историю, исследовать внутренние конфликты и найти пути их разрешения.'
    },
    {
      title: 'Парная терапия',
      description: 'Помощь в решении конфликтов и улучшении взаимоотношений в паре.',
      duration: '80 минут',
      price: 'от 5 000 руб.',
      details: 'Совместная работа над улучшением коммуникации, разрешением конфликтов и укреплением эмоциональной связи в отношениях.'
    },
    {
      title: 'Онлайн-консультации',
      description: 'Удобные сессии из любой точки мира через безопасные видеоплатформы.',
      duration: '50 минут',
      price: 'от 2 500 руб.',
      details: 'Полноценные психологические консультации через Zoom или другие платформы. Такой же эффективный формат работы с полной конфиденциальностью.'
    }
  ];

  const faq = [
    {
      question: 'Как проходит первая консультация?',
      answer: 'Первая встреча является ознакомительной. Мы знакомимся, обсуждаем ваш запрос, определяем цели работы и договариваемся о дальнейшем сотрудничестве.'
    },
    {
      question: 'Сколько сессий обычно требуется?',
      answer: 'Количество сессий зависит от сложности запроса и индивидуальных особенностей. Обычно минимальный курс составляет 8-12 встреч с периодичностью 1 раз в неделю.'
    },
    {
      question: 'Можно ли отменить или перенести сессию?',
      answer: 'Да, вы можете отменить или перенести сессию, предупредив об этом не менее чем за 24 часа. В противном случае сессия оплачивается в полном объеме.'
    },
    {
      question: 'Гарантирован ли результат?',
      answer: 'Психологическая работа - это совместный процесс. Я гарантирую профессиональный подход и создание безопасных условий, но результат во многом зависит от вашей вовлеченности и готовности к изменениям.'
    }
  ];

  return (
    <Container className="py-5 mt-5">
      <Row>
        <Col lg={10} className="mx-auto">
          <div data-aos="fade-up">
            <h1 className="text-center mb-5">Услуги</h1>
            <p className="lead text-center mb-5">
              Профессиональная психологическая помощь в комфортном для вас формате
            </p>
          </div>

          <Row className="mb-5">
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card 
                  className="h-100 text-center" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 200}
                >
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <div 
                        className="rounded-circle bg-accent d-inline-flex align-items-center justify-content-center"
                        style={{ width: '80px', height: '80px' }}
                      >
                        <span style={{ color: '#5a4d41', fontSize: '1.5rem' }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <Card.Title className="mt-3">{service.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{service.description}</Card.Text>
                    <div className="mb-3">
                      <strong>Продолжительность:</strong> {service.duration}<br/>
                      <strong>Стоимость:</strong> {service.price}
                    </div>
                    <Button as={Link} to="/contact" className="btn-primary mt-auto">
                      Записаться
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div data-aos="fade-up" className="mb-5">
            <h3 className="text-center mb-4">Часто задаваемые вопросы</h3>
            <Accordion>
              {faq.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div data-aos="fade-up" className="text-center mt-5">
            <h4 className="mb-3">Готовы начать работу?</h4>
            <p className="mb-4">
              Свяжитесь со мной для записи на первую консультацию
            </p>
            <Button as={Link} to="/contact" size="lg" className="btn-primary">
              Записаться на консультацию
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;