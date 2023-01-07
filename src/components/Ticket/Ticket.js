import { Fragment } from "react"
import TicketForm from "./TicketForm"

const Ticket = (props) =>{
    return (
        <Fragment>
            ciao sono qui
            <TicketForm></TicketForm>
            <button onClick={props.onClose}>clicca qui per chiudere</button>
        </Fragment>
    )
}

export default Ticket