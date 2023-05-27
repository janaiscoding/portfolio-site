import React from "react"

const ContactCard = ({title, content}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}
export default ContactCard