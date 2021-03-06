import React from 'react';

let films = [
    { id : "SW4", title : 'Star Wars: Episode IV - A New Hope', synopsis : "The plot focuses on the Rebel Alliance, led by Princess Leia (Fisher), and its attempt to destroy the Galactic Empire's space station, the Death Star. This conflict disrupts the isolated life of farmhand Luke Skywalker (Hamill) who inadvertently acquires a pair of droids that possess stolen architectural plans for the Death Star. When the Empire begins a destructive search for the missing droids, Skywalker accompanies Jedi Master Obi-Wan Kenobi (Guinness) on a mission to return the plans to the Rebel Alliance and rescue Leia from her imprisonment by the Empire."},
    { id : "SW5", title : 'Star Wars: Episode V - The Empire Strikes Back', synopsis : "The film is set three years after Star Wars. The Galactic Empire, under the leadership of the villainous Darth Vader and the Emperor, is in pursuit of Luke Skywalker and the rest of the Rebel Alliance. While Vader chases a small band of Luke's friends—Han Solo, Princess Leia Organa, and others—across the galaxy, Luke studies the Force under Jedi Master Yoda. When Vader captures Luke's friends, Luke must decide whether to complete his training and become a full Jedi Knight or to confront Vader and save them."},
    { id : "SW6", title : 'Star Wars: Episode VI - The Return of the Jedi', synopsis : "The Galactic Empire, under the direction of the ruthless Emperor, is constructing a second Death Star in order to crush the Rebel Alliance once and for all. Since the Emperor plans to personally oversee the final stages of its construction, the Rebel Fleet launches a full-scale attack on the Death Star in order to prevent its completion and kill the Emperor, effectively bringing an end to the Empire's hold over the galaxy. Meanwhile, Luke Skywalker, a Jedi apprentice, struggles to bring Darth Vader back from the Dark Side of the Force."}
];

const FilmDescription = (props) => {
    let [filmToDisplay] = films.filter(film => (
        film.id === props.match.params.filmId
    ));

    return (
        <div>
            <h3 className="filmTitle">{filmToDisplay.title}</h3>
            <p>{filmToDisplay.synopsis}</p>
        </div>
    );
}

export default FilmDescription;

