import { Container, OptionBall} from "./styles";
import PaperImage from './../../Assets/paper.png';
import ScissorImage from './../../Assets/scissor.png';
import RockImage from './../../Assets/rock.png';
import React from "react";
import { GameContext } from "../../Contexts/GameContext";


export default function Options () {
    const gameContext = React.useContext(GameContext);

    function handleMove (event) {
        gameContext.setMove(event.target.value);
        gameContext.endGame();  
    };

    return (
        <Container>
            <OptionBall 
                value="rock"
                bgColor="brown"
                bgImage={RockImage} 
                onClick={handleMove} 
            />

            <OptionBall 
                value="paper"
                bgColor="#56f3e3"
                bgImage={PaperImage} 
                onClick={handleMove} 
            />

            <OptionBall 
                value="scissor"
                bgColor="red" 
                bgImage={ScissorImage}
                onClick={handleMove} 
            />



            {
                gameContext.hasEnded && (
                    <div>
                        <p>O jogador jogou {gameContext.move} e o bot {gameContext.botMove}</p>
                        <p>Ganhador: {gameContext.winner}</p>
                    </div>
                )
            }

        </Container>
    )
};  