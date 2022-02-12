const Form = (props) => {
    const { setBalance } = props;
    const handleSubmit = () => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number"></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default Form;