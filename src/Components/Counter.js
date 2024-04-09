import React from 'react'

export default function Counter() {
  return (
    <section className="counter_container d-flex aling-items-center justify-content-center">
                <div className="counter_wrapper d-flex aling-items-center justify-content-between">
                    <div className="card d-flex aling-items-center justify-content-center">
                        <div>
                            <h3> 200K+ </h3>
                            <span>Active Users</span>
                            <p> We are engaging over 200k+ active users!</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <h3> 2M+ </h3>
                            <span>Downloads</span>
                            <p> Gamers have downloaded us more than 2M times!</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <h3> 99.99% </h3>
                            <span>Positive Feedback</span>
                            <p> Online gamers love our website!</p>
                        </div>
                    </div>
                </div>
            </section>
  )
}
