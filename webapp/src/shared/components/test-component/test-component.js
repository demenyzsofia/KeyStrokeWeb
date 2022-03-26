const TestComponent = (props) => {
    console.log(props)
    return <div>
        Test Component
        {props.parameter}
    </div>
}


export default TestComponent;
