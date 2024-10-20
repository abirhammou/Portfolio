import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='container'>
        <h2>Experience</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Final year project</h5><small className='date'>Goodwill, Urbain Nord - 05/2024</small>
                        <p class="card-text">Developed an HR service platform.</p> 
                        <ul className='features'>
                            <li>Defned and documented requirements for the system.</li>
                            <li>Designed the system architecture.</li>
                            <li>Created the user interface and developed associated features.</li>
                        </ul>
                        <p className='tech-title'>Technologies used :</p>
                        <p className='technologies'>Angular, Spring Boot, SQL Server, Java, HTML, CSS, Bootstrap,
                        Postman</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Advanced Internship</h5><small className='date'>CNI, Tunis - 07/2023</small>
                        <p class="card-text">Developed a platform for managing internship registrations.</p> 
                        <ul className='features'>
                            <li>Defned and documented requirements for the system.</li>
                            <li>Designed the system architecture.</li>
                            <li>Created the user interface and developed associated features.</li>
                        </ul>
                        <p className='tech-title'>Technologies used :</p>
                        <p className='technologies'>used: Angular, Node.js, MongoDB, Java, HTML, CSS, Bootstrap, Postman.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                <h5 class="card-title">Operational Internship</h5><small className='date'>BIAT, la Fayette - 08/2022</small>
                <p class="card-text">Explored the applications used at the BIAT headquarters.</p> 
            </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Experience