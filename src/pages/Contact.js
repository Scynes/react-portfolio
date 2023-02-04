const Contact = () => {
    return(
        <div className="flex justify-center align-center height-100">
            <div id="contact-form-container">
                <fieldset>
                    <legend>Let's Connect</legend>
                    <form id={'contact-form'} action="" className={'grid'}>
                        <input type="text" name="" id="" placeholder="First Name"/>
                        <input type="text" name="" id="" placeholder="Last Name"/>
                        <input type="email" name="" id="" placeholder="Email"/>
                        <input type="number" name="" id="" placeholder="Phone"/>
                        <textarea name="" id="" cols="30" rows="9" placeholder="Message"/>
                        <input className="pointer" type="submit" value="Send" />
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Contact;