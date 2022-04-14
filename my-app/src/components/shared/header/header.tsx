import React from "react";
import styled from 'styled-components';

const Title = styled.a `
    color: yellow;
    font-size: 2rem;
    text-decoration: none;
    :hover{
        color: #fff;
    }
`

export function Header (){
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <Title>Kings Eventos</Title>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
</nav>
    )
}