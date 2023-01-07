import classes from './Header.module.css'

const Header = () =>{
return (
    <header className={classes.header}>
        <div>
            <button className={classes.btn}>New ticket</button>
        </div>
    </header>
)
}

export default Header