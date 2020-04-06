import React, {useEffect, useState} from 'react'

import TeamProfile from './TeamProfile'
import lionImg from '../../assets/img/profile-lion.png'

const profile1 = {
    img: lionImg,
    name: 'Name',
    surName: 'Surname',
    description: 'CO-FOUNDER & CTO'
}

export default () => {
    useEffect(()=>{
        allTeam()
    }, [])
    const allTeam = () => {
        const teams = []
        for (var i=0;i<100;i++) {
            teams.push(profile1)
        }
        setTeams(teams)
    }
    const [teams, setTeams] = useState([])
    const team01 = []
    const team02 = []
    const team03 = []
    const team04 = []
    const team05 = []
    const team06 = []
    const team07 = []
    const team08 = []
    const team09 = []
    const team10 = []
    const team11 = []
    const team12 = []
    for (var i=0;i<teams.length;i++) {
        if ((i%12)==0) {
            team01.push(teams[i])
            continue
        }
        if ((i%12)==1) {
            team02.push(teams[i])
            continue
        }
        if (i%12==2) {
            team03.push(teams[i])
            continue
        }
        if (i%12==3) {
            team04.push(teams[i])
            continue
        }
        if (i%12==4) {
            team05.push(teams[i])
            continue
        }
        if (i%12==5) {
            team06.push(teams[i])
            continue
        }
        if (i%12==6) {
            team07.push(teams[i])
            continue
        }
        if (i%12==7) {
            team08.push(teams[i])
            continue
        }
        if (i%12==8) {
            team09.push(teams[i])
            continue
        }
        if (i%12==9) {
            team10.push(teams[i])
            continue
        }
        if (i%12==10) {
            team11.push(teams[i])
            continue
        }
        if (i%12==11) {
            team12.push(teams[i])
            continue
        }
    }
    return (
        <div>
            <div className='columns'>
                <div className='column'><TeamProfile teams={team01}/></div>
                <div className='column'><TeamProfile teams={team02}/></div>
                <div className='column'><TeamProfile teams={team03}/></div>
                <div className='column'><TeamProfile teams={team04}/></div>
            </div>
            <div className='columns'>
                <div className='column'><TeamProfile teams={team05}/></div>
                <div className='column'><TeamProfile teams={team06}/></div>
                <div className='column'><TeamProfile teams={team07}/></div>
                <div className='column'><TeamProfile teams={team08}/></div>
            </div>
            <div className='columns'>
                <div className='column'><TeamProfile teams={team09}/></div>
                <div className='column'><TeamProfile teams={team10}/></div>
                <div className='column'><TeamProfile teams={team11}/></div>
                <div className='column'><TeamProfile teams={team12}/></div>
            </div>
        </div>
    )
}