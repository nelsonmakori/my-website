 import PropTypes from 'prop-types'
 
 function Students(props){
  return(
    <div className="students">
      <p>Name:{props.name}</p>
      <p>age:{props.age}</p>
      <p>student:{props.isStudents ? "yes" : "No"}</p>
      
    </div>
  );
}
Students.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  isStudents:PropTypes.bool,

}
 export default Students