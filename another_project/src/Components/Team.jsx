import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
    const renderTeamCard = () => {
        return [<TeamCard />, <TeamCard />, <TeamCard />, <TeamCard />];
    }

    return (
        <div className="site-section custom-border-bottom" data-aos="fade">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>The Team</h2>
                    </div>
                </div>
                <div className="row">
                    {renderTeamCard()}
                </div>
            </div>
        </div>
    )
}

export default Team