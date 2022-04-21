import React from "react";

import { projects } from "./projects";



function Portfolio() {
    console.log(projects);
    return (
        <div className="images-project">


           
                <div className="projectTitle">
                    <h1>Projects</h1>
                </div>
                <div className="w3-main w3-content row " >
                {
                    projects.map((projects) => (

                        <div className="card col-lg-4 col-md-6 col-sm-12">
                            <div>
                                <div className="title-icon">
                                    <div >
                                        <h2>{projects.title}</h2>
                                    </div>
                                    <div>
                                        <a className="github" href={projects.github}><i class="icon-card fa-brands fa-github fa-2x"></i></a>
                                    </div>
                                </div>

                                <a href={projects.URL}><img className="project-img text-center" src={projects.imgURL} style={{ width: "100%" }} alt={projects.title} /></a>

                                <spam className="description">{projects.description}
                                </spam>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Portfolio