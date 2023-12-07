function Alert(props) {
    return (
        <div className={"alert alert-" + props.type + " alert-dismissible fade show d-flex align-items-center"}
             role="alert">
            <i className={"bi bi-" + props.iconclass}></i>
            <div className="ms-1">{props.message}</div>
            <button aria-label="Close" className="btn-close" data-bs-dismiss="alert" type="button"></button>
        </div>
    )
}

/**
 * @param {"error" | "warning"|"success"} type
 * @param {HTMLElement} node
 * @param {String} message
 */
export function showAlert(type, node = document.body, message) {
    const _type = type === "error" ? ["danger", "exclamation-circle"] : (type === "warning" ? ["warning", "exclamation-triangle"] : ["success", "check-circle"])


    node.appendChild(<Alert type={_type[0]} iconclass={_type[1]} message={message}/>)
}
