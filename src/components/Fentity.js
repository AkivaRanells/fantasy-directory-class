import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        console.log(this.props.match)
        const fentityName = this.props.match.params.name;
        const fentityCategory = this.props.match.params.fentities;
        const fentity = this.props.state[fentityCategory].filter(f=>{
            return f.name.toLowerCase()===fentityName.toLowerCase();
        })[0];
        const returnLink =`/directory/${fentityCategory}`
        return (
            <div id="creature-container">
                <Link to={returnLink}>Bestiary</Link>
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
