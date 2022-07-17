import React from 'react'
import { AgendaContainer, AgendaWrapper, AgendaCard1, AgendaCard2, AgendaIcon, AgendaCard3, AgendaCard3Link} from './CardElements'
import Icon1 from '../../images/Agenda1.png'
import Icon2 from '../../images/Agenda2.png'
import Icon3 from '../../images/Agenda3.png'


const Agenda = () => {
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