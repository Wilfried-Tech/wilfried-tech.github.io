import {useRef} from "jsx-dom";

export function Expertise(props) {
    let data = Object.create(props.data)
    data.value += "%"
    const progressBar = useRef();

    setTimeout(function () {
        new bootstrap.Tooltip(progressBar.current)
    })

    return (<div className="mb-3 p-3 bg-white rounded-3 shadow-sm">
        <div className="row align-items-center">
            <div className="col-5 col-sm-4 col-lg-5 col-xl-4">
                <div className="d-flex align-items-center">
                    <i className={data.bsIconClass + " fa-2x me-2 text-primary"}></i>
                    <p className="fw-bold m-0 text-uppercase">{data.name}</p>
                </div>
            </div>
            <div className="col">
                <div ref={progressBar} className="progress" data-bs-toggle="tooltip" data-bs-original-title={data.value}
                     aria-label={data.value}>
                    <div className="progress-bar text-center" style={`width: ${data.value}`} role="progressbar"
                         aria-valuenow={parseInt(data.value.slice(0, -1))} aria-valuemin="0"
                         aria-valuemax="100">
                        {data.value}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export function SeeMoreExpertiseButton(props) {
    return (<div>
        <div className="mb-3 p-3 text-center rounded-3 ">
            <button className="btn btn-outline-primary fw-bold" data-bs-toggle="offcanvas"
                    data-bs-target={props.id}>Voir
                Plus
                . . .
            </button>
        </div>
        <div className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id={props.id.substring(1)}>
            <div className="container">
                <div className="offcanvas-header">
                    <div className="offcanvas-title h1">Mon Expertise</div>
                    <button aria-label="Close" className="btn-close text-dark" data-bs-dismiss="offcanvas"
                            data-bs-target={props.id} type="button"></button>
                </div>
            </div>
            <div className="offcanvas-body">
                <div className="container">
                    <div className="row">{props.items.sort((a, b) => b.value - a.value).map(item => <Expertise
                        data={item}/>)}</div>
                </div>
            </div>
        </div>
    </div>)
}


export function Project(props) {


    function computePath(url) {
        return "assets/images/" + props.data.projectCode + "/" + url
    }

    const root = useRef()

    setTimeout(() => {
        root.current.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (elt) {
            new bootstrap.Tooltip(elt)
        })
    })


    function makeCarouselItem(pictureUrl, active) {
        return (
            <div className={"carousel-item h-100 overflow-y-scroll " + (active === 0 ? "active" : "")}
                 data-bs-interval="10000">
                <img src={computePath(pictureUrl)} className="d-block w-100"
                     alt="Image slide 1"/>
                {/*<div className="carousel-caption d-none d-md-block">*/}
                {/*    <h5>Slide 1</h5>*/}
                {/*    /!*<p>more description</p>*!/*/}
                {/*</div>*/}
            </div>
        )
    }

    function makePreview() {
        return (<div className="offcanvas offcanvas-bottom h-100" tabIndex="-1"
                     id={props.data.projectCode}
                     aria-labelledby={"title" + props.data.projectCode}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id={"title" + props.data.projectCode}>{props.data.name}</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div id={"carousel" + props.data.projectCode} className="carousel slide shadow h-100"
                         data-bs-ride="carousel"
                         data-bs-touch="true">
                        <div className="carousel-inner h-100">
                            {props.data.previews.map(makeCarouselItem)}
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target={"#carousel" + props.data.projectCode}
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target={"#carousel" + props.data.projectCode}
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div ref={root} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={computePath(props.data.picture)} className="card-img-top"
                     alt={props.data.picture}/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <div className="d-flex justify-content-between">
                        <a className="btn btn-primary" data-bs-toggle="offcanvas"
                           data-bs-target={"#" + props.data.projectCode}
                           aria-controls={props.data.projectCode}>En savoir plus</a>
                        <a className="btn btn-secondary" data-bs-toggle="tooltip" title="Voir Sur GitHub"
                           href={props.data.github}>
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
                {makePreview()}
            </div>
        </div>
    )
}