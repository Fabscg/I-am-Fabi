import React from "react";
import { projects } from "./projects";




const cardStyle = {
    width: "1600px",
    marginTop: "83px"
}

function Portfolio() {
    console.log(projects);
    return (
        <div className="images-project">

            <div className="w3-main w3-content row rollover-blocks_block" style={cardStyle}>
                {
                    projects.map((projects) => (

                        <div className=" col-lg-4 col-md-3 col-sm-6">
                            <div >
                                <div className="title-icon">
                                    <div >
                                        <h1>{projects.title}</h1>
                                    </div>
                                    <div>
                                        <a className="github" href={projects.github}><i class="icon-card fa-brands fa-github fa-2x"></i></a>
                                    </div>
                                </div>

                                <a href={projects.URL}><img src={projects.imgURL} style={{ width: "100%" }} onClick="onClick(this)" alt={projects.title} /></a>
                                
                                <spam className="description">{projects.description}</spam>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Portfolio