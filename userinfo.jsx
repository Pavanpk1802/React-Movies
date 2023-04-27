import { Component } from "react";

class UserInfoo extends Component{
                    render(){
                                        const {userData}=this.props
                                        return(
                                        <div className="adminBox">
                                              {userData.map((user)=>{
                                                  return(
                                                            <div className="card">
                                                            
                                                
                                                            <img className="Image" src={user.Poster} />
                                                            <p className="para1">{user.Title}</p>
                                                            </div>
                                                  )
                                                  })}
                                        </div>
                                        
                                        )
                                        

                                        
                    }
}

export default UserInfoo;