import style from './index.module.css'

function Navbar() {
  return (
    <>
        <div style={{padding: "30px"}}>
            <div className={style.wrapper}>
                <h3 style={{cursor: "pointer"}}>Weather App</h3>
                <ul className={style.ul}>
                    <li><a className={style.a} href="#">Today</a></li>
                    <li><a className={style.a} href="#">Tomorrow</a></li>
                    <li><a className={style.a} href="#">Wekly</a></li>
                    <li><a className={style.a} href="#">Month</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar