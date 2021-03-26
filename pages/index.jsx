import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Menu from '../components/Menu'
import Features from '../components/Features'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Menu />
    <Container className="l-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <Container className="p-4">
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Notícias</Card.Title>
                <Card.Text>
                  Find in-depth information about Next.js features and API.
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/docs">
                  Mais &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Esportes</Card.Title>
                <Card.Text>
                  Find in-depth information about Next.js features and API.
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/docs">
                  Mais &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Atualidades</Card.Title>
                <Card.Text>
                  Learn about Next.js in an interactive course with quizzes!
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/learn">
                  Mais &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Tecnologia</Card.Title>
                <Card.Text>
                  Discover and deploy boilerplate example Next.js projects.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/vercel/next.js/tree/master/examples"
                >
                  Mais &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Variedades</Card.Title>
                <Card.Text>
                  Discover and deploy boilerplate example Next.js projects.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/vercel/next.js/tree/master/examples"
                >
                  Mais &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Games</Card.Title>
                <Card.Text>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                >
                  Mais &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>

            

            

        </Container>
      </Container>

      <Cards />
      <Features />

    </Container>
    <Footer />
    </div>
  )
}
