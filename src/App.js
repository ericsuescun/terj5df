import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { name: '', lastname: '', list: [] };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastname: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newList = this.state.list.concat({name: this.state.name, lastname: this.state.lastname});
    this.setState({name: '', lastname: '', list: newList});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastname} onChange={this.handleLastNameChange.bind(this)} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((n, index) => 
                  <tr key={'invited' + index}>
                    <td>{n.name}</td>
                    <td>{n.lastname}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


