import PropTypes from 'prop-types'

function Item({brand, yearRelease}) {
    return(
        <>
            <li>{brand} - {yearRelease} </li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
}

Item.defaultProps = {
    brand: 'Missing Brand',
    yearRelease: 0,
}

export default Item