import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header className='header'>
            <h1 style={{color: 'blue'}}>
                {title}
            </h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tourism in the Lehigh Valley',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS styling in JS
// const headingStyle = {
//     color: 'grey',
// }

export default Header
