import React from "react";

class CompaniesShowPage extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`/api/users/${params.userId}`)
      .then(({ data: user }) => {
        console.log('user', user);
        this.setState({ user });
      });
  }

  render(){
    return(
      <h1>Компанияфыва</h1>
    )
  }
}