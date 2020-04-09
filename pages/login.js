//Components
import Layout from '../components/layout'
//Utils
import Link from 'next/link'
//Mods
import style from '../components/scss/login.module.scss'
import { Container, Row, Col } from 'reactstrap'

const Login = () => (
    <Layout>
        <div id={style.backgroundContainer}></div>
        <Container fluid={true} id={style.loginFormContainer}>
            <Row id={style.containerRow} className="justify-content-center">
                <Col md="12">
                    <Row className="justify-content-center">
                        <Col sm="12" className="text-center">
                            <Link href="/">
                                <img className="img-fluid" src="/imgs/LogoWhite.svg" style={{width: "150px", margin: "10%"}}/>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs="11" className="text-center">
                            <form action="/auth" method="post">
                                <input className={style.loginInput} name="username" type="text" placeholder="Username" required /><br />
                                <input className={style.loginInput} name="password" type="password" placeholder="Password" required /><br />
                                <input id={style.submit} type="submit" value="Log In" />
                            </form>
                            <style jsx>{`
                            
                                img:hover {
                                    cursor: pointer;
                                }

                                ::-webkit-input-placeholder {
                                    /* Chrome/Opera/Safari */
                                    color: white;
                                    opacity: 0.3;
                                    transition: 0.3s ease-in-out;
                                }
                                
                                 ::-webkit-input-placeholder:hover {
                                    opacity: 0.6;
                                }
                                
                                 ::-webkit-input-placeholder:focus {
                                    opacity: 0.6;
                                }
                                
                                 ::-moz-placeholder {
                                    /* Firefox 19+ */
                                    color: white;
                                    opacity: 0.3;
                                }
                                
                                 ::-moz-input-placeholder:hover {
                                    opacity: 0.6;
                                }
                                
                                 ::-moz-input-placeholder:focus {
                                    opacity: 0.6;
                                }
                                
                                 :-ms-input-placeholder {
                                    /* IE 10+ */
                                    color: white;
                                    opacity: 0.3;
                                }
                                
                                 :-ms-input-placeholder:hover {
                                    opacity: 0.6;
                                }
                                
                                 :-ms-input-placeholder:focus {
                                    opacity: 0.6;
                                }
                                
                                 :-moz-placeholder {
                                    /* Firefox 18- */
                                    color: white;
                                    opacity: 0.3;
                                }
                                
                                 :-moz-input-placeholder:hover {
                                    opacity: 0.6;
                                }
                                
                                 :-moz-input-placeholder:focus {
                                    opacity: 0.6;
                                }
                            `}</style>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Layout>

)

export default Login