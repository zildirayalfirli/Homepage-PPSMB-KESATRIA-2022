import React from 'react'
import { AgendaContainer, AgendaWrapper, AgendaCard1, AgendaCard2, AgendaIcon, AgendaCard3, AgendaCard3Link, ImageBackground} from './CardElements'
import Icon1 from '../../images/Agenda1.png'
import Icon2 from '../../images/Agenda2.png'
import Icon3 from '../../images/Agenda3.png'
import { youtubeAnimation, youtube1Animation, youtube2Animation } from "../../animation";
import { motion } from "framer-motion";
import { useScroll } from "../UseScroll/useScroll";


const Agenda = () => {
    const [element, controls] = useScroll();
  
    return (

<AgendaContainer>
        <AgendaWrapper>

            <AgendaCard1>
                <AgendaCard2>
                <AgendaIcon src={Icon1}/>
                </AgendaCard2>
                <AgendaCard3>
                <AgendaCard3Link to='/Agenda'> Agenda </AgendaCard3Link>
                </AgendaCard3>
            </AgendaCard1>
                
            <AgendaCard1>
                <AgendaCard2>
                <AgendaIcon src={Icon2}/>
                </AgendaCard2>
                <AgendaCard3>
                    <AgendaCard3Link to='/materi'> Materi </AgendaCard3Link>
                </AgendaCard3>
            </AgendaCard1>

            <AgendaCard1>
                <AgendaCard2>
                <AgendaIcon src={Icon3}/>
                </AgendaCard2>
                <AgendaCard3>
                    <AgendaCard3Link to='/penugasan'> Penugasan </AgendaCard3Link>
                </AgendaCard3>
            </AgendaCard1>

    </AgendaWrapper>
</AgendaContainer>
  )
}

export default Agenda