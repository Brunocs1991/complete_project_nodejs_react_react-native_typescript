import PropTypes from "prop-types";

const Person = ({ name, age }) => {
  return (
    <div>
      Welcome {name} Age: {age} years
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
export default Person;
