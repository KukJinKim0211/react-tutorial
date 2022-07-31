import propTypes from 'prop-types';
const MyComponent = ({ name, age }) => {
  return (
    <div>
      이름은 {name}, 나이는 {age}
    </div>
  );
};
MyComponent.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number
}
export default MyComponent