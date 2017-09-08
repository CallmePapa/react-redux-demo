/**
 * Created by weiqiujuan on 17-9-6.
 */

export default class UserList extends Component{
    constructor(props){
        super(props);

        this.state={
            id:null,
            name:null,
            role:null
        };
    }

    componentWillMount(){
        this.props.OnDisplayUsers();
    }

    deleteUser(id){
        this.props.onDeleteUser({id});
    }
    modifyUser(){
        this.props.onModifyUser({
            name:this.state.name,
            role:this.state.role
        });
    }

    onChangeName(){
        this.setState({
            other:this.refs.name.value
        });
    }

    onChangeRole(){
        this.setState({
            other:this.refs.role.value
        });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.deleteFlag===true){
            alert('delete success');
            window.location.reload();
        }else if(nextProps.deleteFlag===false){
            alert('delete faile');
            this.props.OnDisplayUsers();
        }
        if(nextProps.updateflag===ture){
            alert('update success');
            window.location.reload();
        }else if(nextProps.updateflag===false){
            alert('update faile');
            window.location.OnDiaplayUsers();
        }
    }

    render(){
        const userList=this.props.user.map((user,i)=>{
            return <div key={i}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>

                        <td>
                            <button className="" onClick={this.deleteUser.bind(this, user.id)}>
                                Delete;
                            </button>
                        </td>

                        <td>
                            <button className="" data-toggle="modal" data-target="#myModal">
                                upDate;
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });
        return <div>
            <table>
                <tbody>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>职权</th>
                </tr>
                </tbody>
            </table>
            <div>{userList}</div>
            <div className="" id="myModal" tabIndex='-1' roal="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div>
                    <div>
                        <div>
                            <button type="button" className="">&times;</button>
                            <h4>用户信息</h4>
                        </div>
                        <div className="">
                            用户名：<input type="text" ref="name" value={this.state.name} onChange={this.onChangeName.bind(this)}/>
                        </div>
                        <div>
                            用户权限：<input type="text" ref="role"value={this.state.store} onChange={this.onChangeRole.bind(this)}/>
                        </div>
                        <div>
                            <button type="button" data-dismiss="modal">关闭</button>
                            <button type="button" onClick={this.modifyUser.bind(this)}>提交更改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
