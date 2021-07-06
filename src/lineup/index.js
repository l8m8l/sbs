import { useState, useEffect } from 'react'
import css from './index.module.css'
import bgLine from './line.svg'
import bgNoise from './noise.png'

async function fetchLineup(id) {
  const res = await fetch(`https://sbd.vercel.app/api?type=lineup&id=${id}`)
  const { code, data } = await res.json()
  if (code !== 'SBD0000') throw new Error(code)
  return data
}

const EventDisplay = { 1: '进', 3: '黄', 9: '换', 18: '助' }

function PlayerEvent({ type, time }) {
  return (
    <div className={css.playerEvent}>
      <div className={css.playerEventName}>{EventDisplay[type] ?? type}</div>
      <div className={css.playerEventTime}>{time}</div>
    </div>
  )
}

function Player({ player }) {
  return (
    <div className={css.playerItem}>
      <div className={css.playerItemNumber}>{player.number}</div>
      <div className={css.playerItemName}>{player.name}</div>
      <div className={css.playerEvents}>
        {player.events.map((event, idx) => (
          <PlayerEvent key={idx} {...event} />
        ))}
      </div>
    </div>
  )
}

export default function Lineup({ id, home = '主队', away = '客队' }) {
  const [lineup, setLineup] = useState()

  useEffect(() => {
    fetchLineup(id).then(data => setLineup(data))
  }, [id])

  if (!lineup) return null

  const homeStarters = lineup.home.players.filter(player => player.starter)
  const awayStarters = lineup.away.players.filter(player => player.starter)
  const homeSubstitutes = lineup.home.players.filter(player => !player.starter)
  const awaySubstitutes = lineup.away.players.filter(player => !player.starter)
  return (
    <div className={css.container}>
      <div className={css.team}>
        <div className={css.teamName}>{home}</div>
        <div className={css.formation}>{lineup.home.formation}</div>
      </div>
      <div className={css.lineup}>
        <div className={css.ftField}>
          <div className={css.ftFieldStripes}></div>
          <div className={css.ftFieldOverlay}></div>
          <div
            className={css.ftFieldLine}
            style={{ backgroundImage: `url(${bgLine})` }}
          ></div>
          <div
            className={css.ftFieldNoise}
            style={{ backgroundImage: `url(${bgNoise})` }}
          ></div>
        </div>
        {homeStarters.map((player, idx) => (
          <div
            key={idx}
            className={css.player}
            style={{
              left: `${player.coord[0]}%`,
              top: `${player.coord[1] / 2}%`
            }}
          >
            <div
              className={css.playerNumber}
              style={{ backgroundColor: '#ff4125' }}
            >
              {player.number}
            </div>
            <div className={css.playerName}>{player.name}</div>
          </div>
        ))}
        {awayStarters.map((player, idx) => (
          <div
            key={idx}
            className={css.player}
            style={{
              left: `${player.coord[0]}%`,
              top: `${50 + player.coord[1] / 2}%`
            }}
          >
            <div
              className={css.playerNumber}
              style={{ backgroundColor: '#94000e' }}
            >
              {player.number}
            </div>
            <div className={css.playerName}>{player.name}</div>
          </div>
        ))}
      </div>
      <div className={css.team}>
        <div className={css.teamName}>{away}</div>
        <div className={css.formation}>{lineup.away.formation}</div>
      </div>
      <div className={css.playerList}>
        <div className={css.playerListTitle}>先发阵容</div>
        <div className={css.playerTeams}>
          <div className={css.playerTeam}>
            <div className={css.playerTeamName}>{home}</div>
            {homeStarters.map((player, i) => (
              <Player key={i} player={player} />
            ))}
          </div>
          <div className={css.playerTeam}>
            <div className={css.playerTeamName}>{away}</div>
            {awayStarters.map((player, i) => (
              <Player key={i} player={player} />
            ))}
          </div>
        </div>
      </div>
      <div className={css.playerList}>
        <div className={css.playerListTitle}>替补阵容</div>
        <div className={css.playerTeams}>
          <div className={css.playerTeam}>
            <div className={css.playerTeamName}>{home}</div>
            {homeSubstitutes.map((player, i) => (
              <Player key={i} player={player} />
            ))}
          </div>
          <div className={css.playerTeam}>
            <div className={css.playerTeamName}>{away}</div>
            {awaySubstitutes.map((player, i) => (
              <Player key={i} player={player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
