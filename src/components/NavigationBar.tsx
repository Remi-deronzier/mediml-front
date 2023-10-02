import { Link } from 'react-router-dom';

const buttonStyle = {
  textDecoration: 'none',
  color: 'black',
  padding: '8px',
};

export default function NavigationBar() {
  return (
    <nav style={{padding: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
        <Link to='/' style={buttonStyle}>
          Home
        </Link>
        <Link to="/stroke" style={buttonStyle}>
          Stroke
        </Link>
        <Link to="/cardiovascular" style={buttonStyle}>
          Cardiovascular
        </Link>
      </div>
    </nav>
  );
}
