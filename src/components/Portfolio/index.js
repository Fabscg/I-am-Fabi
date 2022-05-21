import React from "react";

import { projects } from "./projects";



function Portfolio() {
    
    return (
        <div>
            <div className="text-center">
                <h2 className="projectTitle">Projects</h2>
            </div>

            <div className="images-project">
                <div className="w3-main w3-content card-body row" >
                    {
                        projects.map((projects) => (

                            <div className="card col-lg-4 col-md-6 col-sm-12" key={projects.id}>
                                <div>
                                    <div className="title-icon">
                                        <h3 className="card-title">{projects.title}</h3>

                                        <div>
                                            <a className="github" href={projects.github}><i className="icon-card fa-brands fa-github fa-2x"></i></a>
                                        </div>
                                    </div>
                                    <a href={projects.URL}><img className="project-img text-center" src={projects.imgURL} style={{ width: "100%" }} alt={projects.title} /></a>

                                    <h3 className="card-text description">{projects.description}
                                    </h3>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>



    )
}

export default Portfolio