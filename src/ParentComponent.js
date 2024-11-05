function ParentComponent(props) {
    return (
        <div>
            <h1>Welcome to the parent component!</h1>
            {props.children}
        </div>
    )
}

export default ParentComponent;