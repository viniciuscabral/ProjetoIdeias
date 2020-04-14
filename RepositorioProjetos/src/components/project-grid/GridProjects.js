import React, { useState, useEffect } from 'react';

import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from "./ProjectCard";
import TagFilter from "./TagFilter";
import logo from '../../assets/iconideialogo.svg'
import Pagination from "../pagination/Pagination";
import api from '../../services/api';

const GridProjects = () => {

    const [dados, setDados] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filtro, setFiltro] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(async () => {
        api.get("/projetos")
            .then(resp => resp.data)
            .then(json => {
                console.log(json);
                setDados(json);
                setIsLoaded(true);
            });
    }, []);

    //*********** JOGO COM AS TAGAS */
    var tagsFinais = [];
    var tags = dados.map((x) => {
        return x.tags;
    });
    tags.map((y) => {
        y.map((a) => {
            tagsFinais.push(a);
        });
    });
    const uniqueTags = Array.from(new Set(tagsFinais));
    //****************************** */

    const projetosFiltrados = dados.filter((dado) => {
        if (filtro.length > 0) {
            return dado.tags.includes(filtro)
        }
        else {
            return dado.tags;
        }
    })

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = projetosFiltrados.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const updateFilter = valor => setFiltro(valor);

    if (isLoaded) {
        return (
            <div>
                <Container fluid="xs">
                    <Row>
                        <Col style={{ margin: "1rem" }}>
                            <TagFilter tagsDisponiveis={uniqueTags} filterUpdate={updateFilter} />
                        </Col>
                        <Col md='9' sm='2'>
                            <CardGroup>
                                {currentPosts.map((projeto) =>
                                    <ProjectCard dados={projeto} />
                                )}
                            </CardGroup>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={projetosFiltrados.length}
                                paginate={paginate}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    else {
        return (
            <div>
                <header className="App-header-total">
                    <img src={logo} className="App-logo-grande" alt="logo" />
                </header>
            </div>
        );
    }
}
export default GridProjects;