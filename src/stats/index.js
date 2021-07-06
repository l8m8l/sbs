import { useState, useEffect } from 'react'
import css from './index.module.css'

async function fetchStats(id) {
  const res = await fetch(`https://sbd.vercel.app/api?type=stats&id=${id}`)
  const { code, data } = await res.json()
  if (code !== 'SBD0000') throw new Error(code)
  return data
}

const StatsDisplay = {
  2: '角球',
  3: '黄卡',
  4: '红卡',
  8: '罚点球',
  21: '射正球门',
  22: '射偏球门',
  23: '进攻',
  24: '危险进攻',
  25: '控球率'
}

const EventDisplay = {
  1: 'Goal!',
  2: '角球',
  3: '黄卡',
  9: '换人',
  10: '比赛开始',
  11: '中场',
  12: '比赛结束',
  16: '罚点球',
  17: 'OwnGoals',
  18: '助攻'
}

export default function Stats({ id }) {
  const [stats, setStats] = useState()
  const [focus, setFocus] = useState(true)

  useEffect(() => {
    const focus = () => setFocus(true)
    const blur = () => setFocus(false)
    window.addEventListener('focus', focus)
    window.addEventListener('blur', blur)
    return () => {
      window.removeEventListener('focus', focus)
      window.removeEventListener('blur', blur)
    }
  }, [])

  useEffect(() => {
    if (!focus) return
    const refresh = () => fetchStats(id).then(data => setStats(data))
    refresh()
    const timer = setInterval(refresh, 60000)
    return () => clearInterval(timer)
  }, [focus, id])

  if (!stats) return null

  return (
    <div className={css.container}>
      <div className={css.sectionTitle}>数据</div>
      <div className={css.stats}>
        {stats.stats.map(record => (
          <div key={record.type} className={css.statsItem}>
            <div className={css.statsItemTitle}>
              {StatsDisplay[record.type]}
            </div>
            <div className={css.statsItemValue}>
              {`${record.home}:${record.away}`}
            </div>
          </div>
        ))}
      </div>
      <div className={css.sectionTitle}>文字直播</div>
      <div className={css.events}>
        {stats.events.map((event, idx) => (
          <div key={idx} className={css.event}>
            {!!event.main && (
              <div className={css.eventTitle}>
                {EventDisplay[event.type] ?? event.type}
              </div>
            )}
            <div className={css.eventMessage}>{event.data}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
