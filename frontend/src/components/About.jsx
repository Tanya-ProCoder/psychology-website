import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="section section-light">
      <Container>
        <Row>
          <Col lg={6} className="mb-5" data-aos="fade-right">
            <h2 className="mb-4">Обо мне</h2>
            <p className="lead">
              Я профессиональный психолог, сертифицированный гештальт-терапевт 
              с более чем 5-летним опытом работы.
            </p>
            <p>
              Моя практика основана на принципах гештальт-подхода, который помогает 
              осознать свои истинные потребности, завершить незавершенные ситуации 
              и научиться жить в гармонии с собой и окружающим миром.
            </p>
            <p>
              Я создаю безопасное и поддерживающее пространство, где вы сможете 
              исследовать свои чувства, мысли и поведенческие паттерны без осуждения и критики.
            </p>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <div className="display-4 text-accent mb-3">5+</div>
                    <Card.Title>Лет практики</Card.Title>
                    <Card.Text>Профессионального опыта в психологическом консультировании</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <div className="display-4 text-accent mb-3">500+</div>
                    <Card.Title>Клиентов</Card.Title>
                    <Card.Text>Помогла обрести гармонию и решить психологические проблемы</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <div className="display-4 text-accent mb-3">3</div>
                    <Card.Title>Образования</Card.Title>
                    <Card.Text>Высшее психологическое и дополнительное профессиональное</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <div className="display-4 text-accent mb-3">100%</div>
                    <Card.Title>Конфиденциальность</Card.Title>
                    <Card.Text>Полная анонимность и защита ваших персональных данных</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;