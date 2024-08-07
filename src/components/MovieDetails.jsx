import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal" style={modalStyles}>
            <div className="modal-content" style={modalContentStyles}>
                <span className="close" onClick={onClose} style={closeButtonStyles}>&times;</span>
                <h1>{movie.title}</h1>
                <img src={movie.images?.[0] ?? '-'} alt={movie.title} style={imageStyles} />
                <p><strong>Rating:</strong> {movie.rating}</p>
                <p><strong>Description:</strong> {movie.description}</p>
            </div>
        </div>
    );
};

// Styling for the modal
const modalStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
};

const modalContentStyles = {
    backgroundColor: '#040404',
    border : '1px solid white',
    color : 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '600px',
    position: 'relative',
};

const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
};

const imageStyles = {
    width: '100%',
    height: '500px',
};

MovieDetails.propTypes = {
    movie: PropTypes.object,
    onClose: PropTypes.func,
};

export default MovieDetails;