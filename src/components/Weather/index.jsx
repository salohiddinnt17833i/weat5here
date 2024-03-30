import style from './index.module.css'

function Weather(props) {
    const { temp_c = 15, temp_f = 59, uv = 3, vis_km = 10, vis_miles = 6, wind_degres = 170, wind_dir = "S", wind_kph = 11.2, wind_mph = 6.9, location } = props
    return (
        <div className='card mt-5'>
            <div className=' p-5'>
                <h2 className='card-title'>United State</h2>
                <div className='d-flex gap-4'>
                    <p>{temp_c} ℃</p>
                    <p>{temp_f} ℉</p>
                </div>
                <div className='d-flex gap-3 mb-3'>
                    <b>Uv: {uv}</b>
                    <span>Km: {vis_km}</span>
                    <span>Miles: {vis_miles}</span>
                </div>
                <div className='d-flex gap-3 mb-2'>
                    <p className='text-secondary card-subtitle text-body-secondary'><span className='text-dark'>Wind Degres</span>: {wind_degres}</p>
                    <p className='text-secondary card-subtitle text-body-secondary'><span className='text-dark'>Wind Ditr </span>: {wind_dir}</p>
                </div>
                <div className='d-flex gap-3 mt-4'>
                    <p className='text-secondary card-subtitle text-body-secondary'><span className='text-dark'>Wind dark</span> : {wind_kph}</p> 
                    <p className='text-secondary card-subtitle text-body-secondary'><span className='text-dark'>Wind mph</span> : {wind_mph}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather