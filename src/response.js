const Response = (props) => {
    return props.choices.map(choice => (
        <div className="response">{choice}</div>
    ))
}
export default Response;