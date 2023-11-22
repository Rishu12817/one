import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <lable>Name</lable>
                    <input type="text" required placeholder='ABC' />
                </div>
                
                <div>
                    <lable>Email</lable>
                    <input type="email" required placeholder='abc@xyz.com' />
                </div>
                
                <div>
                    <lable>Message</lable>
                    <input type="text" required placeholder='Tell Us about your query...' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div> 
  )
}

export default Contact
