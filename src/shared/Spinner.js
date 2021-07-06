import css from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className={css.spinner}>
      <div className={css.spinnerShadow}></div>
      <div className={css.spinnerGravity}>
        <div className={css.spinnerBall}></div>
      </div>
    </div>
  )
}
