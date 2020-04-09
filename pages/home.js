//Components
import Layout from '../components/layout'
import Header from '../components/header'
//Styles
import style from '../components/scss/home.module.scss'
//Libraries
import {
    Card, CardHeader, CardText, CardBody,
    CardTitle, Button, Row, Container, Col
} from 'reactstrap';

const navInfo = {
    navitems: [
        { link: "/signup", label: "Signup", key: 1 },
        { link: "/login", label: "Login", key: 2 },
    ],
    navlogo: "/imgs/Logo.svg"
}

const Home = () => (
    <Layout title="Bordar">
        <div className="d-flex align-items-end flex-column" style={{height: "100vh"}}>
            <Header navitems={navInfo.navitems} navlogo={navInfo.navlogo}/>
            <Container fluid={true} id={style.mission}>
                <Row className="justify-content-center">
                    <Col md="6" id={style.floatingDivs}>
                        <Row id={style.floatContainer} className="justify-content-center">
                            <Card className={`${style.card} ${style.xPosition} ${style.cardTertiary}`} data-floatingcard>
                                <CardHeader className={style.cardHeader}>"#中文"</CardHeader>
                                <CardBody className={`${style.cardBody} justify-content-center`}>
                                    <CardTitle className={style.cardTitle}>如果你可以度我些什么，你怎么知道中文?</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className={`${style.card} ${style.xPosition} ${style.cardPrimary}`} data-floatingcard>
                                <CardHeader className={style.cardHeader}>#InternationalRelations</CardHeader>
                                <CardBody className={`${style.cardBody} justify-content-center`}>
                                    <CardTitle className={style.cardTitle}>What marked the end of the US's unilateral policy?</CardTitle>
                                </CardBody>
                            </Card>
                            <Card className={`${style.card} ${style.xPosition} ${style.cardQuinary}`} data-floatingcard>
                                <CardHeader className={style.cardHeader}>#Externalities</CardHeader>
                                <CardBody className={`${style.cardBody} justify-content-center`}>
                                    <CardTitle className={style.cardTitle}>Is there no way to account for externalities within a supply-demand model?</CardTitle>
                                </CardBody>
                            </Card>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row>
                            <Col md="12">
                                <h2 id={style.future} className={style.h2}>Education, meet <span className={style.gradient}>Future.</span></h2>
                                <p className={`text-dark ${style.p}`}>By combining the power of inquiry with data analytics, we're building an educational system that's responsive to student needs. <br /><span className={style.gradient}>Beta Testing Fall 2020.</span></p>
                                <p id={style.question} className={style.p}>
                                    We love questions. <a href="mailto:sanoziec@gmail.com?cc=jtaylor2@imsa.edu&subject=Hi! I'd like to know about SchoolBoard.&body=Hi SchoolBoard Team! My name is ___, and I am a __." className={style.a}>Ask us Anything.</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <footer id={style.footer} className="text-center position-relative">
                Copyright 2019 ©
            </footer>
        </div>
        <script src='/lib/anime.min.js'></script>
        <script src='../scripts/indexAnim.js'></script>
    </Layout>
)

export default Home;