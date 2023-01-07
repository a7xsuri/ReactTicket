import classes from './Header.module.css'

const Header = (props) =>{
return (
    <header className={classes.header}>
        <div>
            <button onClick={props.onShow} className={classes.btn}>New ticket</button>
        </div>
    </header>
)
}

export default Header