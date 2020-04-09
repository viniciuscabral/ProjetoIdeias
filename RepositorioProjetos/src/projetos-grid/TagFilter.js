import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TagFilter extends Component {

    constructor(props) {
        super(props);

        this.filtrarTag = this.filtrarTag.bind(this);
        this.limparFiltro = this.limparFiltro.bind(this);
    }

    filtrarTag(e) {
        console.log(e);
        this.props.filterUpdate(e.target.value);
    }

    limparFiltro() {
        this.props.filterUpdate([]);
    }

    render() {

        const tagsDisponiveis = this.props.tagsDisponiveis;
        return (
            <div>
                <br></br>
                {tagsDisponiveis.map((tag) =>
                    <Button style={{
                        "border-radius": "30px", "list-style": "none",
                        "display": "inline-block", "padding": "0.25rem 0.75rem", "margin": "2px"
                    }} onClick={this.filtrarTag} value={tag} variant="outline-primary">{tag} </Button>
                )
                }
                <br></br>
                <br></br>
                <Button className="Tag" onClick={this.limparFiltro} value="limpar" variant="outline-primary">Limpar</Button>
            </div>
        );
    }
}
export default TagFilter;