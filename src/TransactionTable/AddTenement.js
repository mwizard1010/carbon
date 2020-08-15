import React from 'react'; 
class AddTenement extends React.Component {
	render() {
		return (
            <div className="card my -5 text-dark">
                       	<div className="card-body">
    					<h1 className="card-title text-center">Add/Modify Tenement</h1>
                  <form className="mx-auto my-5" style={{width:"70%"}}>
                      <div class="form-group align-center">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter your Name"/>
    <div class="form-group align-center">
    <label for="exampleCoordinates">Coordinates</label>
    <input type="text" class="form-control" id="exampleCoordinates"  placeholder="Enter your Coordinates"/>
  </div>
  
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                  </div>
		</div>
		);
	}
}
export default AddTenement;