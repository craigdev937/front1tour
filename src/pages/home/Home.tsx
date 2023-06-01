import React from "react";
import "./Home.css";

export const Home = () => {
    React.useEffect(() => {
        let linkItem = document.querySelector("#home");
        linkItem?.classList.add("active");
        console.log(linkItem);
        return () => {
            linkItem?.classList.remove("active");
        }
    }, []);

    return (
        <React.Fragment>
            <section 
                className="home-page-container background"
            >
                <div className="home-page-content-container">
                    <aside className="home-page-content-left">
                        <p className="home-page-content-left-1"
                            >So, you want to travel to
                        </p>
                        <h1 className="home-page-contentleft-2">Space</h1>
                        <p className="home-page-content-left-3">
                            Let’s face it; if you want to go to 
                            space, you might as well genuinely go 
                            to outer space and not hover kind of on 
                            the edge of it.  Well sit back, and relax 
                            because we’ll give you a truly out of 
                            this world experience!
                        </p>
                    </aside>
                    <aside className="home-page-content-right-wrapper">
                        <div className="home-page-content-right">
                            <h2>Explore</h2>
                        </div>
                    </aside>
                </div>
            </section>
        </React.Fragment>
    );
};


