import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const Services = () => {
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
      features: ['50-минутные сессии', 'Индивидуальный подход', 'Глубокий самоанализ']
    },
    {
      title: 'Парная терапия',
      description: 'Помощь в решении конфликтов и улучшении взаимоотношений в паре.',
      features: ['80-минутные сессии', 'Работа с динамикой пары', 'Улучшение коммуникации']
    },
    {
      title: 'Онлайн-консультации',
      description: 'Удобные сессии из любой точки мира через безопасные видеоплатформы.',
      features: ['Гибкий график', 'Комфортная обстановка', 'Техническая поддержка']
    }
  ];

  return (
    <section id="services" className="section section-secondary">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 data-aos="fade-up">Услуги</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              Профессиональная психологическая помощь в разных форматах
            </p>
          </Col>
        </Row>
        <Row>
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
                  <ul className="list-unstyled mb-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <small>✓ {feature}</small>
                      </li>
                    ))}
                  </ul>
                  <Button as={Link} to="/contact" className="btn-primary mt-auto">
                    Узнать подробнее
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;