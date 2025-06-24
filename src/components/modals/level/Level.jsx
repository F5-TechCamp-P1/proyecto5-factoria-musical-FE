import './Level.css';
import { LevelButton } from './levelButtons/LevelButton';
import { useModal } from '../ModalContext';

export const Level = () => {

    const {goBackModal} = useModal();

    const easySongs = [
        {id: 1, imgSrc: "/img/songs/estrellita-caratula.jpg", title: "Estrellita donde estás", scoreSrc:"/img/songs/estrellita.png"},
        {id: 2, imgSrc: "/img/songs/himno-de-la-alegria-caratula.jpg", title: "Himno de la alegría", scoreSrc:"/img/songs/himno-de-la-alegria.png"},
        {id: 3, imgSrc: "/img/songs/over-the-rainbow-caratula.jpg", title: "Somewhere over the Rainbow", scoreSrc:"/img/songs/over-the-rainbow.png"},
        {id: 4, imgSrc: "/img/songs/elefante-caratula.jpeg", title: "Un elefante se balanceaba", scoreSrc:"/img/songs/elefante.PNG"},
        {id: 5, imgSrc: "/img/songs/tu-cancion.jpg", title: "Crea tu canción", scoreSrc:"/img/songs/partitura.png"},
    ];

    const mediumSongs = [
        {id: 1, imgSrc: "/img/songs/bella-ciao-caratula.jpg", title: "Bella Ciao", scoreSrc:"/img/songs/bella-ciao.png"},
        {id: 2, imgSrc: "/img/songs/chicos-coro-caratula.jpg", title: "Los chicos del coro", scoreSrc:"/img/songs/chicos-coro.png"},
        {id: 3, imgSrc: "/img/songs/simpsons-caratula.jpg", title: "Los Simpsons", scoreSrc:"/img/songs/simpsons.png"},
        {id: 4, imgSrc: "/img/songs/lilium-caratula.jpg", title: "Lilium", scoreSrc:"/img/songs/lilium.png"},
        {id: 5, imgSrc: "/img/songs/tu-cancion.jpg", title: "Crea tu canción", scoreSrc:"/img/songs/partitura.png"},
    ];

    const hardSongs = [
        {id: 1, imgSrc: "/img/songs/pokemon-caratula.webp", title: "Pokémon", scoreSrc:"/img/songs/pokemon.png"},
        {id: 2, imgSrc: "/img/songs/married-life-caratula.jpg", title: "Married life", scoreSrc:"/img/songs/married-life.PNG"},
        {id: 3, imgSrc: "/img/songs/juego-de-tronos-caratula.jpg", title: "Juego de tronos", scoreSrc:"/img/songs/juego-de-tronos.png"},
        {id: 4, imgSrc: "/img/songs/wrecking-ball-caratula.jpg", title: "Wrecking Ball", scoreSrc:"/img/songs/wrecking-ball.png"},
        {id: 5, imgSrc: "/img/songs/tu-cancion.jpg", title: "Crea tu canción", scoreSrc:"/img/songs/partitura.png"},
    ];

    return (
        <div className='level-modal'>
            <button className="back-arrow" onClick={goBackModal}>
                <img className="back-arrow-img" src='/img/icons/back-arrow.png' alt='Back Arrow' />
            </button>
            <h1>Por favor, seleccione un nivel</h1>
            <div className="level-buttons">
                <LevelButton songs={easySongs} text="FÁCIL" />
                <LevelButton songs={mediumSongs} text="HOLA AWS" />
                <LevelButton songs={hardSongs} text="DIFÍCIL" />
            </div>
        </div>
    )
}