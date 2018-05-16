import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loadRepo, loadStargazers} from '../actions';
import Repo from '../components/Repo';
import User from '../components/User';
import List from '../components/List';

const loadData = props => {
    const {fullname} = props;
    props.loadRepo(fullname, ['deacription']);
    props.loadStargazers(fullname);
};

class RepoPage extends Component {
    static propTypes = {
        repo: PropTypes.object,
        fullName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        owner: PropTypes.object,
        stargazers: PropTypes.array.isRequired,
        stargazersPagination: PropTypes.object,
        loadRepo: PropTypes.func.isRequired,
        loadStargazers: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fullName !== this.props.fullName) {
            loadData(nextProps);
        }
    }

    handleLoadMoreClick = () => {
        this.props.loadStargazers(this.props.fullname, true)
    };

    renderUser(user) {
        return <User user={user} key={user.login}/>
    }

    render() {
        const {repo, owner, name} = this.props;
        if (!repo || !owner) {
            return <h1><i>Loading {name} details...</i></h1>
        }

        const {stargazers, stargazersPagination} = this.props

        return (
            <div>
                <Repo repo={repo}
                      owner={owner}/>
                <hr/>
                <List renderItem={this.renderUser}
                      items={stargazers}
                      onLoadMoreClick={this.handleLoadMoreClick}
                      loadingLabel={`Loading stargazers of ${name}...`}
                      {...stargazersPagination}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const login = ownProps.match.params.login.toLowerCase();
    const name = ownProps.match.params.name.toLowerCase();

    const {
        pagination: {stargazersByRepo},
        entities: {users, repos}
    } = state;

    const fullname = `${login}/${name}`;
    const stargazersPagination = stargazersByRepo[fullname];
    const stargazers = stargazersPagination.ids.map(id => users[id])

    return {
        fullname,
        name,
        stargazers,
        stargazersPagination,
        repo: repos[fullname],
        owner: users[login]
    }
};

export default withRouter(connect(mapStateToProps, {
    loadRepo,
    loadStargazers
})(RepoPage))