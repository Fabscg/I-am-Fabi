import React from "react";

import { projects } from "./projects";



function Portfolio() {
    console.log(projects);
    return (
        <div>
            <h2 className="projectTitle">Projects</h2>
            <div className="images-project">
                <div className="w3-main w3-content card-body row" >
                    {
                        projects.map((projects) => (

                            <div className="card col-lg-4 col-md-6 col-sm-12">
                                <div>
                                    <div className="title-icon">
                                        <h3 className="card-title">{projects.title}</h3>

                                        <div>
                                            <a className="github" href={projects.github}><i className="icon-card fa-brands fa-github fa-2x"></i></a>
                                        </div>
                                    </div>
                                    <a href={projects.URL}><img className="project-img text-center" src={projects.imgURL} style={{ width: "100%" }} alt={projects.title} /></a>

                                    <spam className="card-text description">{projects.description}
                                    </spam>
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