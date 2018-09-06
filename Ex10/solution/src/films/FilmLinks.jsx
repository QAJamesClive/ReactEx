import React from 'react';
import { Link } from 'react-router-dom';

const FilmLinks = (props) => {
    return (
        <nav>
            <ul className="vertical medium-horizontal menu items">
                <li>
                    <Link to={`${props.match.url}/SW4`}>Star Wars IV - A New Hope</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/SW5`}>Star Wars V - The Empire Strikes Back</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/SW6`}>Star Wars VI - Return of the Jedi</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default FilmLinks;