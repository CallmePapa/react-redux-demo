/**
 * Created by weiqiujuan on 17-9-5.
 */
import ...
const mapStateToProps = (state) => {
    return {
        hello: state.hello.type
    }
};
const mapDispatchToProps=(dispatch)=> {
    return {
        onDisplayhello:() => {
            dispatch({type: "GET_HELLO"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);